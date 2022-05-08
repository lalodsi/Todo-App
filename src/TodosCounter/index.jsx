import React, {Fragment} from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodosCounter() {
    const value = React.useContext( TodoContext );
    return(
        <Fragment>
            <p className="TodoCounter">Haz completado {value.completedTodos} de {value.totalTodos} tareas.</p>
        </Fragment>
    );
}

export {TodosCounter};