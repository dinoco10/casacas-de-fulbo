import React, { useContext } from "react";
import { FilterDispath } from "../../../components/Context/ContextFilter";
import "./Filter.css";

export default function Filter() {
  const { dispath } = useContext(FilterDispath);
  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button onClick={() => dispath({ type: "ALL" })} className="filter_btn">
          Todas
        </button>
        <button
          onClick={() => dispath({ type: "Resto del Mundo" })}
          className="filter_btn"
        >
          Resto del Mundo 
        </button>
        <button
          onClick={() => dispath({ type: "ARGENTINA" })}
          className="filter_btn"
        >
           Argentina
        </button>
        <button
          onClick={() => dispath({ type: "Asia" })}
          className="filter_btn"
        >
          Asia
        </button>
        <button
          onClick={() => dispath({ type: "PrimeraBMetro" })}
          className="filter_btn"
        >
          Primera B Metropolitana
        </button>
      </div>
    </div>
  );
}
