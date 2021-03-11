import React,{ useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';
import { initialState } from './chartInitialState';

const ApexChart = ({coinsmarket: { prices, loading }, coin}) => {
    
    const [state, setState ] = useState(initialState);

    useEffect(() => {
        if(!loading && prices) {
            prices.map(price => { 
                if(price.name === coin.id) {
                    setState({
                        series: [{
                            name: coin.name,
                            data: price.prices
                        }],
                        options: {
                            ...state.options,
                            chart: {
                                type: 'line',
                                id: coin.id,
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
                            colors: [(coin.price_change_percentage_24h > 0 ? 'rgba(6, 222, 156, 0.8)' : 'rgba(217, 43, 43, 1)')] 
                        }
                    });
                }
            });
        }
    }, [loading])
    
    return (
        state.series &&
        <Chart
        options={state.options}
        series={state.series}
        height={60}
        width={150}
        />
    )
    
};

ApexChart.propTypes = {
    coinsmarket: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    coinsmarket: state.coinsmarket
});

export default connect(mapStateToProps)(ApexChart);