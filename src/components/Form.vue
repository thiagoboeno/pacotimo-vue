<template>
  <section class="form-box">
    <div class="container">
      <h1>Encontre o seu próximo destino pelo melhor preço!</h1>

      <form class="form" @submit.prevent="submitForm">
        <input v-model="search" type="text" placeholder="Destino" required/>

        <select v-model="month" name="select-month" id="months" required>
          <option value="">Mês</option>
          <option value="0">Janeiro</option>
          <option value="1">Fevereiro</option>
          <option value="2">Março</option>
          <option value="3">Abril</option>
          <option value="4">Maio</option>
          <option value="5">Junho</option>
          <option value="6">Julho</option>
          <option value="7">Agosto</option>
          <option value="8">Setembro</option>
          <option value="9">Outubro</option>
          <option value="10">Novembro</option>
          <option value="11">Dezembro</option>
        </select>

        <input v-model="year" type="text" placeholder="Ano" required/>

        <button class="btn-submit">
          Pesquisar
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',

  data: () => ({
    search: '',
    month: '',
    year: ''
  }),

  methods: {
    submitForm() {
      this.$emit(
        'submitForm',
        { search: this.search, month: this.month, year: this.year }
      );
    }
  }
};
</script>

<style lang="scss">
  @import '../assets/scss/form';
</style>
