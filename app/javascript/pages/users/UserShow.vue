<template>
  <v-container>
    <!-- <v-system-bar>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
      absolute
      color="grey-lighten-3"
      rail
    >
      <v-avatar
        class="d-block text-center mx-auto mt-4"
        color="grey-darken-1"
        size="36"
      ></v-avatar>

      <v-divider class="mx-3 my-5"></v-divider>

      <v-avatar
        v-for="n in 6"
        :key="n"
        class="d-block text-center mx-auto mb-9"
        color="grey-lighten-1"
        size="28"
      ></v-avatar>
    </v-navigation-drawer>

    <v-navigation-drawer
      width="244"
    >
      <v-sheet
        color="grey-lighten-5"
        height="128"
        width="100%"
      ></v-sheet>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          :title="`Item ${ n }`"
          link
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      class="px-3"
      color="grey-lighten-4"
      flat
      height="72"
    >
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          bg-color="grey-lighten-2"
          class="rounded-pill overflow-hidden"
          density="compact"
          hide-details
          variant="solo"
        ></v-text-field>
      </v-responsive>
    </v-app-bar> -->
    <v-raw
    >
      <v-col>
        <v-text-field>
          {{ userInfo.name }}
        </v-text-field>
      </v-col>
    </v-raw>

    <!-- <v-navigation-drawer location="right">
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          :title="`Item ${ n }`"
          link
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserShow',
  data: function() {
    return {
    userInfo: {},
    // userInfoBool: false,
    user: {}
    }
  },
  computed: {
  // [store.js]から[user]を呼び出して，[CoffeeHome.vue]のdata[coffees]に格納
  },
  mounted: function() {
    this.fetchUser();
  },
  method: {
    fetchUser() {
      axios.get(`/api/users/${id}`).then((res) =>{
        this.user.push(res.data.user);
        } 
      ), (error) => {
        console.log(error);
      }
    },
    setUserInfo(id){
      axios.get(`/api/users/${id}.json`).then(res => {
        this.userInfo = res.data;
        // this.userInfoBool = true;
      });
    }
  },

}
</script>

<style>

</style>