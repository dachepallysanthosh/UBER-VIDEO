import React, { Component, useRef, useState } from "react"
import {useGSAP} from '@gsap/react' 
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "/src/components/LocationSearchPanel.jsx"
import VehiclePanel from "/src/components/VehiclePanel.jsx"
import ConformRide from "/src/components/ConformRide.jsx"



const Home = () => {
  const [pickup, setpickup]=useState('')
  const [destination, setdestination]=useState('')
  const [panelOpen, setpanelOpen]=useState(false)
  const panelRef =useRef(null)
  const panelCloseRef =useRef(null)
  const ConformRidePalelRef =useRef(null)
  const vehiclePanelRef =useRef(null)
  const [vehiclePanelOpen, setvehiclePanelOpen]=useState(false)
  const [ConformRidePanel, setConformRidePanel ]=useState(false)
  

  const submitHandler =(e)=>{
    e.preventDefault()

  }

  useGSAP(function(){
   if(panelOpen){
     gsap.to(panelRef.current,{
      height:'70%',
      // opacity:1,
      padding:20
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
   }else{
     gsap.to(panelRef.current,{
      height:'0%',
      // opacity:0
      padding:0
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
     gsap.to(vehiclePanelRef.current,{
      transform:'translate(100%)'
    })
   }
  },[panelOpen])


  useGSAP(function(){
   if(vehiclePanelOpen){
     gsap.to(vehiclePanelRef.current,{
      transform:'translate(0)'
    })
     gsap.to(panelRef.current,{
      height:'0%',
      // opacity:0
      padding:0
    })
   }else{
     gsap.to(vehiclePanelRef.current,{
      transform:'translate(100%)'
    })
   }
  },[vehiclePanelOpen])




  useGSAP(function(){
   if(ConformRidePanel){
     gsap.to(ConformRidePalelRef.current,{
      transform:'translate(0)'
    })
     gsap.to(panelRef.current,{
      height:'0%',
    })
   }else{
     gsap.to(ConformRidePalelRef.current,{
      transform:'translate(100%)'
    })
   }
  },[ConformRidePanel])

  return (
    <div className="h-screen relative overflow-hidden">
         <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    
        <div className=" h-screen w-scerrn">
          {/* image for tempuse */}
          <img className=" h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
            <div className="h-[30%] p-6 bg-white relative">
              <h5 ref={panelCloseRef} onClick={()=>{
              setpanelOpen(false)
            }} className="absolute opacity-0 right-6 top-6 text-2xl">
                <i className="ri-arrow-down-wide-line"></i></h5>
              <h4 className="text-2xl font-semibold">Find trip</h4>
          <form action="" onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[44%] left-10 bg-gray-900 rounded-full"></div>
            <input 
            onClick={()=>{
              setpanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{
                setpickup(e.target.value)
            }}
            className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-5" 
            type="text" 
            placeholder="Add a pick-up location" />
            <input 
            onClick={()=>{
              setpanelOpen(true)
            }}
            value={destination}
            onChange={(e)=>{
                setdestination(e.target.value)
            }}
            className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter your destination" />
          </form>
            </div>
            <div ref={panelRef} className="  bg-white h-0">
                    <LocationSearchPanel vehiclePanelOpen={vehiclePanelOpen} setvehiclePanelOpen={setvehiclePanelOpen}/>
                      
                    
            </div>
        </div>
    
    <div ref={vehiclePanelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-10 pt-12">
         <VehiclePanel setConformRidePanel={setConformRidePanel}
    setvehiclePanelOpen={setvehiclePanelOpen}
    setpanelOpen={setpanelOpen}
  />
        <div ref={ConformRidePalelRef} className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-3 py-6  pt-12">
        <ConformRide
  setConformRidePanel={setConformRidePanel}
  setvehiclePanelOpen={setvehiclePanelOpen}
  setpanelOpen={setpanelOpen}
/>
    </div>
  </div>

    
</div>
  )
}

export default Home