<template>
  <Header/>
  <div id="content">
    <InicioSesion/>
  </div>
  
  <Footer/>
</template>
<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import InicioSesion from "@/components/utils/inicioSesion.vue";
</script>
<style scoped>
  #content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  Header {
    position: absolute;
    top: 0px;
  }

  Footer {
    position: absolute;
    bottom: 0px;
  }
</style>