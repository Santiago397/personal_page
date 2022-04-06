import React from 'react'
import photo from '../media/Gon.png'

const Projects = () => {
    return (
        <div className='flex items-center overflow-auto bg-blue-300 sm:justify-around'>
            <Project img={photo} title={"pj1"} descr={"Este proyecto supone hacer equis cosa pero también se enfoca en hacer y cosa"} link={"#"} />
            <Project img={photo} title={"pj2"} descr={"Este proyecto supone hacer equis cosa pero también se enfoca en hacer y cosa"} link={"#"} />
            <Project img={photo} title={"pj3"} descr={"Este proyecto supone hacer equis cosa pero también se enfoca en hacer y cosa"} link={"#"} />
            <Project img={photo} title={"pj4"} descr={"Este proyecto supone hacer equis cosa pero también se enfoca en hacer y cosa"} link={"#"} />
            
        </div>
    )
}

const Project = ({img, title, descr, link}) => {
    return (
        <div className='flex flex-col my-3 mx-8 break-words'>
            <img src={img} alt="project_photo" className='rounded-full w-24 mx-auto' />
            <div className='p-2'>
                <h5 className='text-gray-900 text-center'>{title}</h5>
                <p className='text-sm border-b border-t border-gray-300 '>
                    {descr} 
                </p>
            </div>
                <a href={link} className='text-center'>Click here</a>
        </div>
    )
}

export default Projects