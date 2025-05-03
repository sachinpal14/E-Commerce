import React from "react";
import { useParams } from "react-router";
import { delay, motion } from "framer-motion";

const Details = ({ items }) => {
  let { id } = useParams();
  const detail = items.find((item) => item.id == id);

  const headingAnimate = (i) => ({
    initial: { y: -30, opacity: 0 },
    animate: {
      opacity: 1,
      y: 5,

      transition: {
        duration: 0.4,
        delay: i * 1,
        damping: 4,
        type: "spring",
        ease: "linear",
      },
    },
  });
  const headingAnimate2 = (i) => ({
    initial: { x: "100%", opacity: 0 },
    animate: {
      opacity: 1,

      x: 0,
      transition: {
        duration: 1,
        delay:  1.5 * i,
        ease: "linear",
      },
    },
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[90%] h-[90%] bg-white rounded-lg shadow-lg flex flex-col md:flex-col items-center justify-center gap-4 p-4 perspective-[200px]">
        <img src={detail.image} alt="" />
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
          className="flex flex-col gap-2 w-full bg-zinc-200 rounded-md px-12 py-5 transform hover:translate-z-0.5 hover:translate-y-[-5px] transition-transform duration-300"
        >
          <motion.h1
            variants={headingAnimate(1)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold mb-4"
          >
            Basic Details
          </motion.h1>
          <motion.h1
            variants={headingAnimate2(1.4)}
            initial="initial"
            whileInView="animate"
            className="text-2xl text-gray-900 font-semibold"
          >
            <span className="text-gray-900 text-3xl font-semibold underline">
              {detail.name}
            </span>
          </motion.h1>
          <motion.h1
            variants={headingAnimate2(1.6)}
            initial="initial"
            whileInView="animate"
            className="text-xl text-gray-900 font-semibold"
          >
            Category:{" "}
            <span className="text-gray-600 underline">{detail.category}</span>
          </motion.h1>
          <motion.h1
            variants={headingAnimate2(1.8)}
            initial="initial"
            whileInView="animate"
            className="text-xl text-gray-900 font-semibold"
          >
            Price:{" "}
            <span className="text-gray-600 underline">{detail.price}</span> /-
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
          className="w-full bg-zinc-200 px-12 py-5 rounded-md transform hover:translate-z-0.5 hover:translate-y-[-5px] transition-transform duration-300"
        >
          <motion.h1
            variants={headingAnimate(2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold mb-4"
          >
            Specifications
          </motion.h1>
          <div className="w-full">
            <ul className="list-disc px-10 space-y-2">
              {detail.specifications &&
                Object.entries(detail.specifications).map(
                  ([key, value], index) => {
                    // Handle nested Manufacturer object separately if it exists
                    if (key === "Manufacturer" && typeof value === "object") {
                      return Object.entries(value).map(
                        ([subKey, subValue], subIndex) => (
                          <motion.li
                            key={`${key}-${subKey}-${subIndex}`} // Unique key for each sub-item
                            variants={headingAnimate2(4)}
                            initial="initial"
                            whileInView="animate"
                            className="text-xl text-gray-900 font-semibold"
                          >
                            {subKey}:{" "}
                            <span className="text-gray-600 underline">
                              {subValue}
                            </span>
                          </motion.li>
                        )
                      );
                    }

                    // Handle non-nested key-value pairs
                    return (
                      <motion.li
                        key={`${key}-${index}`} // Unique key for each item
                        variants={headingAnimate2(4)}
                        initial="initial"
                        whileInView="animate"
                        className="text-xl text-gray-900 font-semibold"
                      >
                        {key}:{" "}
                        <span className="text-gray-600 underline">{value}</span>
                      </motion.li>
                    );
                  }
                )}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
