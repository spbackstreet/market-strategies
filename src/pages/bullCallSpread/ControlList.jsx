
import SortIcon from '@mui/icons-material/Sort';
import { Box, Button, Checkbox, ClickAwayListener, FormControlLabel, Popper, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import './controlList.css';
import ControlListData from './ControlListData';
import CustomPagination from './CustomPagination';
import FilterUI from './FilterUI';
import TableHeader from './TableHeader';
import TableRows from './TableRows';


const useStyles = makeStyles({

  loadingPlaceHolder: {
    display: 'flex',
    minHeight: '30vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customTooltip: {
    backgroundColor: '#2e2e38',
    color: 'white',
    fontSize: '14px',
    fontFamily: 'inherit',
    marginLeft: '-10px',
  },
  customArrow: {
    color: '#2e2e38',
  },
  searchText: {
    height: 40,
    border: '1px solid #C4C4CD',
    paddingLeft: 20,
    paddingRight: 30,
  },
  searchIcon: {
    display: 'flex',
    cursor: 'pointer',
    alignSelf: 'center',
    marginLeft: -25,
  },
  searchIconGrey: {
    display: 'flex',
    color: 'grey !important',
    alignSelf: 'center',
    marginLeft: -25,
  },

  searchBox: { display: 'flex', justifyContent: 'end', margin: '-65px 0px 25px 0px' },

  noResult: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px !important',
    lineHeight: '20px',
    color: '#2E2E38',
    borderBottom: 'none',
    wordWrap: 'break-word',
    textAlign: 'center'
  },
  sortValue: {
    minWidth: 87,
    justifyContent: 'space-around',
    fontFamily: 'Montserrat',
    lineHeight: '11px',
    color: '#747480',
    marginLeft: 5,
    alignItems: 'center',
    display: 'flex',
    fontSize: 14,
    fontWeight: 300,
    border: '1px solid #C4C4CD',
    background: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  filterCount: {
    background: '#000',
    color: 'white',
    marginLeft: 3,
    borderRadius: '10px',
    padding: '5px',
  },
  sortIcon: {
    color: '#2E2E38',
    cursor: 'pointer',
    height: '24px',
    width: '24px',
    marginLeft: 10,
  },
  allCloud: {
    color: 'grey',
    width: '248px',
    padding: '5px',
    '& .MuiTypography-root': {
      fontSize: '14px'
    }
  },
  paper: {
    margin: '0px 10px',
    border: '1px solid #C4C4CD',
    color: '#000000',
  },
  filterBox: { maxHeight: '65vh', paddingBottom: '20px', overflowY: 'auto', border: '1px solid #C4C4CD', backgroundColor: '#FFFFFF', width: '305px', marginLeft: '-41%', marginTop: '10px' },
  certification: {
    border: '1px solid #2E2E38',
    width: 'fit-content',
    display: 'inline-flex',
    padding: '0px 5px',
    borderRadius: '10px',
    fontWeight: 'normal',
    fontSize: '11px',
    margin: '0px 0px 10px 10px',
  },
  pointerCursor: {
    cursor: 'pointer',
    height: '15px',
    alignSelf: 'center'
  },
  tableHead:{ border: '1px solid #E7E7EA', maxHeight: '49vh', overflowY: 'auto',
'& .veriable--table':{
  borderRadius:'unset !important'
}}
});

const ControlList = () => {
  const classes = useStyles();
  const [search, setSearch] = React.useState('');
  const [textToSearch, setTextToSearch] = React.useState('');
  const [toolTipMessage, setToolTipMessage] = React.useState('');
  const [enableClear, setEnableClear] = React.useState(false);
  const defaultitemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [itemsPerPage, setitemsPerPage] = React.useState(defaultitemsPerPage);
  let timer;
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState({});
  const [isFilterApplied, setIsFilterApplied] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const [selectedFilterTemp, setSelectedFilterTemp] = React.useState({
    'Expiry': [],
    'Ls_Iv': [],
    'Ls_Payoff': [],
    'PP': [],
  });

  const checkifAnyFilterApplied = () => {
    const filterKeys = Object.keys(selectedFilterTemp);
    let filterApplied = false
    for (const key of filterKeys) {
      if (selectedFilterTemp[key].length > 0) {
        filterApplied = true;
      }
    }
    return filterApplied
  }
  const shallowEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }

  const setAllFilters = () => {
    if (shallowEqual(filterData, selectedFilterTemp)) {
      setSelectedFilterTemp(
        {
          'Expiry': [],
          'Ls_Iv': [],
          'Ls_Payoff': [],
          'PP': [],
        }
      )
    }
    else {
      setSelectedFilterTemp({ ...filterData })
    }
  }

  const chooseAllFilters = () => {
    const filterObj = {
      'Expiry': [...new Set(ControlListData.map((item) => item.expiry))],
      'Ls_Iv': [...new Set(ControlListData.map((item) => item.ls_iv))],
      'Ls_Payoff': [...new Set(ControlListData.map((item) => item.ls_payoff))],
      'PP': [...new Set(ControlListData.map((item) => item.pp))],
    }
    setFilterData(filterObj)
  }


  useEffect(() => {
    if (ControlListData && ControlListData !== undefined) {
      setData(ControlListData);
      if (ControlListData && ControlListData.length > 0) {
        chooseAllFilters()
      }
    }
  }, [ControlListData])


  const handlePaginationChange = (event, value) => {
    setPage(value);
  };

  const perPageSelectHandleChange = (val) => {
    setPage(1);
    setitemsPerPage(val);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && search.length > 2) {
      searchFilter('apply')
    } else if (e.key === 'Escape') {
      searchFilter('clear')
    }
  };

  const searchFilter = (action) => {
    setPage(1);
    if (action === 'apply') {
      setTextToSearch(search)
      setEnableClear(true)
    }
    else {
      setSearch('')
      setTextToSearch('')
      setEnableClear(false)
    }
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  console.log('data', data)

  const renderTabPanel = (data) => {
    return <>
      {
        // isApiLoading ? <div className={classes.loadingPlaceHolder} ><MaterialLoader></MaterialLoader></div>
        //   : apierror ? <NoDataFound>{'No results meet the criteria'}</NoDataFound>
        //     : 
        data && data.filter((item) =>
          item.expiry.toString()
            .toLowerCase()
            .indexOf(textToSearch.toLowerCase()) !== -1
          ||
          item.ls_iv
            .toLowerCase().toString()
            .indexOf(textToSearch.toLowerCase()) !== -1
          ||
          item.pp
            .toLowerCase().toString()
            .indexOf(textToSearch.toLowerCase()) !== -1
          ||
          item.ls_payoff
            .toLowerCase().toString()
            .indexOf(textToSearch.toLowerCase()) !== -1
          ||
          item.hs_iv
            .toLowerCase().toString()
            .indexOf(textToSearch.toLowerCase()) !== -1
        ).length > 0 ?
          <>
            <div className={classes.tableHead}>
              <TableHeader/>
              {
                data.filter((item) =>
                  item.expiry.toString()
                    .toLowerCase()
                    .indexOf(textToSearch.toLowerCase()) !== -1
                  ||
                  item.ls_iv
                    .toLowerCase().toString()
                    .indexOf(textToSearch.toLowerCase()) !== -1
                  ||
                  item.pp
                    .toLowerCase().toString()
                    .indexOf(textToSearch.toLowerCase()) !== -1
                  ||
                  item.ls_payoff
                    .toLowerCase().toString()
                    .indexOf(textToSearch.toLowerCase()) !== -1
                  ||
                  item.hs_iv
                    .toLowerCase().toString()
                    .indexOf(textToSearch.toLowerCase()) !== -1
                ).slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .sort((a, b) => { return a.expiry.toString().localeCompare(b.expiry) })
                  .map((item, index) => {
                    return <TableRows key={index} rowItem={item} itemIndex={index} />
                  })
              }
            </div>
            {
              data.length >= 1 &&
              <Box id='user-table-pagination' >
                <CustomPagination
                  page={page}
                  itemsPerPage={itemsPerPage}
                  variables={data.filter((item) =>
                    item.expiry.toString()
                      .toLowerCase()
                      .indexOf(textToSearch.toLowerCase()) !== -1
                    ||
                    item.ls_iv
                      .toLowerCase().toString()
                      .indexOf(textToSearch.toLowerCase()) !== -1
                    ||
                    item.pp
                      .toLowerCase().toString()
                      .indexOf(textToSearch.toLowerCase()) !== -1
                    ||
                    item.ls_payoff
                      .toLowerCase().toString()
                      .indexOf(textToSearch.toLowerCase()) !== -1
                    ||
                    item.hs_iv
                      .toLowerCase().toString()
                      .indexOf(textToSearch.toLowerCase()) !== -1
                  )}
                  handlePaginationChange={handlePaginationChange}
                  perPageSelectHandleChange={perPageSelectHandleChange}
                />
              </Box>
            }
          </>
          : <div className={classes.noResult}>No results meet the criteria</div>
      }
    </>
  }
  const applyFilters = (e) => {
    setData(ControlListData.filter((item) =>
      selectedFilterTemp['Expiry'].includes(item.expiry)
      ||
      item.resourceType.some((element) => {
        return selectedFilterTemp['Ls_Iv'].includes(element)
      })
      ||
      item.cloudProvider.some((element) => {
        return selectedFilterTemp['PP'].includes(element)
      })
      ||
      item.certificationStandard.some((element) => {
        return selectedFilterTemp['Ls_Payoff'].includes(element)
      })
    ));
    setPage(1);
    handleClick(e);
    setIsFilterApplied(true)
  }


  const clearAllFilters = (e) => {
    setSelectedFilterTemp({
      'Expiry': [],
      'Ls_Iv': [],
      'Ls_Payoff': [],
      'PP': [],
    });
    setData(ControlListData);
    setPage(1);
    handleClick(e);
    setIsFilterApplied(false);
  }

  const checkFilterApplied = (filterObj) => {
    let disableButton = true
    for (let x = 0; x < Object.keys(filterObj).length; x++) {
      if (filterObj[Object.keys(filterObj)[x]].length > 0) {
        disableButton = false
      }
    }
    return disableButton

  }

  const clearFilterOut = (certi) => {
    const tempObjSplice = { ...selectedFilterTemp }
    for (let x = 0; x < Object.keys(selectedFilterTemp).length; x++) {
      if (selectedFilterTemp[Object.keys(selectedFilterTemp)[x]].includes(certi)) {
        const splicedArr = [...selectedFilterTemp[Object.keys(selectedFilterTemp)[x]]];
        const valInd = splicedArr.indexOf(certi);
        splicedArr.splice(valInd, 1)
        tempObjSplice[Object.keys(selectedFilterTemp)[x]] = splicedArr
        console.log('tempObjSplice', tempObjSplice)	// eslint-disable-line no-console
        setSelectedFilterTemp(tempObjSplice)
      }
    }
    if ([...new Set(Object.keys(tempObjSplice).map((item) => tempObjSplice[item]).flat())].length <= 0) {
      setData(ControlListData);
    }
    else {
      setData(ControlListData.filter((item) =>
        tempObjSplice['Expiry'].includes(item.expiry)
        ||
        item.resourceType.some((element) => {
          return tempObjSplice['Ls_Iv'].includes(element)
        })
        ||
        item.cloudProvider.some((element) => {
          return tempObjSplice['PP'].includes(element)
        })
        ||
        item.certificationStandard.some((element) => {
          return tempObjSplice['Ls_Payoff'].includes(element)
        })
      ));
    }
    setPage(1);
  }

  return (
    <>
      <Box className={classes.searchBox}>
        <Tooltip title={toolTipMessage}
          onMouseEnter={() => { if (search.length < 3) timer = setTimeout(() => setToolTipMessage('Enter 3 or more characters to search.'), 3000) }}
          onMouseOut={() => {
            if (timer) { clearTimeout(timer) }
            setToolTipMessage('')
          }}
          placement="bottom" arrow interactive classes={{
            tooltip: classes.customTooltip,
            arrow: classes.customArrow,
          }}>
          <input type='text' autoComplete='off' value={search} placeholder='Search' className={classes.searchText} onChange={(e) => {
            setSearch(e.target.value)
            setEnableClear(false)
            if (e.target.value === '') { searchFilter('clear') }
            if (e.target.value.length > 2) { setToolTipMessage('') }
            if (e.target.value.length < 3) { setToolTipMessage('Enter 3 or more characters to search.') }
          }}
            onKeyDown={onKeyDown}
          >
          </input>
        </Tooltip>
        {/* {enableClear ?
          <MotifIcon className={classes.searchIcon} src={contentIcClear24px} onClick={() => searchFilter('clear')} />
          :
          <MotifIcon className={search.length > 2 ? classes.searchIcon : classes.searchIconGrey} src={actionIcSearch24px} onClick={() => search.length > 2 && searchFilter('apply')} />
        } */}
        <Box className={classes.sortValue}>Filter
          {isFilterApplied && [...new Set(Object.keys(selectedFilterTemp).map((item) => selectedFilterTemp[item]).flat())].length > 0 && <Box className={classes.filterCount}>{[...new Set(Object.keys(selectedFilterTemp).map((item) => selectedFilterTemp[item]).flat())].length}</Box>}
          <SortIcon className={classes.sortIcon} onClick={(e) => handleClick(e)} />
        </Box>
        <Popper style={{ marginTop: '20px', left: '-48px' }} id={id} open={open} anchorEl={anchorEl}>
          <ClickAwayListener onClickAway={(e) => handleClick(e)}>
            <Box>
              <Box className={classes.filterBox}>
                <FormControlLabel
                  className={classes.allCloud}
                  control={<Checkbox
                    indeterminate={!shallowEqual(filterData, selectedFilterTemp) && checkifAnyFilterApplied()}
                    checked={shallowEqual(filterData, selectedFilterTemp)}
                    onChange={() => { setAllFilters() }}
                    name='All Filters' />}
                  label='All Filters'
                />
                {
                  Object.keys(filterData).map((provider) =>
                    <div key={provider}
                      className={classes.paper}>
                      <FilterUI type={provider} provider={filterData[provider]} filterData={filterData} selectedFilterTemp={selectedFilterTemp} setSelectedFilterTemp={setSelectedFilterTemp} setIsFilterApplied={setIsFilterApplied} />
                    </div>)
                }
              </Box>
              <div className='add--control__wrapper'>
                <div className='add--control__general__info' style={{ height: '65px', width: '265px', padding: '0 0 0 40px', border: '1px solid #C4C4CD', }}>
                  <div className='general__info--buttons'>
                    <Button
                      className='general__info--button-primary'
                      variant="contained"
                      color="primary"
                      disabled={checkFilterApplied(selectedFilterTemp)}
                      onClick={(e) => applyFilters(e)}
                    >
                      Apply
                    </Button>
                    <Button
                      className='general__info--button-default'
                      disabled={checkFilterApplied(selectedFilterTemp)}
                      onClick={(e) => clearAllFilters(e)}
                      variant="contained">
                      Clear all
                    </Button>
                  </div>
                </div>
              </div>
            </Box>
          </ClickAwayListener>
        </Popper>
      </Box>
      {isFilterApplied && [...new Set(Object.keys(selectedFilterTemp).map((item) => selectedFilterTemp[item]).flat())].map((certi, i) => {
        return <div key={i} className={classes.certification}>{certi.charAt(0).toUpperCase() + certi.slice(1)}
          {/* <MotifIcon className={classes.pointerCursor} src={contentIcClear24px} onClick={() => clearFilterOut(certi)} /> */}
        </div>
      })
      }
      {renderTabPanel(data)}
    </>
  )
}

export default ControlList;
