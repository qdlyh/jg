<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
html {
  font-size: 62.5%;
}
i {
  font-style: normal;
}
#app {
  max-width: 750px;
  padding: 2rem;
  margin: 0 auto;
}
</style>
