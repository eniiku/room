import { Navbar } from './Navbar';

import arrowIcon from '../../assets/icon-arrow.svg';

export const Hero = () => {
  return (
    <section aria-label="Landing section of the room's website">
      <div className='h-[50vh] bg-slate-300 bg-center bg-no-repeat bg-cover'>
        <Navbar />
      </div>
      <div className='container-gutters py-12'>
        <h1 className='text-4xl font-bold'>
          Discover innovative ways to decorate
        </h1>
        <p className='text-[var(--dark-gray)] text-lg mt-4'>
          We provide unmatched quality, comfort, and style for property owners
          accross the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button className='flex items-center gap-4 mt-10'>
          <span className='uppercase tracking-[1rem]'>shop now</span>{' '}
          <img src={arrowIcon} role='presentation' />
        </button>
      </div>
    </section>
  );
};
