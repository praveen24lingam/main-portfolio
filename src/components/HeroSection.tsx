import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/5">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Praveen Lingam</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-8"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Aspiring frontend developer building responsive and interactive web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground mb-10"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Bijapur, Chhattisgarh</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <a href="tel:6261693378" className="hover:text-foreground transition-colors">
                6261693378
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a
                href="mailto:praveenlinga24@navgurukul.org"
                className="hover:text-foreground transition-colors"
              >
                praveenlinga24@navgurukul.org
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
              aria-label="View my projects"
            >
              View My Work
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="./Praveen_Lingam_Resume.pdf"
              download="Praveen_Lingam_Resume.pdf"
              className="group px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center gap-2"
              aria-label="Download Resume"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/praveen-lingam24/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card-hover rounded-full text-muted-foreground hover:text-primary"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/praveen24lingam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card-hover rounded-full text-muted-foreground hover:text-primary"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;