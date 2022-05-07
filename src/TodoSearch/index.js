import React from "react";
import "./TodoSearch.css";

function TodoSearch({setSearchValue, searchValue}) {
    function changeValue(event) {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    let mensajeBusqueda = searchValue? "buscando '" + searchValue + "'..." : "";

    return (
        <React.Fragment>
            <form>
                <input
                    className="searchField"
                    placeholder="Ir a pagar al banco"
                    onChange={changeValue}
                >
                </input>
            </form>
            <p>
                {
                    mensajeBusqueda
                }
            </p>
        </React.Fragment>
    );
}

export {TodoSearch};