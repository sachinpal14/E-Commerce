import { motion } from "motion/react";
import React from "react";
const Card = ({ id, Name, image }) => {
  return (
    <motion.div className="w-32 h-40 md:w-40 md:h-50 rounded-lg px-4 py-2  hover:shadow-lg hover:shadow-black transition-all duration-300 flex flex-col gap-4 items-center text-2xl text-center indent-1 active:scale-90">
      <img
        className="w-full h-[70%] object-center object-cover "
        src={image}
        alt="image"
      />
      <h1 className="text-lg indent-0.5 leading-5">{Name}</h1>
    </motion.div>
  );
};

export default Card;
