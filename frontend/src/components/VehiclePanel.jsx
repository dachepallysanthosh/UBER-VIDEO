import React from "react";
import "remixicon/fonts/remixicon.css";


const VehiclePanel = (props) => {
  return (
    <div>
      
      <h5
        className="p-1 text-center absolute w-[93%] top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

      
      <div onClick={() => {
          props.selectVehicle('car');
          props.setConfirmRidePanel(true);
        }} className="flex active:border-2 rounded-xl w-full p-3 mb-2 items-center justify-between">
        <img
          className="h-10"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n"
          alt="car"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo <span><i className="ri-user-fill"></i>4</span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>

      
      <div onClick={() => {
          props.selectVehicle('motorcycle');
          props.setConfirmRidePanel(true);
        }} className="flex active:border-2 rounded-xl w-full p-3 mb-2 items-center justify-between">
        <img
          className="h-10"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
          alt="Moto"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto <span><i className="ri-user-fill"></i>1</span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65.40</h2>
      </div>

      
      <div onClick={() => {
          props.selectVehicle('auto');
          props.setConfirmRidePanel(true);
        }} className="flex active:border-2 rounded-xl w-full p-3 mb-2 items-center justify-between">
        <img
          className="h-10"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          alt="Auto"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto <span><i className="ri-user-fill"></i>3</span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.21</h2>
      </div>
    </div>
  );
};

export default VehiclePanel
