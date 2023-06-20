import git from '/public/assets/icons/contacts/git.svg?url'
import telegram from '/public/assets/icons/contacts/telegram.svg?url'
import mail from '/public/assets/icons/contacts/mail.svg?url'
import phone from '/public/assets/icons/contacts/phone.svg?url'
import linkedin from '/public/assets/icons/contacts/linkedin.svg?url'

export const navigation_mock = [
  { title: 'Home', link: '#home' },
  { title: 'About', link: '#about' },
  { title: 'Portfolio', link: '#portfolio' },
  { title: 'Experience', link: '#experience' },
  { title: 'Skills', link: '#skills' },
  { title: 'Contacts', link: '#contacts' },
]

export const contacts_mock = [
  { icon: git, link: 'https://github.com/MarciusCoreolan' },
  { icon: telegram, link: 'https://t.me/Desert_Viper' },
  {
    icon: linkedin,
    link: 'https://www.linkedin.com/in/akhmed-karasaev-586261229/',
  },
  { icon: mail, link: 'mailto:germes955@gmail.com' },
  { icon: phone, link: 'tel:+79289490099' },
]
