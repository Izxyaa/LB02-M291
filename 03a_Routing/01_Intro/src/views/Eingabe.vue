<!--
  Implementing Computed Data into a Vue Component
-->
<template>
  <div class="container">
    <h1>Bitte geben Sie Ihren Charakter und deren Vision an:</h1>
    <input v-model="charactername" placeholder="Character" />
    <input v-model="vision" placeholder="Vision" />

    <h3 class="output">{{ fullName }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      charactername: '',
      vision: '',
    }
  },
  computed: {
    fullName() {
      return `${this.charactername} ${this.vision}`
    },
  },
}
</script>

<style lang="scss">
//Import of global-style
@import '../styles/global';

#link {
  display: flex;
  justify-content: center;
}

.about {
  max-width: 800px;
  margin: auto auto 50px auto;
}

input {
  padding: 10px 6px;
  margin: auto;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  text-align: center;
}
.output {
  font-size: 16px;
  display: flex;
  margin: auto;
  align-items: center;
  text-align: center;
}
</style>
