import React from 'react'
import Card from '../components/Card'
import Nitin from '../components/nitin.jpg';
import juned from '../assets/MyPhoto.jpg'
import saif from '../assets/saif.jpg'

const Home = () => {

  const obj = [
    {
      image : Nitin,
      name : "Nitin Nitimbadkar",
      job : "Web Developer", 
      internshipStatus : "Yes"
    },
    {
      image : juned,
      name : "Juned Ahmed Choudhary",
      job : "Programmer and Web Developer", 
      internshipStatus : "No"
    },
    {
      image : saif,
      name : "Muhammad Saif",
      job : "Full Stack Web Developer", 
      internshipStatus : "No"
    },
  ]

  return (
    <div className='flex justify-center items-center text-3xl h-full relative'>

        {
          obj.map((item) => (
              <Card name = {item.name} image = {item.image}
              internshipStatus = {item.internshipStatus} job = {item.job} ></Card>
            )
          )
        }

    </div>
  )
}

export default Home