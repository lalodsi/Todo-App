import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import { TodoContext } from "../TodoContext";

function Modal({ children }) {

    const { addValue, setAddValue, addTodo, setOpenModal } = React.useContext( TodoContext );

    function changeValue(event) {
        setAddValue(event.target.value);
    }
    function onAddValue() {
        addTodo(addValue);
        setOpenModal(false);
    }

    return createPortal(
        <div className="ModalBackground">
            <h3>Escribe la tarea que quieres agregar</h3>
            <form className="addForm">
                <input className="addField" type="text" 
                value={addValue}
                onChange={changeValue}
                />
            </form>
            <div>
                <button className="addButton" 
                onClick={onAddValue}
                >Añadir</button>
            </div>
            {children}
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };