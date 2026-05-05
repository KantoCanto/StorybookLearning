import React from 'react';
import { DisplayStatic } from './typography/DisplayStatic';
import Image from 'next/image';
import landingImage from '@/src/assets/InnerScreen.svg';

const Header = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <DisplayStatic className='py-24'>Browse Everything.</DisplayStatic>

          <div className='relative mt-28 h-[362px] w-full'>
            <div className='absolute inset-0 rounded-4xl bg-[var(--green)]' />

            <div className='relative z-10 flex h-full items-center justify-center'>
              <div className='relative h-[496px] w-[900px] -translate-y-[68px] rounded-t-4xl bg-[var(--black)]'>
                <div className='flex h-full translate-y-[6px] items-center justify-center'>
                  <Image
                    src={landingImage}
                    alt=''
                    className='h-auto max-w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
