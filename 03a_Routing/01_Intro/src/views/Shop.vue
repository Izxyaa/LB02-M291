<!--
  Watching Nested Properties of a Data Object
-->
<template>
  <div class="container">
    <h1>Erhalte das Spiel günstiger!</h1>
    <div>
      <h1>{{ game.label }}</h1>
      <h2>CHF {{ game.price }} (CHF {{ discount }} off)</h2>
      <div id="button"><a href="#" @click="updatePrice">Klicke hier für einen Rabatt off!</a></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      discount: 0,
      game: {
        price: 20,
        label: 'Genshin impact',
      },
    }
  },
  methods: {
    updatePrice(){
      if (this.game.price < 1) return;
      this.game.price--;
    }
  },
  watch: {
    'game.price'(newVal,oldVal){
      this.discount++;
      console.log(`actual(CHF ${newVal}) and old(CHF ${oldVal}) price.`);
    }
  }
}
</script>

<style lang="scss">
//Import of global-style
@import '../styles/global';


#button {
  font-size: 1.5em;
  font-weight: bold;
  font-family: 'Stardos Stencil', cursive;
  text-align: center;
  align-items: center;
  color: #4fc08d;
}
</style>
