import React from "react";
import './App.css';
import { TodoList } from '../TodoList';
import {TodoItem} from "../TodoItem";
import { TodoSearch } from '../TodoSearch';
import { TodosCounter } from '../TodosCounter';
import { TodoAdd } from '../TodoAdd';
import { TodoContext } from "../TodoContext";

function AppUI() {
    return (
    <React.Fragment>
    
    <TodoContext.Consumer>
      {({title}) => (
        <h1>
        {title}
        </h1>
      )}
    </TodoContext.Consumer>
    
    <TodosCounter />
    <TodoSearch />

    <TodoContext.Consumer>
    {({ 
      error, 
      loading, 
      searchTodos, 
      completeTodo, 
      eraseTodo}) => (
      <TodoList>
      {error && <p>Desespérate, hubo un error</p>}
      {loading && <p>Estamos cargando</p>}
      {(!loading && !searchTodos.length) && <p>Crea tu primer Todo</p>}

      {
        searchTodos.map( (todo, index) => <TodoItem 
        key={index} 
        text={todo.text}
        onComplete={() =>completeTodo(index)}
        onErase={ () => eraseTodo(index)}
        completed={todo.completed}></TodoItem> )
      }
    </TodoList>
    ) }
    </TodoContext.Consumer>
    
    <TodoAdd></TodoAdd>
    
    </React.Fragment>)
}

export { AppUI };