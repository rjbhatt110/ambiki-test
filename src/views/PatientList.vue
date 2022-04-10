<template>
  <div class="patient-list-container">
    <h1 class="page-title">Patient List</h1>

    <div class="list-container">
      <div class="header">
        <div
          class="header-content"
          v-for="(item, index) in patientList.headers"
          :key="index"
        >
          <h5>{{ item.name }}</h5>
        </div>
      </div>
      <div class="data-list">
        <div
          class="data"
          v-for="(item, index) in patientList.data"
          :key="index"
        >
          <h5>{{ item.name }}</h5>
          <h5>{{ item.email }}</h5>
          <h5>{{ item.since }}</h5>
          <div class="btn">
            <button class="start-btn" @click="goToDetails(item.name)">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientList",
  components: {},
  data() {
    return {
      patientList: {
        headers: [
          { name: "Patient Name" },
          { name: "Email" },
          { name: "Patient Since" },
          { name: "Action" },
        ],
        data: [
          {
            id: "1",
            name: "Matt Bosh",
            email: "matt15@gmail.com",
            since: "3 months",
            action: "",
          },
          {
            id: "2",
            name: "Dana Scott",
            email: "matt15@gmail.com",
            since: "20 Days",
            action: "",
          },
          {
            id: "3",
            name: "Waldon Smith",
            email: "waldon1@gmail.com",
            since: "1 Year",
            action: "",
          },
          {
            id: "4",
            name: "Bob Mail",
            email: "bobm@gmail.com",
            since: "6 months",
            action: "",
          },
        ],
      },
    };
  },
  methods: {
    goToDetails(args) {
      this.$router.push({ name: "PatientDetails", params: { name: args } });
    },
  },
};
</script>
<style scoped>
.patient-list-container {
  width: 100%;
}
.page-title {
  margin: 20px 40px;
}

.list-container {
  margin: 20px 80px 20px 40px;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.header-content {
  flex: 1;
}
.header-content h5 {
  color: #92a0b1;
}

.data-list {
}

.data {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 30px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
}

.data h5 {
  font-size: 18px;
  font-weight: 500;
  flex: 1;
}

.btn {
  flex: 1;
}

.start-btn {
  border: 1px solid #f87b00;
  background: rgb(248 123 0 / 30%);
  color: #f87b00;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.start-btn:active {
  border: 1px solid #f87b00;
  background: rgb(248 123 0 / 30%);
  color: #f87b00;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transform: scale(0.98);
}
</style>
