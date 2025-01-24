import React,{useState} from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const Admin = (props) => {
    // const [text, setText] = useState('')
    // const [date, setDate] = useState('')
    // const [desc, setDesc] = useState('')
    // const [name, setName] = useState('')
    // const [category, setCategory] = useState('')
    // const submitHandler=(e)=>{
    //     e.preventDefault();
    //     console.log("task is",text)
    //     console.log("description is",desc)
    //     console.log("date is", date)
    //     console.log("assigned employee name is ", name)
    //     console.log("category which he/she will work in ", category)
        
    //     setText('')
    //     setDesc('')
    //     setDate('')
    //     setName('')
    //     setCategory('')
    // }
   
  return (
  <div className='bg-rgb(28 28 28)'>
    <Header changeUser={props.changeUser}/>
   <CreateTask/>
   <AllTask/>
   </div> 
    
  )
}

export default Admin