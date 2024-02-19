<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"

export default {

  components: {
    Footer
  }
}

</script>

