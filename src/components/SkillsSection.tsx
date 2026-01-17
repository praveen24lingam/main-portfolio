import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Award } from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { 
  name: 'Node.js', 
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
},
{ 
  name: 'Express.js', 
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' 
},
{ 
  name: 'MongoDB', 
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' 
},
{ 
  name: 'C++', 
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' 
},
{ 
  name: 'Python', 
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' 
},
{ 
  name: 'PHP', 
  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' 
}

];

const certifications = [
  {
    title: 'Introduction to Git and GitHub',
    issuer: 'Google',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    link: 'https://drive.google.com/file/d/1nxdtFLHp40gCcKstfKE8-VaEvh_HwaXf/view?usp=sharing',
  },
  {
    title: 'JavaScript',
    issuer: 'IBM SkillsBuild',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    link: 'https://drive.google.com/file/d/1xkHmZwLChmnnr7B9s4ArEFS7QqDDWKZt/view?usp=sharing',
  },
  {
    title: 'Frontend Development',
    issuer: 'Meta',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    link: 'https://drive.google.com/file/d/1fD0nC4tnYqYiGpDR0Vxi8T8_k_zhNjeR/view?usp=sharing',
  },
  {
    title: 'React',
    issuer: 'IBM SkillsBuild',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    link: 'https://drive.google.com/file/d/1VhXnDnmhpqGEcMtfLoRp-H0UQ9_k3M9v/view?usp=sharing',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding"
      aria-label="Technical Skills Section"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 mb-16"
        >
          <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="p-4 rounded-2xl bg-secondary/50 group-hover:bg-secondary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="skill-icon"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="text-primary" size={24} />
            <h3 className="text-xl font-semibold text-center">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card-hover p-6 flex items-start gap-4 group"
                aria-label={`${cert.title} certification from ${cert.issuer}`}
              >
                <img
                  src={cert.icon}
                  alt={`${cert.issuer} logo`}
                  className="w-10 h-10"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm mb-1 line-clamp-2">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;