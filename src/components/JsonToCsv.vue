<template>
    <div>
      <button @click="exportCsv">Export CSV</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jsonData: [
          { firstname: 'Swati', lastname: 'Suthar'},
          { firstname: 'Sani', lastname: 'Mewara'},
          { firstname: 'Bacancy', lastname: 'Tech'}
        ],
      };
    },
    methods: {
      exportCsv() {
        this.$jsonToCsv.downloadCSV(this.jsonData, 'data');
      },
    },
  };
  </script>