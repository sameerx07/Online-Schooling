import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "image",
      content: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop",
      title: "Welcome to TarbiyaX ",
      subtitle: "Online Schooling for Grades 1-5",
    },
    {
      type: "image",
      content: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop",
      title: "Modern Learning",
      subtitle: "Timeless Values",
    },
    {
      type: "image",
      content: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1920&h=1080&fit=crop",
      title: "Expert Teachers",
      subtitle: "Nurturing Young Minds",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].content})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              custom={0}
              variants={textVariants}
              className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.h2
              custom={1}
              variants={textVariants}
              className="text-2xl md:text-4xl font-semibold font-poppins text-accent mb-8"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            <motion.p
              custom={2}
              variants={textVariants}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
            >
              Combining a world-class curriculum with the light of Islamic teachings
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a 
                href="/#subjects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card text-white border-2 border-white/50 hover:bg-white/20 transition-smooth group px-10 py-7 text-lg"
                >
                  Explore Subjects
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.a>
              <motion.a 
                href="/#enrollment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:shadow-glow transition-smooth px-10 py-7 text-lg"
                >
                  Enroll Now →
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-accent w-8 shadow-glow"
                  : "bg-white/50 hover:bg-white/80 w-2"
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.a
          href="/#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-smooth cursor-pointer"
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
};
