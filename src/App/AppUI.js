import React from "react";
import './App.css';
import { TodoList } from '../TodoList';
import {TodoItem} from "../TodoItem";
import { TodoSearch } from '../TodoSearch';
import { TodosCounter } from '../TodosCounter';
import { TodoAdd } from '../TodoAdd';
import { TodoContext } from "../TodoContext";

function WaitingMessage() {
  return(
    <h2>Cargando...</h2>
  );
}

function AppUI() {

  const { 
    error, 
    loading, 
    searchTodos, 
    completeTodo, 
    eraseTodo,
    title } = React.useContext( TodoContext );

    return (
    <React.Fragment>

    <h1>
    {title}
    </h1>
    
    <TodosCounter />
    <TodoSearch />

    
      <TodoList>
      {error && <p>Desespérate, hubo un error</p>}
      {loading && <WaitingMessage />}
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
    
    
    <TodoAdd></TodoAdd>
    
    </React.Fragment>)
}

export { AppUI };