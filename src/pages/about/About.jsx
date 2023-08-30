import cs from './About.module.scss';
import cx from 'classnames';
import heroImg from '/hero_about.png';
import { Hero } from '@/components';

const About = () => {
  return (
    <div className={cx(cs.about)}>
      <Hero
        className={cx(cs.hero)}
        img={heroImg}
      />
      <section className={cx(cs.section)}>
        <h1 className={cx(cs.section__title)}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className={cx(cs.section__paragraph)}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className={cx(cs.section__paragraph)}>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className={cx(cs.box)}>
          <p className={cx(cs.box__paragraph)}>
            Your destination is waiting. Your van is ready.
          </p>
          <button className={cx(cs.box__button)}>Explore our vans</button>
        </div>
      </section>
    </div>
  );
};

export default About;
