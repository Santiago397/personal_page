import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const PublicLayout = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <NavBar />
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