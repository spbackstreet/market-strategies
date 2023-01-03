import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import React from 'react';
import Paper from '@mui/material/Paper';
import './controlList.css';


const TableHeader = () => {
    // const { data, setData } = props
    // const [active, setActive] = React.useState('');
    // const handleSort = (e, sortVal, sortType, isArray?: boolean) => {
    //     setActive(sortVal + sortType);
    //     if (sortType === 'asc') {
    //         data.sort((a, b) => {
    //             if (isArray) {
    //                 if (b[sortVal][0] && a[sortVal][0]) {
    //                     if (a[sortVal][0].name.toLowerCase() < b[sortVal][0].name.toLowerCase()) return -1;
    //                     if (a[sortVal][0].name.toLowerCase() > b[sortVal][0].name.toLowerCase()) return 1;
    //                 }
    //                 else if (!b[sortVal][0]) { return 1 }
    //                 else { return -1 }
    //             } else {
    //                 if (a[sortVal].toLowerCase() < b[sortVal].toLowerCase()) {
    //                     return -1;
    //                 }
    //                 if (a[sortVal].toLowerCase() > b[sortVal].toLowerCase()) {
    //                     return 1;
    //                 }
    //             }
    //             return 0;
    //         });
    //         setData([...data]);
    //     } else {
    //         data.sort((a, b) => {
    //             if (isArray) {
    //                 if (b[sortVal][0] && a[sortVal][0]) {
    //                     if (b[sortVal][0].name.toLowerCase() < a[sortVal][0].name.toLowerCase()) return -1;
    //                     if (b[sortVal][0].name.toLowerCase() > a[sortVal][0].name.toLowerCase()) return 1;
    //                 }
    //                 else if (!b[sortVal][0]) { return -1 }
    //                 else { return 1 }
    //             } else {
    //                 if (b[sortVal].toLowerCase() < a[sortVal].toLowerCase()) {
    //                     return -1;
    //                 }
    //                 if (b[sortVal].toLowerCase() > a[sortVal].toLowerCase()) {
    //                     return 1;
    //                 }
    //             }
    //             return 0;
    //         });
    //         setData([...data]);
    //     }
    // }

    return (
        <TableContainer component={Paper} className='veriable--table'>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow style={{ display: 'flex' }}>
                        <TableCell align="left" className='table--header table--heading__name'>
                            <div className='veriable--table--heade--block table--header__name'>
                            Expiry
                                {/* <div className='table--sort--icon'>
                                    <ArrowDropUpIcon onClick={e => handleSort(e, 'constraintName', 'asc', false)} className={`table--sort--icon_up1 ${active === 'constraintNameasc' ? 'active' : ''} `} />
                                    <ArrowDropDownIcon onClick={e => handleSort(e, 'constraintName', 'desc', false)} className={`table--sort--icon_down1 ${active === 'constraintNamedesc' ? 'active' : ''} `} />
                                </div> */}
                            </div>
                        </TableCell>
                        <TableCell align="left" className='table--header table--heading__description'>
                            <div className='veriable--table--heade--block description__block'>
                            Ls_Iv
                                {/* <div className='table--sort--icon'>
                                    <ArrowDropUpIcon onClick={e => handleSort(e, 'environments', 'asc', true)} className={`table--sort--icon_up ${active === 'environmentsasc' ? 'active' : ''} `} />
                                    <ArrowDropDownIcon onClick={e => handleSort(e, 'environments', 'desc', true)} className={`table--sort--icon_down ${active === 'environmentsdesc' ? 'active' : ''} `} />
                                </div> */}
                            </div>
                        </TableCell>
                        <TableCell align="left" className='table--header table--heading__csp'>
                            <div className='veriable--table--heade--block'>
                            PP                                
                            {/* <div className='table--sort--icon'>
                                    <ArrowDropUpIcon onClick={e => handleSort(e, 'cloudProvider', 'asc', false)} className={`table--sort--icon_up ${active === 'cloudProviderasc' ? 'active' : ''} `} />
                                    <ArrowDropDownIcon onClick={e => handleSort(e, 'cloudProvider', 'desc', false)} className={`table--sort--icon_down ${active === 'cloudProviderdesc' ? 'active' : ''} `} />
                                </div> */}
                            </div>
                        </TableCell>
                        <TableCell align="left" className='table--header table--heading__csp'>
                            <div className='veriable--table--heade--block'>
                            Ls_Payoff
                                {/* <div className='table--sort--icon'>
                                    <ArrowDropUpIcon onClick={e => handleSort(e, 'environments', 'asc', true)} className={`table--sort--icon_up ${active === 'environmentsasc' ? 'active' : ''} `} />
                                    <ArrowDropDownIcon onClick={e => handleSort(e, 'environments', 'desc', true)} className={`table--sort--icon_down ${active === 'environmentsdesc' ? 'active' : ''} `} />
                                </div> */}
                            </div>
                        </TableCell>
                        <TableCell align="left" className='table--header table--heading__csp'>
                            <div className='veriable--table--heade--block'>
                            Hs_Iv
                                {/* <div className='table--sort--icon'>
                                    <ArrowDropUpIcon onClick={e => handleSort(e, 'environments', 'asc', true)} className={`table--sort--icon_up ${active === 'environmentsasc' ? 'active' : ''} `} />
                                    <ArrowDropDownIcon onClick={e => handleSort(e, 'environments', 'desc', true)} className={`table--sort--icon_down ${active === 'environmentsdesc' ? 'active' : ''} `} />
                                </div> */}
                            </div>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
};

export default TableHeader;
