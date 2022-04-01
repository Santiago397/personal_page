import React from 'react'

const Footer = () => {
  return (
    <div className='flex w-full justify-around bg-indigo-500 p-2'>
      <SocialIcons icon={'fa-brands fa-github'} text={'sanmon12'} />
      <SocialIcons icon={'fa-solid fa-envelope'} text={'santilopez397@gmail.com'} />
      <SocialIcons icon={'fa-brands fa-linkedin'} text={'sanmon12'} />
      <SocialIcons icon={'fa-solid fa-phone'} text={'(+57)3195721674'} />
    </div>
  )
}

const SocialIcons = ({ icon, text }) => {
  return (
    <div className='flex flex-col items-center hover:cursor-pointer'>
      <i className={`${icon} text-white fa-4x my-4`} />
      <span className='text-white'>{text}</span>
    </div>
  )
}

export default Footer