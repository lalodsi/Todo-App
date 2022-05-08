import React, {Fragment} from "react";
import "./TodoAdd.css";
import { TodoContext } from "../TodoContext";

function TodoAdd(params) {

    const { addValue, setAddValue, addTodo } = React.useContext( TodoContext );

    function changeValue(event) {
        setAddValue(event.target.value);
    }
    function onAddValue() {
        addTodo(addValue);
    }

    return(
        <Fragment>
            <form className="addForm">
                <input className="addField" type="text" 
                value={addValue}
                onChange={changeValue}
                />
                <p 
                    className="addButton"
                    onClick={onAddValue}
                >Agregar nueva tarea</p>
            </form>
        </Fragment>
    );
}

export { TodoAdd };