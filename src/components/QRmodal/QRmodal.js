import classes from './QRmodal.module.css'
import { CloseIcon, Copy } from '../../svg/icons'
import QR from '../../images/QR.png'

const QRmodal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.modalBox}>
          <div className={classes.title}>
            <p>Account QR Code</p>
            <div className={classes.close} onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </div>
          </div>
          <div className={classes.QRimg}>
            <div>
              <img src={QR} alt='QR Code' />
            </div>
          </div>
          <p className={classes.name}>Account QR Code</p>
          <div className={classes.code}>
            <p>KMeKssrW285WoPZptbHVEPjx5b5g1ALK1q</p>
            <Copy className={classes.copy} />
          </div>
          <div onClick={() => setIsOpen(false)} className={classes.save}>
            Save QR Code
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRmodal
