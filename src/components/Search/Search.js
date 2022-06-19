import { useState } from 'react'
import classes from './Search.module.css'
import { SearchButton, Vector, QRcode, Copy, Info } from '../../svg/icons'
import QRmodal from '../QRmodal/QRmodal'

const Search = () => {
  const [filter, setFilter] = useState({ open: false, selected: 'All Filters' })
  const [isOpen, setIsOpen] = useState(false)
  const FilterData = [
    'Token',
    'Accounts',
    'Contact',
    'Txn ID',
    'Random',
    'Random',
    'Random',
  ]
  return (
    <div className={classes.center}>
      {isOpen && <QRmodal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className={classes.searchBar}>
        <SearchButton className={classes.searchButton} />
        <input
          className={classes.search}
          type='search'
          placeholder='Search by Address / Txn ID / Token / Block'
        />
        <div
          className={classes.filters}
          onClick={() =>
            setFilter(prevState => ({ ...prevState, open: !prevState.open }))
          }
        >
          <p>{filter.selected}</p>
          <Vector />
        </div>
        {filter.open && (
          <div className={classes.filterBox}>
            <p
              className={classes.allFilters}
              onClick={() => setFilter({ selected: 'All Filters' })}
            >
              All Filters
            </p>
            {FilterData.map(FilterName => (
              <p
                key={FilterName}
                className={classes.FilterName}
                onClick={() => setFilter({ selected: FilterName })}
              >
                {FilterName}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className={classes.code}>
        <p>TPvJNLZVh1qgcvWKCpC8mZgyEfvLV Qs65H</p>
        <Copy className={classes.copyLogo} />
        <div onClick={() => setIsOpen(true)}>
          <QRcode className={classes.QRcode} />
        </div>
      </div>
      <div className={classes.resources}>
        <div className={classes.box}>
          <p>Resources</p>
          <div className={classes.line}>
            <div className={classes.row}>
              <p>102/321</p>
              <div className={classes.info}>
                <span className={classes.tooltip}>
                  Abides pot bands, dumb internal links founder sowing doubt
                  merchantibility.
                </span>
                <div className={classes.opacity}>
                  <Info className={classes.icon} /> &nbsp; Energy
                </div>
              </div>
              <div className={classes.progressBar}>
                <div className={classes.progress}></div>
              </div>
            </div>
            <button className={classes.button}>Obtain</button>
          </div>
          <div className={classes.line}>
            <div className={classes.row}>
              <p>1205/1645</p>
              <div className={`${classes.info} ${classes.opacity}`}>
                <Info /> &nbsp; Bandwidth
              </div>
              <div className={classes.progressBar}>
                <div className={classes.progress2}></div>
              </div>
            </div>
            <button className={classes.button}>Rent</button>
          </div>
        </div>
        <div className={classes.box}>
          <p>CORE Power</p>
          <p className={classes.rewards}>
            Unwithdrawn Rewards: <span className={classes.zero}>0 &nbsp;</span>
            <span>CMCX</span>
          </p>
          <div className={classes.line1}>
            <div className={classes.row1}>
              <p>20/20</p>
              <div className={`${classes.info} ${classes.opacity}`}>
                <Info /> &nbsp; CORE Power
              </div>
              <div className={classes.progressBar1}>
                <div className={classes.progress1}></div>
              </div>
            </div>
          </div>
          <div className={classes.buttons}>
            <button className={classes.button1}>Get Votes</button>
            <button className={classes.button1}>Votes</button>
            <button className={classes.button1}>Claim</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
