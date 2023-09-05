import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'

interface ISliderItem {
  slide: ISlide
  buttonTitle?: string
}

const SliderItem: FC<ISliderItem> = ({ slide, buttonTitle = 'Watch' }) => {
  const { push } = useRouter()
  return (
    <div className={styles.slide}>
      {slide.bigPoster && (
        <Image
          fill
          className={styles.image}
          src={slide.bigPoster}
          alt={slide.title}
          unoptimized
          priority
        />
      )}
      <div className={styles.content}>
        <div className={styles.heading}>{slide.title}</div>
        <div className={styles.subHeading}>{slide.subTitle}</div>
        <button className={styles.button} onClick={() => push(slide.link)}>
          {buttonTitle}
        </button>
      </div>
    </div>
  )
}
export default SliderItem
