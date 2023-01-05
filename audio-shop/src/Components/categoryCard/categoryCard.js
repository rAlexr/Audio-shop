const CategoryCard = (props) => {
  return (
    <div className="card">
      <img
        className="card__thumbnail"
        src={`photos/shared/desktop/${props.img}.png`}
        alt="thumbnail"
      />
      <p className="card__title">headphones</p>
      <div className="card__cta">
        <p className="card__cta--shop">shop</p>
        <svg
          className="card__cta--svg"
          width="8"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.322 1l5 5-5 5"
            stroke="#D87D4A"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default CategoryCard;
