import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {

    const { addValue, setAddValue, addTodo, setOpenModal } = React.useContext( TodoContext );

    function changeValue(event) {
        setAddValue(event.target.value);
    }
    function onAddValueOrReturn() {
        if (addValue) {
            addTodo(addValue);
        }
        setOpenModal(false);
    }

    return(
        <React.Fragment>
        <h3>Escribe la tarea que quieres agregar</h3>
        <form className="addForm">
                <input className="addField" type="text"
                placeholder="Cortar cebolla para el almuerzo"
                value={addValue}
                onChange={changeValue}
                />
            <div>
                <button
                className="addButton" 
                onClick={() => onAddValueOrReturn(true)}
                >Añadir</button>
            </div>
        </form>
        </React.Fragment>
    );
}

export { TodoForm };