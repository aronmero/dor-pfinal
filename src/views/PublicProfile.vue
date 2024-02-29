<template>
    <Header class="header" />
    <p class="fs-5 fw-bold text-center text-black">Tú perfil público</p>
    <SeparadorComponent />
    <UsuarioComponent :datosUsuario="datosUsuario" class="usuario"/>
    <SeparadorComponent />
    <div class="mensaje-info">
        <p class="fs-4 text-center  text-secondary">Aún no tienes publicaciones</p>
    </div>
    <SeparadorComponent />
    <Footer />

</template>


<script>
    import Header from "@/components/header.vue";
    import SeparadorComponent from "@/components/utils/SeparadorComponent.vue";
    import UsuarioComponent from "../components/utils/UsuarioComponent.vue";
    import Footer from "@/components/footer.vue";

    
    export default {
        components : {
            Header,
            SeparadorComponent,
            UsuarioComponent,
            Footer
        
        },
        data(){
            return {
                datosUsuario: {
                    "nombre" : "@usuario",
                    "descripcion" : "¡Bienvenido a mi perfil!" ,
                    "siguiendo" : 80,
                    "seguidores" : 0,
                    "meGusta" : 10
                }
            }
        }
    }



</script>


<style scoped>

    

    .header{
       position: absolute;
       top: 0;
    }

    .usuario{
        margin-top: 0;
       
    }

    .mensaje-info{
        min-height: 42vh;
        
    }


    

    

</style>