import React, { useEffect } from "react";
import backGif from "../assets/bg0.gif";
import Card from "../components/Card";
import { motion } from "motion/react";
import Popular from "../components/Popular/Popular";
import { useFilter } from "../contexts/FIterContext";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { setPage, filterCategory, items, categ, input, setInput } =
    useFilter();

  useEffect(() => {
    setPage("shop");
  }, []);

  const iconduration = (i) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -20],
      transition: {
        duration: i * 0.7,
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
      <div className="heroImg w-full flex items-center justify-center mt-4 ">
        <img
          className="w-[90%] rounded-lg shadow-lg"
          src={backGif}
          alt="Main Image Gif"
        />
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 px-4 py-2 justify-center items-center  md:mt-5 "
      >
        {categ.slice(0, 5).map((item, idx) => {
          return (
            <motion.div
              variants={iconduration(idx + 2)}
              initial="initial"
              animate="animate"
              key={idx}
              onClick={() => {
                filterCategory(item.name);
              }}
            >
              <Card id={item.id} Name={item.name} image={item.image} />
            </motion.div>
          );
        })}
      </motion.div>

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

      {/* Show Filtered Products */}
      <motion.div className="mt-8 flex flex-wrap items-center gap-6 justify-evenly p-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <motion.div key={idx}>
              <Popular
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </motion.div>
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-500">
            No products found
          </p>
        )}
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Home;
