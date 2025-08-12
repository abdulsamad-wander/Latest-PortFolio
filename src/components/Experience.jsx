import React from "react";
import django from "../images/django.png";
import java from "../images/java.jpeg";
import Mongo from "../images/Mongo.jpg";
import python from "../images/python.jpg";
import react from "../images/react.png";
import SQL from "../images/SQL.png";

const Experience = () => {
  const items = [
    { name: "Django", Image: django },
    { name: "Java", Image: java },
    { name: "Python", Image: python },
    { name: "React", Image: react },
    { name: "Mongo", Image: Mongo },
    { name: "SQL", Image: SQL },
  ];
  return (
    <div className="mx-auto container px-4 max-w-screen-2xl md:px-24">
      <div className="mt-16 text-white">
        <h1 className="font-bold text-3xl text-center mt-14">Experience</h1>
        <div className="text-sm text-center">
          I've Expeienced in Following technologies
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mb-7">
        {items.map((item, indx) => (
          <div
            key={indx}
            className="w-40 h-40 border-2 border-gray-400 flex flex-col items-center tranform transition-transform duration-300 hover:scale-105 cursor-pointer rounded-2xl"
          >
            <span className="text-gray-300">{item.name}</span>
            <img
              src={item.Image}
              alt={item.name}
              className="object-contain w-44 h-44 "
            />{" "}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
