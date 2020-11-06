<template>
  <div id="app">
    <Loading v-show="loading"/>
    <router-view v-show="!loading" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loading from './components/Loading';

export default {
  name: 'App',

  components: {
    Loading
  },

  computed: {
    ...mapGetters(['loading'])
  },

  mounted() {
    setTimeout(() => {
      this.$store.commit('setLoading', false);
    }, 5000);
  }
};
</script>

<style lang="scss">
  @import './assets/scss/general';
  @import './assets/scss/grid';
</style>
