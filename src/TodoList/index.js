import React from "react";
import {TodoItem} from "../TodoItem"

function TodoList(params){
    return (
        <section>
            <hr></hr>
            {params.children}
            <hr></hr>
        </section>
    );
}

export {TodoList};