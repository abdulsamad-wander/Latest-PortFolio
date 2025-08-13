"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="mx-auto container px-4 max-w-screen-2xl md:px-24">
      <div className="mt-16 text-white">
        <h1 className="font-bold text-3xl text-center mt-14">Experience</h1>
        <div className="text-sm text-center">
          I've experienced the following technologies
        </div>
      </div>

      <motion.div
        ref={ref}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mb-7"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {items.map((item, indx) => (
          <motion.div
            key={indx}
            className="w-40 h-40 border-2 border-gray-400 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded-2xl bg-gray-900 p-3"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-gray-300 mb-2 font-medium">{item.name}</span>
            <img
              src={item.Image}
              alt={item.name}
              className="object-contain w-full h-full rounded-xl"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
