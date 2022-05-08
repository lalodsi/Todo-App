import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
const title = "Lista de tareas";

function TodoProvider(props) {
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
		<TodoContext.Provider value={{
			loading,
			error,
			title,
			totalTodos,
			completedTodos,
			searchValue,
			setSearchValue,
			searchTodos,
			completeTodo,
			eraseTodo,
			addValue,
			setAddValue,
			addTodo,
		}}>
			{props.children}
		</TodoContext.Provider>
	)
}

export { TodoContext, TodoProvider };