<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    oui
    {{posts}}
    <button @click="getPosts()">test</button>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  computed:{
    ...mapState('blogStore', ['posts'])
  },
  methods:{
    getPosts(){
      this.$store.dispatch('blogStore/getPosts')
    }
  }
}
</script>
