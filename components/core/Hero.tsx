"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Icons } from '@/data/Cdn'
import Particles from '@/components/ui/Particles'

const Hero: React.FC = () => {
    const [user, setUser] = useState({ Email: '' })

    const data = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const getdata = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { Email } = user;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Email })
        }

        const res = await fetch('https://flibbr-subscription-email-default-rtdb.firebaseio.com/UserData.json', options)

        if (res.ok) { // Corrected response check
            alert("You will be notified as we get live.")
            setUser({ Email: '' })
        } else {
            alert("Error Occurred")
        }
    }

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white ">
                <Particles />

                <nav className="w-full pt-6">
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold">Flibbr</h1>
                    </div>
                </nav>

                <main className="flex-1 flex flex-col items-center justify-center text-center relative">

                    <div className="absolute left-0 top-20 hidden lg:grid md:grid grid-rows-3 lg:gap-8 gap-0 ">
                        <div className=" pt-4">
                            <Image src={Icons.icon1} alt="Icon 1" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                        <div className="lg:pl-20 pl-6 lg:pt-8 pt-6">
                            <Image src={Icons.icon2} alt="Icon 2" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                        <div className="lg:pl-52 pl-12 lg:pt-12 pt-8">
                            <Image src={Icons.icon3} alt="Icon 3" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                    </div>

                    <div className='lg:mx-52 mx-32 px-4'>
                        <h2 className="lg:text-6xl md:text-5xl font-medium mb-4 z-10 text-3xl ">
                            AI-Powered Journeys. <span className='block'>Limitless Possibilities</span>
                        </h2>
                        <p className="mb-8 z-10 text-gray-400 font-normal lg:text-xl md:text-lg text-sm ">
                            We deliver personalized travel experiences powered by AI,<span className='block'>turning every trip into an unforgettable story</span>
                        </p>
                        <div className="space-x-2 mb-6 z-10">
                            <input
                                type="email"
                                name="Email" // Added name attribute
                                value={user.Email}
                                required
                                onChange={data}
                                placeholder="Enter your email to get notified"
                                className="w-72 px-4 py-2 rounded-lg text-gray-200 bg-black border focus:border-white focus:ring-2 ring-white border-gray-600"
                            />
                            <button onClick={getdata} className="m-4 px-4 py-2 bg-white text-black rounded-lg border">Get Notified</button>
                        </div>
                    </div>

                    <div className="absolute right-0 top-20 hidden lg:grid md:grid grid-rows-3 lg:gap-8 gap-0">
                        <div className="ml-24 pr-0 pt-4">
                            <Image src={Icons.icon4} alt="Icon 1" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                        <div className="lg:ml-12 ml-16 lg:pt-8 pt-6">
                            <Image src={Icons.icon5} alt="Icon 2" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                        <div className="lg:-translate-x-12 lg:ml-0 ml-7 lg:pt-12 pt-8">
                            <Image src={Icons.icon6} alt="Icon 3" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                    </div>
                </main>
                <footer className="py-4">
                    <p>Mapping Wonders. Coming Soon!</p>
                </footer>
            </div>
        </>
    )
}

export default Hero
