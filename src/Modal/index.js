import React from "react";
import { createPortal } from "react-dom";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import "./Modal.css";

function Modal({ children }) {
    const { setOpenModal } = React.useContext(TodoContext);

    function click(event) {
        if (event.target.className === "ModalBackground") {
            setOpenModal(false);
        }
    }

    return createPortal(
        <div className="ModalBackground" onClick={click}>
            <div className="ModalBackground-contenedor">
                <TodoForm></TodoForm>
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export { Modal };