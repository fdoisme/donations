<template>
    <div style="display: flex; padding: 10px; gap: 15px;">
        <div>{{ activ.log }}</div>
        <div>Anda telah mendonasikan {{ activ.amount }} ke-{{ activ.Project.name }}</div>
    </div>
</template>

<script>
export default {
    props: ["activ"]
}
</script>