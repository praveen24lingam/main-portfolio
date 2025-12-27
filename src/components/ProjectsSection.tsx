import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Cloud, CheckSquare, User } from 'lucide-react';

const projects = [
  {
    title: 'Weather App',
    description: 'Responsive weather application using OpenWeather API with geolocation, error handling, local storage, and accessible UI.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Cloud,
    liveUrl: 'https://neoweatherbypraveen.netlify.app/',
    githubUrl: 'https://github.com/praveen24lingam/Weather-App.git',
    color: 'from-blue-500 to-cyan-500',
  },
  // {
  //   title: 'Portfolio Website',
  //   description: 'Personal portfolio website with smooth navigation, SEO optimization, and clean UX design.',
  //   tech: ['HTML', 'CSS', 'JavaScript'],
  //   icon: User,
  //   liveUrl: '#',
  //   githubUrl: 'https://github.com/praveen-lingam/portfolio',
  //   color: 'from-purple-500 to-pink-500',
  // },
  {
    title: 'To-Do List App',
    description: 'Task management app with filtering, dark mode, keyboard shortcuts, accessibility, and local storage.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: CheckSquare,
    liveUrl: 'https://braintodolist.netlify.app/',
    githubUrl: 'https://github.com/praveen24lingam/Task2-Todo_List.git',
    color: 'from-green-500 to-emerald-500',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding"
      aria-label="Projects Section"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="glass-card-hover group overflow-hidden"
            >
              {/* Project Header */}
              <div className={`h-40 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <project.icon
                  size={80}
                  className="absolute right-4 bottom-4 text-white/20 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;