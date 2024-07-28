import React from 'react';
import Image from 'next/image';
import Hero from '@/components/core/Hero';
import Particles from '@/components/ui/Particles'


const Home = () => {
  return (

    <main className="flex max-h-screen w-screen flex-col bg-black">
      <div className='lg:h-screen md:h-screen h-[95vh]'>

        <Hero />
      </div>
    </main>


  );
};

export default Home;
