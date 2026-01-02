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
    <div className='flex h-screen w-screen items-center justify-center bg-slate-950'>
        <div className='bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl w-11/12 md:w-1/2 lg:w-1/3 max-w-md transition-all duration-300 hover:shadow-emerald-900/20'>
            <h1 className="text-3xl font-bold text-center mb-8 text-emerald-500">Welcome Back</h1>
            <form
            onSubmit={(e)=>{
              submitHandeler(e);
            }} 
            className='flex flex-col items-center justify-center gap-4'
            >
                <div className="w-full">
                  <label className="text-slate-400 text-sm mb-1 block ml-1">Email Address</label>
                  <input 
                  value={email}
                  onChange={(e)=>{
                    setemail(e.target.value);
                  }}
                  required 
                  className='outline-none bg-slate-800 border border-slate-700 text-slate-100 font-medium text-lg py-3 px-5 rounded-xl placeholder:text-slate-500 w-full focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all' type="email" placeholder='Enter your email' 
                  />
                </div>
                
                <div className="w-full">
                  <label className="text-slate-400 text-sm mb-1 block ml-1">Password</label>
                  <input 
                  value={password}
                  onChange={(e)=>{
                    setpassword(e.target.value);
                  }}
                  required 
                  className='outline-none bg-slate-800 border border-slate-700 text-slate-100 font-medium text-lg py-3 px-5 rounded-xl placeholder:text-slate-500 w-full focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all' type="password" placeholder='Enter password' 
                  />
                </div>

                <button className='mt-6 text-white border-none outline-none hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98] font-semibold bg-emerald-500 text-lg py-3 px-8 w-full rounded-xl transition-all shadow-lg shadow-emerald-500/20'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
