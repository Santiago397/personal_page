import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavResponsive = () => {

    const [showNav, setShowNav] = useState(false)

    return (
        <div className='m-1 md:hidden' onClick={() => { setShowNav(!showNav) }}>
            <i className={`fas fa-${showNav ? 'times' : 'bars'} cursor-pointer`} />
            {
                showNav &&
                <div className='flex flex-col p-1'>
                    <Option route={'/about'} text={'About me'} />
                    <Option route={'/'} text={'Projects'} />
                    <Option route={'/'} text={'Contact'} />
                </div>
            }
        </div>
    )
}

const Option = ({ route, text }) => {
    return (
        <NavLink className='bg-indigo-500 my-0.5 p-0.5 rounded-md text-white' to={route}>
            <span className='mx-3'>{text}</span>
        </NavLink>
    )
}


export default NavResponsive