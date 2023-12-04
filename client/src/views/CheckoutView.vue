<template>
    <div class="container-checkout">
        <div class="wrap-content-checkout">
            <div class="card-checkout">
                <h1>MASUKKAN NOMINAL DONASI</h1>
                <form action="#" @submit.prevent="checkout">
                    <input type="number" name="amount" placeholder="AMOUNT" v-model="form.amount">
                    <button type="submit">Donate</button>
                </form>
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
            form: {
                project_id: null,
                amount: null,
            }
        }
    },
    created() {
        this.form.project_id = this.$route.params.id
    },
    methods: {
        ...mapActions(useIProject, ["paymentHandle"]),
        checkout(){
            this.paymentHandle(this.form)
        }
    }
}
</script>

<style scoped>
.container-checkout {
    width: 100%;
    height: 100vh;
    justify-content: center;
    display: flex;
    background: linear-gradient(to bottom, rgba(132, 88, 232, 0.7), rgba(132, 88, 232, 0.1));
}

.wrap-content-checkout {
    width: 50%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 100px 30px 0 30px;
    /* background-color: red; */
    align-items: center;
}

.card-checkout {
    width: 70%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    overflow: hidden;
}

input::placeholder {
    text-align: center;
}

form {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
}

input {
    height: 100px;
    width: 50%;
    border-radius: 30px;
    font-size: xx-large;
}

button {
    height: 106px;
    width: 30%;
    font-size: xx-large;
    border-radius: 30px;
}</style>
