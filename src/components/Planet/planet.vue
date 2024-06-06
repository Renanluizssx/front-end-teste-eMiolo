<template>
  <div class="planet-container">
    <h2>Informações do Planeta</h2>
    <div v-if="planet">
      <p>Nome: {{ planet.name }}</p>
      <p>Clima: {{ planet.climate }}</p>
      <p>Diâmetro: {{ planet.diameter }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PlanetComponent",
  data() {
    return {
      planet: null,
    };
  },
  methods: {
    async fetchPlanet() {
      try {
        const response = await axios.get("https://swapi.dev/api/planets/1/");
        this.planet = response.data;
      } catch (error) {
        console.error("Erro ao buscar informações do planeta:", error);
      }
    },
  },
  mounted() {
    this.fetchPlanet();
  },
};
</script>

<style scoped>
.planet-container {
  padding: 20px;
}
div {
  font-size: 18px;
}
</style>
