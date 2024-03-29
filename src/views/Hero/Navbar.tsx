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
    <nav className='container-gutters py-12 flex items-center'>
      <button onClick={handleOpenMenu}>
        <img
          src={hamburgerIcon}
          alt='click to access mobile navbar'
          className='float-left'
        />
      </button>

      <img
        src={logoIcon}
        alt='Logo icon for the room(company)'
        className='m-auto'
      />

      {isMenuOpen && <MobileMenu closeFunc={handleCloseMenu} />}
    </nav>
  );
};
