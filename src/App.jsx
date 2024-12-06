// import { useReducer, useState } from "react";
import AddTodo from "./component/AddTodo"
import AppName from "./component/AppName"
// import ItemTodo from "./component/project1/ItemTodo"
import TodoItems from "./component/TodoItems"
import Welcomemess from "./component/Welcomemess";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/Todo-items-store";
function App() {
  
  return (
    <TodoItemsContextProvider>
  <center className="todo-container cont">
    <AppName/>
    <AddTodo />
    <Welcomemess/>
    <TodoItems ></TodoItems>
      </center>
    </TodoItemsContextProvider>
  )
}
export default App
