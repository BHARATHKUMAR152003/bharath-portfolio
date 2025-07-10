import { useEffect, useState } from "react";
import { ChevronDown, Code, Brain, Zap, Sparkles, Cpu, Rocket } from "lucide-react";
export const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSparkles, setShowSparkles] = useState(false);
  const fullText = "AI & Full-Stack Developer";
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setShowSparkles(true);
    }
  }, [currentIndex]);
  const floatingIcons = [{
    Icon: Brain,
    delay: "0s",
    position: "top-20 left-10",
    animation: "animate-bounce"
  }, {
    Icon: Code,
    delay: "1s",
    position: "top-32 right-16",
    animation: "animate-pulse"
  }, {
    Icon: Zap,
    delay: "2s",
    position: "bottom-32 left-20",
    animation: "animate-spin"
  }, {
    Icon: Cpu,
    delay: "3s",
    position: "top-40 left-1/2",
    animation: "animate-bounce"
  }, {
    Icon: Rocket,
    delay: "4s",
    position: "bottom-40 right-10",
    animation: "animate-pulse"
  }, {
    Icon: Sparkles,
    delay: "5s",
    position: "top-60 right-1/4",
    animation: "animate-spin"
  }];
  const handleExploreClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      // Add dramatic entrance effect
      aboutSection.style.transform = 'scale(0.8) rotateX(15deg)';
      aboutSection.style.opacity = '0.5';
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        aboutSection.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        aboutSection.style.transform = 'scale(1) rotateX(0deg)';
        aboutSection.style.opacity = '1';

        // Add glow effect
        aboutSection.style.boxShadow = '0 0 50px rgba(6, 182, 212, 0.4)';
        setTimeout(() => {
          aboutSection.style.boxShadow = 'none';
        }, 1500);
      }, 300);
    }
  };
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Add slide-in effect
      contactSection.style.transform = 'translateX(100px) scale(0.95)';
      contactSection.style.opacity = '0.7';
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        contactSection.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.35)';
        contactSection.style.transform = 'translateX(0) scale(1)';
        contactSection.style.opacity = '1';

        // Add ripple effect
        contactSection.style.background = 'radial-gradient(circle at center, rgba(6, 182, 212, 0.1) 0%, transparent 50%)';
        setTimeout(() => {
          contactSection.style.background = '';
        }, 1200);
      }, 400);
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 animate-fade-in">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 animate-morphing-gradient">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float hover:scale-125 transition-transform duration-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float hover:scale-125 transition-transform duration-1000" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-glow-pulse" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Enhanced Floating Tech Icons */}
        {floatingIcons.map(({
        Icon,
        delay,
        position,
        animation
      }, index) => <div key={index} className={`absolute ${position} text-cyan-400/30 ${animation} hover:text-cyan-400/60 hover:scale-150 transition-all duration-500 cursor-pointer animate-rotate-3d`} style={{
        animationDelay: delay,
        animationDuration: '3s'
      }}>
            <Icon size={32} />
          </div>)}

        {/* Advanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-ping hover:animate-bounce" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}></div>)}
        </div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto animate-slide-in-elastic">
        {/* Enhanced Profile Avatar with Your Photo */}
        <div className="mb-8 relative group animate-bounce-in">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-2 animate-glow-pulse hover:animate-rotate-3d hover:scale-125 transition-all duration-1000 shadow-2xl shadow-cyan-500/50">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-700 relative group-hover:border-cyan-400 transition-all duration-500">
              <img src="https://i.postimg.cc/256yPM7r/Bharath.jpg" alt="Bharath Kumar S" className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-ping group-hover:animate-bounce shadow-lg shadow-green-500/50"></div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-cyan-400/30 rounded-full blur-sm animate-pulse"></div>
        </div>

        {/* Enhanced Greeting */}
        <div className="mb-4 animate-fade-in">
          <span className="text-3xl animate-bounce hover:animate-spin transition-all duration-500 cursor-default filter drop-shadow-lg">👋</span>
          <span className="text-xl text-gray-300 ml-3 hover:text-cyan-300 hover:scale-110 transition-all duration-500 cursor-default font-medium">Hi, I'm</span>
        </div>

        {/* Enhanced Name with Advanced Animation */}
        <h1 style={{
        backgroundSize: '400% 400%'
      }} className="md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in hover:scale-110 hover:rotate-1 transition-all duration-700 cursor-default filter drop-shadow-2xl animate-morphing-gradient text-4xl">
          Bharath Kumar S
        </h1>

        {/* Enhanced Animated Role */}
        <div className="text-3xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center">
          <span className="border-r-4 border-cyan-400 pr-3 animate-pulse hover:scale-115 transition-transform duration-500 text-2xl md:text-3xl font-semibold animate-glow-pulse">
            {displayedText}
          </span>
          {showSparkles && <Sparkles className="ml-3 text-cyan-400 animate-spin hover:animate-bounce" size={32} />}
        </div>

        {/* Enhanced Description */}
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in hover:text-gray-200 hover:scale-105 transition-all duration-700 cursor-default font-medium animate-slide-in-elastic" style={{
        animationDelay: '2s'
      }}>
          Passionate about building intelligent, scalable, and user-friendly applications 
          with cutting-edge AI/ML technologies. Based in <span className="text-cyan-400 hover:text-cyan-200 transition-colors duration-300 font-semibold animate-pulse">Bengaluru, India</span>.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{
        animationDelay: '2.5s'
      }}>
          <button onClick={handleExploreClick} className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-bold text-lg hover:scale-115 hover:rotate-3 hover:shadow-2xl hover:shadow-cyan-500/50 transform transition-all duration-500 relative overflow-hidden group animate-glow-pulse">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
          <button onClick={handleContactClick} className="px-10 py-4 border-3 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 hover:scale-115 hover:rotate-3 hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-500 relative overflow-hidden group animate-glow-pulse" style={{
          animationDelay: '0.5s'
        }}>
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-bounce hover:animate-ping hover:scale-150 transition-all duration-500 cursor-pointer animate-glow-pulse" style={{
        animationDelay: '3s'
      }} onClick={() => document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth'
      })}>
          <ChevronDown className="mx-auto text-cyan-400 hover:text-cyan-200 transition-colors duration-300 filter drop-shadow-lg" size={40} />
          <div className="w-8 h-1 bg-cyan-400 mx-auto mt-2 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>;
};