import React from "react";

const LocationSearchPanel =(props)=>{
    console.log(props);

    // sample arry for location
    const locations = props.suggestions || [
        "24B,Nani's Tiffins, Marredpally, Secunderabad",
        "22c,Nani's Tiffins, Secunderabad",
        "20B,Nani's  Marredpally,",
    ]
    return(
        <div>

            <div>
      {locations.map((location) => (
        <div onClick={()=>{
            if (props.activeField === 'pickup') {
                props.setPickup(location)
            } else if (props.activeField === 'destination') {
                props.setDestination(location)
            }
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
        }}
          key={location} 
          className="flex gap-4 border-2 p-2 border-gray-100 active:border-black rounded-xl  items-center my-2 justify-start"
        >
          <i className="ri-map-pin-line"></i>
          <span>{location}</span>
        </div>
      ))}
    </div>
            

        </div>
    )
}
export default LocationSearchPanel