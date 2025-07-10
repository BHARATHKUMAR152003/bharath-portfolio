
import { Code2, Database, Wrench, Brain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Skills = () => {
  useScrollAnimation();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "SQL", "JavaScript", "HTML", "CSS"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Frameworks & Libraries",
      icon: Brain,
      skills: ["TensorFlow", "scikit-learn", "OpenCV", "Ultralytics", "Pandas", "NumPy"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Web Development",
      icon: Database,
      skills: ["Full-Stack Development", "Responsive UI Design", "RESTful APIs"],
      color: "from-green-400 to-blue-400"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["VS Code", "PyCharm", "Jupyter Notebook", "MS SQL Server", "Power BI", "Git", "Docker (basic)"],
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 animate-slide-in-view opacity-0 transform translate-y-20 transition-all duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-800 hover:scale-110 hover:rotate-1 animate-morphing-gradient" style={{ backgroundSize: '400% 400%' }}>
          Skills & Expertise
        </h2>
        
        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="slideshow-item bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-700 group hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 animate-glow-pulse hover:rotate-2 transform-gpu" style={{ animationDelay: `${index * 0.3}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-pulse shadow-lg`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-500 group-hover:translate-x-3">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm hover:bg-slate-600/70 hover:text-cyan-300 hover:scale-115 transition-all duration-400 animate-on-scroll opacity-0 hover:shadow-lg hover:shadow-cyan-500/20 cursor-default transform hover:-translate-y-2 font-medium animate-glow-pulse" style={{ animationDelay: `${index * 0.3 + 0.2 + idx * 0.05}s` }}>
                    {skill}
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
