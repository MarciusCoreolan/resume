import { FC, useState } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

import { Checkbox } from 'components'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import { experience_mock } from 'shared/mocks/experience_mock'

import s from './experience.module.scss'

export const Experience: FC = () => {
  const [isLight, setIsLight] = useState(false)
  const { width } = useWindowDimensions()

  return (
    <div className={s.experienceWrapper} id={'experience'}>
      <div className={s.experience}>
        {isLight || width <= 768 ? (
          <motion.div
            className={s.experienceContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              ease: 'easeIn',
            }}
          >
            <div className={s.wrap}>
              <div className={s.titles}>
                <div className={s.title}>Experience</div>
                <div className={s.totalExperience}>
                  more than 3 years Total experience
                </div>
              </div>

              <div className={s.experiences}>
                {experience_mock.map(item => (
                  <div key={item.companyName} className={s.experienceCell}>
                    <div className={s.name}>{item.companyName}</div>
                    <div className={s.position}>{item.position}</div>
                    <div className={s.date}>{item.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className={s.shadow} />
        )}

        <div className={s.checkbox}>
          <Checkbox onChecked={() => setIsLight(prevState => !prevState)} />
        </div>
        <div className={cn(s.lampBg, { [s.lampBgVisibility]: isLight })} />
      </div>
    </div>
  )
}
