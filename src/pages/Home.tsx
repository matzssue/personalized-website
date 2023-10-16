import { Layout } from '../common/Layout/Layout';
import { Hero } from '../modules/Hero/Hero';
import { InterestingFacts } from '../modules/Informations/InterestingFacts';

const Home = () => (
  <Layout>
    <Hero />
    <InterestingFacts />
  </Layout>
);
export default Home;
