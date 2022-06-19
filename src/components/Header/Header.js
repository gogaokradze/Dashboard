import { Logo, MiniLogo, Language, Settings } from '../../svg/icons'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <nav className={classes.navbar}>
        <p>Trade</p>
        <p>Earn</p>
        <p>Win</p>
        <p>NFT</p>
        <p>More</p>
      </nav>
      <div className={classes.bar}>
        <div className={classes.miniLogo}>
          <MiniLogo />
          <p>$4.709</p>
        </div>
        <div className={classes.settings}>
          <Language />
          <Settings />
        </div>
        <button className={classes.button}>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Header
