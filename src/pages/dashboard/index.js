import React from "react";
import ControlList from "../bullCallSpread/index";
import BullCallChart from "../bullCallSpread/bullCallChart";
import Box from '@mui/material/Box';
import './dashboard.css'
const Dashboard = (props) => {
    const { fullName } = props
    return (
        <Box className='m20'>
            <h1 style={{ color: '#2E2E38' }}>
                Welcome, {fullName}
            </h1>
            <Box className='table' >
                <ControlList />
            </Box>
            <Box className='chart'>
            <BullCallChart/>
            </Box>
        </Box>
    )
}

export default Dashboard