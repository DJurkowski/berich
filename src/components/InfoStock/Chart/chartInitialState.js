export const initialState = {
    series: [],
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: { 
            show: false,
            tools: { 
                download: false,
                selection: false
            }
        },
        sparkline: {
            enabled: false,
        }
      },
      colors: [],
      grid: {
          show: false,
          xaxis: {
            lines: {
                show: false
            }
        },  
      },
      markers: {
          enabled: false
      },
      stroke: {
          show: true,
          width: 2,
          curve: 'straight'
      },
      xaxis: {
        show: false,
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        crosshairs: {
            show: false
        },
        tooltip: {
            enabled: false
        }
      },
      yaxis: {
          show: false,
          labels: {
              show: false
          },
          axisBorder: {
              show: false
          },
          tooltip: {
            enabled: false
        }
      },
      dataLabels: {
          enabled: false
      },
        tooltip: {
        enabled: false,
            marker: {
                show: false
            }
        }
    },
};