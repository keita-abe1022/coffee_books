<template>
  <v-app-bar
    app
    elevate-on-scroll
  >
    <v-app-bar-nav-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title
      @click="$router.push('/')"
      style="cursor:pointer"
    >
    COFFEE BOOK
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/">Home</v-btn>
      <v-btn to="">About</v-btn>
    </v-toolbar-items>
      <v-btn icon>
      <!-- Material iconを使用する。mdiをつけると使用可 -->
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>