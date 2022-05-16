import React from "react";
import "./TodoItem.css";


function TodoItem(params) {
    function setClass(complete) {
        return complete? "complete" : "incomplete";
    }

    return (
        <li className="lista-elemento">
            <p className={"lista-elemento-texto " + setClass(params.completed)}>
                {params.text}
            </p>
            <span onClick={params.onComplete}>
                ✅
            </span>
            <span onClick={params.onErase}>
                ❌
            </span>
        </li>
    );
}

export {TodoItem};