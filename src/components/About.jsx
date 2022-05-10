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
                    <p className='text-sm text-gray-800 mx-1 md:text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quod vitae illo dolor.
                        Sint dolore perferendis iusto ut corporis tenetur, totam, temporibus explicabo suscipit dolores
                        voluptatum ipsam. Culpa, placeat voluptates.
                    </p>
                    <PhotoPer />
                </div>
            </section>
        </div>
    )
}

export default About