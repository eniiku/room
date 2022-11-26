import { useRef, useState } from 'react';

import { Navbar } from './Navbar';
import { heroSlides } from '../../utils/data/heroSlides';
import arrowIcon from '../../assets/icon-arrow.svg';
import leftChevronIcon from '../../assets/icon-angle-left.svg';
import rightChevronIcon from '../../assets/icon-angle-right.svg';

export const Hero = () => {
  const [slides, setSlides] = useState(heroSlides[0]);
  const [index, setIndex] = useState(0);
  console.log(index);

  const previousSlide = () => {
    if (index >= 1 && index < 3) {
      setIndex((prev) => prev - 1);
      setSlides(heroSlides[index]);
    } else {
      setIndex(2);
      setSlides(heroSlides[index]);
    }
  };

  const nextSlide = () => {
    if (index >= 0 && index < 2) {
      setIndex((prev) => prev + 1);
      setSlides(heroSlides[index]);
    } else {
      setIndex(0);
      setSlides(heroSlides[index]);
    }
  };

  return (
    <section aria-label="Landing section of the room's website">
      <div className='relative h-[50vh]'>
        <Navbar />

        <img
          src={slides.img}
          alt="the room's product catalogue"
          className='absolute inset-0 -z-30 h-[50vh]'
        />

        <div className='absolute right-0 bottom-0'>
          <button className='bg-black py-6 px-8' onClick={previousSlide}>
            <img
              src={leftChevronIcon}
              alt='click to go back to the previous presentation'
              width={12}
            />
          </button>

          <button className='bg-black py-6 px-8' onClick={nextSlide}>
            <img
              src={rightChevronIcon}
              alt='click to go to the next presentation'
              width={12}
            />
          </button>
        </div>
      </div>

      <div className='container-gutters py-12'>
        <h1 className='text-4xl font-bold'>{slides.heading}</h1>

        <p className='text-[var(--dark-gray)] text-lg mt-4'>{slides.text}</p>

        <button className='flex items-center gap-4 mt-10'>
          <span className='uppercase tracking-[1rem]'>shop now</span>
          <img src={arrowIcon} role='presentation' />
        </button>
      </div>
    </section>
  );
};
