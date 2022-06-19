import React from 'react'
import classes from './Table.module.css'

const tableData = [
  { type: 'Stake', amount: '10' },
  { type: 'Trigger Smart Contracts', nocmcx: true, amount: '230' },
  { type: 'Transfer', amount: '101' },
  { type: 'Stake', amount: '1.201', blue: true },
  { type: 'Stake', amount: '0.1111', blue: true },
  { type: 'Stake', amount: '0.00001' },
  { type: 'Stake', amount: '354' },
  { type: 'Stake', amount: '1' },
]

const Table = () => {
  return (
    <div className={classes.table}>
      <div className={classes.head}>
        <div className={classes.hash}>Hash</div>
        <div className={classes.from}>From</div>
        <div className={classes.to}>To</div>
        <div className={classes.transaction}>Transaction Type</div>
        <div className={classes.result}>Result</div>
        <div className={classes.amount}>Amount</div>
      </div>
      {tableData.map((data, index) => (
        <div
          key={index}
          className={`${classes.row} ${
            index % 2 === 0 ? classes.light : classes.dark
          }`}
        >
          <div className={`${classes.hash} ${classes.blue}`}>0xC7...061b</div>
          <div className={classes.from}>TPibCCjU...3oHHx</div>
          <div className={`${classes.to} ${data.blue && classes.blue}`}>
            TPibCCjU...3oHHx
          </div>
          <div className={classes.transaction}>
            {data.type} &nbsp;
            {data.nocmcx ? '' : <span className={classes.cmcx}>CMCX</span>}
          </div>
          <div className={`${classes.result} ${classes.success}`}>Success</div>
          <div className={classes.amount}>{data.amount}</div>
        </div>
      ))}
    </div>
  )
}

export default Table
