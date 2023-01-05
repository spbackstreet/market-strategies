import React from "react";
import ControlList from "../bullCallSpread/index";
import Box from '@mui/material/Box';
import './dashboard.css'
const Dashboard = (props) => {
    const { fullName } = props
    return (
        <Box className='m20'>
            <h1 style={{ color: 'white' }}>
                Welcome, {fullName}
            </h1>
            <Box className='back' >
                <ControlList />
            </Box>
        </Box>
    )
}

export default Dashboard