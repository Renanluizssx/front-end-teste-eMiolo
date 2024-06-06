<template>
  <div class="login-container">
    <h1>Login</h1>
    <button class="google-login-button" @click="loginWithGoogle">
      Login com Google
    </button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "LoginComponent",
  data() {
    return {
      planet: null,
      person: null,
    };
  },
  methods: {
    async loginWithGoogle() {
      try {
        window.location.href = "http://localhost:3000/auth/google";
      } catch (error) {
        console.error("Erro ao iniciar o login com o Google:", error);
      }
    },
    async fetchPlanet() {
      try {
        const response = await axios.get("https://swapi.dev/api/planets/1/");
        this.planet = response.data;
      } catch (error) {
        console.error("Erro ao buscar informações do planeta:", error);
      }
    },
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
    this.fetchPlanet();
    this.fetchPerson();
  },
};
</script>
<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

h1 {
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.google-login-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #4285f4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 15px;
}

.google-login-button:hover {
  background-color: #357ae8;
}
div {
  font-size: 18px;
}
</style>
