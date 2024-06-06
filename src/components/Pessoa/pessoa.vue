<template>
  <div class="person-container">
    <h2>Informações da Pessoa</h2>
    <div v-if="person">
      <p>Nome: {{ person.name }}</p>
      <p>Altura: {{ person.height }}</p>
      <p>Gênero: {{ person.gender }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PersonComponent",
  data() {
    return {
      person: null,
    };
  },
  methods: {
    async fetchPerson() {
      try {
        const response = await axios.get("https://swapi.dev/api/people/1/");
        this.person = response.data;
      } catch (error) {
        console.error("Erro ao buscar informações da pessoa:", error);
      }
    },
  },
  mounted() {
    this.fetchPerson();
  },
};
</script>

<style scoped>
.person-container {
  padding: 20px;
}
div {
  font-size: 18px;
}
</style>
