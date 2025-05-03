import { CarFrontIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";




const  Features = () => {


  const translations = {
    pt: {
      greeting: "Olá, eu sou o ",
      role: "Desenvolvedor Front-end",
      about: "Desenvolvedor em formação, cursando Análise e Desenvolvimento de Sistemas na FATEC Antonio Russo, com base técnica adquirida na ETEC Jorge Street. Conhecimentos em diversas tecnologias e participação em projetos inovadores.",
      skillsTitle: "Habilidades",
      projectsTitle: "Projetos",
      contactTitle: "Contato"
    },
    en: {
      greeting: "Hello, I am ",
      role: "Front-end Developer",
      about: "Developer in training, studying Systems Analysis and Development at FATEC Antonio Russo, with technical background from ETEC Jorge Street. Knowledge in various technologies and participation in innovative projects.",
      skillsTitle: "Skills",
      projectsTitle: "Projects",
      contactTitle: "Contact"
    }
  };

  const [language, setLanguage] = useState<"pt" | "en">("pt");
  
  return (
    <section id="features" className=" bg-indigo-950/10 backdrop-blur-lg shadow-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Find Local Meetups</h3>
              <p className="text-gray-400">Discover car enthusiast gatherings happening near you at local gas stations and venues.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Share Your Ride</h3>
              <p className="text-gray-400">Upload photos and videos of your car to showcase your pride and joy to the community.</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
              <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8H19M19 8C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10C3 8.89543 3.89543 8 5 8H19ZM19 8V6C19 4.89543 18.1046 4 17 4H7C5.89543 4 5 4.89543 5 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Build Connections</h3>
              <p className="text-gray-400">Connect with other enthusiasts, message them directly, and grow your automotive network.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features;