import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("BASKET:", basket);
  const addToBasket = () => {
    //dispatch item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                {" "}
                <StarTwoToneIcon />{" "}
              </p>
            ))}
        </div>
      </div>

      <img className="product__img" src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
