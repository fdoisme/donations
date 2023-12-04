<template>
    <nav class="container-navbar" v-if="$route.path != '/' && $route.path != '/503'">
        <a href="#" @click.prevent="toHome" style="color: whitesmoke; text-decoration: none;">
            <h1>Home</h1>
        </a>

        <div class="navbar-menu-wrap">
            <div><a href="#" @click.prevent="toProject">Project</a></div>
            <div v-if="isLogin"><a href="#" @click.prevent="toDashboard">Dashboard</a></div>
            <div v-if="!isLogin"><a href="#" @click.prevent="toLogin">Login</a></div>
            <div v-if="!isLogin"><a href="#" @click.prevent="toRegister">Register</a></div>
            <div v-if="isLogin"><a href="#" @click.prevent="toLogout">Logout</a></div>
        </div>
    </nav>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { useIProject } from '../stores/IProject'
export default {
    created() {
        if (localStorage.access_token) {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
    },
    computed: {
        ...mapWritableState(useIProject, ["isLogin"])
    },
    methods: {
        toHome() {
            this.$router.push("/")
        },
        toProject() {
            this.$router.push("/project")
        },
        toDashboard() {
            this.$router.push("/dashboard")
        },
        toLogin() {
            this.$router.push("/login")
        },
        toRegister() {
            this.$router.push("/register")
        },
        toLogout() {
            localStorage.clear()
            this.isLogin = false
            this.$router.push("/")
        },
    }
}
</script>

<style scoped>
.container-navbar {
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 30px;
    background-color: rgb(103, 14, 186);
    margin: 0;
    align-items: center;
    height: 70px;
    width: 100vw;
    color: white;
    position: fixed;
}

h1 {
    display: inline;
    margin: 0;
    font-size: xx-large;
    font-weight: 900;
}

.navbar-menu-wrap {
    display: flex;
    gap: 50px;
    color: white;
    padding-right: 70px;
}

.navbar-menu-wrap a {
    color: white;
    font-size: x-large;
    font-weight: 900;
    text-decoration: none;
}

.navbar-menu-wrap a:hover {
    color: red;
}</style>