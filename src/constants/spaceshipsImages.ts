import deathstar from '../assets/deathstar.webp';
import falcon from '../assets/falcon.webp';
import spaceship from '../assets/future-spaceship.webp';

export type SpaceShip = {
  alt: string;
  img: string;
  title: string;
};

export const spaceshipImages: SpaceShip[] = [
  { img: deathstar, title: 'Death Star', alt: 'Death Star' },
  { img: falcon, title: 'Falcon Spaceship', alt: 'Falcon spaceship' },
  { img: spaceship, title: 'Future Spaceship', alt: 'Future Spaceship' },
];
