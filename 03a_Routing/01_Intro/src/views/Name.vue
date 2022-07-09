<template>
  <div id="app">
    <p>Hallo</p>
    <b-container fluid>
      <p>Game: {{ $store.state.name }}</p>
      <p>Game Charakter:</p>
      <ul>
        <li v-for="game in $store.state.game" :key="genshinimpact">{{game}}</li>
      </ul>
      <p>Ich mag folgende Vision {{ $store.state.vision }}.</p>
      <MyComponent />
    </b-container>
  </div>
</template>

<script>
import Demo from '../components/SimpleState';
export default {
  name: 'app',
  components:{
    MyComponent: Demo
  },
  data() {
    return {
      game: this.$store.state.game
    }
  },
  computed: {
  }
}
</script>
