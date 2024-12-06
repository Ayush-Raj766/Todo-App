import React, { useContext } from 'react'
import { useState , useRef} from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { TodoItemsContext } from '../store/Todo-items-store';

export default function AddTodo() {
    const contextObj =useContext(TodoItemsContext);
  const onNewItem =  contextObj.add
    // const[todoName ,setTodoName] =useState("")
    // const[dueDate ,setdueDate] =useState("")
    const TodoNameElement = useRef();
    const DueDateElement = useRef();
    // const noofUpdate=useRef(0) 
    // const handleName=(event)=>{
    //     setTodoName(event.target.value);
    //     // noofUpdate.current +=1;
    // }
    // const handleDate=(event)=>{
    //     setdueDate(event.target.value)
    //     // console.log (`nor Of Update are: ${noofUpdate.current}`)
    // }
    // usestate method 
    
    const handleAddButton =(event)=>{
         event.preventDefault();
        const todoName =TodoNameElement.current.value
        const dueDate =DueDateElement.current.value;
        TodoNameElement.current.value =""
        DueDateElement.current.value =""
        onNewItem(todoName,dueDate)
        // setTodoName("")
        // setdueDate("")
    }
    
    return (
        <>
            <div className="container ">
                <form className="row my-3" onSubmit={handleAddButton}>
                    <div className="col-6">
                        <input type="text" placeholder="Enter Todo Here" ref={TodoNameElement} />
                        {/* <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleName} /> */}
                        </div>
                    <div className="col-4">
                        <input type="date" 
                        ref={DueDateElement} />
                        {/* <input type="date" value={dueDate} onChange={handleDate} /> */}
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success ajr-button " >Add list <MdAddShoppingCart />
                    </button>
                    </div>
                </form>
            </div>
        </>
    )
}
