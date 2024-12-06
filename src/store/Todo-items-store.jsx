import { useReducer } from "react";
import { createContext } from "react";
export const TodoItemsContext =createContext({
    items: [],
      delete: ()=>{},
      add:()=>{},
});

const todoitemReducer = (currtvalue, action ) =>{
  let newTodo =currtvalue
    if(action.type==="NEW_ITEM"){
      newTodo=[...currtvalue , 
        {name:action.payload.itemName , date:action.payload.itemDueDate}
      ]
    }
    else if(action.type==="DELETE_ITEM"){
       newTodo =currtvalue.filter((item)=>item.name !== action.payload.itemName)
    }
    return newTodo
}
const TodoItemsContextProvider = ({children}) =>{
  const[Todoitems , dispatchTodoItem] = useReducer(todoitemReducer ,[])
  const addNewItem =(itemName , itemDueDate) =>{
      const newItemAction ={
        type:"NEW_ITEM",
        payload:{
          itemName,
          itemDueDate
        }
      }
      dispatchTodoItem(newItemAction)
  }
  const deleteItem =(itemName)=>{
    const deleteAction={
      type:"DELETE_ITEM",
      payload:{
        itemName,
      }
    }
    dispatchTodoItem(deleteAction) 
};
return (
  <TodoItemsContext.Provider value=
{{items: Todoitems,
  delete:deleteItem,
  add:addNewItem,
}}>
    {children}
</TodoItemsContext.Provider>
)
}

export default TodoItemsContextProvider;