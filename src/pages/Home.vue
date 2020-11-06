<template>
  <article>
    <Form @submitForm="filterPackages" />
    <Cards v-if="packagesData.length" :packagesData="packagesData" @listPackages="listAll"/>
    <NoCards v-else @listAll="listAll" />
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
import Form from '../components/Form';
import Cards from '../components/Cards';
import NoCards from '../components/NoCards';

export default {
  name: 'Home',

  components: {
    Form,
    Cards,
    NoCards
  },

  data: () => ({
    packagesData: []
  }),

  computed: {
    ...mapGetters(['packages'])
  },

  methods: {
    filterPackages(value) {
      let min;

      this.packagesData = this.packagesData.filter(item => {
        const cityName = item.city.city.toLowerCase();
        const cityCode = item.city.id.toLowerCase();
        const month = new Date(item.flight.inboundDate).getMonth();
        const year = new Date(item.flight.inboundDate).getFullYear();

        if (
          (cityName.includes(value.search.toLowerCase()) || cityCode.includes(value.search.toLowerCase())) &&
          month === parseInt(value.month) &&
          year === parseInt(value.year)
        ) {
          if (!min) min = item.total;
          else if (item.total < min) min = item.total;

          return item;
        }
      });

      this.packagesData = this.packagesData.filter(e => e.total === min);
    },

    listAll() {
      this.packagesData = this.packages;
    }
  },

  async created() {
    await this.$store.dispatch('fetchFlights');
    await this.$store.dispatch('fetchCodes');
    await this.$store.dispatch('fetchHotels');
    await this.$store.dispatch('mountPackages');
    this.listAll();
  }
};
</script>
