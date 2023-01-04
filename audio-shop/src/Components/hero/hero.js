import ProductDescription from "../productDescription/productDescription";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__description">
        <ProductDescription />
      </div>

      <picture>
        {/* <source
          media="(min-width: 1920px)"
          srcSet="photos/home/desktop/hero-big.jpg"
        />

        <source
          media="(min-width: 1440px)"
          srcSet="photos/home/desktop/hero-med.jpg"
        /> */}

        <source
          media="(min-width: 1024px)"
          srcSet="photos/home/desktop/image-hero1.jpg"
        />

        <source
          media="(min-width: 500px)"
          srcSet="photos/home/desktop/hero-small.jpg"
        />

        <img src="photos/home/mobile/header.jpg" alt="headset" />
      </picture>
    </div>
  );
};

export default Hero;
