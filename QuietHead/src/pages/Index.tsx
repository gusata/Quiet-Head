
import { AppleIcon, PlayIcon, CarFrontIcon, MapPinIcon, MoveDiagonalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Features from "@/components/features/features";
import Hero from "@/components/hero-section/hero-section";
import DriftBackground from "../components/driftcar/DriftBackground"

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1620] text-white overflow-hidden relative">
      {/* Mouse follower */}
      

      <div 
        className="pointer-events-none fixed w-32 h-32 transition-all duration-300 ease-out z-0 rounded-full opacity-50"
        style={{ 
          transform: `translate(${mousePosition.x - 64}px, ${mousePosition.y - 64}px)`,
          background: 'radial-gradient(circle, rgba(175,42,62,0.3) 0%, rgba(175,42,62,0) 70%)',
          filter: 'blur(8px)'
        }}
      />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAyYTQgNCAwIDEgMCAwIDggNCA0IDAgMCAwIDAtOHoiIGZpbGw9InJnYmEoMTc1LDQyLDYyLDAuMikiLz48L2c+PC9zdmc+')] opacity-20"></div>
      

      {/* Hero Section */}
      <Hero/>

      {/* Features Section with animated icons */}
      <Features />

      {/* Footer */}
      <Footer />

      
    </div>
  );
};

export default Index;
