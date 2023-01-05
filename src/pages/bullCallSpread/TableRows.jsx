import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  tablefont: {
    color: 'grey',
    fontSize: '12px',
    fontWeight: 'normal',
  },
  emaildate: {
    alignItems: 'center',
    padding: '8px',
  },
  cspIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
  },
  envLabel: {
    padding: '5px',
    height: '25px',
  },
  userimage: {
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  actionitempoper: {
    width: '110px',
    '& .MuiPaper-elevation1': {
      boxShadow: 'none',
      border: '1px solid #C4C4CD',
    },
    '& .MuiList-root': {
      padding: 0,
    },
    '& .MuiTypography-root': {
      fontSize: '14px',
      color: 'grey',
      fontFamily: 'Nunito',
    },
    '& .MuiListItem-button': {
      paddingTop: '5px',
      paddingBottom: '5px',
    },
  },
  countercls: {
    width: 'auto',
    height: '20px',
    lineHeight: '8px',
    borderRadius: '25px',
    border: `1px solid grey`,
    padding: '5px',
    paddingLeft: '4px',
    minWidth: '30px',
    cursor: 'pointer',
  },
  popperwrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    boxShadow: '3px 0px 4px -1px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    position: 'relative',
    flexBasis: '5%',
  },
  accountcspswrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  accountcsp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlNumbers: {
    paddingLeft: '20px',
    justifyContent: 'left',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  cspImage: { height: 20, alignSelf: 'center' },
  rowBlock: {
    padding: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #E7E7EA',
  },
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
  tooltip: {
    height: 'auto',
    fontSize: '12px ',
    fontFamily: 'Nunito',
    color: 'white',
    backgroundColor: '#2E2E38',
    zIndex: 1
  },
  customArrow: {
    color: '#2e2e38',
  },
})

const TableRows = (props) => {

  const classes = useStyles();
  const { rowItem, itemIndex } = props;

  return (
    <div id={'_controlList_' + itemIndex} className={`${classes.tablefont} executiveuserlist`}>
      <div className={classes.rowBlock + ' control--list__table--row-body'}>
        <div style={{ flexBasis: '32%'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.emaildate}>{rowItem.expiry}</div>
          </div>
        </div>
        <div style={{ flexBasis: '20%'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.emaildate}>{rowItem.ls_iv}</div>
          </div>
        </div>
        <div style={{ flexBasis: '23%'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.emaildate}>{rowItem.pp}</div>
          </div>
        </div>
        <div style={{ flexBasis: '24%'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.emaildate}>{rowItem.ls_payoff}</div>
          </div>
        </div>
        <div style={{ flexBasis: '13%'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className={classes.emaildate}>{rowItem.hs_iv}</div>
          </div>
        </div>
      </div>
    </div>
  )
};


export default TableRows;