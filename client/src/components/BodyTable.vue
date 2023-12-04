<template>
    <tr>
        <td>{{ pass_logMonth.order_id }}</td>
        <td>{{ pass_logMonth.log }}</td>
        <td>{{ pass_logMonth.amount }}</td>
        <td>{{ pass_logMonth.Project.name }}</td>
    </tr>
</template>


<script>
export default {
    props: ["pass_logMonth"]
}
</script>


<style scoped>
td {
    border-bottom: 1px solid #000;
    /* Hanya garis bawah */
    padding: 8px;
}
</style>