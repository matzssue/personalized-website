import { Layout } from '../common/Layout/Layout';
import { Hero } from '../modules/Home/Hero/Hero';
import { InterestingFacts } from '../modules/Home/Informations/InterestingFacts';

const Home = () => (
  <Layout>
    <Hero />
    <InterestingFacts />
  </Layout>
);
export default Home;
