import React, {Fragment} from "react";
import "./TodoAdd.css";
import { TodoContext } from "../TodoContext";

function TodoAdd(params) {

    const { setOpenModal, openModal } = React.useContext( TodoContext );

    const contenidoBotonNewTodo = openModal? "↩" : "+";
    const claseBotonNewTodo = openModal? "newTodoButton back" : "newTodoButton";

    function onAddValue() {
        setOpenModal(!openModal)
    }

    return(
        <Fragment>
                <button 
                    className={claseBotonNewTodo}
                    onClick={onAddValue}>
                        {contenidoBotonNewTodo}
                </button>
        </Fragment>
    );
}

export { TodoAdd };