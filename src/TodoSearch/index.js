import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const {setSearchValue, searchValue} = React.useContext( TodoContext );

    function changeValue(event) {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    let mensajeBusqueda = searchValue? "buscando '" + searchValue + "'..." : "";

    return (
        <React.Fragment>
            <form className="formularioSearch">
                <input
                    className="searchField"
                    placeholder="Ir a pagar al banco"
                    onChange={changeValue}
                >
                </input>
            </form>
            <p>
                {mensajeBusqueda}
            </p>
        </React.Fragment>
    );
}

export {TodoSearch};