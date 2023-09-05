import Image from 'next/image'
import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideArrow from './SlideArrow/SlideArrow'
import styles from './Slider.module.scss'
import SliderItem from './SliderItem'
import { ISlide } from './slider.interface'
import { useSlider } from './useSlider'

interface ISlider {
  slides: ISlide[]
  buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
  const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
    slides.length
  )
  return (
    <>
      <div className={styles.slider}>
        <CSSTransition
          in={slideIn}
          timeout={300}
          classNames="slide-animation"
          unmountOnExit
        >
          <SliderItem slide={slides[index]} buttonTitle={buttonTitle} />
        </CSSTransition>

        {isPrev && (
          <SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
        )}

        {isNext && (
          <SlideArrow
            variant="right"
            clickHandler={() => handleClick('next')}
          />
        )}
      </div>
    </>
  )
}
export default Slider
