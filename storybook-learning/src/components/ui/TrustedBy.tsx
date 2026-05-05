import Image from 'next/image';

import logo1 from '@/src/assets/logos/Logo.svg';
import logo2 from '@/src/assets/logos/Logo2.svg';
import logo3 from '@/src/assets/logos/Logo3.svg';
import logo4 from '@/src/assets/logos/Logo4.svg';
import logo5 from '@/src/assets/logos/Logo5.svg';
import logo6 from '@/src/assets/logos/Logo6.svg';
import { Paragraph } from './typography/Paragraph';

const logos = [
  { src: logo1, alt: 'Brand 1' },
  { src: logo2, alt: 'Brand 2' },
  { src: logo3, alt: 'Brand 3' },
  { src: logo4, alt: 'Brand 4' },
  { src: logo5, alt: 'Brand 5' },
  { src: logo6, alt: 'Brand 6' },
];

const TrustedBy = () => {
  return (
    <section>
      <div className='container py-8'>
        <Paragraph className='text-[var(--darkGray)]'>Trusted by:</Paragraph>
        <div className='flex flex-wrap items-center justify-center gap-8 py-8'>
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className='h-auto w-auto px-8'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
