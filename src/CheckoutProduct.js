import React from "react";
import "./CheckoutProduct.css";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ item, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: item.id,
    });
  };

  return (
    <div className="checkout__basketItem">
      <img src={item.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{item.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <p>
                {" "}
                <StarTwoToneIcon />{" "}
              </p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
