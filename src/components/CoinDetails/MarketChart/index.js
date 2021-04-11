import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoinMarketData } from '../../../actions/market_data';
import { initialState } from './chartInitialState';
import { formatDate } from './fomatDateFunction';
import moment from 'moment';

const MarketChart = ({ getCoinMarketData, market: {market, loading}, coin, days }) => {

    const [state, setState ] = useState(initialState);

    useEffect(() => {
        getCoinMarketData(coin.id, 'usd', days);
    }, [loading]);

    useEffect(() => {
        if(!loading && market) {
            console.log(market);
            setState({
                series: [{
                    name: 'usd',
                    data: market.prices
                  }],
                  options: {
                    chart: {
                      type: 'area',
                      height: 350,
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
                      align: 'left'
                    },
                    subtitle: {
                      text: `Price Movements last ${days} days`,
                      align: 'left'
                    },
                    xaxis: {
                      type: 'datetime',
                      // min: Date.now()-(days*86400000),
                      max: Date.now(),
                      labels: {
                          tickAmout: days,
                          show: true,
                          formatter: function (value, timestamp) {
                            return  moment(timestamp).format("DD MMM YYYY");
                          },
                      },
                      title: {
                          text: `${coin.symbol.toUpperCase()}`
                      }
                    },
                    yaxis: {
                      opposite: false,
                      title: {
                        text: `USD`
                    }
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
                  },
                });
            }
    }, [loading]);

    return (
        state.series &&
        <Chart
        type="area"
        options={state.options}
        series={state.series}
        />
    );
};

MarketChart.propTypes = {
    getCoinMarketData: PropTypes.func.isRequired,
    market: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    market: state.market
});

export default  connect(mapStateToProps, { getCoinMarketData })(MarketChart);
