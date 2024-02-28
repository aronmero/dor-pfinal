<template>
  <div class="registers-div">
    <div class="logoRegisters"></div>
    <form action="" id="form-singin">
      <input type="text" name="" id="inicio-sesion-user" class="input-singin" placeholder="Nombre de usuario">
      <input type="password" name="" id="inicio-sesion-password" class="input-singin" placeholder="Contraseña">
      <button type="submit" class="button-singin">Entrar</button>
    </form>
    <hr id="separador">
    <RouterLink to="/register"><button class="button-register-link">Registrarse</button></RouterLink>
    
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
</script>
<style>
  
</style>