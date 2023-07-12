const jsonToCsv=
{
    install:(app)=>
    {
        app.config.globalProperties.$jsonToCsv=
        {
            downloadCSV
        }
        console.log('installed');
    }
}

const downloadCSV = (jsonData, filename) =>
{
    const csvData = jsonData.reduce((csv, row) => {
        const values = Object.values(row).map(value => {
          if (typeof value === 'string') {
            return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
        });
        return `${csv}${values.join(',')}\n`;
      }, '');

      const link = document.createElement('a');
      link.setAttribute('href', `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(csvData)}`);
      link.setAttribute('download', `${filename}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}

export default jsonToCsv