<script setup></script>
<template>
  <header>
    <RouterLink to="/"
      ><img
        class="logo"
    /></RouterLink>
    <div class="enlaces">
      <RouterLink to="/search"
        ><img src="@public/assets/utils/search.svg"
      /></RouterLink>
      <RouterLink to="/company_profile"
        ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7z"/></svg>
      /></RouterLink>
      <RouterLink to="/public_profile"
        ><img src="@public/assets/utils/user.svg"
      /></RouterLink>
      <RouterLink to="/"
        ><img src="@public/assets/utils/settings.svg"
      /></RouterLink>
      
    </div>
  </header>
</template>
<style scoped lang="scss">
header {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: $text-color-black;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 32px;
  box-sizing: border-box;
  a {
    display: flex;
    align-items: center;
    scale: 0.8;
  }
}
.enlaces {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
}
.logo {
  width: 40px;
  height: 40px;
  border-radius: 100%; //Esto se podria eliminar al poner un logo en condiciones
  background-color: #B8B8B8;
}
@media screen and (max-width: 768px) {
  header {
    position: fixed;
    top: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
  .enlaces {
    gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .enlaces {
    > *:not(:last-child) {
      display: none;
    }
  }
}
</style>
