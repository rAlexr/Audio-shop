import CategoryCard from "./Components/categoryCard";
import Wrapper from "./Components/wrapper";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="main">
      <Home />
      <Wrapper>
        <CategoryCard img="headphones" />
        <CategoryCard img="earphones" />
        <CategoryCard img="speakers" />
      </Wrapper>
    </div>
  );
}

export default App;
