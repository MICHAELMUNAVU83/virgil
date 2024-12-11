import Benefits from "../components/Benefits";
import Clients from "../components/Clients";
import ClientFeedback from "../components/ClientFeedback";
import HomeServices from "../components/HomeServices";
import OurProducts from "../components/OurProducts";
import Process from "../components/Process";
import HomePage from "../components/HomePage";

const Home = () => {
  return (
    <>
      <HomePage />
      <HomeServices />
      <Benefits />
      <Clients />
      <Process />
      <OurProducts />
      <ClientFeedback />
    </>
  );
};

export default Home;
