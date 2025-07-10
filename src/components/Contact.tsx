
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { sendEmail } from "@/lib/emailjs";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await sendEmail(formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bharathkumar94492@gmail.com",
      href: "mailto:bharathkumar94492@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9845548338",
      href: "tel:+919845548338"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "bharath-kumar-s-",
      href: "https://linkedin.com/in/bharath-kumar-s-"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "BHARATHKUMAR152003",
      href: "https://github.com/BHARATHKUMAR152003"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-24 px-4 animate-slide-in-view opacity-0 transform translate-y-20 transition-all duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-800 animate-morphing-gradient" style={{ backgroundSize: '400% 400%' }}>
          Let's Connect
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Contact Info */}
          <div className="slideshow-item" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 hover:text-cyan-300 transition-colors duration-300 animate-glow-pulse">Get In Touch</h3>
            <p className="text-gray-300 mb-6 md:mb-10 leading-relaxed hover:text-gray-200 transition-colors duration-300 text-base md:text-lg">
              I'm always excited to collaborate on innovative projects or discuss opportunities 
              in AI, ML, and full-stack development. Let's build something amazing together!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 md:gap-5 p-4 md:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 group hover:scale-105 md:hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/10 animate-on-scroll opacity-0 transform translate-x-[-30px] hover:-translate-y-2 hover:rotate-1 animate-glow-pulse"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl group-hover:scale-125 transition-transform duration-400 shadow-lg">
                    <info.icon className="text-white animate-pulse" size={24} style={{ animationDelay: `${index * 0.2}s` }} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 font-medium">{info.label}</p>
                    <p className="text-white group-hover:text-cyan-300 transition-colors duration-300 text-lg font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="slideshow-item" style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 hover:text-cyan-300 transition-colors duration-300 animate-glow-pulse">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-500" style={{ animationDelay: '1.2s' }}>
                <label className="block text-gray-300 mb-2 md:mb-3 hover:text-cyan-300 transition-colors duration-300 font-semibold text-base md:text-lg">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 md:p-4 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:scale-105 transition-all duration-300 text-base md:text-lg hover:shadow-lg hover:shadow-cyan-500/10"
                  disabled={isSubmitting}
                  required
                />
              </div>
              
              <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-500" style={{ animationDelay: '1.4s' }}>
                <label className="block text-gray-300 mb-2 md:mb-3 hover:text-cyan-300 transition-colors duration-300 font-semibold text-base md:text-lg">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 md:p-4 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:scale-105 transition-all duration-300 text-base md:text-lg hover:shadow-lg hover:shadow-cyan-500/10"
                  disabled={isSubmitting}
                  required
                />
              </div>
              
              <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-500" style={{ animationDelay: '1.6s' }}>
                <label className="block text-gray-300 mb-2 md:mb-3 hover:text-cyan-300 transition-colors duration-300 font-semibold text-base md:text-lg">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full p-3 md:p-4 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white focus:border-cyan-400 focus:outline-none focus:scale-105 transition-all duration-300 text-base md:text-lg hover:shadow-lg hover:shadow-cyan-500/10 resize-none"
                  disabled={isSubmitting}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-bold text-base md:text-lg hover:scale-105 transform transition-all duration-500 shadow-lg hover:shadow-cyan-500/25 animate-on-scroll opacity-0 animate-glow-pulse disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ animationDelay: '1.8s' }}
              >
                {isSubmitting ? (
                  <Loader2 size={20} className="animate-spin md:w-6 md:h-6" />
                ) : (
                  <Send size={20} className="animate-pulse md:w-6 md:h-6" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-cyan-500/20 text-center animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-800" style={{ animationDelay: '2s' }}>
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-lg">
            © 2025 Bharath Kumar S. Built with passion for innovation and technology.
          </p>
        </div>
      </div>
    </section>
  );
};
