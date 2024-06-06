import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "../components/Login/login.vue";
import PlanetComponent from "../components/Pessoa/pessoa.vue";
import PersonComponent from "../components/Planet/planet.vue";
import UserList from "../components/User/userList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginComponent,
  },
  {
    path: "/planet",
    name: "planet",
    component: PlanetComponent,
  },
  {
    path: "/person",
    name: "person",
    component: PersonComponent,
  },
  {
    path: "/users",
    name: "userList",
    component: UserList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
