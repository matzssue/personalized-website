import { Layout } from '../common/Layout/Layout';
import { Hero } from '../modules/Hero/Hero';
import { Informations } from '../modules/Informations/Informations';

export const Home = () => (
  <Layout>
    <Hero />
    <Informations />
  </Layout>
);
