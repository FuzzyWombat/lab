import React from 'react';
import { HomeIcon } from '@salt-ds/icons';

export const Home: React.FC = () => {
    return (
        <section className='h-full w-full flex flex-col items-center text-center justify-center'>
            <HomeIcon size={6} className='p-2' />
            <span className='text-6xl p-2'>Home</span>
            <span className='text-8xl p-2'>Choose a Route</span>
        </section>
    );
};

export default Home;
