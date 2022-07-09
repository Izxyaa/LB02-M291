<template>
  <div class="about">
        <h1 v-show="true" v-text="mytext">Loading...</h1>
        <h2 v-show="true" v-html="myhtml" />
    <div id="link">
      <a
         :href="link.url"
         :target="link.target"
         :tabindex="link.tabindex"
         v-text="link.title"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // v-text
      mytext: 'Genshin Impact',
      // v-html
      myhtml: 'Jetzt verfügbar!<b> Genshin Impact ist ein Open-World-Action-Rollenspiel, bei dem der Spieler einen von vier austauschbaren Charakteren in einer Gruppe steuern kann.</b>',
      // v-bind
      link: {
        url: 'https://genshin.hoyoverse.com/en/home',
        target: '_blank',
        tabindex: '0',
        title: 'Hier geht es zur offizellen Genshin Impact Seite '
      },
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
