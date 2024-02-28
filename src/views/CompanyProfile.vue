<script setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Seguidos from "@/components/utils/seguidos.vue"; // Asegúrate de usar PascalCase para los nombres de los componentes
</script>

<template>
    <Header class="header" />

    <div id="cuerpo">
        <div id="perfil">
            <div id="imagenYSeguidos">
                <img src="https://www.valleverde-canarias.com/wp-content/uploads/2016/08/logo-new-300x300.png">
            </div>
            <div id="texto">
                <h1>@Empresa</h1>
                <h4>Bienvenido a mi Empresa</h4>
                <Seguidos />
            </div>
        </div>

        <div id="publicaciones">
            <div class="publicacionesx">Publicacion 1</div>
            <div class="publicacionesx">Publicacion 2</div>
            <div class="publicacionesx">Publicacion 3</div>
            <div class="publicacionesx">Publicacion 4</div>
            <div class="publicacionesx">Publicacion 5</div>
            <div class="publicacionesx">Publicacion 6</div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
#cuerpo {
    margin-top: 50px; /* Ajuste para evitar que el cuerpo se sobreponga al encabezado */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#perfil {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
}

#imagenYSeguidos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#texto {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px; /* Añadido espacio entre imagen y texto */
}

#publicaciones {
    margin-top: 20px; /* Añadido espacio entre texto y publicaciones */
    display: flex;
    flex-wrap: wrap; /* Permite que las publicaciones se ajusten en varias líneas */
    justify-content: center;
    align-items: center;
}

.publicacionesx {
    width: 200px;
    height: 200px;
    background-color: #8BB1CC;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header{
    position: absolute;
    top: 0;
}
</style>
