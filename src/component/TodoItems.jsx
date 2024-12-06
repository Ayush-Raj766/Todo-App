import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";
import ItemTodo from "./ItemTodo"
const TodoItems = () =>{
  const contextObj =useContext(TodoItemsContext);
  const Todoitems = contextObj.items
  
    return (
    <div className="cont">
      {Todoitems.map((some) =>(<ItemTodo key={[some.name ,some.date]} item ={some.name} date= {some.date} />) )}
    </div>
    )
}
export default TodoItems;