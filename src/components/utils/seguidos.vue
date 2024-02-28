<template>
  <div class="social d-flex">
      <div class="siguiendo text-center">
          <p class="fs-2 fw-bold">80</p>
          <p class="text-secondary fs-4 aux">Siguiendo</p>
      </div>
      <svg width="2" height="50" viewBox="0 0 2 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
          <path d="M1.29578 1.00005L1.29582 57.3572" stroke="#ACAAAA"/>
      </svg>
      <div class="seguidores text-center">
          <p class="fs-2 fw-bold">90</p>
          <p class="text-secondary fs-4 aux">Seguidores</p>
      </div>
      <svg width="2" height="50" viewBox="0 0 2 58" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg">
          <path d="M1.29578 1.00005L1.29582 57.3572" stroke="#ACAAAA"/>
      </svg>
      <div class="me-gusta text-center">
          <p class="fs-2 fw-bold">100</p>
          <p class="text-secondary fs-4 aux">Me Gusta</p>
      </div>
  </div>
</template>

<script>
  export default{
      props : {
          datosUsuario: {
              type: Object,
              required: true
          }
      }
  }

</script>

<style scoped>
  .social{
      gap: 1em;
  }

  .svg{
      margin-top: 1.4em !important;
  }

  .aux{
      margin-top: -0.5em !important;
  }

</style>