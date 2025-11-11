import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";

export const WhyChooseSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reasons = [
    {
      title: "Certified Islamic Educators",
      description: "All our teachers hold both teaching certifications and Islamic studies credentials, ensuring authentic knowledge transfer.",
      benefits: [
        "Ijazah-certified Quran teachers",
        "University-qualified subject specialists",
        "Continuous professional development",
        "Child safeguarding trained"
      ],
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
    },
    {
      title: "Flexible Learning Schedule",
      description: "Study at your own pace with our asynchronous learning model, perfect for busy families and international students.",
      benefits: [
        "24/7 access to learning materials",
        "Live sessions in multiple time zones",
        "Recorded lessons for review",
        "Personalized learning paths"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    },
    {
      title: "Holistic Development",
      description: "Beyond academics, we focus on character building, emotional intelligence, and spiritual growth.",
      benefits: [
        "Daily Islamic character lessons",
        "Social-emotional learning curriculum",
        "Leadership development programs",
        "Community service projects"
      ],
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
    },
    {
      title: "Small Class Sizes",
      description: "Maximum 15 students per class ensures personalized attention and meaningful teacher-student relationships.",
      benefits: [
        "Individual progress tracking",
        "One-on-one tutoring available",
        "Regular parent-teacher meetings",
        "Customized learning support"
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    },
    {
      title: "Interactive Technology",
      description: "Cutting-edge educational technology makes learning engaging, interactive, and fun for young students.",
      benefits: [
        "Gamified learning experiences",
        "Virtual science labs",
        "Interactive whiteboards",
        "AI-powered practice tools"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = reasons.length - 1;
      if (nextIndex >= reasons.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="why-choose" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">TarbiyaX Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the preferred choice for Islamic education
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="relative h-[600px] md:h-[500px] flex items-center justify-center">
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
                <div className="glass-card rounded-3xl overflow-hidden shadow-elegant max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-2">
                    {/* Image Side */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative h-64 md:h-auto"
                    >
                      <img
                        src={reasons[currentIndex].image}
                        alt={reasons[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold font-poppins mb-4">
                        {reasons[currentIndex].title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {reasons[currentIndex].description}
                      </p>
                      <ul className="space-y-3">
                        {reasons[currentIndex].benefits.map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FiCheck className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-foreground">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-smooth"
            >
              <FiChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground w-2"
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