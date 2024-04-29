import React from 'react'
import frame from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formType, setisLoggedin}) => {

  return (
    <div className='flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-20 gap-y-0 h-full'>
        <div className='w-11/12 max-w-[500px]'>
            <h1 className='text-[1.875rem] font-semibold leading-[2.375rem]'
            >{title}</h1>

            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span >{desc1}</span>
                <br />
                <span className='text-blue-400 italic'>{desc2}</span>
            </p>

            {
                formType === "signup" ? (<SignupForm setisLoggedin = {setisLoggedin}></SignupForm>) : (<LoginForm setisLoggedin = {setisLoggedin}></LoginForm>)
            }

            <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-slate-600'></div>
                <p>OR</p>
                <div className='w-full h-[1px] bg-slate-600'></div>
            </div>

            <button className='flex items-center justify-center w-full bg- rounded-md font-medium border border-slate-500 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                <p>Sign Up With Google</p></button>
        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img 
            src={frame} alt="pattern" loading='lazy' width={558} height={504}/>
            <img className='absolute -top-4 right-4' 
            src={image} alt="students" loading='lazy' width={558} height={490}/>
        </div>
    </div>
  )
}

export default Template
