import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("email is",email)
        console.log("password is",password)
        handleLogin(email, password)

        setEmail('')
        setPassword('')
        // e.preventDefault();
        // handleLogin(email, password)
    }
    return (
        <div className='bg-[#1C1C1C] text-white flex justify-center items-center h-screen w-screen'>
            <div className="bg-[#1C1C1C] border-2 border-emerald-600 p-6 rounded-xl shadow-lg max-w-md mx-auto mt-10">
                <form onSubmit={(e) => {
                    SubmitHandler(e)
                }} className="flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-semibold text-emerald-700 mb-6">Login</h2>
                    <input required
                        className="placeholder:text-gray-400 border-2 rounded-full border-emerald-600 py-3 px-5 text-xl mt-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all bg-[#302f2f]"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <input required
                        className="bg-[#302f2f] border-2 rounded-full border-emerald-600 py-3 px-5 text-xl mt-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    />
                    <button
                        className="bg-emerald-700 text-white py-3 px-12 rounded-full mt-6 hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                        Login
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login