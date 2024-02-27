<template>
  <Header/>
  <div id="content">
    <Registrarse/>
  </div>
  
  <Footer/>
</template>
<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Registrarse from "@/components/utils/registrarse.vue";
</script>
<style scoped>
  #content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>