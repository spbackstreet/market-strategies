import React from 'react'
import { Box, Grid } from '@mui/material';
import ControlList from './ControlList';
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    container: {
        maxHeight: '100px',
        width: '98%',
    },
    marginAlign: {
        margin: '22px 0px 0px 14px',
        width: '97% !important',
    },
    w100: {
        width: '100%',
    },
    etmHeader: {
        paddingTop: '10px',
        paddingBottom: '10px',
        height: '45px',
        background: 'aliceblue !important',
    },
    etmName: {
        color: 'grey',
        fontFamily: 'Montserrat',
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: '32px',
    },
})

const index = () => {
    const classes = styles();
    return (
        <Grid container className={classes.marginAlign}>
            <Box className={classes.etmHeader}>
                <Box component="span" className={classes.etmName}>Control List</Box>
            </Box>
            <Grid className={classes.w100}>
                <ControlList />
            </Grid>
        </Grid>
    )
}
export default index;