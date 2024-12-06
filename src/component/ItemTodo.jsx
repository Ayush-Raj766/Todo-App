import React, { useContext } from 'react'
import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from '../store/Todo-items-store';

export default function ItemTodo(props) {
  const contextObj =useContext(TodoItemsContext);
  const deleteItem =  contextObj.delete
  return (
    <div>
      <div className="container  ">
      <div className="row my-3">
        <div className="col-6">
          {props.item}</div>
        <div className="col-4">
          {props.date}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ajr-button" onClick={()=>deleteItem(props.item)}>delete <MdDeleteForever /></button>
        </div>
      </div>
    </div>
</div>
  )
}
