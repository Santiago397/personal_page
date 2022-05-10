import React from 'react'

const Footer = () => {
  return (
    <div className='sm:flex w-full justify-around bg-indigo-500 p-2'>
      <SocialIcons icon={'fa-brands fa-github'} text={'SanMon12'} url={'https://github.com/Santiago397'} />
      <SocialIcons icon={'fa-solid fa-envelope'} text={'santilopez397@gmail.com'} />
      <SocialIcons icon={'fa-brands fa-linkedin'} text={'sanmon12'} url={'https://www.linkedin.com/in/sanmon12/'} />
      <SocialIcons icon={'fa-solid fa-phone'} text={'(+57) 3195721674'} />
    </div>
  )
}

const SocialIcons = ({ icon, text, url }) => {
  return (
      <a className='flex flex-col items-center hover:cursor-pointer' rel='noopener' href={url}>
        <i className={`${icon} text-white text-3xl md:text-5xl my-4`} />
        <span className='text-white'>{text}</span>
      </a>
  )
}

export default Footer