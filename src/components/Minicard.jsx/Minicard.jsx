import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { decreaseQuantity, removeItem } from "../../redux/shopSlice";
import { callingToast } from "../../redux/ToastSlice";
import { ToastContainer } from "react-toastify";

const Minicard = ({ image, name, price, id, qty }) => {
  let dispatch = useDispatch();

  function handleDelete(qty, id) {
    if (qty === 1) {
      setTimeout(() => {
        dispatch(removeItem(id));
      }, 100);
     dispatch(callingToast("Item deleted ......"))
    } else {
     setTimeout(() => {
        dispatch(decreaseQuantity(id));
     }, 100);
     dispatch(callingToast("Qty deducted....."))
       
    }
  }

  return (
    <div className=" h-56 mt-5 w-full flex justify-between px-6 shadow-2xl rounded-xl  bg-white ">
      <div
        id={id}
        className="h-full w-[70%] py-2 px-8 flex items-center gap-10 rounded-xl "
      >
        <img
          className="h-[85%] w-[45%] object-center object-contain rounded-xl"
          src={image}
          alt=""
        />

        <div className="flex flex-col gap-5 text-xl ">
          <h1 className="font-semibold">{name}</h1>
          <h2 className="font-bold">Rs:{price}/-</h2>
          <h3 className="font-medium">Qty:{qty}</h3>
        </div>
      </div>

      <div className="flex w-[30%] items-center  flex-col justify-end md:justify-center px-4 py-3">
        <div
          onClick={() => {
           handleDelete(qty,id)
           
          }}
          className="border-2 rounded-md px-7 py-1 border-red-600 cursor-pointer hover:shadow-[2px_2px_10px_red] transition-all duration-300 active:scale-90"
        >
          <MdDeleteOutline className="text-2xl text-red-500" />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Minicard;
