import React from 'react';
import './App.css';
import { TodoList } from '../TodoList';
import {TodoItem} from "../TodoItem";
import { TodoSearch } from '../TodoSearch';
import { TodosCounter } from '../TodosCounter';
import { TodoAdd } from '../TodoAdd';

const title = "Lista de tareas";
const TareasDefault = [
  { text: "Comprar un Arduino", completed: false},
  { text: "Cargar los audifonos", completed: false},
  { text: "Hacer mi tarea", completed: false},
  { text: "Comprar resistencias", completed: false},
];

/**
 * # Use Local Storage
 * Realiza el guardado de los elementos en el local storage. Esto lo hace después de
 * 1 segundo
 * 
 * @param {object} itemName Objeto que contiene
 * @param {object} initialValue Valor inicial
 * @returns object with todos
 */
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [Todos, setTodos] = React.useState(initialValue);

  React.useEffect( ()=> {
    setTimeout( () => {
      try{
        const localStorageTodos = localStorage.getItem(itemName);
        let parsedTodos;
        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedTodos = initialValue;
        }
        else{
          parsedTodos = JSON.parse(localStorageTodos);
        }
  
        setTodos(parsedTodos);
        setLoading(false);
      }
      catch (error) {
        setError(error);
      }
    }, 1000);
  })
  
  function saveTodos(newTodos) {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  return {Todos,
    saveTodos,
    loading,
    error
  };
}

function App() {
  // Estados de React
  // const [Patito, savePatito] = useLocalStorage("Patitos", "Luis");
  const {
    Todos,
    saveTodos,
    loading,
    error
  } = useLocalStorage("Todos", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [addValue, setAddValue] = React.useState("");
  // const [Todos, setTodos] = React.useState(parsedTodos);
  
  // Filtrar los valores a buscar
  let searchTodos = [...Todos];
  if (searchValue) {
    const searchText = searchValue.toLowerCase();
    searchTodos = Todos.filter( tarea => {
      const todoText = tarea.text.toLowerCase();
      return todoText.includes(searchText);
    } )
  };
  
  // Tareas Completadas
  const totalTodos = Todos.length;
  const completedTodos = Todos.filter( todo => todo.completed ).length;
  
  // Marcar un todo como completado
  function completeTodo(index) {
    console.log("Completando");
    const newTodoList = [...Todos];
    newTodoList[index].completed = true;
    saveTodos(newTodoList);
  }
  
  // Borrar un Todo
  function eraseTodo(index) {
    console.log("Borrando");
    const newTodoList = [...Todos];
    newTodoList.splice(index, 1);
    saveTodos(newTodoList);
  }

  // Agregar un Todo
  function addTodo(text) {
    console.log("Agregando");
    setAddValue("");
    const newTodoList = [...Todos];
    newTodoList.unshift({ text: text, completed: false});
    saveTodos(newTodoList);
  }

  return (
    <React.Fragment>
      <h1>
        {title}
      </h1>
      <TodosCounter
        total={Todos.length}
        completed={completedTodos}
      >
      </TodosCounter>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></TodoSearch>
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
      <TodoAdd 
        addValue={addValue}
        setAddValue={setAddValue}
        onAddValue={() =>addTodo(addValue)}
      ></TodoAdd>
    </React.Fragment>
  );
}

export default App;