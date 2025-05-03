import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", url: "#" },
    { name: "Features", url: "#features" },
    { name: "Gallery", url: "#gallery" },
    { name: "Community", url: "#community" },
    { name: "Downloads", url: "#downloads" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-gray-600/20 backdrop-blur-md self-center my-4 rounded-[1.8rem] w-11/12 py-6 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">

          </div>

          <div className="flex items-center">
            
            <h1 className={cn(
              "font-extrabold font-subtitle font   text-white transition-all duration-300",
              scrolled ? "text-xl" : "text-xl"
            )}>
              Q u i e t  H e a d
            </h1>
          </div>

          <div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
