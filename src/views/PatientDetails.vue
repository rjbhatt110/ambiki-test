<template>
  <div class="patient-details-container">
    <h1 class="page-title">{{ patientName }}</h1>
    <!-- Top Section -->
    <div class="top-section">
      <!-- Make a Note -->
      <div class="note-card">
        <h3 class="note-card-title">Make a Note</h3>
        <h5 class="note-content">
          Start a new session and make note of patient for therapy.
        </h5>
        <div>
          <button class="start-btn">Start Now</button>
        </div>
      </div>
      <!-- Progress Section -->
      <div class="progress-card">
        <h3 class="card-title">Progress</h3>
        <div class="progress-container">
          <div class="prograss-counter">
            <div class="progress-circle">
              <h5>60%</h5>
            </div>
            <h5 class="progress-content">Iwp imitative</h5>
          </div>

          <div class="prograss-counter">
            <div class="progress-circle">
              <h5>77%</h5>
            </div>
            <h5 class="progress-content">Pragmatic Language</h5>
          </div>

          <div class="prograss-counter">
            <div class="progress-circle">
              <h5>38%</h5>
            </div>
            <h5 class="progress-content">Labeled vocabulary</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Section -->
    <div class="bottom-section">
      <!-- Medical Records -->
      <div class="medical-rec-container">
        <h3 class="note-card-title">Medical Records</h3>

        <div class="header">
          <div
            class="header-content"
            v-for="(item, index) in medicalRecords.headers"
            :key="index"
          >
            <h5>{{ item.name }}</h5>
          </div>
        </div>
        <div class="data-list">
          <div
            class="data"
            v-for="(item, index) in medicalRecords.data"
            :key="index"
          >
            <h5>{{ item.fileName }}</h5>
            <h5>{{ item.lastModified }}</h5>
            <h5>{{ item.since }}</h5>
          </div>
        </div>
      </div>
      <!-- Session Section -->
      <div class="session-container">
        <h3 class="note-card-title">Session Records</h3>
        <div class="header">
          <div
            class="header-content"
            v-for="(item, index) in sessionRecords.headers"
            :key="index"
          >
            <h5>{{ item.name }}</h5>
          </div>
        </div>
        <div class="data-list">
          <div
            class="data"
            v-for="(item, index) in sessionRecords.data"
            :key="index"
          >
            <h5>{{ item.sessionName }}</h5>
            <h5>{{ item.sessionDate }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientDetails",
  components: {},
  data() {
    return {
      patientName: "Matt Bosh",
      medicalRecords: {
        headers: [
          { name: "File Name" },
          { name: "Last Modified" },
          { name: "File Size" },
        ],
        data: [
          {
            id: "1",
            fileName: "ClinicNote.pdf",
            lastModified: "21 April,2022",
            since: "5 MB",
          },
          {
            id: "2",
            fileName: "Release.pdf",
            lastModified: "07 April,2022",
            since: "2 MB",
          },
          {
            id: "3",
            fileName: "Release.pdf",
            lastModified: "14 Jan,2022",
            since: "3 MB",
          },
          {
            id: "4",
            fileName: "Release.pdf",
            lastModified: "02 March,2022",
            since: "7 MB",
          },
        ],
      },
      sessionRecords: {
        headers: [{ name: "Session Name" }, { name: "Date of session" }],
        data: [
          {
            id: "1",
            sessionName: "record_1",
            sessionDate: "22 Feb,2022",
          },
          {
            id: "2",
            sessionName: "record_2",
            sessionDate: "28 Feb,2022",
          },
          {
            id: "3",
            sessionName: "record_3",
            sessionDate: "07 March,2022",
          },
          {
            id: "4",
            sessionName: "record_4",
            sessionDate: "20 March,2022",
          },
        ],
      },
    };
  },
  mounted() {
    this.patientName = this.$route.params.name;
  },
};
</script>
<style scoped>
.patient-details-container {
  width: 100%;
}
.page-title {
  margin: 20px 40px;
}

.top-section {
  margin: 20px 40px;
  display: flex;
  justify-content: space-between;
}

.note-card {
  background-color: #ffffff;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: 0 10px 0 0;
}

.note-card-title {
  flex: 0;
}

.note-content {
  margin-top: 15px;
  font-size: 16px;
  color: #92a0b1;
  font-weight: 500;
  flex: 1;
}
.card-title {
  margin-bottom: 15px;
}

.start-btn {
  border: 0;
  background: #f87b00;
  color: #ffffff;
  padding: 18px 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex: 0;
}

.start-btn:active {
  border: 0;
  background: #f87b00;
  color: #ffffff;
  padding: 18px 40px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  flex: 0;
  transform: scale(0.98);
}

.progress-card {
  background-color: #ffffff;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px;
  flex: 3;
  margin: 0 0 0 10px;
}

.progress-container {
  display: flex;
  justify-content: space-evenly;
}
.prograss-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
}

.progress-circle {
  width: 120px;
  height: 120px;
  background: #19beff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-circle {
  font-weight: 700;
  font-size: 32px;
  color: #ffffff;
}

.progress-content {
  margin-top: 10px;
  font-size: 16px;
  color: #92a0b1;
  font-weight: 500;
}

.bottom-section {
  margin: 20px 40px;
  display: flex;
  justify-content: space-between;
}
/* Data Table */

.medical-rec-container {
  flex: 3;
  margin: 0 10px 0 0;
}
.session-container {
  flex: 2;
  margin: 0 0 0 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.header-content {
  flex: 1;
}
.header h5 {
  color: #92a0b1;
}

.data-list {
  overflow: auto;
  max-height: 25vh;
}

.data-list::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
}

.data-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.data-list::-webkit-scrollbar-thumb {
  background-color: #92a0b1;
  outline: 1px solid #f8f8f8;
  border-radius: 5px;
}

.data {
  background-color: #fff;
  display: flex;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
  margin: 10px 8px;
}

.data h5 {
  font-size: 16px;
  font-weight: 500;
  flex: 1;
}
</style>
