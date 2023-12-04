<template>
    <div class="example-2 card">
        <div class="wrapper" :style="`background-image:url(${project.img})`">
            <div style="z-index: 3; position:absolute; width: 30px;" v-if="role"><a href="#" @click.prevent="deleteHandle"><img
                        style=" margin:5px; size: 100%; width: 50px;" src="../assets/delete.png" alt=""></a></div>
            <div class="data">
                <div class="content">
                    <a href="#" @click="showProject"><span class="author">What is behind this project?</span></a>
                    <h1 class="title"><a href="#">{{ project.name }}</a></h1>
                    <div class="text">
                        <p style="text-align: center; font-size: larger; font-weight: 900;">{{ project.donation }} /
                            {{ project.amount }}</p>
                        <div class="progress-container">
                            <div class="progress-text">{{ (project.donation / project.amount) * 100 }}%</div>
                            <div class="progress-bar" id="myBar"></div>
                        </div>
                    </div>
                    <a href="#" @click.prevent="checkout" class="button">Donate</a>
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
            role: false,
        }
    },
    methods: {
        ...mapActions(useIProject, ["deleteProject"]),
        checkout() {
            this.$router.push(`/checkout/${this.project.id}`)
        },
        deleteHandle(){
            this.deleteProject(this.project.id)
        }
    },
    props: ["project"],
    created() {
        if (localStorage.role == "admin") {
            this.role = true
        } else {
            this.role = false
        }
    },
}
</script>

<style scoped>
/* https://codepen.io/choogoor/pen/YWBxrg */

* {
    box-sizing: border-box;
}

body {
    background-image: linear-gradient(to right, #034378, #2d4e68);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    font-family: "Open Sans", sans-serif;
}

a {
    text-decoration: none;
}

h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
}

.row {
    max-width: 100%;
    gap: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card {
    float: left;
    padding: 0 1.7rem;
    width: 450px;
}

.card .menu-content {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.card .menu-content::before,
.card .menu-content::after {
    content: "";
    display: table;
}

.card .menu-content::after {
    clear: both;
}

.card .menu-content li {
    display: inline-block;
}

.card .menu-content a {
    color: #fff;
}

.card .menu-content span {
    position: absolute;
    left: 50%;
    top: 0;
    font-size: 10px;
    font-weight: 700;
    font-family: "Open Sans";
    transform: translate(-50%, 0);
}

.card .wrapper,
.card .wrapper2,
.card .wrapper3 {
    background-color: #fff;
    min-height: 540px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);
}

.card .wrapper:hover .data {
    transform: translateY(0);
}

.card .wrapper2:hover .data {
    transform: translateY(0);
}

.card .wrapper3:hover .data {
    transform: translateY(0);
}

.card .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(calc(70px + 1em));
    transition: transform 0.3s;
}

.card .data .content {
    padding: 2em 1em 0 1em;
    position: relative;
    z-index: 1;
}

.card .author {
    font-size: 15px;
    color: rgb(103, 14, 186);
}

.card .title {
    margin-top: 10px;
}

.card .text {
    height: 70px;
    margin: 0;
}

.progress-container {
    width: 100%;
    background-color: #f1f1f1;
    text-align: center;
    position: relative;
    border-radius: 30px;
}

.progress-bar {
    width: 80%;
    /* Atur lebar menjadi 80% untuk progress 80% */
    height: 30px;
    background-color: #4CAF50;
    line-height: 30px;
    color: white;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}

.progress-text {
    position: absolute;
    width: 100%;
    padding: 6px;
    z-index: 2;
    color: white;
    font-weight: 900;
}

.card input[type=checkbox] {
    display: none;
}

.card input[type=checkbox]:checked+.menu-content {
    transform: translateY(-60px);
}

.example-2 .wrapper {
    background: url(https://image1ws.indotrading.com/s3/productimages/webp/co6904/p1110756/w425-h425/099370a8-3808-401d-ae9a-33f0643c9d21.jpg) center/cover no-repeat;
    position: relative;
}

.example-2 .wrapper::before {
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
}

/* .example-2 .wrapper2 {
    background: url(https://media.hitekno.com/thumbs/2020/11/16/41112-ilustrasi-tower-bts-jaringan-telekomunikasi/730x480-img-41112-ilustrasi-tower-bts-jaringan-telekomunikasi.jpg) center/cover no-repeat;
    position: relative;
}

.example-2 .wrapper2::before {
    background: rgba(255, 255, 255, 0.4);
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
}
.example-2 .wrapper3 {
    background: url(https://asset.kompas.com/crops/KO37uK8jDpgInoihwYvscoJS7VM=/0x0:0x0/750x500/data/photo/2012/12/10/1455551-proyek-hambalang-p.jpg) center/cover no-repeat;
    position: relative;
}

.example-2 .wrapper3::before {
    background: rgba(255, 255, 255, 0.4);
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
} */

.example-2 .wrapper:hover .menu-content span {
    transform: translate(-50%, -10px);
    opacity: 1;
}

.example-2 .menu-content {
    float: right;
}

.example-2 .menu-content li {
    margin: 0 5px;
    position: relative;
}

.example-2 .menu-content span {
    transition: all 0.3s;
    opacity: 0;
}

.example-2 .data {
    color: rgb(103, 14, 186);
    transform: translateY(calc(70px + 4em));
    font-weight: 900;
}

.example-2 .title a {
    color: rgb(103, 14, 186);
    font-weight: 900;
}

.example-2 .button {
    display: block;
    width: 100px;
    margin: 2em auto 1em;
    text-align: center;
    font-size: 15px;
    color: rgb(103, 14, 186);
    line-height: 1;
    position: relative;
    font-weight: 700;
}

.example-2 .button::after {
    content: "→";
    opacity: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 0.3s;
}

.example-2 .button:hover::after {
    transform: translate(5px, -50%);
    opacity: 1;
}

/*# sourceMappingURL=project.css.map */
</style>