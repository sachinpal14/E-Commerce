import React, { useEffect, useState } from "react";
import backGif from "../assets/bg0.gif";
import Card from "../components/Card";
import { motion } from "motion/react";
import Popular from "../components/Popular/Popular";
import { useFilter } from "../contexts/FIterContext";
import { ToastContainer } from "react-toastify";
import { Outlet, useLocation, useParams } from "react-router";


const Home = () => {
  const {
    setPage,
    filterCategory,
    items,
    setDetails,
    categ,
    input,
    defaultItems,
    inputState,
  } = useFilter();

  let { id } = useParams();
  useEffect(() => {
    setPage("/shop");
  }, []);

  let location = useLocation();

  const iconduration = (i) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -15],
      transition: {
        duration: i * 1.5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="w-full h-full relative">
      {defaultItems && (
        <div>
          {!inputState && (
            <div className="heroImg w-full flex items-center justify-center mt-4 ">
              <img
                className="w-[90%] rounded-lg shadow-lg"
                src={backGif}
                alt="Main Image Gif"
              />
            </div>
          )}

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 px-4 py-2 justify-center  items-center  w-full  "
          >
            {!inputState &&
              categ.slice(0, 5).map((item, idx) => {
                return (
                  <motion.div
                    variants={iconduration(idx + 2)}
                    initial="initial"
                    animate="animate"
                    key={idx}
                    className="flex flex-wrap px-4 py-2 justify-between items-center gap-5"
                    onClick={() => {
                      filterCategory(item.name);
                    }}
                  >
                    <Card id={item.id} Name={item.name} image={item.image} />
                  </motion.div>
                );
              })}
          </motion.div>

          {!inputState && (
            <div className="m-6 w-full   text-black px-4 py-5 leading-5">
              <motion.h1
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                className="text-center text-6xl font-bold"
              >
                Trending Product
              </motion.h1>
            </div>
          )}

          <motion.div className="mt-8 flex flex-wrap items-center gap-6 justify-evenly p-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, idx) => (
                <motion.div key={idx}>
                  <Popular
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    setDetails={setDetails}
                  />
                </motion.div>
              ))
            ) : (
              <p className="text-xl font-semibold text-gray-500">
                No products found
              </p>
            )}
          </motion.div>
        </div>
      )}

  
      <ToastContainer />
    </div>
  );
};

export default Home;
