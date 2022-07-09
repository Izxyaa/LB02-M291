<template>
  <!--
    Basic router navigation
    Update navigation by adding two router links for Home and About
   -->
  <div id="app">
    <div id="nav">
      <router-link to="app">Home</router-link>
      <router-link to="/home">Infos über das Spiel</router-link>
      <router-link to="/character">Charaktere</router-link>
      <router-link to="/about">Über uns</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/name">Namen</router-link>
      <router-link to="/eingabe">Eingabe</router-link>
    </div>
    <img class="picture" src="./assets/mainpic.jpg">
    <router-view/>
  </div>
</template>

<script>
/* Import all components */
export default {
  components: {
  }
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
