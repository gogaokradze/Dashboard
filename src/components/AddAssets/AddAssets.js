import classes from './AddAssets.module.css'
import React, { useState } from 'react'
import { Add, Switch, MiniLogo, Other } from '../../svg/icons'
import AddModal from '../AddModal/AddModal'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import SlideNextButton from '../SlideIcons/SlideIcons'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import DisplayToken from '../DisplayToken/DisplayToken'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

const AddAssets = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  return (
    <div className={classes.section}>
      {isOpen && <AddModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div className={classes.line}>
        <div className={classes.add}>
          <button className={classes.addButton} onClick={() => setIsOpen(true)}>
            <Add />
          </button>
          <p className={classes.AddText}>Add Assets</p>
          <Switch />
          <p className={classes.AddText}>Staked only</p>
        </div>
        <input
          className={classes.search}
          type='search'
          placeholder='Search to Token'
        />
      </div>
      <div className={classes.overflow}>
        <div className={classes.tokens}>
          <Swiper
            slidesPerView={3.5}
            keyboard={{
              enabled: true,
            }}
            spaceBetween={0}
            freeMode={true}
            pagination={{
              type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className={classes.cmcx}>
                <div className={classes.title}>
                  <MiniLogo />
                  <p>CMCX (CMCX)</p>
                </div>
                <div className={classes.row}>
                  <p>
                    <span className={classes.grey}> Available:</span> 345.400214
                  </p>
                  <p>
                    <span className={classes.grey}>Stake: </span>30
                  </p>
                </div>
                <p>
                  <span className={classes.grey}>Value:</span> 345.400214{' '}
                  <span className={classes.name}>CMCX</span>{' '}
                  <span className={classes.apprx}>(~ $20.1231)</span>
                </p>
                <div className={classes.buttons}>
                  <button className={classes.button}>Send</button>
                  <button className={classes.button}>Receive</button>
                  <button className={classes.button}>JustSwap</button>
                  <button
                    onClick={() => setShowMessage(!showMessage)}
                    className={classes.other}
                  >
                    <Other />
                  </button>
                </div>
                {showMessage && (
                  <div className={classes.message}>Multi-Signature</div>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <DisplayToken data={{ img: img1, title: 'APENFT (NFT)' }} />
            </SwiperSlide>
            <SwiperSlide>
              <DisplayToken data={{ img: img2, title: 'APENFT (NFT)' }} />
            </SwiperSlide>
            <SwiperSlide>
              <DisplayToken data={{ img: img3, title: 'APENFT (NFT)' }} />
            </SwiperSlide>
            <SwiperSlide>
              <DisplayToken data={{ img: img3, title: 'APENFT (NFT)' }} />
            </SwiperSlide>
            <SlideNextButton />
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default AddAssets
