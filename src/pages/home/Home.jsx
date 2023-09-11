import cs from './Home.module.scss';
import cx from 'classnames';
import heroImg from '/hero.png';
import { Button, Hero } from '@/components';

const Home = () => {
  return (
    <Hero
      className={cx(cs.hero)}
      img={heroImg}
    >
      <h1 className={cx(cs.hero__heading)}>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className={cx(cs.hero__paragraph)}>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Button variant='orange'>Find your van</Button>
    </Hero>
  );
};

export default Home;
