import React from 'react'
import Image from 'next/image'
import Particles from '../ui/Particles'


const Hero = () => {
    return (
        <>
            <Particles />
            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">

                <nav className="w-full py-6">
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold">Flibbr.ai</h1>
                    </div>
                </nav>

                <main className="flex-1 flex flex-col items-center justify-center text-center relative">

                    <div className="absolute left-0 top-20 grid grid-rows-3 gap-4">
                        <div className=" pt-4">
                            <Image src="/icons/Frame1.svg" alt="Icon 1" width={55} height={55} className="h-24 w-24" />
                        </div>
                        <div className="pl-12 pt-8">
                            <Image src="/icons/Frame2.svg" alt="Icon 2" width={55} height={55} className="h-24 w-24" />
                        </div>
                        <div className="pl-24 pt-12">
                            <Image src="/icons/Frame3.svg" alt="Icon 3" width={55} height={55} className="h-24 w-24" />
                        </div>
                    </div>

                    <div className='mx-52'>

                        <h2 className="text-5xl font-bold mb-4 z-10">
                            Revolutionizing travel with <span className="block">AI and personalized experiences</span>
                        </h2>
                        <p className="mb-8 z-10">
                            Our innovative AI and personalized approach redefines how you explore the world,
                            <span className="block">so you can focus on creating unforgettable memories.</span>
                        </p>
                        <div className="space-x-2 mb-6 z-10">
                            <input
                                type="email"
                                placeholder="Enter your email to get notified"
                                className="active px-4 py-2 rounded text-gray-200 bg-black"
                            />
                            <button className="px-4 py-2 bg-white text-black rounded">Get Notified</button>
                        </div>

                    </div>

                    <div className="absolute right-0 top-20 grid grid-rows-3 gap-4">
                        <div className="ml-24 pr-0 pt-4">
                            <Image src="/icons/Frame1.svg" alt="Icon 1" width={55} height={55} className="h-24 w-24" />
                        </div>
                        <div className="ml-12 pr-12 pt-8">
                            <Image src="/icons/Frame2.svg" alt="Icon 2" width={55} height={55} className="h-24 w-24" />
                        </div>
                        <div className="pt-12">
                            <Image src="/icons/Frame3.svg" alt="Icon 3" width={55} height={55} className="h-24 w-24" />
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