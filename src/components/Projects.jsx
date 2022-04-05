import React from 'react'
import photo from '../media/Gon.png'

const Projects = () => {
    return (
        <div className='flex h-full items-center overflow-x-auto bg-blue-300'>
            <Project img={photo} title={"pj1"} descr={"qweqwewqdasdaszxczxcxcbxcb"} link={"#"} />
            <Project img={photo} title={"pj1"} descr={"qweqwewqdasdaszxczxcxcbxcb"} link={"#"} />
            <Project img={photo} title={"pj1"} descr={"qweqwewqdasdaszxczxcxcbxcb"} link={"#"} />
            
        </div>
    )
}

const Project = ({img, title, descr, link}) => {
    return (
        <div className='flex flex-col my-3 mx-8'>
            <img src={img} alt="project_photo" className='rounded-full w-24 mx-auto' />
            <div className='p-2'>
                <h5 className='text-gray-900 text-center border-b border-gray-300'>{title}</h5>
                <p className='text-sm border-b border-gray-300'>
                    {descr} 
                </p>
            </div>
                <a href={link} className='text-center'>Click here</a>
        </div>
    )
}

export default Projects