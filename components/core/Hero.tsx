import React from 'react'
import Image from 'next/image'
import Particles from '../ui/Particles'
import { ModeToggle } from '../ui/ModeToggle'
import { Icons } from '@/data/Cdn'




const Hero = () => {

    return (
        <>
            <div className="h-[92.5vh] flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white ">
                <Particles />

                <nav className="w-full pt-6">
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold">Flibbr.ai</h1>
                        <div className='lg:translate-x-[40vw] hidden lg:inline'>
                            <ModeToggle />
                        </div>
                    </div>
                </nav>

                <main className="flex-1 flex flex-col items-center justify-center text-center relative">

                    <div className="absolute left-0 top-20 lg:grid grid-rows-3 gap-8 hidden">
                        <div className=" pt-4">
                            <Image src={Icons.icon1} alt="Icon 1" width={55} height={55} className="h-24 w-24" />
                        </div>
                        <div className="pl-20 pt-8">
                            <Image src={Icons.icon2} alt="Icon 2" width={55} height={55} className="h-24 w-24" />
                        </div>
                        <div className="pl-52 pt-12">
                            <Image src={Icons.icon3} alt="Icon 3" width={55} height={55} className="h-24 w-24" />
                        </div>
                    </div>

                    <div className='lg:mx-52 px-4'>

                        <h2 className="lg:text-6xl font-medium mb-4 z-10 text-3xl ">
                            Revolutionizing travel with <span className="lg:block">AI and personalized experiences</span>
                        </h2>
                        <p className="mb-8 z-10 text-gray-600 dark:text-gray-300 font-normal lg:text-xl text-sm ">
                            Our innovative <span className='text-black dark:text-white'>AI and personalized approach</span> redefines how you explore the world,
                            <span className="block">so you can focus on creating unforgettable memories.</span>
                        </p>
                        <div className="space-x-2 mb-6 z-10">
                            <input
                                type="email"
                                placeholder="Enter your email to get notified"
                                className="w-72 px-4 py-2 rounded text-gray-700 bg-white dark:text-gray-200 dark:bg-black border  dark:focus:border-white focus:border-black focus:ring-2 ring-black dark:ring-white dark:border-white border-black"
                            />
                            <button className="m-4 px-4 py-2 bg-white text-black rounded border border-black  ">Get Notified</button>
                        </div>


                    </div>

                    <div className="absolute right-0 top-20 lg:grid grid-rows-3 gap-8 hidden">
                        <div className="ml-24 pr-0 pt-4">
                            <Image src={Icons.icon4} alt="Icon 1" width={55} height={55} className="h-24 w-24" />
                        </div>
                        <div className="ml-12 pr-12 pt-8">
                            <Image src={Icons.icon4} alt="Icon 2" width={55} height={55} className="h-24 w-24" />
                        </div>
                        <div className="-translate-x-12 pt-12">
                            <Image src={Icons.icon5} alt="Icon 3" width={55} height={55} className="h-24 w-24" />
                        </div>
                    </div>

                </main>
                <footer className="py-4">
                    <p>Currently under construction...</p>
                </footer>

            </div>

        </>

    )
}

export default Hero