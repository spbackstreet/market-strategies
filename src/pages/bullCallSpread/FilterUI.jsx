import { IconButton, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
    paper1: {
        width: '230px',
        paddingLeft: '4px',
        '& .MuiTypography-body1': {
            fontSize: '14px !important',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '20px',
            color: '#2E2E38'
        }
    },
    collapseIcon: {
        color: '#2E2E38',
        marginLeft: '10px',
    },
    paper2: {
        width: '100%',
        padding: '5px 5px 5px 20px',
        backgroundColor: '#FAFAFC',
        '& .MuiTypography-body1': {
            fontSize: '12px !important',
        }
    },
    searchText: {
        height: 35,
        width: 229,
        border: 'none',
        borderBottom: '1px solid #C4C4CD',
        paddingLeft: 20,
        paddingRight: 30,
        background: '#EAEAF2',
        marginLeft: 25
    },
    searchIcon: {
        display: 'flex',
        alignSelf: 'center',
        marginLeft: '-30px'
    },
    searchBox: { display: 'flex' },
}));

const FilterUI = (props) => {
    const { type, provider, filterData, selectedFilterTemp, setSelectedFilterTemp, setIsFilterApplied } = props;
    const classes = useStyles();
    const [openCollapse, setOpenCollapse] = React.useState(false);
    const [filterSearch, setFilterSearch] = React.useState('');


    const updateChecksFilter = (val) => {
        setIsFilterApplied(false)
        if (!selectedFilterTemp[type].includes(val)) {
            const tempObj = { ...selectedFilterTemp }
            tempObj[type] = [...tempObj[type], val]
            console.log('tempObj', tempObj)	// eslint-disable-line no-console
            setSelectedFilterTemp(tempObj)
        }
        else {
            const splicedArr = [...selectedFilterTemp[type]];
            const valInd = splicedArr.indexOf(val);
            splicedArr.splice(valInd, 1)
            const tempObjSplice = { ...selectedFilterTemp }
            tempObjSplice[type] = splicedArr
            console.log('tempObjSplice', tempObjSplice)	// eslint-disable-line no-console
            setSelectedFilterTemp(tempObjSplice)
        }
    }
    const typeLevelCheck = () => {
        if (selectedFilterTemp[type].length === filterData[type].length) {
            const typeLevelObjUncheck = { ...selectedFilterTemp }
            typeLevelObjUncheck[type] = []
            setSelectedFilterTemp(typeLevelObjUncheck)
        }
        else {
            const typeLevelObjSelAll = { ...selectedFilterTemp }
            typeLevelObjSelAll[type] = filterData[type]
            setSelectedFilterTemp(typeLevelObjSelAll)
        }
    }


    console.log('selectedFilterTemp', selectedFilterTemp)// eslint-disable-line no-console
    return (
        <>
            <FormControlLabel
                className={classes.paper1}
                key={type}
                control={<Checkbox
                    checked={selectedFilterTemp[type].length === filterData[type].length}
                    indeterminate={!(selectedFilterTemp[type].length === filterData[type].length) && selectedFilterTemp[type].length > 0}
                    onChange={() => typeLevelCheck()}
                    name={type} />}
                label={type}
            />
            <IconButton aria-label="expand row" size="small" onClick={() => setOpenCollapse(!openCollapse)}>
                {openCollapse ? <RemoveIcon className={classes.collapseIcon} /> : <AddIcon className={classes.collapseIcon} />}
            </IconButton>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <Box className={classes.searchBox}>
                    <input type='text' className={classes.searchText} placeholder='Type here to search' onChange={(e) => setFilterSearch(e.target.value)}></input>
                    {/* <MotifIcon className={classes.searchIcon} src={actionIcSearch24px} /> */}
                </Box>
                {provider.filter((item) =>
                    item
                        .toLowerCase()
                        .indexOf(filterSearch.toLowerCase()) !== -1).map((val) =>
                            <FormControlLabel
                                className={classes.paper2}
                                key={val}
                                control={<Checkbox
                                    checked={selectedFilterTemp[type].includes(val)}
                                    onChange={() => updateChecksFilter(val)}
                                    name={val} />}
                                label={val.charAt(0).toUpperCase() + val.slice(1)}
                            />
                        )}
            </Collapse>
        </>
    )

}

export default FilterUI