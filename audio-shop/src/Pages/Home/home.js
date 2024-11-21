import Nav from "../../Components/nav";
import Hero from "../../Components/hero";
import Wrapper from "../../Components/wrapper";
import TestPage from "../../Components/testPage";


const Home = () => {

  return (
    <div className="home">
      <Nav />
      <Hero />
      <Wrapper />
      <TestPage />
    </div>
  );
};

export default Home;
