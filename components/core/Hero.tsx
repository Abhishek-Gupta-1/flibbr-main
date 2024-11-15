"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Icons } from '@/data/Cdn'
import Particles from '@/components/ui/Particles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero: React.FC = () => {
    const [user, setUser] = useState({ Email: '' })
    const [error, setError] = useState('')

    const data = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const getdata = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { Email } = user;

        if (!validateEmail(Email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Email })
        }

        const res = await fetch('https://flibbr-subscription-email-default-rtdb.firebaseio.com/UserData.json', options)

        if (res.ok) {
            toast.success('You will be notified as we get live.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: 0,
                theme: "dark",
            });
            setUser({ Email: '' })
        } else {
            toast.error('Error Occurred!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: 0,
                theme: "dark",
            });
        }
    }

    return (
        <>
            <div className=" h-full  w-full flex flex-col items-center justify-center bg-black text-white ">
                <Particles />

                <nav className="w-full pt-6">
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold">Flibbr</h1>
                    </div>
                </nav>

                <main className="flex-1 flex flex-col items-center justify-center text-center relative">

                    <div className="absolute left-0 top-20 hidden lg:grid md:grid grid-rows-3 lg:gap-8 gap-0 ">
                        <div className=" pt-4">
                            <Image src="/icons/Frame1.svg" alt="Icon 1" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                        <div className="lg:pl-14 pl-6 lg:pt-8 pt-6">
                            <Image src="/icons/Frame2.svg" alt="Icon 2" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                        <div className="lg:pl-36 pl-12 lg:pt-12 pt-8">
                            <Image src="/icons/Frame3.svg" alt="Icon 3" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                    </div>

                    <div className='lg:mx-52 md:mx-28 px-4'>
                        <h2 className="lg:text-6xl md:text-5xl font-medium mb-4 z-10 text-3xl text-gray-100 ">
                            AI-Powered Journeys. <span className='block'>Limitless Possibilities</span>
                        </h2>
                        <p className="mb-8 z-10 text-gray-400 font-normal lg:text-xl md:text-lg text-sm ">
                            We deliver personalized travel experiences powered by AI,<span className='block'>turning every trip into an unforgettable story</span>
                        </p>
                        <div className="space-x-2 mb-6 z-10">
                            <input
                                type="email"
                                name="Email"
                                value={user.Email}
                                required
                                onChange={data}
                                placeholder="Enter your email to get notified"
                                className="w-72 px-4 py-2 rounded-lg text-gray-200 bg-black border focus:border-white focus:ring-2 ring-white border-gray-600"
                            />
                            <button onClick={getdata} className="m-4 px-4 py-2 bg-white text-black rounded-lg border">Get Notified</button>

                            {error && <p className="text-red-500">{error}</p>}

                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable={false}
                                pauseOnHover
                                theme="dark"
                            />

                        </div>
                    </div>

                    <div className="absolute right-0 top-20 hidden lg:grid md:grid grid-rows-3 lg:gap-8 gap-0">
                        <div className="ml-24 pr-0 pt-4">
                            <Image src="/icons/Frame4.svg" alt="Icon 1" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                        <div className="lg:ml-12 ml-16 lg:pt-8 pt-6">
                            <Image src="/icons/Frame5.svg" alt="Icon 2" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                        <div className="lg:-translate-x-12 lg:ml-0 ml-7 lg:pt-12 pt-8">
                            <Image src="/icons/Frame6.svg" alt="Icon 3" width={55} height={55} className="lg:h-24 lg:w-24 h-16 w-16" />
                        </div>
                    </div>
                </main>
                <footer className="absolute bottom-10">
                    <p>Mapping Wonders. Coming Soon!</p>
                </footer>
            </div>
        </>
    )
}

export default Hero
