import logoIcon from '../../assets/logo.svg';
import hamburgerIcon from '../../assets/icon-hamburger.svg';

export const Navbar = () => {
  return (
    <nav className='container-gutters py-12'>
      <img
        src={hamburgerIcon}
        alt='click to access mobile navbar'
        className='float-left'
      />
      <img
        src={logoIcon}
        alt='Logo icon for the room(company)'
        className='m-auto'
      />
    </nav>
  );
};
