import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = (props) => {

    const isLoggedin = props.isLoggedin;
    const setLoggedin = props.setisLoggedin;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] p-4 mx-auto'>
            {/* <Link to="/">
                <img src={logo} alt="" width={160} height={32} loading='lazy' />
            </Link> */}
            <h1 className='font-extrabold text-[1.6rem] font-serif jersey-15-regular'>ENCORD</h1>
            <nav>
                <ul className='flex items-center gap-x-6'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Community">Community</NavLink></li>
                    {/* about  */}

                    <li><NavLink to="/Profile">Connections</NavLink></li>
                    {/* contact  */}
                </ul>
            </nav>

            {/* login logout sigin Dashboard  */}
            <div className='flex items-center gap-x-4'>
                    {
                        !isLoggedin && 
                        <Link to= "/login">
                            <button className='bg-slate-900 py-[8px] px-[12px] rounded-md
                            border border-slate-700'
                            >Login</button>
                        </Link>
                    }
                    {   !isLoggedin &&
                        <Link to= "/signin">
                            <button className='bg-slate-900 py-[8px] px-[12px] rounded-md
                            border border-slate-700'
                            >Sign-Up</button>
                        </Link>
                    }
                    {
                        isLoggedin &&
                        <Link to= "/">
                            <button className='bg-slate-900 py-[8px] px-[12px] rounded-md
                            border border-slate-700' 
                            onClick={() => {
                                setLoggedin(false);
                                toast.success("Logged Out", { position: "top-center" });
                            }}>Log Out</button>
                        </Link>
                    }
                    {
                        isLoggedin &&
                        <Link to= "/dashboard">
                            <button className='bg-slate-900 py-[8px] px-[12px] rounded-md
                            border border-slate-700'
                            >Profile</button>
                        </Link>
                    }
            </div>
        </div>
    )
}

export default Navbar
