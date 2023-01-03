import React from 'react';
import Grid from '@mui/material/Grid'
import { Paper, Fade, List, ListItem, ListItemText } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    paginator: {
        justifyContent: 'center',
        padding: '10px',
        '&  > *': {
            marginBottom: 0,
        },
        '& .MuiPaginationItem-root': {
            color: 'grey',
            background: 'transparent',
            marginRight: '10px',
            fontSize: '14px',
            fontFamily: 'Montserrat',
        },
        '& .MuiPaginationItem-textPrimary.Mui-selected:hover': {
            color: 'grey',
            background: 'transparent',
        },
    },
    paginationBarEYInterstate: {
        fontSize: '12px !important',
        fontFamily: 'Montserrat',
        color: 'grey',
    },
    paginationBarEYInterstateBold: {
        fontSize: '14px !important',
        fontFamily: 'Montserrat',
        color: 'grey',
    },
    perpagebutton: {
        borderRadius: '0',
        borderBottom: `3px solid ${'grey'}`,
        fontSize: '14px !important',
        fontFamily: 'Montserrat',
        color: 'grey',
    },
    selectperpage: {
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    },
});

const CustomPagination = ({ page, itemsPerPage, variables, handlePaginationChange, perPageSelectHandleChange }) => {
    const perPagelist = [10, 25, 50];
    const [anchorElPageCounter, setAnchorElPageCounter] = React.useState(null);
    const openPageCounter = Boolean(anchorElPageCounter);
    const id = openPageCounter ? 'transitions-popper' : undefined;

    const classes = useStyles();

    const selectPageCounterhandler = (event) => {
        setAnchorElPageCounter(anchorElPageCounter ? null : event.currentTarget);
    };

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' spacing={4}>
            <Grid item className={classes.paginationBarEYInterstate}>
                <div>{`Showing: ${(page - 1) * itemsPerPage + 1} - ${Math.min(page * itemsPerPage, variables.length)} of  ${variables.length}`}</div>
            </Grid>
            <Grid item>
                <Pagination
                    count={(Math.ceil(variables.length / itemsPerPage))}
                    page={page}
                    onChange={handlePaginationChange}
                    defaultPage={1}
                    color='primary'
                    size='small'
                    shape='rounded'
                    className='pagination'
                    classes={{ ul: classes.paginator }}
                />
            </Grid>
            <Grid item>
                <Button className={classes.perpagebutton} endIcon={<ExpandMoreIcon />} onClick={selectPageCounterhandler} >
                    {itemsPerPage}
                    <Popper id={id} open={openPageCounter} anchorEl={anchorElPageCounter} transition className={classes.selectperpage}>
                        {({ TransitionProps }) =>
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                    <ClickAwayListener onClickAway={() => setAnchorElPageCounter(null)}>
                                        <List component="nav" aria-labelledby="nested-list-actionitem" className='perpagelist'>
                                            {
                                                perPagelist.map(pagecount =>
                                                    <ListItem key={`per_page_${pagecount}`} button selected={pagecount === itemsPerPage} onClick={() => perPageSelectHandleChange(pagecount)}>
                                                        <ListItemText primary={`${pagecount}`} />
                                                    </ListItem>,
                                                )
                                            }
                                        </List>
                                    </ClickAwayListener>
                                </Paper>
                            </Fade>
                        }
                    </Popper>
                </Button><span className={classes.paginationBarEYInterstate}>per page</span>
            </Grid>
        </Grid>
    )
}

CustomPagination.propTypes = {
    page: PropTypes.number,
    itemsPerPage: PropTypes.number,
    variables: PropTypes.array,
    handlePaginationChange: PropTypes.func,
    perPageSelectHandleChange: PropTypes.func,
};

export default CustomPagination;
