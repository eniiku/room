import { Navbar } from './Navbar';

import arrowIcon from '../../assets/icon-arrow.svg';

export const Hero = () => {
  return (
    <section aria-label="Landing section of the room's website">
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          accross the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <button>
          <span>shop now</span> <img src={arrowIcon} role='presentation' />
        </button>
      </div>
    </section>
  );
};
