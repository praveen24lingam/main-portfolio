import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Using countapi.xyz to track visitors
        const response = await fetch('https://api.countapi.xyz/hit/praveenlingam-portfolio/visits');
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
        // Fallback to local storage if API fails
        const storedCount = localStorage.getItem('visitorCount');
        const currentCount = storedCount ? parseInt(storedCount) + 1 : 1;
        localStorage.setItem('visitorCount', currentCount.toString());
        setCount(currentCount);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
    >
      <Users size={16} className="text-primary" />
      <span className="text-sm text-muted-foreground">
        {loading ? (
          <span className="inline-block w-8 h-4 bg-muted-foreground/20 rounded animate-pulse" />
        ) : (
          <>
            <span className="font-semibold text-foreground">{count?.toLocaleString()}</span> visitors
          </>
        )}
      </span>
    </motion.div>
  );
};

export default VisitorCounter;
