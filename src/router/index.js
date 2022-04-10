import Vue from "vue";
import VueRouter from "vue-router";
import PatientList from "../views/PatientList.vue";
import PatientDetails from "../views/PatientDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/patient-list",
  },
  {
    path: "/patient-list",
    name: "PatientList",
    component: PatientList,
  },
  {
    path: "/patient-details/:name",
    name: "PatientDetails",
    component: PatientDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
