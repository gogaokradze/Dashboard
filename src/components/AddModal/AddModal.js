import classes from './AddModal.module.css'
import { CloseIcon, SearchButton } from '../../svg/icons'

const AddModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.modalBox}>
          <div className={classes.title}>
            <p>Add Assets</p>
            <div className={classes.close} onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </div>
          </div>
          <div className={classes.searchBar}>
            <SearchButton className={classes.searchButton} />
            <input
              className={classes.search}
              type='search'
              placeholder='Search by Address / Txn ID / Token / Block'
            />
          </div>
          <div className={classes.data}>
            <p>No Data</p>
          </div>
          <button className={classes.confirm}>Confirm</button>
          <div className={classes.cancel}>
            <button
              onClick={() => setIsOpen(false)}
              className={classes.cancelButton}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddModal
