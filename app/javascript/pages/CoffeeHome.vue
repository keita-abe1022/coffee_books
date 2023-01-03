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
        <v-card-text>焙煎度：{{ coffeeInfo.degreee_of_roasting }}</v-card-text>
        <v-card-text>挽き方：{{ coffeeInfo.grind }}</v-card-text>
        <v-card-text>淹れ方：{{ coffeeInfo.brew }}</v-card-text>
        <v-card-text>購入店舗：{{ coffeeInfo.shop }}</v-card-text>
        <v-card-text>コメント：{{ coffeeInfo.comment }}</v-card-text>
        <v-btn
          :to="{ path: `/edit/$(coffeeInfo.id)` }"
        >
          編集
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
  data: function() {
    return {
      coffeeInfo: {},
      coffeeInfoBool: false,
      coffees: [],
    }
  },
  mounted: function() {
    this.fetchCoffees();
  },
  methods: {
    fetchCoffees() {
      axios.get('/api/coffees').then((res) => {
        for(let i = 0; i < res.data.coffees.length; i++) {
          this.coffees.push(res.data.coffees[i]);
        }
      }, (error) => {
        console.log(error);
      });
    },
    setCoffeeInfo(id){
      axios.get(`api/coffees/${id}.json`).then(res => {
        this.coffeeInfo = res.data;
        this.coffeeInfoBool = true;
      });
    }
  }
}
</script>

