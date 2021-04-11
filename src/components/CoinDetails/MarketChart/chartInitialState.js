export const initialState = {
    series: [],
    options: {
      chart: {
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: { 
            show: true,
            tools: { 
                download: false,
                selection: false
            }
        },
        sparkline: {
            enabled: false,
        }
      }
    }, 
};