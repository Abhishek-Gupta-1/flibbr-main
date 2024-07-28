import React from 'react';
import Image from 'next/image';
import Hero from '@/components/core/Hero';
import Particles from '@/components/ui/Particles'


const Home = () => {
  return (

    <main className="flex max-h-screen w-screen flex-col ">
      <div className='lg:h-screen h-[94vh]'>

        <Hero />
      </div>
    </main>


  );
};

export default Home;
