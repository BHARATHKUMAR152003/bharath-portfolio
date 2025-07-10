
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Experience = () => {
  useScrollAnimation();

  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Colt Assist Pvt Ltd",
      location: "Remote",
      period: "Jan 2025 – Apr 2025",
      description: [
        "Developed ML models & computer vision solutions using Python, OpenCV, and Ultralytics",
        "Created comprehensive Power BI dashboards & SQL Server analytics for data-driven insights",
        "Collaborated cross-functionally to integrate AI features into existing systems",
        "Enhanced model performance through iterative testing and optimization"
      ],
      technologies: ["Python", "OpenCV", "Ultralytics", "Power BI", "SQL Server", "Machine Learning"]
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "Varcons Technologies",
      location: "Bengaluru, India",
      period: "Oct 2023 – Dec 2023",
      description: [
        "Developed responsive frontend interfaces using HTML, CSS, and JavaScript",
        "Contributed to a multilingual language learning platform development",
        "Assisted in debugging and comprehensive testing of web applications",
        "Collaborated with senior developers to implement best practices"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Frontend Development", "Web Testing"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/50 animate-slide-in-view opacity-0 transform translate-y-20 transition-all duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-800 hover:scale-110 hover:rotate-1 animate-morphing-gradient" style={{ backgroundSize: '400% 400%' }}>
          Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="slideshow-item bg-slate-800/50 backdrop-blur-sm p-10 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-700 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-glow-pulse transform hover:-translate-y-6 hover:rotate-1" style={{ animationDelay: `${index * 0.4}s` }}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="animate-on-scroll opacity-0 transform translate-x-[-30px] transition-all duration-700 group-hover:translate-x-2" style={{ animationDelay: `${index * 0.4 + 0.2}s` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="text-cyan-400 animate-pulse hover:animate-spin" size={28} />
                    <h3 className="text-3xl font-bold text-cyan-400 group-hover:text-cyan-200 transition-colors duration-500 hover:scale-105 transform">{exp.title}</h3>
                  </div>
                  <h4 className="text-2xl text-white mb-3 group-hover:text-gray-100 transition-colors duration-500 hover:translate-x-2 transform font-semibold">{exp.company}</h4>
                </div>
                <div className="text-gray-400 space-y-2 lg:text-right animate-on-scroll opacity-0 transform translate-x-[30px] transition-all duration-700 group-hover:-translate-x-2" style={{ animationDelay: `${index * 0.4 + 0.4}s` }}>
                  <div className="flex items-center gap-3 lg:justify-end hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform cursor-default">
                    <Calendar size={20} className="animate-pulse hover:animate-bounce" />
                    <span className="font-semibold">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-3 lg:justify-end hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform cursor-default">
                    <MapPin size={20} className="animate-pulse hover:animate-bounce" style={{ animationDelay: '0.5s' }} />
                    <span className="font-semibold">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 hover:text-gray-100 transition-colors duration-500 animate-on-scroll opacity-0 transform translate-x-[-20px] hover:translate-x-6 hover:scale-105 p-3 rounded-lg hover:bg-slate-700/30" style={{ animationDelay: `${index * 0.4 + 0.6 + idx * 0.1}s` }}>
                    <span className="text-cyan-400 mt-1 animate-pulse hover:animate-bounce cursor-default text-lg">•</span>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-400 hover:scale-115 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 animate-on-scroll opacity-0 cursor-default transform hover:-translate-y-3 hover:rotate-3 font-semibold animate-glow-pulse" style={{ animationDelay: `${index * 0.4 + 1 + idx * 0.05}s` }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
