<template>
  <div id="app">
    <SideNavigation> </SideNavigation>
    <div class="content">
      <TopNavigation></TopNavigation>
      <router-view />
    </div>
  </div>
</template>

<script>
import TopNavigation from "./components/TopNavigation.vue";
import SideNavigation from "./components/SideNavigation.vue";
export default {
  name: "App",
  components: { TopNavigation, SideNavigation },
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
}
.content {
  width: 100%;
  margin-left: 10px;
}
</style>
