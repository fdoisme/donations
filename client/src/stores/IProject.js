import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
const BASE_URL = "http://localhost:2023"

export const useIProject = defineStore('IProject', {
  state: () => ({
    params: {
      month: null
    },
    historyMonth: null,
    activity: null,
    projects: null,
    isLogin: false,
    totalDonate: null,
    totalMonthly: null,
  }),
  getters: {
  },
  actions: {
    async registerHandle(input) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/register",
          method: "POST",
          data: input
        })
      } catch (error) {
        console.log(error);
      }
    },
    async loginHandle(input) {
      try {
        console.log(input);
        const { data } = await axios({
          url: BASE_URL + "/login",
          method: "POST",
          data: input
        })
        console.log(data);
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("id", data.id)
        localStorage.setItem("username", data.username)
        localStorage.setItem("email", data.email)
        localStorage.setItem("role", data.role)
        this.isLogin = true
        this.router.push("/project")
      } catch (error) {
        console.log(error);
      }
    },
    async addAndUpdate(input) {
      try {
        console.log("MASUK ADDHISTORY");
        console.log(input);
        const access_token = localStorage.access_token
        const { data } = await axios({
          url: BASE_URL + "/donations/donate/" + input.project_id,
          method: "POST",
          data: input,
          headers: { access_token }
        })
        await axios({
          url: BASE_URL + "/donations/project/" + input.project_id,
          method: "PATCH",
          data: input,
          headers: { access_token }
        })
      } catch (error) {
        console.log(error);
      }
    },
    async paymentHandle(input) {
      try {
        console.log(input.project_id);
        const access_token = localStorage.access_token
        const { data } = await axios({
          url: BASE_URL + "/donations/midtrans-token/" + input.project_id,
          method: "POST",
          data: input,
          headers: { access_token }
        })
        const cb = this.addAndUpdate
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            // alert("payment success!");
            console.log(result);
            // console.log(data);
            cb(data)
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!"); console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!"); console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment');
          }
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProject(id) {
      try {
        const access_token = localStorage.access_token
        const { data } = await axios({
          url: BASE_URL + "/donations/project/" + id,
          method: "DELETE",
          headers: { access_token }
        })
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProjects() {
      try {
        const { data } = await axios({
          url: BASE_URL + "/donations/project",
          method: "GET",
        })
        this.projects = data
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProjectDetail(id) {
      try {
        const { data } = await axios({
          url: BASE_URL + "/donations/project/" + id,
          method: "GET",
        })
      } catch (error) {
        console.log(error);
      }
    },
    async fetchUser() {
      try {
        this.totalDonate = 0
        this.totalMonthly = 0
        const access_token = localStorage.access_token
        console.log(access_token);
        const { data } = await axios({
          url: BASE_URL + "/donations/user",
          method: "GET",
          headers: { access_token },
          params: this.params
        })
        data.activity.forEach(element => {
          this.totalDonate = this.totalDonate + Number(element.amount)
          let angka = element.amount / 1
          angka = angka.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
          // console.log(angka);
          element.amount = angka
          return element
        });

        data.history.forEach((element) => {
          this.totalMonthly = this.totalMonthly + Number(element.amount)
        });
        console.log(this.totalDonate, "++++++");
        this.historyMonth = data.history
        this.activity = data.activity
        this.activity.total = this.totalDonate.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
        this.historyMonth.total = this.totalMonthly.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
        // console.log(this.activity);
      } catch (error) {
        console.log(error);
      }
    }
  },
})