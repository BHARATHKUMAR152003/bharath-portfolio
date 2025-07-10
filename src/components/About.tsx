
import { GraduationCap, MapPin, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  useScrollAnimation();

  const education = [
    {
      degree: "Bachelor of Engineering (B.E.) in AI & ML",
      institution: "AMC Engineering College (VTU)",
      year: "2025"
    },
    {
      degree: "Pre-University in Computer Science",
      institution: "Narayana Pre-University College",
      year: "2021"
    },
    {
      degree: "High School (SSLC)",
      institution: "Green Valley English High School",
      year: "2019"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 animate-slide-in-view opacity-0 transform translate-y-20 transition-all duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-800 hover:scale-110 hover:rotate-1">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8 animate-on-scroll opacity-0 transform translate-x-[-50px] transition-all duration-1000">
            <div className="flex items-center gap-3 text-cyan-400 mb-6 hover:scale-110 transition-transform duration-500 cursor-default hover:translate-x-4 animate-glow-pulse">
              <MapPin size={24} className="animate-pulse hover:animate-bounce" />
              <span className="text-lg font-semibold hover:text-cyan-300 transition-colors duration-300">Bengaluru, India</span>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed hover:text-gray-100 transition-colors duration-500 transform hover:translate-x-4 hover:scale-105 animate-fade-in p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20">
                I'm a passionate AI & Full-Stack Developer on a journey to bridge the gap between 
                artificial intelligence and practical, user-friendly applications. My curiosity 
                drives me to explore the endless possibilities of technology and create solutions 
                that make a real impact.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed hover:text-gray-100 transition-colors duration-500 transform hover:translate-x-4 hover:scale-105 animate-fade-in p-4 bg-slate-800/30 rounded-lg border border-purple-500/20 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20" style={{ animationDelay: '0.3s' }}>
                With a strong foundation in both AI/ML and full-stack development, I thrive in 
                collaborative environments where I can contribute to innovative projects while 
                continuously learning and growing. My approach combines technical expertise with 
                creative problem-solving to deliver intelligent, scalable solutions.
              </p>
            </div>

            <div className="flex items-center gap-3 text-purple-400 hover:scale-110 transition-transform duration-500 cursor-default hover:translate-x-4 animate-glow-pulse mt-8">
              <Heart size={24} className="animate-pulse hover:animate-bounce" style={{ animationDelay: '1s' }} />
              <span className="text-gray-300 hover:text-purple-300 transition-colors duration-300 font-medium">Lifelong learner • Problem solver • Tech enthusiast</span>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-on-scroll opacity-0 transform translate-x-[50px] transition-all duration-1000">
            <div className="flex items-center gap-3 mb-8 hover:scale-110 transition-transform duration-500 cursor-default">
              <GraduationCap className="text-cyan-400 animate-bounce hover:animate-spin hover:text-cyan-300" size={32} />
              <h3 className="text-3xl font-bold text-white hover:text-cyan-300 transition-colors duration-300">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 animate-on-scroll opacity-0 transform translate-y-10 hover:-translate-y-4 hover:rotate-1 cursor-default animate-glow-pulse" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                  <h4 className="text-xl font-bold text-cyan-400 mb-3 hover:text-cyan-200 transition-colors duration-300 transform hover:translate-x-2">{edu.degree}</h4>
                  <p className="text-gray-300 mb-3 text-lg hover:text-gray-100 transition-colors duration-300 transform hover:translate-x-1">{edu.institution}</p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span className="text-purple-400 font-bold text-lg hover:text-purple-300 transition-colors duration-300 hover:scale-110 transform">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
