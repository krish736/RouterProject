import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = ({ setisLoggedin }) => {

  const Navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      email: "",
      firstName: "",
      lastName: "",
      createPass: "",
      confirmPass: "",
      internship: "",
      text: "",
    }
  );

  const [showPass, setShowPass] = useState(false);

  const [conPass, setConPass] = useState(false);

  const [accountType, setAccountType] = useState("student");

  // console.log(formData);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;

    setFormData(
      (prev) => {
        return {
          ...prev,
          [name]: type === "checkbox" ? checked : value
        }
      }
    )
  }


  function submitHandler(event) {
    event.preventDefault();

    if (formData.createPass != formData.confirmPass) {
      toast.error("Password do not match", { position: "top-center" });
      return;
    } else {
      setisLoggedin(true);
      toast.success("Account Created", { position: "top-center" });
      console.log(formData);

      const finalData = {
        ...formData,
        accountType
      }
      console.log(finalData);
      // Navigate("/dashboard");
      Navigate("/Profile");
    }

  }

  return (
    <div className='bg-black '>
      <div className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
          className={`${accountType === "student" ? "bg-black font-semibold" : "bg-transparent"}  py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}>
          Student
        </button>
        <button
          className={`${accountType === "instructor" ? "bg-black font-semibold" : "bg-transparent"}  py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>

      <form action="" onSubmit={submitHandler}>
        {/* first name lastname  */}
        <div className='flex justify-between'>
          <label>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
              First Name <sup className='text-red-500'>*</sup></p>

            <input type="text"
              className='w-full p-[12px] bg-slate-800 rounded-md'
              required
              name='firstName'
              value={formData.firstName}
              onChange={changeHandler}
              placeholder='Enter First Name'
            />
          </label>

          <label>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>
              Last Name <sup>*</sup></p>

            <input type="text"
              className='w-full p-[12px] bg-slate-800 rounded-md'
              required
              name='lastName'
              value={formData.lastName}
              onChange={changeHandler}
              placeholder='Enter Last Name'
            />
          </label>

        </div>

        {/* email  */}
        <label>
          <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>Email Address <sup>*</sup></p>

          <input type="email"
            className='w-full p-[12px] bg-slate-800 rounded-md'
            required
            name='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='Enter email Address...'
          />
        </label>


        <div className='flex justify-between'>
          {/* internshipStatus */}
          <div>

            <p>Internship Status <sup>*</sup></p>

            <div className='flex gap-x-16 w-full p-[12px] bg-slate-800 rounded-md'>
              <div 
                className='gap-x-1 flex'>
                <input type="radio"
                  name='internship'
                  value='Yes'
                  id='internship'
                  required
                  checked={formData.internship === "Yes"}
                  onChange={changeHandler}
                />

                <label htmlFor="internship">Yes</label>
              </div>

              <div
                className='gap-x-1 flex'>
                <input type="radio"
                  name='internship'
                  required
                  value='No'
                  id='internship2'
                  checked={formData.internship === "No"}
                  onChange={changeHandler}
                />

                <label htmlFor="internship2">No</label>
              </div>

            </div>
          </div>


          {/* jobrole  */}
          <label className='mr-4'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>Job Role <sup>*</sup></p>

            <textarea name="text"  className='w-[108%] p-[12px] bg-slate-800 rounded-md' required
              value={formData.text}
              onChange={changeHandler}
              placeholder='Your proficiency...'
            ></textarea>

          </label>
        </div>

        {/* create pass, confirm pass  */}

        <div className='flex justify-between'>
          <label className='relative'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>Create password <sup>*</sup></p>

            <input type={showPass ? "text" : "password"}
              className='w-full p-[12px] bg-slate-800 rounded-md'
              required
              name='createPass'
              value={formData.createPass}
              onChange={changeHandler}
              placeholder='Create Password'
            />

            <span onClick={() => {
              setShowPass(prev => !prev)
            }}
              className='absolute right-4 top-[38px]'>
              {
                showPass ? (<AiOutlineEye fontSize={24} />) : (<AiOutlineEyeInvisible fontSize={24} />)
              }
            </span>
          </label>

          <label className='relative'>
            <p className='text-[0.875rem] mb-1 leading-[1.375rem]'>Confirm password <sup>*</sup></p>

            <input type={conPass ? "text" : "password"}
              className='w-full p-[12px] bg-slate-800 rounded-md'
              required
              name='confirmPass'
              placeholder='Confirm Password'
              value={formData.confirmPass}
              onChange={changeHandler}
            />

            <span onClick={() => {
              setConPass(prev => !prev)
            }}
              className='absolute right-4 top-[38px]'>
              {
                conPass ? (<AiOutlineEye fontSize={24} />) : (<AiOutlineEyeInvisible fontSize={24} />)
              }
            </span>
          </label>
        </div>

        <button className='mx-auto text-black bg-yellow-300 rounded-md p font-medium px-[12px] py-[8px] w-full mt-6 '
        >Create Account</button>
      </form >
    </div >
  )
}

export default SignupForm
