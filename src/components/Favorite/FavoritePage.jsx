import React, { useContext } from "react";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import "./FavoritePage.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import FavoriteCard from "./FavoriteCard";

export default function FavoritePage() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);

  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Favoritos</span>
          <Link className="favorite_backLink" to={"/"}>
            <HiArrowRight />
            Volver a Atras
          </Link>
        </div>
      </div>
      <div className="favorite-wrapper">
        {state.favorites.length > 0 ? (
          <>
            <div>
              <button
                onClick={() => dispath({ type: "REMOVE_ALL_FAVORITE" })}
                className="favorite_removeAll"
              >
                Volver Atras
              </button>
            </div>
            <div className="favorite_container">
              {state.favorites.map((product) => (
                <FavoriteCard key={product.id} {...product} />
              ))}
            </div>
          </>
        ) : (
          <div className="favorite_empty">
            <img
              className="favorite_empty_img"
              src="https://pbs.twimg.com/media/DgQ6sfwVAAAvk4C?format=jpg&name=small"
              alt="messi"
            />
            <span className="favorite_empty_title">Tu lista esta vacia</span>
          </div>
        )}
      </div>
    </>
  );
}
