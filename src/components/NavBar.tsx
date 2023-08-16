import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className='flex w-full items-center justify-between px-32 py-6 text-dark'>
                <div className=' px-4 py-2 '>
                    <Link href={'/'} className='mr-4 hover:underline' >Home</Link>
                    <Link href={'/profile'} className='mx-4 hover:underline' >Profile</Link>
                    <Link href={'/login'} className='mx-4 hover:underline'>Login</Link>
                    <Link href={'/signup'}className='ml-4 hover:underline'>Sign Up</Link>
                </div>

            </nav>
        </>
    )
}

export default NavBar