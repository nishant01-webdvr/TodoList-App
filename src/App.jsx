import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import './App.css'
import { v4 as uuidv4 } from "uuid";

uuidv4(); 

function App() {
  
const [todo, settodo] = useState(" ")


const [todos, settodos] = useState([])
const [showFinished, setshowFinished] = useState(true)


useEffect(() => {
  let todoString = localStorage.getItem("todos")
if(todoString){
  
  
  let todos = JSON.parse(localStorage.getItem("todos"))
  settodos(todos)
}
}, [])

  

const saveToLS = (params) => {
  localStorage.setItem("todos",JSON.stringify(todos))
}

const toggleFinished = (e) => {
  setshowFinished(!showFinished)
 
}
 const handleAdd = () =>{
   settodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
  settodo("")                 
  saveToLS()
 } 
 const handleEdit = (e,id) =>{
   let t = todos.filter(i=>i.id === id) 
  settodo(t[0].todo)

  let index = todos.findIndex(item=>{
    return item.id === id;
  })

  let newTodos = todos.filter(item=>{

    return item.id!==id
  });
  settodos(newTodos)
  saveToLS()
 }  
 const handleDelete = (e,id) =>{
  let index = todos.findIndex(item=>{
    return item.id === id;
  })
  let newTodos = todos.filter(item=>{
        return item.id!==id
  });
  settodos(newTodos)
  saveToLS()
  
 } 
const handleChange =(e) =>{
                    
  settodo(e.target.value)
                   
}

const handleCheckbox = (e) => {
  let id = e.target.name;
 let index = todos.findIndex(item =>{
    return item.id === id;
  })


  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  settodos(newTodos)
  saveToLS()

 
}


  
  return (
   
   <>
   
   <Navbar/>
   <div className=" mx-3 md:container h-[90vh] md:min-h-[80vh] p-4 md:mx-auto my-5 rounded-xl md:w-[35%]  bg-violet-100">
  
  <h1 className='text-xl font-bold text-center'>iTask - Manage your todos at one place</h1>
  
    <div className="flex flex-col justify-center gap-4 addTodo ">
      <h2 className="my-5 text-lg font-bold ">
        Add a Todo
      </h2>
  <div className="flex ">
      <input onChange={handleChange} value={todo} className='w-full px-4 py-2 my-1 text-center rounded-full text-violet-800' type="text" placeholder='Enter your Todo here...'  />
      <button onClick={handleAdd} disabled={todo.length===0} className='px-6 mx-3 text-white rounded-full disabled:bg-violet-800 bg-violet-800 hover:bg-violet-500'>Save</button>
  </div>
    </div>

<input  className='w-3 p-3 mx-2 my-6 hover:cursor-pointer'  type="checkbox" onChange={toggleFinished} checked={showFinished} name="" id="" />Show Finished
<div className="flex flex-col items-center">
  
<div className="h-0.5 sep bg-violet-300 w-3/4 "></div>
</div>

  <h2 className='py-3 mx-2 text-lg font-bold' >Your Todos</h2>
  <div className="todos">

{todos.length ===0 && <div className=' bg-slate-100 h-[20vh] text-center md:p-10 md:m-12 pt-7 rounded-lg text-xl text-violet-800 '>No Todos to display</div>}
{todos.map(item=>{})}
     
    {todos.map(item=>{
      
      return (showFinished || !item.isCompleted) && <div key={item.id} className="flex justify-between my-3 max-w-[100vw] todo">
        <div className='flex gap-5'>
          
        <input className='hover:cursor-pointer' name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
      <div className={item.isCompleted?"line-through":""} >{item.todo}</div>
        </div>
        
      <div className="flex buttons">
         <button onClick={(e)=>{handleEdit(e,item.id)}} className='px-4 mx-2 text-white rounded bg-violet-800 hover:bg-violet-500' >Edit</button>
        <button onClick={(e)=>{handleDelete(e, item.id)}} className='px-4 mx-2 text-white rounded bg-violet-800 hover:bg-violet-500' >Delete</button>
      </div>
      
    </div>
     })}
  </div>

</div>
   
   </>
  )
}

export default App
