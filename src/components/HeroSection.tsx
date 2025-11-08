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
      title: "Welcome to Al-Fajr Academy",
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
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].content})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="#subjects">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-card text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-smooth group"
                >
                  Explore Subjects
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#enrollment">
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:shadow-glow hover:scale-105 transition-smooth"
                >
                  Enroll Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-accent w-8 shadow-glow"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
