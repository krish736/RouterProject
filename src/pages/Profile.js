import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RiH1 } from 'react-icons/ri';

const Profile = () => {

  const API = "";
  const [myData, setMyData] = useState([]);
  const [err, setErr] = useState("");

  const fetchData = async () => {

    try {
      const res = await axios.get(`${API}`);
      setMyData(res);
    } catch(err) {
        setErr(err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex justify-center items-center text-3xl h-full'>
        {err != "" && <h1>Error found!! {err}</h1>}
        {
          myData.map((data) => {
            const {name, jobRole, internshipStatus, email} = data;
          })
        }
  </div>
  )
}

export default Profile