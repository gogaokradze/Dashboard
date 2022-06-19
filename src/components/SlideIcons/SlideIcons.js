import { React } from 'react'
import { useSwiper } from 'swiper/react'
import { Next, Prev } from '../../svg/icons'
import classes from './SlideIcons.module.css'

export default function SlideIcons() {
  const swiper = useSwiper()
  return (
    <>
      <div className={classes.icons}>
        <button className={classes.icon} onClick={() => swiper.slidePrev()}>
          <Prev />
        </button>
        <button className={classes.icon} onClick={() => swiper.slideNext()}>
          <Next />
        </button>
      </div>
    </>
  )
}
