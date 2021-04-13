import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import { initialState } from './chartInitialState';

const ChartElement = ({ market, loading, dark, days, coin }) => {

    const [state, setState ] = useState(initialState);

    useEffect(() => {
        setState({
            series: [{
                name: 'usd',
                data: market.prices
                }],
                options: {
                chart: {
                    type: 'area',
                    height: 250,
                    zoom: {
                    enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                
                title: {
                    text: `${coin.name} Chart`,
                    align: 'left',
                    style: {
                    color: (dark ? '#fff' : '#21232e'),
                    }
                },
                subtitle: {
                    text: `Price Movements last ${days} days`,
                    align: 'left',
                    style: {
                    color: (dark ? '#fff' : '#21232e'),
                    }
                },
                xaxis: {
                    type: 'datetime',
                    max: Date.now(),
                    labels: {
                        show: true,
                        formatter: function (value, timestamp) {
                        return  moment(timestamp).format("DD MMM YYYY");
                        },
                        style: {
                        colors: (dark ? '#fff' : '#21232e'),
                        }
                    },
                    title: {
                        text: `${coin.symbol.toUpperCase()}`,
                        style: {
                            color: (dark ? '#fff' : '#21232e'),
                        }
                    },
                    
                },
                yaxis: {
                    opposite: false,
                    labels: {
                        show: true,
                        formatter: function (value, timestamp) {
                            return  value.toFixed(4);
                        },
                        style: {
                            colors: (dark ? '#fff' : '#21232e'),
                        }
                    },
                    title: {
                    text: `USD`,
                    style: {
                        color: (dark ? '#fff' : '#21232e'),
                    }
                    },
                    
                },
                legend: {
                    horizontalAlign: 'left'
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 100]
                    }
                    },
                    colors: ['#6ad8a5'],
                tooltip: {
                    theme: (dark ? 'dark': 'light'),
                }
                },
            });
    }, [market, dark, days]);

    return (
        <>
        <Chart
        type="area"
        options={state.options}
        series={state.series}
        height= "400px"
        />
        </>
    );
};

export default ChartElement;
