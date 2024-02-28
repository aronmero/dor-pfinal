<template>
  <div id="cajaGrande">
    <div id="caja">
      <p>80</p>
      <p>Siguiendo</p>
    </div>
    <div id="caja">

      <p>80</p>
      <p>Seguidores</p>
    </div>
    <div id="caja">

      <p>80</p>
      <p>Me Gusta</p>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      seguidos: 80,
      seguidores: 30,
      publicaciones: 20
    };
  }
};
</script>
<style scoped>
#cajaGrande {
  display: flex;
  gap: 1em;
  border: 2px solid;
  max-width: fit-content;
}

#caja {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
</style>
