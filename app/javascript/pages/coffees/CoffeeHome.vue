<template>
  <v-container>
    <v-row>
      <v-col
        v-for="coffee in coffees"
        :key="coffee.id"
        cols="4"
      >
        <v-card
          height="150"
          elavation="4"
          color="brown lighten-5"
          active-class="brown lighten-2"
          @click="setCoffeeInfo(coffee.id)"
        >
          <v-card-title>{{ coffee.product_name }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>購入店舗：{{ coffee.shop }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      v-show="coffeeInfoBool"
    >
      <v-col>
        <v-card
          elavation="2"
          outlined
          height="600"
          color="#d7ccc8"
        >
        <v-card-title>
          {{ coffeeInfo.product_name }}
        </v-card-title>
        <v-card-text>生産地：{{ coffeeInfo.producing_area }}</v-card-text>
        <v-card-text>価格：{{ coffeeInfo.price }}</v-card-text>
        <v-card-text>量：{{ coffeeInfo.weight }}</v-card-text>
        <v-card-text>購入方法：{{ coffeeInfo.purchasing_system }}</v-card-text>
        <v-card-text>焙煎度：{{ coffeeInfo.degree_of_roasting }}</v-card-text>
        <v-card-text>挽き方：{{ coffeeInfo.grind }}</v-card-text>
        <v-card-text>淹れ方：{{ coffeeInfo.brew }}</v-card-text>
        <v-card-text>購入店舗：{{ coffeeInfo.shop }}</v-card-text>
        <v-card-text>コメント：{{ coffeeInfo.comment }}</v-card-text>
        <v-btn
          :to="{ path: `coffee/${coffeeInfo.id}/edit` }"
        >
          編集
        </v-btn
        >
        <v-btn
          @click="deleteCoffee(coffeeInfo.id)"
        >
          削除
        </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CoffeeHome',
  computed: {
    // [store.js]から[coffees]を呼び出して，[CoffeeHome.vue]のdata[user]に格納
    coffees() {
      return this.$store.state.coffees
    },
    coffeeInfo() {
      return this.$store.state.coffeeInfo
    },
    coffeeInfoBool() {
      return this.$store.state.coffeeInfoBool
    }
  },
  mounted: function() {
     // [fetchBooks]を[store.js]から呼び出す
    this.$store.commit('fetchCoffees')
  },
  methods: {
    setCoffeeInfo(id){
      this.$store.commit('setCoffeeInfo', { id })
    },
    deleteCoffee(id) {
      this.$store.commit('deleteCoffee', { id })
      this.$store.commit('fetchCoffees')
    },
  }
}
</script>

