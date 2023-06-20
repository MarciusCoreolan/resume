import { FC, useState } from 'react'
import cn from 'classnames'

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
          <div className={s.experienceContent}>
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
          </div>
        ) : (
          <div className={cn(s.shadow, { [s.light]: isLight })} />
        )}

        <div className={s.checkbox}>
          <Checkbox onChecked={() => setIsLight(prevState => !prevState)} />
        </div>
        <div className={cn(s.lampBg, { [s.lampBgVisibility]: isLight })} />
      </div>
    </div>
  )
}
