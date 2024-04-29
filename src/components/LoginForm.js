import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = ({ setisLoggedin }) => {

    const Navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            email: "", password: ""
        }
    );

    const [showPass, setShowPass] = useState(false);

    function changeHandler(event) {
        const { name, value, type, checked } = event.target;
        setFormData(
            (prev) => (
                {
                    ...prev,
                    [name]: type === "checked" ? checked : value
                }
            )
        )
    }

    function submitHandler(event) {
        event.preventDefault();
        setisLoggedin(true);
        toast.success("Logged in Successfully", { position: "top-center" })
        // navigate("/dashboard");
        Navigate("/Profile");
    }
    return (
        <div>
            <form action="" onSubmit={submitHandler}
                className='flex flex-col w-full gap-y-4 mt-6'>
                <label htmlFor="email" className='w-full'>
                    <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
                        Email Address <sup className='text-red-500'>*</sup>
                    </p>
                </label>
                <input
                    className='w-full p-[12px] bg-slate-800 rounded-md'
                    type="email" required
                    id='email' name="email" value={formData.email} onChange={changeHandler}
                    placeholder='Enter Email id' />

                <div className='relative'>
                    <label htmlFor="password" className='w-full'>
                        <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
                            password <sup className='text-red-500'>*</sup>
                        </p>
                    </label>
                    <input className='w-full p-[12px] bg-slate-800 rounded-md'
                        type={
                            showPass ? ("text") : ("password")
                        } required
                        id='password' name="password" value={formData.password} onChange={changeHandler}
                        placeholder='Enter Password' />

                    <span className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPass((prev) => !prev)}>
                        {
                            showPass ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)
                        }
                    </span>
                </div>
                <Link to="#"><p className='text-xs -mt-1 w-full text-blue-400
                text-right'>Forgot password</p></Link>

                <button className='mx-auto text-black bg-yellow-300 rounded-md p font-medium px-[12px] py-[8px] w-full mt-6'
                >Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm
