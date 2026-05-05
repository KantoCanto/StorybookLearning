import React from 'react';
import { Paragraph } from '../typography/Paragraph';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <section>
      <div className='flex justify-between py-6'>
        <Paragraph className='text-3xl'>Area</Paragraph>
        <ul className='flex gap-8 justify-center'>
          <li>Benefits</li>
          <li>Specification</li>
          <li>How-to</li>
          <li>Contact Us</li>
        </ul>
        <Button>Learn More</Button>
      </div>
    </section>
  );
};

export default Navbar;
