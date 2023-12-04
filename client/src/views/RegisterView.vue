<template>
    <section>
        <div class="container">
            <div class="div1">
                <div style=" margin-right: 5%;">
                    <h2>Have an account?</h2>
                    <h4 style="width: 300px;">Login untuk dapatkan menikmati "Front End Berkelas" </h4>
                    <button class="button" @click="toLogin">Login</button>
                </div>
            </div>
            <div class="div2">
                <div class="divLogin">
                    <h1>SIGN UP</h1>
                    <form action="#" @submit.prevent="doSignup" style="width: 90%;">
                        <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
                            <input type="text" name="username" placeholder="USERNAME" v-model="form.username">
                            <input type="text" name="email" placeholder="EMAIL" v-model="form.email">
                            <input type="password" name="password" placeholder="PASSWORD" v-model="form.password">
                            <button type="submit" class="button">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            form: {
                username: null,
                email: null,
                password: null,
            }
        }
    },
    methods: {
        doSignup() {
        },
        toLogin() {
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    /* background-image: url("https://www.reidsengland.com/site/assets/files/1778/lodging-options.-toppic.jpg"); */
    /* background-color: black; */
    background: linear-gradient(to bottom, rgba(132, 88, 232, 0.7), rgba(132, 88, 232, 0.1));
}

.div1 {
    background: linear-gradient(to left, rgb(220, 220, 220), rgba(255, 255, 255));
}
</style>