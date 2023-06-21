import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Pagination, Navigation, EffectCube } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, Loading } from 'components'

import { portfolio_mock } from 'shared/mocks/portfolio_mock'
import Arrow from '/public/assets/icons/arrow.svg'

import s from './portfolio.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-cube'

export const Portfolio: FC = () => {
  const [onLoad, setOnLoad] = useState(true)

  return (
    <div className={s.portfolioWrapper} id={'portfolio'}>
      <div className={s.portfolio}>
        <h2 className={s.title}>Portfolio</h2>

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
          loop
          pagination
          navigation
        >
          {portfolio_mock.map((item, index) => (
            <SwiperSlide key={index} className={s.slide}>
              <div className={s.slideImage}>
                <Image
                  src={item.src}
                  layout='fill'
                  alt={`project ${item.name} screenshot`}
                  onLoad={() => setOnLoad(false)}
                />
                {onLoad ? <Loading /> : null}
              </div>

              <div className={s.slideFooter}>
                <div className={s.projectInfo}>
                  <div className={s.name}>{item.name}</div>
                  <div className={s.description}>{item.description}</div>
                </div>

                <div className={s.link}>
                  <Link href={item.link}>
                    <a target='_blank'>
                      <Button onClick={() => {}} classNames={s.button}>
                        Go to site <Arrow />
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
