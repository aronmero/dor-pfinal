<template>
    <div class="usuario d-flex justify-content-center">
      <div class="imagen-usuario m-4">
        <img :src="imagenUsuario" alt="imagenUsuario" class="imagen">
      </div>
      <div class="informacion d-flex flex-column align-items-left m-4">
        <div class="nombre d-flex align-items-center">
          <p class="size">{{ datosUsuario.nombre }}</p>
          <svg width="35" height="35" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>
        <div class="descripcion">
          <p class="size-descripcion text-secondary">{{ datosUsuario.descripcion }}</p>
        </div>
        <SocialComponent :datosUsuario="datosUsuario" />
        <div class="botones d-flex align-items-center mt-2">
          <ButtonComponent :color="'azul'" :contenido="'Editar perfil'" />
          <ButtonComponent :color="'azul'" :contenido="'Compartir'" />
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import imagenUsuario from '@/assets/imagen-usuario.jpg';
  import SocialComponent from '@/components/utils/SocialComponent.vue';
  import ButtonComponent from "@/components/utils/ButtonComponent.vue";

  export default {
    components: {
      SocialComponent,
      ButtonComponent
    },
    props: {
      datosUsuario: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        imagenUsuario: imagenUsuario
      }
    }
  };
  </script>


<style scoped>



  .imagen{
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

    

    .size{
        font-size: 3em;
        font-weight: bold;
    }

    .size-descripcion{
        font-size: 2.3em;
        margin-top: -0.8em !important;
    }

    .informacion{
        margin-left: -0.8em !important;
    }

    .botones{
      gap: 0.5em;
     
    }

    @media (max-width: 768px){
        .usuario{
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .informacion{
            align-items: center;
            margin-left: 0 !important;
            margin-top: -1em !important;
        }
        
        
    }




</style>