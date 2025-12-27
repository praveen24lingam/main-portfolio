import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Lightbulb, RefreshCw, Users, Globe } from 'lucide-react';

const softSkills = [
  { icon: MessageSquare, label: 'Communication' },
  { icon: Lightbulb, label: 'Problem-Solving' },
  { icon: RefreshCw, label: 'Adaptability' },
  { icon: Users, label: 'Mentoring' },
];

const languages = [
  { language: 'Hindi', flag: '🇮🇳' },
  { language: 'English', flag: '🇬🇧' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-secondary/20"
      aria-label="About Section"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
             Aspiring Frontend Developer with hands-on experience in building responsive and accessible web applications using HTML, CSS, JavaScript, and React.js. Skilled in Git/GitHub, API integration, and UI/UX optimization, with a focus on writing clean, efficient, and cross-browser compatible code. Completed a part-time internship in admissions, developing teamwork, mentoring, and collaboration skills. Passionate about creating modern, user-friendly web experiences.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <skill.icon size={20} />
                    </div>
                    <span className="text-sm font-medium">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                <Globe size={18} />
                Languages
              </h3>
              <div className="flex gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.language}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;