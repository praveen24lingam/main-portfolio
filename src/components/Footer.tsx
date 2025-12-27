import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, Github, Linkedin, Heart, Download } from 'lucide-react';
import VisitorCounter from './VisitorCounter';
import ContactForm from './ContactForm';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer
      id="contact"
      ref={ref}
      className="section-padding border-t border-border"
      aria-label="Contact and Footer"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">Send a Message</h3>
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:praveenlinga24@navgurukul.org"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  aria-label="Email Praveen"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-sm font-medium break-all">praveenlinga24@navgurukul.org</p>
                  </div>
                </a>

                <a
                  href="tel:6261693378"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  aria-label="Call Praveen"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <p className="text-sm font-medium">6261693378</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-sm font-medium">Bijapur, Chhattisgarh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://linkedin.com/in/praveen-lingam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card-hover rounded-full text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/praveen-lingam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card-hover rounded-full text-muted-foreground hover:text-primary"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
              </div>

              <a
                href="/Praveen_Lingam_Resume.pdf"
                download="Praveen_Lingam_Resume.pdf"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                aria-label="Download Resume"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <VisitorCounter />
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            © 2025 Praveen Lingam. Made with{' '}
            <Heart size={14} className="text-destructive fill-current" />
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;