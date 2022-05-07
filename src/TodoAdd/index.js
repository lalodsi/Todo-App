import React, {Fragment} from "react";
import "./TodoAdd.css"

function TodoAdd(params) {
    function changeValue(event) {
        params.setAddValue(event.target.value)
    }

    return(
        <Fragment>
            <form className="addForm">
                <input className="addField" type="text" 
                value={params.addValue}
                onChange={changeValue}
                />
                <p 
                    className="addButton"
                    onClick={params.onAddValue}
                >Agregar nueva tarea</p>
            </form>
        </Fragment>
    );
}

export {TodoAdd};