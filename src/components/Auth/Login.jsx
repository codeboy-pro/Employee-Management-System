import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


const submitHandeler=(e)=>{
  e.preventDefault();
handleLogin(email,password);
setemail("");
setpassword("");
}
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-8 md:p-20 shadow-lg w-11/12 md:w-1/2 lg:w-1/3'>
            <form
            onSubmit={(e)=>{
              
              submitHandeler(e);
            }} 
            
            className='flex flex-col items-center justify-center'
            >
                <input 
                value={email}
                onChange={(e)=>{
                  setemail(e.target.value);
                  
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-5 rounded-full placeholder:text-gray-400 w-full' type="email" placeholder='Enter your email' 
                />
                <input 
             value={password}
                onChange={(e)=>{
                  setpassword(e.target.value);
                  
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-5 rounded-full mt-3 placeholder:text-gray-400 w-full' type="password" placeholder='Enter password' 
                />
                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
