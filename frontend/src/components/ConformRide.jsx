import React from "react";

const ConformRide = (props) => {
  return (
    <div>
      <h5 onClick={() => {
    
    props.setConformRidePanel(false);

  }} className="p-1 text-center absolute w-[93%] top-0"
        
      >
        <i  className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Conform your Ride</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n"
          alt=""
        />

        <div className="w-full">
          <div className="text-lg flex items-center gap-5"> 
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg  font-medium">562/11-a</h3>
              <p className="text-5m -mt-1 text-gray-600 ">URBAN JUNCTION,Dine-in</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        
      </div>
    
      <button className="w-full bg-green-600 font-semibold p-2 rounded-lg -mx-3.5 ">
          Conform
        </button>
      </div>
    

  );
};

export default ConformRide