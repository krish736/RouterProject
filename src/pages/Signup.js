import React from 'react'
import Template from '../components/Template';
import signupImg from '../assets/signup.png';

const Signup = ({setisLoggedin}) => {
  return (
    <div className='bg-black'>
      <Template
      title = "the millions learning to code with Studßotion for free"
      desc1 = "skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career. "
      image = {signupImg}
      formType="signup"
      setisLoggedin={setisLoggedin}
      >
    </Template>
    </div>
      
  )
}

export default Signup
