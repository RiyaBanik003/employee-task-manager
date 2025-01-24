
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Authorisation';

const CreateTask = () => {
      const [userData, setUserData] = useContext(AuthContext);
    
    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [assignedTask, setAssignedTask] = useState({})
    const submitHandler=(e)=>{
        e.preventDefault();
        setAssignedTask({task, date, description, name, category, active: false, new_task:true, failed: false, completed:false })
        console.log(assignedTask)
        setTask('')
        setDescription('')
        setDate('')
        setName('')
        setCategory('')
    
    const data =userData
    data.forEach((e)=>{
        if(assignedTask== e.name){
            e.tasks.push(new_task)
            e.taskCounts.new_task = e.taskCounts.new_task +1; 

        }
    })
    setUserData(data)
    localStorage.setItem('employee', JSON.stringify(data))
}
  return (
    // <div className='bg-[#1C1C1C] p-10 '>
    
    <div className="bg-[#1C1C1C] flex justify-center items-center h-screen w-screen overflow-x-hidden">
    <div className="bg-[#1C1C1C] border-emerald-600 p-12 rounded-xl shadow-lg max-w-md mx-auto">
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className="flex flex-col -mt-20 justify-center items-center ">
            <h2 className="text-3xl font-semibold -mt-4 text-emerald-700 mb-6 ">Create Task</h2>
            <input
                required
                value={task}
                className="placeholder:text-gray-400 -mt-1 border-2 rounded-full border-emerald-600 py-3 px-5 text-xl  focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-[#302f2f] text-white"
                type="text"
                placeholder="Task Title"
                onChange={(e)=>{
                    setTask(e.target.value)
                }}
            />
            
            <textarea
                required
                className=" text-white placeholder:text-gray-400 border-2 rounded-xl border-emerald-600 py-3 px-5 text-xl mt-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-[#302f2f]"
                placeholder="Description of task"
                value={description}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
            ></textarea>
            
            <input
                required
                className="text-white placeholder:text-gray-400 border-2 rounded-full border-emerald-600 py-3 px-7 text-xl mt-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-[#302f2f]"
                type="date"
                placeholder="dd/mm/yyyy"
                value={date}
                onChange={(e)=>{
                    setDate(e.target.value)
                }}  
            />
            
            <input
                className="placeholder:text-gray-400 text-white border-2 rounded-full border-emerald-600 py-3 px-5 text-xl mt-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-[#302f2f]"
                type="text"
                placeholder="Assign To"
                 value={name}
                 onChange={(e)=>{
                    setName(e.target.value)
                 }}
            />
            
            <input
                className="placeholder:text-gray-400 text-white border-2 rounded-full border-emerald-600 py-3 px-5 text-xl mt-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-[#302f2f]"
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                 }}
            />
            
            <button
                className="bg-emerald-700 text-white py-3 px-12 rounded-full mt-6 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            >
                Create Task
            </button>
        </form>
    </div>
</div>

// </div>
  )
}

export default CreateTask