import React, {Fragment} from "react";
import "./TodoAdd.css";
import { TodoContext } from "../TodoContext";

function TodoAdd(params) {

    const { setOpenModal, openModal } = React.useContext( TodoContext );

    function onAddValue() {
        setOpenModal(true)
    }

    return(
        <Fragment>
                <p 
                    className="addButton"
                    onClick={onAddValue}>
                        Crear nueva tarea
                </p>
        </Fragment>
    );
}

export { TodoAdd };