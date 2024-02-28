<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import BotonPublicar from "@/components/utils/botonPublicar.vue";

</script>

<template>
        <Header />
        <div class="content">
            <div class="barra-busqueda">
                <input type="search" placeholder="Busqueda...">
            </div>
            <div class="selector">
                <div class="seccion"><a href="#">Productos</a></div>
                <div class="seccion"><a href="#">Empresas</a></div>
                <div class="seccion"><a href="#">Hastags</a></div>
                <div class="seccion"><a href="#" id="seleccionado">En tu Zona</a>
                    <hr />
                </div>
            </div>

            <div class="mapa">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5888.115828841858!2d-17.908705227037455!3d28.656885439999712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6bf232aa032949%3A0x28c5cb4e0babc907!2sIES%20Eusebio%20Barreto%20Lorenzo!5e0!3m2!1ses!2ses!4v1709061998345!5m2!1ses!2ses"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <BotonPublicar />
        <Footer />
</template>

<style scoped lang="scss">

.content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-bottom: 100px;
}

.barra-busqueda {
    width: 70%;
    height: 60px;
    background-color: $secondary-color;
    display: flex;
    align-items: center;

    input {
        height: 30px;
        width: 90%;
        margin-left: 20px;
        border-radius: 10px;
        background-color: $text-color-black;
    }

}

.selector {
    width: 70%;
    height: 50px;
    background-color: $primary-color;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .seccion {
        color: white;
        font-size: 1.4em;
        display: flex;
        flex-direction: column;
        justify-content: center;

        hr {
            margin: 0;
            border: $accent-color 1px solid;
            width: 100%;
        }

        #seleccionado {
            color: white;
        }
    }
}

.mapa {
    border: 2px solid black;
    width: 50%;
    height: 600px;
    margin: 100px;

    iframe {
        height: 100%;
        width: 100%;
    }
}

@media screen and (max-width: 1200px) {

    .barra-busqueda {
        width: 100%;
    }

    .selector {
        width: 100%;

        .seccion {
            font-size: 1em;
        }
    }

    .mapa {
        width: 80%;
        height: 600px;
    }
}

@media screen and (max-width: 768px) {

    .barra-busqueda {
        width: 100%;
    }

    .selector {
        width: 100%;

        .seccion {
            font-size: 1em;
        }
    }

    .mapa {
        width: 80%;
        height: 550px;
    }
}
</style>