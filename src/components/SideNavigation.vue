<template>
  <div class="navigation-container">
    <h1 class="logo">Ambiki</h1>
    <div class="menu">
      <!-- Patient List Menu -->
      <template v-if="currentPath == '/patient-list'">
        <div
          v-for="(item, index) in docNavigation"
          :class="
            currentPath === item.path ? 'menu-items-active' : 'menu-items'
          "
          :key="index"
          @click="goTo(item.path)"
        >
          <img class="icon" :src="renderIcon(item)" />
          <h4>{{ item.name }}</h4>
        </div>
      </template>

      <!-- Patient Details Menu -->
      <template v-if="currentPath.includes('patient-details')">
        <div
          v-for="(item, index) in patientNavigation"
          :class="
            currentPath.includes(item.path) ? 'menu-items-active' : 'menu-items'
          "
          :key="index"
          @click="goTo(item.path)"
        >
          <img class="icon" :src="renderIcon(item)" />
          <h4>{{ item.name }}</h4>
        </div>
      </template>
    </div>
    <div>
      <div class="menu-items">
        <img class="icon" src="@/assets/information.png" alt="" />
        <h4>Help</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavigation",
  data() {
    return {
      currentPath: "",
      activeMenu: "",
      docNavigation: [
        { name: "Dashboard", path: "/patient-details", icon: "dashboard" },
        { name: "Patient", path: "/patient-list", icon: "patient" },
        { name: "Settings", path: "/patient-details", icon: "setting" },
      ],
      patientNavigation: [
        { name: "Patient Home", path: "/patient-details", icon: "patient" },
        { name: "Sessions", path: "/patient-list", icon: "session" },
        {
          name: "Medical Record",
          path: "/patient-list",
          icon: "medical-records",
        },
        { name: "Progress", path: "/patient-list", icon: "progress" },
        { name: "Therapist", path: "/patient-list", icon: "stethoscope" },
      ],
    };
  },
  watch: {
    $route: {
      handler: function (path) {
        this.currentPath = path.path;
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {},
  methods: {
    renderIcon(arg) {
      var images = require.context("@/assets/", false, /\.png$/);
      if (this.currentPath.includes(arg.path)) {
        return images("./" + arg.icon + "-active.png");
      } else {
        return images("./" + arg.icon + ".png");
      }
    },
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation-container {
  background-color: #ffffff;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.logo {
  flex: 0;
  padding: 20px 40px;
}
.menu {
  flex: 1;
}
.menu-items {
  display: flex;
  margin: 10px;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}
.menu-items-active {
  display: flex;
  margin: 10px;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #8bc832;
  cursor: pointer;
}
.menu-items h4 {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  color: #92a0b1;
}
.menu-items-active h4 {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
}
.icon {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
</style>
