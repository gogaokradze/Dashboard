import classes from './Footer.module.css'

import {
  Core,
  Facebook,
  Linkedin,
  Twitter,
  GitHub,
  Language,
  Settings,
} from '../../svg/icons'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.upperFooter}>
          <div className={classes.section}>
            <div className={classes.container}>
              <Core className={classes.core} />
              <div className={classes.socialMedia}>
                <Facebook />
                <Twitter />
                <Linkedin />
                <GitHub />
              </div>
              <div className={classes.tos}>
                <p>Terms of Service</p>
                <p>Privacy</p>
              </div>
              <div className={classes.settings}>
                <Language />
                <Settings />
              </div>
            </div>
            <div className={classes.about}>
              <p>About</p>
              <ul className={classes.list}>
                <li>Contact</li>
                <li>Band</li>
                <li>Blog</li>
                <li>Community</li>
                <li>CORE Token</li>
                <li>Online Store</li>
              </ul>
            </div>
            <div className={classes.help}>
              <p>Help</p>
              <ul className={classes.list}>
                <li>Costumer Support</li>
                <li>TroubleShooting</li>
                <li>Guides</li>
              </ul>
            </div>
            <div className={classes.developers}>
              <p>Developers</p>
              <ul className={classes.list}>
                <li>Github</li>
                <li>Documentation</li>
                <li>Bug Bounty</li>
                <li>Audits</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.lowerFooter}>
          <div className={classes.wrapper}>
            <p>&copy; CORE Multi-Chain, 2021 All rights reserved</p>
            <div className={classes.up} onClick={() => scrollToTop()}>
              UP
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
