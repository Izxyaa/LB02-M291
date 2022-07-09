<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <!--
    Vue Directives: Basic Directives (v-text, v-once, v-html, v-bind, v-if, v-show)
    -->
  <div>
    <h1 v-if="false" v-text="text">Loading...</h1>
    <h2 v-else-if="false" v-html="html" />
    <a class="game" id="link"
        v-else
        :href="link.url"
        :target="link.target"
        :tabindex="link.tabindex"
        v-text="link.title"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // v-text
      text: 'Genshin Impact Charaktere',
      // v-html
      html: 'Etwas ist schiefgegangen! Versuche es später nochmal.</b>',
      // v-bind
      link: {
        url: 'https://genshin.hoyoverse.com/en/character/mondstadt?char=0',
        target: '_blank',
        tabindex: '0',
        title: 'Erfahre mehr über die verschiedenen Charaktere!',
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
  margin-top: 30px;
}

.game {
  font-size: 2em;
  max-width: 800px;
  margin: auto auto 50px auto
}

.characters{
  max-width: 800px;
  margin: auto auto 50px auto
}
</style>
