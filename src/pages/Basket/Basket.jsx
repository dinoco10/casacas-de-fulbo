import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../../components/Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";




export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Carrito</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Volver a Atras
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
                El Diego dice que compres
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>Visualiza tu compra</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} Pesos </span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>Oferta Especial</span>
                <span>{state.totalPriceAfterOffer.toLocaleString()} Se ha aplicado un descuento de </span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>Total</span>
              <span>{state.totalPriceFainal.toLocaleString()}  Pesos </span>
            </div>
            <Link to ="/Signup" className = "btn btn-secondary">Proceder al Checkout</Link>>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              Eliminar 
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="https://pbs.twimg.com/media/DgQ6sfwVAAAvk4C?format=jpg&name=small"
            alt=""
          />
          <span className="favorite_empty_title">Tu carrito esta vacio</span>
        </div>
      )}
    </>
  );
}
