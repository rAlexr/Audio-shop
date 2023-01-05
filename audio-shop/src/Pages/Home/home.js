import Nav from "../../Components/nav";
import Hero from "../../Components/hero";
import CategoryCards from "../../Components/categoryCards";
import Wrapper from "../../Components/wrapper";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Hero />
      <Wrapper>
        <div className="home__cards-container">
          <CategoryCards img="headphones" />
          <CategoryCards img="earphones" />
          <CategoryCards img="speakers" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
