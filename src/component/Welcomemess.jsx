import React, { useContext } from 'react'
import style from './Welcomemess.module.css'
import { TodoItemsContext } from '../store/Todo-items-store';

export default function Welcomemess() {
const contextObj =useContext(TodoItemsContext);
  const Todoitems =  contextObj.items
  return (
    <>
      {Todoitems.length ===0 && <p className={`container ${style.cont}`}>Enjoy Your Day😊😊 </p>}
    </>
  )
}
