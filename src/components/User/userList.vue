<template>
  <div class="user-list-container">
    <h1>Usuários Cadastrados</h1>
    <ul>
      <li v-for="user in users" :key="user._id">
        <div class="user-info">
          <img :src="user.picture" alt="User Picture" />
          <div class="user-details">
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>First Name:</strong> {{ user.firstName }}</p>
            <p><strong>Last Name:</strong> {{ user.lastName }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch("http://localhost:3000/auth/users");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.users = await response.json();
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    },
  },
};
</script>

<style scoped>
ul {
  margin-top: 60px;
  text-decoration: none;
}
li {
  text-decoration: none;
}
.user-list-container {
  padding: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.user-info img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.user-details p {
  margin: 5px 0;
  font-size: 18px;
}
</style>
