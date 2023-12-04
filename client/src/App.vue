<template>
  <div>
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar },
  data() {
    return {

    }
  },
  // components: { HomeView },
}
</script>