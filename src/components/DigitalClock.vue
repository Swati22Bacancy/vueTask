<template>
  <section class="mt-5 text-center">
      <h3> {{title}} </h3>   
      <dl class="mt-5">
          <dt>Local time:</dt>
          <dd @click="getTimediff(localTime)">{{ localTime }} </dd>

          <dt>UTC time:</dt>
          <dd @click="getTimediff(utcTime)">{{ utcTime }}</dd>

          <dt>US time :</dt>
          <dd @click="getTimediff(uSTime)">{{ uSTime }}</dd>

          <dt>Israel time:</dt>
          <dd @click="getTimediff(israelTime)">{{ israelTime }}</dd>

          <dt>Berlin time:</dt>
          <dd @click="getTimediff(berlinTime)">{{ berlinTime }}</dd>
      </dl>


  </section>
</template>

<script>
import moment from 'moment';
import 'moment-timezone';


export default {
  name: 'DigitalClock',
  data() {
      return {
          title: 'Digital clock (Task 4)',
          utcTime: null,
          localTime: null,
          uSTime: null,
          israelTime: null,
          berlinTime: null
      }
  },
  created() {
      this.displayTime();
  },
  methods: {
      displayTime() {
          setInterval(() => {
              /* const date    = new Date();
              this.currentTime = date.toLocaleTimeString(); */

              var clientTime = moment.tz.guess();
              this.localTime = moment().tz(clientTime).format('YYYY-MM-DD hh:mm:ss');
              this.utcTime   = moment().tz("UTC").format('YYYY-MM-DD hh:mm:ss');
              this.uSTime    = moment().tz("US/Mountain").format('YYYY-MM-DD hh:mm:ss');
              this.israelTime= moment().tz("Israel").format('YYYY-MM-DD hh:mm:ss');
              this.berlinTime= moment().tz("Europe/Berlin").format('YYYY-MM-DD hh:mm:ss');
              
          }, 1000);
      },
      getTimediff(val) {
          console.log(val);
          alert(moment.duration(moment(val).diff(this.localTime)).asHours());
      }
  }
}
</script>
<style>
  dl {
      display: inline-grid;
      grid-template-columns: auto auto;
      grid-gap: 10px;
  }
  dt {
      font-weight: bold;
  }
  dd{
      cursor: pointer;
  }
</style>