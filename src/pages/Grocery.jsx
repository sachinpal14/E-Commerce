import React, { useEffect } from "react";
import Popular from "../components/Popular/Popular";
import Card from "../components/Card";
import { useFilter } from "../contexts/FIterContext";
import { motion } from "motion/react";
import { ToastContainer } from "react-toastify";

const Grocery = () => {
  const iconduration = (i) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -20],
      transition: {
        duration: i * 1.5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  const { setPage, filterCategory, items, categ, input ,inputState } = useFilter();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );
  useEffect(() => {
    setPage("/grocery");
  }, []);

  return (
    <div className=" w-full h-full p-6 flex flex-col space-y-5">
      <span className="text-center font-bold text-2xl  ">Grocery 🍌</span>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="flex flex-wrap  justify-center "
      >
        {!inputState && categ.map((item, idx) => (
          <motion.div
            variants={iconduration(idx + 1)}
            initial="initial"
            animate="animate"
            key={idx}
            onClick={() => {
              filterCategory(item.name);
            }}
            className="flex flex-wrap px-4 py-2 justify-between items-center gap-5 "
          >
            <Card Name={item.name} image={item.image} id={item.id} />
          </motion.div>
        ))}
      </motion.div>

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
          <p className="text-xl font-semibold text-gray-500 py-4 ">
            No products found
          </p>
        )}
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Grocery;
