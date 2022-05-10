import React from 'react'
import PhotoPer from './PhotoPer'

const About = () => {
    return (
        <div className='flex bg-gray-300 p-2 md:px-16'>
            <section className='flex flex-col my-auto px-4 md:px-3'>
                <h2 className='font-medium leading-tight text-4xl text-gray-900 md:mt-10'>
                    Santiago Monrroy López
                </h2>
                <h6 className='text-gray-700'>Software Developer Jr</h6>
                <div className='flex items-center py-3'>
                    <p className='text-sm text-gray-800 mx-1 pr-14 md:text-lg'>
                    Hi, my name is Santiago from Colombia <span>🇨🇴</span>. I'm a student that is discover this awesome development world <span>🌎</span>. 
                    I'm so enthisiastic about how can I learn in this universe of technology and all the types 
                    of person I can know. Each day I see how grows this industry and how can solve problems about our society.
                    </p>
                    <PhotoPer />
                </div>
            </section>
        </div>
    )
}

export default About