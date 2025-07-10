
import { ExternalLink, Github, Eye, TrendingUp, Train } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Projects = () => {
  useScrollAnimation();

  const projects = [
    {
      title: "Waste Detection Using Computer Vision",
      description: "Real-time waste detection system using YOLOv8 and OpenCV with an intuitive Tkinter UI for efficient waste categorization and environmental monitoring.",
      technologies: ["Python", "YOLOv8", "OpenCV", "Tkinter", "Computer Vision"],
      icon: Eye,
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Stock Market Prediction Model",
      description: "Advanced predictive modeling system using TensorFlow and scikit-learn to analyze historical stock data and forecast market trends with high accuracy.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Data Analysis", "Machine Learning"],
      icon: TrendingUp,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Railway Reservation System",
      description: "Comprehensive Java-based ticket booking system featuring seat availability management, cancellation handling, and efficient user management.",
      technologies: ["Java", "Object-Oriented Programming", "System Design", "Database Management"],
      icon: Train,
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/50 animate-slide-in-view opacity-0 transform translate-y-20 transition-all duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-800 hover:scale-115 hover:rotate-1 animate-morphing-gradient" style={{ backgroundSize: '400% 400%' }}>
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="slideshow-item bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-700 group hover:scale-115 hover:shadow-2xl hover:shadow-cyan-500/20 animate-glow-pulse transform hover:-translate-y-8 hover:rotate-3" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 animate-pulse shadow-lg`} style={{ animationDelay: `${index * 0.3 + 0.5}s` }}>
                <project.icon className="text-white" size={40} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500 transform group-hover:translate-x-3">{project.title}</h3>
              <p className="text-gray-300 mb-6 text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-500 transform group-hover:translate-x-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-xs hover:bg-slate-600/70 hover:text-cyan-300 hover:scale-115 transition-all duration-400 animate-on-scroll opacity-0 transform hover:-translate-y-1 cursor-default font-medium" style={{ animationDelay: `${index * 0.3 + 0.7 + idx * 0.05}s` }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg text-sm font-semibold hover:scale-115 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-2 animate-glow-pulse">
                  <Github size={18} className="animate-pulse hover:animate-spin" />
                  Code
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 hover:scale-115 transition-all duration-500 transform hover:-translate-y-2">
                  <ExternalLink size={18} className="animate-pulse hover:animate-bounce" style={{ animationDelay: '0.5s' }} />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
