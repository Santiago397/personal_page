import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import NavResponsive from '../components/NavResponsive'

const PublicLayout = () => {
    return (
        <div className='flex flex-col justify-between h-screen w-screen'>
            <NavBar />
            <NavResponsive />
            <div className='h-full overflow-y-scroll'>
                <main className='h-full'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default PublicLayout