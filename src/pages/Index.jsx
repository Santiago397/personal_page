import React from 'react'
import About from '../components/About'
import Projects from '../components/Projects'

const Index = () => {
  return (
    <div className='flex flex-col h-full w-full'>
      <About />
      <Projects />
    </div>
  )
}

export default Index