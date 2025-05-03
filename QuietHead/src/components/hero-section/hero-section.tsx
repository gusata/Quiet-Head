import { AppleIcon, PlayIcon, CarFrontIcon, MapPinIcon, MoveDiagonalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Nav from "../nav/nav";
import DriftBackground from "../driftcar/DriftBackground"

const  Hero = () => {
  return (
    <section className="flex shadow-[inset_0_-2px_10px_rgba(255,255,255,0.1)] h-screen pt-32 pb-20 px-4">
      <Nav />
      <div className="absolute top-0 left-0">
      <DriftBackground />
      </div>
      
      
        <div className="container  mx-auto text-center flex flex-col gap-10 max-w-4xl">
          
          
        <h1 
          className="font-racing text-6xl py-7 md:text-7xl font-bold mb-4 transition-all duration-1000 
            bg-gradient-to-r from-red-500 via-rose-600 to-red-500 bg-clip-text text-transparent  transform"
        >
          
          Connect with Car Enthusiasts
        </h1>
          <p className="text-xl font-subtitle md:text-2xl mb-12 text-gray-300">
            Join local car meetups at gas stations. Share your passion,
            showcase your ride, and build lasting connections.
          </p>
          
          <div className="flex justify-center z-30 gap-6 flex-wrap">
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md transition-colors duration-200">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18.178l-4.62-1.256-.24-2.722h4.86v3.978zm0-4.889H6.96l-.23-2.722h5.27v2.722zm0-3.633H6.73l-.25-2.722h5.52v2.722zm4.62 8.522l-4.62 1.256v-3.978h4.86l-.24 2.722zm-.18-4.889H12v-2.722h5.27l-.23 2.722zm.25-3.633H12v-2.722h5.52l-.25 2.722zM22 4H2v16h20V4z" fill="currentColor"/>
              </svg>
              Download on the 
              <span className="block text-lg font-semibold">: App Store</span>
            </button>
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md transition-colors duration-200">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9 5c.1.1.1.2.1.3v13.4c0 .1 0 .2-.1.3l-7.5-7 7.5-7zm-8.8 7l-7.5 7c-.1-.1-.1-.2-.1-.3V5.3c0-.1 0-.2.1-.3l7.5 7zm-6.1 7.5l7-6.5 2.2 2.1.4.4.4-.4 2.2-2.1 7 6.5c-.2.2-.4.2-.6.2H3.8c-.2 0-.4 0-.6-.2h-.2z" fill="currentColor"/>
              </svg>
              Get it on
              <span className="block text-lg font-semibold">: Google Play</span>
            </button>
          </div>
          
        </div>
      </section>
  )
}

export default Hero;