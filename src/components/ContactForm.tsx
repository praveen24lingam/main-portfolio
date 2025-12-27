import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Please enter a valid email').max(255, 'Email must be less than 255 characters'),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormErrors] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('loading');

    try {
      // Using Formspree for email sending
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xqekpyln', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = (fieldName: string, hasError: boolean) => `
    w-full px-4 py-3 rounded-xl bg-secondary/30 border 
    ${hasError ? 'border-destructive' : focusedField === fieldName ? 'border-primary' : 'border-border/50'}
    text-foreground placeholder:text-muted-foreground/60
    focus:outline-none focus:border-primary focus:bg-secondary/50
    transition-all duration-300
  `;

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
      aria-label="Contact form"
    >
      {/* Name Field */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name <span className="text-destructive">*</span>
        </label>
        <motion.div
          animate={{ scale: focusedField === 'name' ? 1.01 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses('name', !!errors.name)}
            placeholder="Your name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            disabled={status === 'loading'}
          />
        </motion.div>
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            id="name-error"
            className="text-sm text-destructive flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email <span className="text-destructive">*</span>
        </label>
        <motion.div
          animate={{ scale: focusedField === 'email' ? 1.01 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses('email', !!errors.email)}
            placeholder="your.email@example.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            disabled={status === 'loading'}
          />
        </motion.div>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            id="email-error"
            className="text-sm text-destructive flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <motion.div
          animate={{ scale: focusedField === 'message' ? 1.01 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            rows={5}
            className={`${inputClasses('message', !!errors.message)} resize-none`}
            placeholder="Your message here..."
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            disabled={status === 'loading'}
          />
        </motion.div>
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            id="message-error"
            className="text-sm text-destructive flex items-center gap-1"
          >
            <AlertCircle size={14} />
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
        className={`
          w-full py-4 px-6 rounded-xl font-semibold text-lg
          flex items-center justify-center gap-2
          transition-all duration-300
          ${status === 'success' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : status === 'error'
            ? 'bg-destructive/20 text-destructive border border-destructive/30'
            : 'bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25'
          }
          disabled:cursor-not-allowed
        `}
        aria-label={status === 'loading' ? 'Sending message' : 'Send message'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle size={20} />
            Message Sent!
          </>
        ) : status === 'error' ? (
          <>
            <AlertCircle size={20} />
            Failed to Send - Try Again
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </motion.button>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center"
        >
          <p className="text-green-400 text-sm">
            Thank you for your message! I'll get back to you soon.
          </p>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-center"
        >
          <p className="text-destructive text-sm">
            Something went wrong. Please try again or email me directly.
          </p>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
