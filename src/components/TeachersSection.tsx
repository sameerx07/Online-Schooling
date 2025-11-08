import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const TeachersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const teachers = [
    {
      name: "Aisha Ahmed",
      subject: "Quranic Studies",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      bio: "10+ years of experience in Quranic education with Ijazah certification",
    },
    {
      name: "Omar Hassan",
      subject: "Mathematics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Former university professor specializing in elementary mathematics",
    },
    {
      name: "Fatima Khan",
      subject: "Science",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Passionate about making science fun and accessible for young learners",
    },
    {
      name: "Ibrahim Ali",
      subject: "Islamic History",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Scholar in Islamic history with a gift for storytelling",
    },
    {
      name: "Zainab Malik",
      subject: "Language Arts",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "Published author and literacy specialist for elementary students",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = teachers.length - 1;
      if (nextIndex >= teachers.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section id="teachers" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Meet Our <span className="bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">Expert Teachers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated educators combining academic excellence with Islamic values
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <div className="glass-card rounded-3xl p-8 md:p-12 shadow-elegant max-w-2xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Teacher Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-glow">
                        <img
                          src={teachers[currentIndex].image}
                          alt={teachers[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-20 h-20 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm text-center">
                          Expert
                        </span>
                      </div>
                    </motion.div>

                    {/* Teacher Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-bold font-poppins mb-2">
                        {teachers[currentIndex].name}
                      </h3>
                      <p className="text-xl text-primary font-semibold mb-4">
                        {teachers[currentIndex].subject}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {teachers[currentIndex].bio}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-smooth"
            >
              <FiChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {teachers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-smooth"
            >
              <FiChevronRight className="w-6 h-6 text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
