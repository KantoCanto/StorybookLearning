import React from 'react';
import { Paragraph } from './typography/Paragraph';
import { Caption } from './typography/Caption';
import { Display } from './typography/Display';

const Benefits = () => {
  return (
    <section>
      <div className='container pb-12'>
        <Paragraph className='text-[var(--darkGray)]'>Benefits</Paragraph>
        <Display className='py-8'>We&apos;ve cracked the code.</Display>
        <Caption className='text-[var(--black)]'>
          Area provides real insights, without the data overload.
        </Caption>
      </div>
    </section>
  );
};

export default Benefits;
