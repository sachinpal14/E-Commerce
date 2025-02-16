import React, { useState } from "react";
import Minicard from "../Minicard.jsx/Minicard";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const [text, settext] = useState("Place Order");

  let navigate = useNavigate();
  let items = useSelector((state) => state.cart);

  let totalPrice = items.reduce(
    (total, item) => item.qty * (total + item.price),
    0
  );

  const handleText = () => {
    settext((prev) =>
      prev === "Place Order" ? "Order Sumbitted✅" : "Place Order"
    );
  };

  return (
    <div className="h-full w-full absolute bg-white top-0 right-0 px-6 py-4 flex flex-col items-center gap-5">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="flex justify-end w-full "
      >
        <RxCross1 className="text-2xl cursor-pointer" />
      </div>

      <div>
        {items.length == 0 ? (
          <div className="h-full w-full text-7xl flex items-center justify-center font-bold ">
            {" "}
            <h1 className="text-center">Empty Cart</h1>
          </div>
        ) : (
          items.map((item, idx) => (
            <Minicard
              key={idx}
              price={item.price}
              image={item.image}
              name={item.name}
              id={item.id}
              qty={item.qty}
            />
          ))
        )}
        {items.length !== 0 && (
          <div className=" mt-4 w-full h-fit flex justify-center items-center flex-col border-t-2 border-t-gray-700">
            <h1 className="text-xl font-semibold mt-4 ">
              Total Items:{items.length}{" "}
            </h1>
            <h1 className="text-2xl font-bold mt-4">Total Rs:{totalPrice}/-</h1>
          </div>
        )}
      </div>
      {items.length !== 0 && (
        <button
          onClick={handleText}
          className="cursor-pointer hover:bg-gray-300 hover:shadow-[inset_2px_2px_2px_black] transition-all duration-300 active:scale-90 font-semibold active:rotate-x-180  perspective-[300px] hover:text-black mt-4 bg-gray-800 text-white text-xl py-3 px-8 rounded-xl w-54 md:w-[20%]"
        >
          {text}
        </button>
      )}

      <ToastContainer/>
    </div>
  );
};

export default Cart;
