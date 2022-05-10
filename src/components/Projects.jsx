import React from 'react'
import photo from '../media/Gon.png'
import millonarie from '../media/projects/ww.png'

const Projects = () => {
    return (
        <div className='flex items-center overflow-auto bg-blue-300 sm:justify-around h-full md:overflow-y-hidden'>
            <Project img={millonarie} title={"Who Wants To Be A Millonarie"} descr={"The famous game Who Wants to Be A Millonarie "} link={"https://github.com/Santiago397/QQSM"} />
            <Project img={photo} title={"Personal Page"} descr={"This is my personal site repo"} link={"https://github.com/Santiago397/personal_page"} />
            <Project img={photo} title={"Buenos Aires"} descr={"It's an app that includes a CRUD about vehicles"} link={"https://github.com/MnTic3/BuenosAiresTEST"} />
            
        </div>
    )
}

const Project = ({img, title, descr, link}) => {
    return (
        <div className='flex flex-col my-3 mx-8 break-word'>
            <img src={img} alt="project_photo" className='rounded-full w-24 mx-auto' />
            <div className='p-2'>
                <h5 className='text-gray-900 text-center'>{title}</h5>
                <p className='text-sm border-b border-t border-gray-300 p-2 '>
                    {descr} 
                </p>
            </div>
                <a href={link} className='text-center'>Click here</a>
        </div>
    )
}

export default Projects