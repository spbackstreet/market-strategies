import { makeStyles } from '@mui/styles';
import React from "react";
import Chart from "react-apexcharts";
import ControlListData from './ControlListData';

const useStyles = makeStyles(() => ({
    graphWrapper: {
        marginTop: 50
    },
    h500: {
        height: '300px'
    }

}))

const BullCallChart = () => {
    const data = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: ControlListData.map((item) => item.expiry)
            },
        },
        series: [
            {
                name: "Strategy Payoff",
                data: ControlListData.map((item) => item.strategy_payoff)
            }
        ]
    }

    const classes = useStyles();

    return (
        <div className={classes.graphWrapper}>
            <div className="row">
                <div className={classes.h500}>
                    <Chart
                        options={data.options}
                        series={data.series}
                        type='line'
                        width='100%'
                        height='100%'
                        min-height='60%'
                    />
                </div>
            </div>
        </div>
    );
}

export default BullCallChart;