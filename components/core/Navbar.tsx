import React from 'react'
import { ModeToggle } from '../ui/ModeToggle'

const Navbar = () => {
    return (
        <nav className="w-full pt-6 bg-black text-white">
            <div className="flex justify-center">
                <h1 className="text-2xl font-bold">Flibbr.ai</h1>
                <ModeToggle />
            </div>
        </nav>
    )
}

export default Navbar