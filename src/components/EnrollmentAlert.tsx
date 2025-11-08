import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { Button } from "./ui/button";

export const EnrollmentAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show alert every 60 seconds
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 60000); // 60 seconds

    // Show first alert after 10 seconds
    const initialTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  const handleEnroll = () => {
    setIsVisible(false);
    // Scroll to enrollment section
    const enrollmentSection = document.getElementById("enrollment");
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-24 right-8 z-40 max-w-sm"
        >
          <div className="glass-card rounded-2xl p-6 shadow-glow border border-primary/20">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded transition-smooth"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Limited Spots Available!</h3>
                <p className="text-sm text-muted-foreground">
                  Join our founding families and get 10% off tuition for the first year.
                </p>
              </div>
            </div>

            <Button
              onClick={handleEnroll}
              className="w-full gradient-primary text-white hover:shadow-glow transition-smooth"
            >
              Enroll Now
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};