import { FC } from 'react'
import Image from 'next/image'
import { Pagination, Navigation, EffectCube } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from 'components'

import { portfolio_mock } from 'shared/mocks/portfolio_mock'
import Arrow from '../../../public/assets/icons/arrow.svg'

import s from './portfolio.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-cube'
import Link from 'next/link'

export const Portfolio: FC = () => {
  return (
    <div className={s.portfolioWrapper} id={'portfolio'}>
      <div className={s.portfolio}>
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
            pagination
            navigation
          >
            {portfolio_mock.map((item, index) => (
              <SwiperSlide key={index} className={s.slide}>
                <Image
                  src={item.slide}
                  className={s.slideImage}
                  layout='fill'
                  alt={'portfolio image'}
                />

                <div className={s.link}>
                  <Link href={item.link}>
                    <a>
                      <Button onClick={() => {}} classNames={s.button}>
                        Go to site <Arrow />
                      </Button>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
