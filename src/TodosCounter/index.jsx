import React, {Fragment} from "react";
import "./TodoCounter.css";

function TodosCounter(params) {
    return(
        <Fragment>
            <p className="TodoCounter">Haz completado {params.completed} de {params.total} tareas.</p>
        </Fragment>
    );
}

export {TodosCounter};