<template>
    <div class="container-dashboard">
        <div class="wrap-content-dashboard">
            <div class="top-content">
                <div class="card-top">
                    <div class="profile-picture"><img src="../assets/avatar.png" alt=""></div>
                    <div class="username">{{ username }}</div>
                    <div class="email">{{ email }}</div>
                </div>
                <div class="card-top" style="align-items: center; justify-content: center;display: flex; flex-direction: column; gap: 50px;">
                    <div>
                        <div style="font-size: xx-large; font-weight: 900;">TOTAL DONATIONS</div>
                        <div style="font-size: x-large; font-weight: 900;">{{ activity?.total }}</div>
                    </div>
                    <div>
                        <div style="font-size: xx-large; font-weight: 900;">MONTHLY DONATIONS</div>
                        <div style="font-size: x-large; font-weight: 900;">{{ historyMonth?.total }}</div>
                    </div>
                </div>
                <div class="card-top">

                </div>
            </div>
            <div class="bot-content">
                <div class="card-bot">
                    <div class="content-card-bot">
                        <div class="navbar-history">
                            <a href="#" @click.prevent="historyJan">
                                <div class="monthly-history">Jan</div>
                            </a>
                            <a href="#" @click.prevent="historyFeb">
                                <div class="monthly-history">Feb</div>
                            </a>
                            <a href="#" @click.prevent="historyMar">
                                <div class="monthly-history">Mar</div>
                            </a>
                            <a href="#" @click.prevent="historyApr">
                                <div class="monthly-history">Apr</div>
                            </a>
                            <a href="#" @click.prevent="historyMei">
                                <div class="monthly-history">Mei</div>
                            </a>
                            <a href="#" @click.prevent="historyJun">
                                <div class="monthly-history">Jun</div>
                            </a>
                            <a href="#" @click.prevent="historyJul">
                                <div class="monthly-history">Jul</div>
                            </a>
                            <a href="#" @click.prevent="historyAgust">
                                <div class="monthly-history">Agust</div>
                            </a>
                            <a href="#" @click.prevent="historySept">
                                <div class="monthly-history">Sept</div>
                            </a>
                        </div>
                        <div class="content-history">
                            <table v-if="tableHistory">
                                <thead>
                                    <tr>
                                        <th>Order Id</th>
                                        <th>Tanggal</th>
                                        <th>Amount</th>
                                        <th>Project</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <BodyTable v-for="(logMonth, index) in historyMonth" :key="index"
                                        :pass_logMonth="logMonth" />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="card-bot" style="width: 30%;">
                    <div class="content-card-bot">
                        <activity v-for="(activ, index) in activity" :key="index" :activ="activ" />
                    </div>
                </div>
            </div>
            <!-- <div>
                <div class="progress-container">
                    <div class="progress-text">80%</div>
                    <div class="progress-bar" id="myBar"></div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import BodyTable from '../components/BodyTable.vue';
import { mapActions, mapState } from "pinia"
import { useIProject } from "../stores/IProject"
import Activity from '../components/Activity.vue';
export default {
    data() {
        return {
            tableHistory: false,
            username: null,
            email: null,
        }
    },
    created() {
        this.fetchUser()
        this.username = localStorage.username
        this.email = localStorage.email
    },
    components: { BodyTable, Activity },
    computed: {
        ...mapState(useIProject, ["params", "historyMonth", "activity"])
    },
    methods: {
        ...mapActions(useIProject, ["fetchUser"]),
        historyJan() {
            this.tableHistory = true
            this.params.month = 1
            this.fetchUser()
        },
        historyFeb() {
            this.tableHistory = true
            this.params.month = 2
            this.fetchUser()
        },
        historyMar() {
            this.tableHistory = true
            this.params.month = 3
            this.fetchUser()
        },
        historyApr() {
            this.tableHistory = true
            this.params.month = 4
            this.fetchUser()
        },
        historyMei() {
            this.tableHistory = true
            this.params.month = 5
            this.fetchUser()
        },
        historyJun() {
            this.tableHistory = true
            this.params.month = 6
            this.fetchUser()
        },
        historyJul() {
            this.tableHistory = true
            this.params.month = 7
            this.fetchUser()
        },
        historyAgust() {
            this.tableHistory = true
            this.params.month = 8
            this.fetchUser()
        },
        historySept() {
            this.tableHistory = true
            this.params.month = 9
            this.fetchUser()
        },
    },
}
</script>

<style scoped>
.container-dashboard {
    width: 100%;
    height: 100vh;
    justify-content: center;
    display: flex;
    background: linear-gradient(to bottom, rgba(132, 88, 232, 0.7), rgba(132, 88, 232, 0.1));
}

.wrap-content-dashboard {
    width: 80%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 100px 30px 0 30px;
    /* background-color: red; */
    align-items: center;
}

.top-content {
    display: flex;
    flex-direction: row;
    width: 80%;
    gap: 20px;
}

.card-top {
    width: 30%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    overflow: hidden;
}

.profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto 10px;
    background-color: wheat;
    color: #fff;
    line-height: 100px;
    font-size: 24px;
}

.profile-picture img {
    width: 100%;
    border-radius: 50%;
}

.username {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
}

.email {
    font-size: 20px;
    color: #3498db;
    font-weight: 900;
}

.bot-content {
    display: flex;
    flex-direction: row;
    width: 80%;
    gap: 20px;
}

.card-bot {
    width: 70%;
    height: 350px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-card-bot {
    background: rgba(233, 232, 227, 0.5);
    width: 97%;
    height: 97%;
    border-radius: 10px;
    border: rgba(175, 146, 239, 1) solid;
    overflow: hidden;
}

.navbar-history {
    display: flex;
    gap: 10px;
    width: 100%;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    height: 12%;
    margin-top: 10px;
    background-color: #FFF8C9;
}

.navbar-history a {
    width: 9%;
    height: 55%;
    text-decoration: none;
}

.monthly-history {
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.monthly-history:hover {
    background-color: rgba(175, 146, 239, 1);
}

.content-history {
    width: 100%;
    height: 82%;
    background-color: #f2f0df;
    margin-bottom: 10px;
    /* overflow: hidden; */
    display: flex;
    justify-content: center;
}

table {
    border-collapse: collapse;
    /* Menggabungkan garis-garis tabel */
    width: 90%;
}

th {
    border-bottom: 1px solid #000;
    /* Hanya garis bawah */
    padding: 8px;
}

.progress-container {
    width: 100%;
    background-color: #f1f1f1;
    text-align: center;
    position: relative;
}

.progress-bar {
    width: 80%;
    /* Atur lebar menjadi 80% untuk progress 80% */
    height: 30px;
    background-color: #4CAF50;
    line-height: 30px;
    color: white;
}

.progress-text {
    position: absolute;
    width: 100%;
    padding: 6px;
    z-index: 2;
    color: white;
    font-weight: 900;
}
</style>
