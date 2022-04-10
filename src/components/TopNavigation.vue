<template>
  <div class="top-container">
    <div class="menu-items">
      <img class="icon" src="@/assets/user.png" alt="" />
      <h4>Hey, Raj Bhatt</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNavigation",
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-container {
  background-color: #ffffff;
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: flex-end;
}
.menu-items {
  display: flex;
  margin: 10px 50px 10px 10px;
  align-items: center;
  padding: 10px 15px;
}
.menu-items h4 {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  color: #92a0b1;
}
.icon {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
</style>
