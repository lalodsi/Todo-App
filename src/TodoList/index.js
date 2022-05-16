import React from "react";
import {TodoItem} from "../TodoItem"

function TodoList(params){
    return (
        <section>
            <hr className="separador"></hr>
            {params.children}
            <hr className="separador"></hr>
        </section>
    );
}

export {TodoList};