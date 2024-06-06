<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/planet">Planet</router-link>
      <router-link to="/person">Person</router-link>
      <router-link to="/users">Users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f5f5f5;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 10px;
}

nav a:hover {
  background-color: #ddd;
}
</style>
