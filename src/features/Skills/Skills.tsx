import { FC, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import { skills_mock, skills_mock_mobile } from 'shared/mocks/skills_mock'

import s from './skills.module.scss'

export const Skills: FC = () => {
  const { width } = useWindowDimensions()

  const gridRef = useRef(null)
  const isInView = useInView(gridRef, { once: true })

  return (
    <div className={s.skillsWrapper} id={'skills'}>
      <div className={s.skills}>
        <div className={s.titleWrapper}>
          {isInView ? (
            <motion.h2
              className={s.title}
              initial={{ x: '110vw' }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.5,
                ease: 'linear',
                type: 'spring',
              }}
            >
              Hard skills
            </motion.h2>
          ) : null}
        </div>

        <div ref={gridRef}>
          {isInView ? (
            <motion.div
              className={s.grid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: 'easeIn',
              }}
            >
              {width < 768 ? (
                <>
                  {skills_mock_mobile.map((item, index) => (
                    <div key={index} className={s.gridCell}>
                      <div className={s.gridCellItem}>
                        {item.icon ? (
                          <div className={s.skillIcon}>
                            <Image
                              src={item.icon}
                              layout='fill'
                              alt={item.name + 'icon'}
                            />
                          </div>
                        ) : null}

                        <div className={s.skillTitle}>{item?.name}</div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {skills_mock.map((item, index) => (
                    <div key={index} className={s.gridCell}>
                      <div className={s.gridCellItem}>
                        {item.icon ? (
                          <div className={s.skillIcon}>
                            <Image
                              src={item.icon}
                              layout='fill'
                              alt={item.name + 'icon'}
                            />
                          </div>
                        ) : null}

                        <div className={s.skillTitle}>{item?.name}</div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </motion.div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
