import React from "react";

const Card = (props) => {
  const path = props.image;
  const name = props.name;
  const internshipStatus = props.internshipStatus;
  const job = props.job;
  return (
    <div className="flex justify-evenly items-center w-screen h-screen font-mono flex-wrap">
      <div className="card w-96 p-4 flex flex-col gap-5 border-3 border-red-100 text-white bg-red-400 rounded-lg">
        <div className="flex items-center gap-5">
          <img
            src={path}
            alt=""
            loading="lazy"
            className="w-24 h-24 rounded-full bg-center imgg"
          />
          <p className="font-bold text-4xl">{name}</p>
        </div>

        <div>
          <h2 className="font-bold text-xl">Description:</h2>
          <p className="text-[1rem] leading-5">
            I am {name} and I am a {job}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <h2 className="font-bold text-xl">Internship:</h2>
          <p className="text-xl">{internshipStatus}</p>
        </div>

        <div className="location">
          <a
            href="https://www.google.com/"
            className="flex gap-2 items-center text-xl hover:underline"
          >
            <i className="fas fa-map-marker-alt text-2xl"></i>
            <span>Internship Location</span>
          </a>
        </div>

        <a href="./" className="flex gap-2 text-xl items-center underline">
          <i className="fas fa-info-circle text-2xl"></i>
          <span>Know More</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
