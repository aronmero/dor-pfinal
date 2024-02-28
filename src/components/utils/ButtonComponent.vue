<template>
    <button :class="['button', 'p-1', 'text-white', 'text-center', 'fw-bold', color]">
        {{ contenido }}
    </button>
</template>

<script>
    export default{
        props : {
            color: String,
            contenido: String
        }
    }
</script>

<style scoped>
    .button{
        width: 10em;
        color: #0A151B;
        border-radius: 10em;
        font-size: 1em;
        transition: transform 0.3s ease-in-out;
    }

    .button:hover{
        transform: scale(1.05);
    }
    

</style>