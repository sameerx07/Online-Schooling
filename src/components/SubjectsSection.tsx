import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiBook, FiTrendingUp, FiGlobe, FiStar, FiCode, FiHeart } from "react-icons/fi";

export const SubjectsSection = () => {
  const subjects = [
    {
      id: "mathematics",
      name: "Mathematics",
      icon: FiTrendingUp,
      description: "Build strong foundations in numbers, problem-solving, and logical thinking through engaging activities.",
      color: "from-green-600 to-emerald-500",
    },
    {
      id: "science",
      name: "Science",
      icon: FiGlobe,
      description: "Explore the wonders of the natural world, from biology to physics, with hands-on experiments.",
      color: "from-emerald-600 to-teal-500",
    },
    {
      id: "language-arts",
      name: "Language Arts",
      icon: FiBook,
      description: "Develop reading, writing, and communication skills through creative storytelling and literature.",
      color: "from-green-500 to-lime-500",
    },
    {
      id: "islamic-studies",
      name: "Islamic Studies & Quran",
      icon: FiStar,
      description: "Learn Quranic recitation, Islamic history, and values that guide a meaningful life.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: "technology",
      name: "Technology",
      icon: FiCode,
      description: "Introduction to digital literacy, coding basics, and safe technology usage for young learners.",
      color: "from-green-600 to-emerald-600",
    },
    {
      id: "character-development",
      name: "Character Development",
      icon: FiHeart,
      description: "Nurture empathy, leadership, and social-emotional learning through guided activities.",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="subjects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Our <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Subjects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive curriculum designed to nurture both academic excellence and spiritual growth
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {subjects.map((subject) => (
            <motion.div key={subject.id} variants={cardVariants}>
              <Link to={`/subjects/${subject.id}`}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="glass-card rounded-2xl p-8 h-full shadow-elegant hover:shadow-glow transition-smooth group cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-smooth`}>
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-poppins mb-3 group-hover:text-primary transition-smooth">
                    {subject.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {subject.description}
                  </p>
                  
                  <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
