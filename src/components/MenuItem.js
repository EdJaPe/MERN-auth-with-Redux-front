import { useState, useEffect } from "react";
import axios from "axios";


const MenuItem = () => {
  const [ menuItem, setMenuItem ] = useState({
    category_name: '',
    sub_cat: '',
    description: '',
    price: ''
  })
  const [ fetchedMenu, setFetchedMenu ] = useState([])
  const { category_name, sub_cat, description, price } = menuItem;
  
  useEffect(() => {
    const fetchMenu = async () => {
      const config = {
        header: {
          "Content-Type": "application/json"
        }
      }
      try{
        const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/menu/all`, config)
        // console.log(request.data.menu)
        setFetchedMenu(request.data.menu)
      } catch(error){
        console.log(error, "error here")
      }
      // return request;
    }
    fetchMenu();
  },[])

  const menuView = fetchedMenu.length < 0 ? <h3>Hold on tight..</h3>: fetchedMenu.map( (item, index) => {
    return(
      <div key={index} >
        <h4>{index}</h4>
        <h2>{item.category_name}</h2>
        <h3>{item.sub_cat}</h3>
        <p>{item.description}</p>               
        <h3>{item.price}</h3>
      </div>
    )
  } )
  
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
      {menuView}
      <label htmlFor="categoryName"  >Name of Category</label>
      <input 
      onChange={e => setMenuItem({ ...menuItem, category_name : e.target.value})} 
      type='text' 
      name="categoryName" required/>
      <label htmlFor="subCat"  >Name of Sub Category</label>
      <input type='text'  name='subCat' onChange={e => setMenuItem({ ...menuItem, sub_cat : e.target.value})} required/>
      <label htmlFor="description"  >Description</label>
      <input type='text'  onChange={e => setMenuItem({ ...menuItem, description: e.target.value})} name='description' required/>
      <label htmlFor="price"  > Price </label>
      <input type='number'  onChange={e => setMenuItem({ ...menuItem, price : e.target.value})} name='price' required /> 
      <button onClick={submitHandler} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Add Item</button>
    </div>
  )
}
export default MenuItem;