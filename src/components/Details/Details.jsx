import { h1 } from "motion/react-client";
import React from "react";
import { PiCrosshairSimpleFill } from "react-icons/pi";
import { useParams } from "react-router";
const Details = ({ items }) => {
  let { id } = useParams();
  const detail = items.find((item) => item.id == id);

  return (
    <div className="w-full h-full flex items-center justify-center">
    
      <div className="w-[90%] h-[90%] bg-white rounded-lg shadow-lg flex flex-col md:flex-col items-center justify-center gap-4 p-4">
        <img src={detail.image} alt="" />
        <div className="flex flex-col w-full ">
          <h1 className="text-4xl  font-bold mb-4">Basic Details </h1>
          <h1 className="text-2xl text-gray-900 font-semibold "><span className="">{detail.name}</span></h1>
         
          <h1 className="text-2xl text-gray-900 font-semibold ">Category:- <span className="text-gray-600 underline">{detail.category}</span></h1>
          <h1 className="text-2xl text-gray-900 font-semibold">Price:- <span className="text-gray-600 underline">{detail.price}</span> /-</h1>
        </div>
        <div className="w-full ">
          <h1 className="text-4xl font-bold mb-4">Specifications</h1>
          <div>
            <ul>
           { <li className="text-xl text-gray-900 font-semibold">Display:-<span className="text-gray-600 underline">{detail.specifications?.Display ?? "N/A" }</span></li>}
            <li className="text-xl text-gray-900 font-semibold">RAM:- <span >{detail.specifications?.RAM ?? detail.specifications.Memory ?? "N/A"}</span></li>
            <li className="text-xl text-gray-900 font-semibold"><span>{detail.specifications?.Processor }</span></li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Chip}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Storage}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Ports}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.OS }</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Driver}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Blutooth}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Weight}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Battery}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.BatteryLife}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.ScreenSize}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Resolution}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.RefreshRate}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.WaterResistance}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Material}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Fit}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Sizes}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.CareInstructions}</li>
           
            
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Manufacturer?.Brand}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Manufacturer?.Country}</li>
            <li className="text-xl text-gray-900 font-semibold">{detail.specifications?.Manufacturer?.Warranty}</li>
            <li className="text-xl text-gray-900 font-semibold">
              {detail.specifications?.Manufacturer?.ReturnPolicy}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
