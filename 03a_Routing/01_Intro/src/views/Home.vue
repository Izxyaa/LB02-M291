<template>
  <!--
   Using v-for to Loop Over an Array of Strings
  -->
  <div>
    <h1>Infos über das Spiel</h1>
    <p class="about">Kaeya is the Cavalry Captain of the Knights of Favonius. He is held in high regard by the people of Mondstadt — even with all his eccentricities and secrets.

      He is obtained for free in the Prologue, Act I: The Outlander Who Caught the Wind during the quest Crash Course. </p>
    <!-- Unordered list with objects -->
    <ul> Beginne deine Reise mit folgenden Charakteren!
      <li v-for="(item) in characters" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: ['Diluc - A nobleman of high esteem  ', 'Jean - The Knight of Favonius', 'Kaeya - The Cavalry Captain ', 'Lisa - The humble Librarian ']
    }
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

</style>