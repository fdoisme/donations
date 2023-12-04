<template>
    <div class="container-login">
        <div class="inner-container">
            <div class="div1" style="flex-direction: row;">
                <div style=" margin-left: 5%;">
                    <h2>JOIN Today!</h2>
                    <h4 style="width: 300px;">Ayo daftar untuk dapat menikmati "Front End Berkelas" </h4>
                    <button class="button" @click="toRegister">Sign Up</button>
                </div>
            </div>
            <div class="div2" style="margin-left: 320px;">
                <div class="divLogin">
                    <h1>SIGN IN</h1>
                    <form action="#" @submit.prevent="handleLogin" style="width: 80%; display: flex; flex-direction: column; gap: 30px;">
                        <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
                            <input type="text" name="email" placeholder="EMAIL" v-model="form.email">
                            <input type="password" name="password" placeholder="PASSWORD" v-model="form.password">
                            <button type="submit" class="button">Sign In</button>
                        </div>
                        <div style="display: flex; justify-content: center;">
                            <!-- <GBttn @handleLoginGoogle="handleLoginGoogle" /> -->
                            <button style="display: none;">Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useIProject } from '../stores/IProject'
export default {
    data() {
        return {
            form:{
                email: null,
                password: null,
            }
        }
    },
    methods:{
        ...mapActions(useIProject, ["loginHandle"]),
        toRegister(){
            this.$router.push("/register")
        },
        handleLogin(){
            this.loginHandle(this.form)
        }
    }
}
</script>

<style scoped>
.container-login {
    width: 100%;
    height: 100vh;
    justify-content: center;
    display: flex;
    background: linear-gradient(to bottom, rgba(132, 88, 232, 0.7), rgba(132, 88, 232, 0.1));
}

.wrap-content-login {
    width: 80%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 100px 30px 0 30px;
    /* background-color: red; */
    align-items: center;
}

.inner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    /* background-image: url("https://www.reidsengland.com/site/assets/files/1778/lodging-options.-toppic.jpg");
    opacity: 50%; */
    background: linear-gradient(to bottom, rgba(132, 88, 232, 0.7), rgba(132, 88, 232, 0.1));
}

.div1,
.div2 {
    width: 800px;
    height: 400px;
    background: linear-gradient(to right, rgb(220, 220, 220), rgba(255, 255, 255));
    position: absolute;
    border-radius: 8px;
}

.div1 {
    z-index: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}

.div2 {
    z-index: 2;
    /* background-color: #8b55e9; */
    background: linear-gradient(to right, #4974e5, #8b55e9);
    /* background-color: rgba(255 , 255, 0, 0.5); */
    width: 400px;
    height: 450px;
    margin-left: -320px;
    display: flex;
}

.divLogin {
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.divLogin form {
    width: 100%;
    justify-content: space-between;

}

.divLogin form button {
    width: 100px;
    height: 30px;
}

.divLogin form input {
    height: 25px;
    width: 100%;
    backdrop-filter: blur(20px);
}
.button {
    height: 30px;
    width: 100px;
    font-weight: 800;
}
.div2 {
    background: linear-gradient(to left, #4974e5, #8b55e9);
}
</style>
