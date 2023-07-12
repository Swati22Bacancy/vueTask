<template>
    <div>
        <h2> {{title}} </h2>   
        <div class="clock-div" v-if="timezoneclocks">
            <div class="clock-class" v-for="(time, index) in timezoneclocks" :key="index" @click="displayAlert(time.currentTime)">
                <p class="clock-name">{{ time.name }}</p>
                <p class="clock-time">{{ time.currentTime }}</p>
            </div>
        </div>
    </div>
</template>
  
  <script setup>
  import moment from 'moment-timezone';
  import {ref, computed, onMounted} from 'vue';
  const title = ref('Digital clock with Directives and Vue 3 (Task 7)');
  const currentTime =ref('');
  const timesData =[
          { name: 'LOCAL Time', timezone: moment.tz.guess(), currentTime: '' },
          { name: 'US Time', timezone: 'US/Mountain', currentTime: '' },
          { name: 'UTC Time', timezone: 'UTC', currentTime: '' },
          { name: 'Israel Time', timezone: 'Israel', currentTime: '' },
          { name: 'Europe Berlin Time', timezone: 'Europe/Berlin', currentTime: '' }
        ];
        
  const timezoneclocks = computed(()=>{
    return timesData.map(time => ({
                  ...time,
                    currentTime: moment().tz(time.timezone).format('HH:mm:ss')
                
            }));
  })
  
  const displayTime = function()
  {
    setInterval(() => {
        currentTime.value = new Date();
    }, 1000);
  }
  const displayAlert = function(selectedTime)
  {
    const clientTime = moment();
    const selectedMoment = moment(selectedTime, 'HH:mm:ss');
    const diff = selectedMoment.diff(clientTime);
    const duration = moment.duration(diff);
    const formattedDiff = `${duration.hours()} hours, ${duration.minutes()} minutes, ${duration.seconds()} seconds`;
    alert(`Difference : ${formattedDiff}`);
  }
  onMounted(() => {
        displayTime()
    });
  // function displayTime() {
  //       setInterval(() => {
  //               currentTime.value = new Date();
  //           }, 1000);
  //   }
  // function displayAlert(selectedTime) {
  //       const clientTime = moment();
  //       const selectedMoment = moment(selectedTime, 'HH:mm:ss');
  //       const diff = selectedMoment.diff(clientTime);
  //       const duration = moment.duration(diff);
  //       const formattedDiff = `${duration.hours()} hours, ${duration.minutes()} minutes, ${duration.seconds()} seconds`;
  //       alert(`Difference : ${formattedDiff}`);
  //     }

 
  
  </script>
  
  <style scoped>
  .clock-div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .clock-class {
    width: 200px;
    height: 100px;
    border: 1px solid #ccc;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .clock-name {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .clock-time {
    font-size: 24px;
  }
  </style>
  
  