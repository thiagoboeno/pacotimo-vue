<template>
  <section class="my-4">
    <div class="container">
      <div class="no-cards">
        <h1>Ops infelizmente não foram encontrados resultados para a sua pesquisa, cliquei no botão abaixo e veja mais de nossas promoções</h1>

        <button @click="emitListAll">Nossos Pacotes</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NoCards',

  methods: {
    emitListAll() {
      this.$emit('listAll');
    }
  }
};
</script>

<style lang="scss">
  @import '../assets/scss/no-card';
</style>
