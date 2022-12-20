<template>
  <!-- 一番外に必須。 -->
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
</style>
