import { useState, useEffect } from "react";
import axios from "axios";


const MenuItem = () => {
  const [ menuItem, setMenuItem ] = useState('')
  const [menu, setMenu] = useState([])

  const menuItemHandler = (e) => {
    setMenuItem(e.currentTarget.value);
  }

  const submitHandler = (e) => {
    const config = {
      header:{
        "Content-Type": "application/json"
      }, 
      body: {
        text: menuItem
      }
    }
    try {
      axios.post(`${process.env.REACT_APP_SERVER_URL}/menu/register`, config)
      
    } catch(error){
      console.log(error)
    }

  }

  return(
    <div className="flex flex-col">
      {menuItem}
      <input onChange={menuItemHandler} type='text'/>
      <button onClick={submitHandler} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Add Item</button>
    </div>
  )
}
export default MenuItem;