import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/shopSlice";
import { motion } from "motion/react";
import { callingToast } from "../../redux/ToastSlice";
import { useFilter } from "../../contexts/FIterContext";
import { useLocation } from "react-router";
 

const Popular = ({ id, name, price, image }) => {
  let dispatch = useDispatch();

 
 let location=useLocation()
   
 
  

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
whileInView={{ y: -10, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3, ease: "linear",}}
      id={id}
      className="shadow-[2px_2px_25px_rgba(0,0,0,0.25),-2px_-2px_25px_rgba(0,0,0,0.25)] flex flex-col  my-7 mx-2 w-80 md:h-[450px] h-[325px] md:gap-4 gap-3 items-center py-2 rounded-lg  hover:scale-105 px-1  transition-all duration-500"
    >
      <div className="w-[80%] h-[50%] bg-white rounded-xl ">
        <img
          className="h-full w-full object-center object-contain "
          src={image}
          alt=""
        />
      </div>

      <div className="flex flex-col items-start justify-center w-full px-5 py-2 gap-4 text-xl h-[25%] ">
        <h1 className="hover:text-red-800 font-semibold cursor-auto">{name}</h1>
        {location.pathname==="/grocery" ? <h3 className="font-bold">Rs:{price}/kg</h3> : <h3 className="font-bold">Rs:{price}/-</h3>}
         
         
        
      </div>
      <div className="w-full flex items-center justify-start px-4 py-2 h-[25%]">
        <button
          onClick={() => {
            dispatch(
              addItem({
                name: name,
                image: image,
                price: price,
                id: id,
                qty: dispatch.length,
              })
            );
            dispatch(callingToast("Item Added .....✅✅"));
          }}
          className="px-5 text-xl cursor-pointer hover:shadow-[5px_5px_rgba(0,0,0,0.90)] hover:bg-gray-400 hover:text-black transition-all duration-500 font-semibold py-2 bg-gray-800 text-white rounded active:scale-70 active:bg-white active:text-black  "
        >
          Add +
        </button>
      </div>
    </motion.div>
  );
};

export default Popular;
