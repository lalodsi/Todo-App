import React from "react";


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
    return {
      Todos,
      saveTodos,
      loading,
      error
    };
}

export {useLocalStorage};