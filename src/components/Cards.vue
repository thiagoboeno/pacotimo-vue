<template>
  <section class="cards-list my-4">
    <div class="container">
      <div class="cards">
        <div
          v-for="(item, index) in packagesData"
          :key="index"
          class="card-box"
        >
          <div class="card">
            <div class="card-img">
              <img :src="item.city.imageUrl" :alt="item.city.city">
            </div>

            <div class="card-content">
              <div class="place">
                <span>{{ item.city.city }}</span>
                <span>R$ {{ item.total }}</span>
              </div>
              <div class="departure">
                <span>ida</span>
                <span>{{ item.outboundDate }}</span>
              </div>
              <div class="arrival">
                <span>volta</span>
                <span>{{ item.inboundDate }}</span>
              </div>
            </div>

            <div class="card-data">
              <div class="flight">
                <span>{{ item.flight.company }}</span>
                <span>R$ {{ item.flight.price }}</span>
              </div>

              <div class="hotel">
                <span>{{ item.hotel.name }}</span>
                <span>R$ {{ item.hotel.pricePerNight }} por noite</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="packagesData.length != packages.length" class="cards-all">
        <button @click="emitListPackages">Todos os Pacotes</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cards',

  props: {
    packagesData: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapGetters(['packages'])
  },

  methods: {
    emitListPackages() {
      this.$emit('listPackages');
    }
  }
};
</script>

<style lang="scss">
  @import '../assets/scss/card';
</style>
