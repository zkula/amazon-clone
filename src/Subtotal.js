import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   console.log("PRICE", basket);
  //   let _price = totalPrice;
  //   basket.map((item) => {
  //     _price += item.price;
  //     setTotalPrice(_price);
  //   });
  // }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="checkout__button">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
