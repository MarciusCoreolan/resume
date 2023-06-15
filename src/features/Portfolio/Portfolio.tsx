import { FC } from 'react'
import Image from 'next/image'
import { Pagination, Navigation, EffectCube } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from 'components'

import { portfolio_mock } from 'shared/mocks/portfolio_mock'
import Arrow from '/public/assets/icons/arrow.svg'

import s from './portfolio.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-cube'

export const Portfolio: FC = () => {
  return (
    <div className={s.portfolio} id={'portfolio'}>
      <h2 className={s.title}>Portfolio</h2>

      <div className={s.sliderWrap}>
        <Swiper
          modules={[Pagination, Navigation, EffectCube]}
          className={s.slider}
          grabCursor={true}
          slidesPerView={1}
          effect={'cube'}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          navigation
        >
          {portfolio_mock.map((item, index) => (
            <SwiperSlide key={index} className={s.slide}>
              <Image src={item.slide} layout='fill' alt={'portfolio image'} />

              <Button onClick={() => {}} classNames={s.button}>
                Go to site <Arrow />
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
