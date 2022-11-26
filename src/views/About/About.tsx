import aboutImgDark from '../../assets/images/image-about-dark.jpg';
import aboutImgLight from '../../assets/images/image-about-light.jpg';

const About = () => {
  return (
    <section aria-label='about section for the rooms homepage'>
      <img src={aboutImgDark} alt='product from the rooms catalogue' />

      <div className='container-gutters py-12'>
        <h1 className='text-lg uppercase font-bold tracking-[.4rem]'>
          About our furniture
        </h1>

        <p className='text-[var(--dark-gray)] text-lg mt-4 text-left'>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need from traditional to contemporay styles or anything in
          between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>

      <img src={aboutImgLight} alt='product from the rooms catalogue' />
    </section>
  );
};

export default About;
