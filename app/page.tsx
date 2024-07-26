import React from 'react';
import Image from 'next/image';
import Hero from '@/components/core/Hero';
import Particles from '@/components/ui/Particles'


const Home = () => {
  return (

    <main className="flex h-screen max-w-screen max-h-screen flex-col w-full">
      <Hero />
      <div>
        {/* <Particles /> */}
      </div>

    </main>


  );
};

export default Home;
