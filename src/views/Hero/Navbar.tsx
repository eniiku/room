import { useState } from 'react';

import logoIcon from '../../assets/logo.svg';
import hamburgerIcon from '../../assets/icon-hamburger.svg';
import exitIcon from '../../assets/icon-close.svg';

const navbarLinks = ['home', 'shop', 'about', 'contact'];

const MobileMenu = ({ closeFunc }: { closeFunc: () => void }) => {
  return (
    <div className='fixed inset-0 z-30 bg-black bg-opacity-10'>
      <div className='bg-white container-gutters py-12 flex justify-between items-center'>
        <button onClick={closeFunc}>
          <img src={exitIcon} alt='click to close mobile navbar' />
        </button>

        <ul className='flex gap-8'>
          {navbarLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header
      className='container-gutters py-12 flex items-center md:items-center md:justify-start
      md:gap-16 md:py-16 md:px-12'
    >
      <button onClick={handleOpenMenu} className='md:hidden'>
        <img
          src={hamburgerIcon}
          alt='click to access mobile navbar'
          className='float-left'
        />
      </button>

      <img
        src={logoIcon}
        alt='Logo icon for the room(company)'
        className='m-auto md:m-0'
      />

      {/* Navbar for Desktop Layout */}
      <nav className='hidden md:flex gap-8 text-white text-sm font-semibold items-center'>
        {navbarLinks.map((navLink) => (
          <button key={navLink}>{navLink}</button>
        ))}
      </nav>

      {isMenuOpen ? <MobileMenu closeFunc={handleCloseMenu} /> : null}
    </header>
  );
};
