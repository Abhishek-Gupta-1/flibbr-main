import React from 'react';
import Image from 'next/image';
import Hero from '@/components/core/Hero';
import Navbar from '@/components/core/Navbar';
import Particles from '@/components/ui/Particles'


const Home = () => {
  return (

    <main className="flex h-screen max-w-screen max-h-screen w-full flex-col">
      <div>
        <div className='w-full max-h-screen'>
          {/* <Navbar /> */}
          <Hero />

        </div>
      </div>
      <div>
        {/* <Particles /> */}
      </div>

    </main>


  );
};

export default Home;
