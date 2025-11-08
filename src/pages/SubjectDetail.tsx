import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const SubjectDetail = () => {
  const { id } = useParams();

  const subjectData: Record<string, any> = {
    mathematics: {
      name: "Mathematics",
      description: "Build strong foundations in numbers, problem-solving, and logical thinking through engaging activities and real-world applications.",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=600&fit=crop",
      keyTopics: [
        "Number sense and operations",
        "Geometry and spatial reasoning",
        "Measurement and data analysis",
        "Problem-solving strategies",
        "Mathematical reasoning",
      ],
      learningOutcomes: [
        "Master grade-level arithmetic operations",
        "Develop critical thinking through word problems",
        "Apply math concepts to everyday situations",
        "Build confidence in mathematical abilities",
      ],
    },
    science: {
      name: "Science",
      description: "Explore the wonders of the natural world through hands-on experiments, investigations, and discovery-based learning.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=600&fit=crop",
      keyTopics: [
        "Life science and living organisms",
        "Physical science and matter",
        "Earth and space science",
        "Scientific inquiry and investigation",
        "Environmental awareness",
      ],
      learningOutcomes: [
        "Understand basic scientific concepts",
        "Conduct safe, engaging experiments",
        "Develop observation and analysis skills",
        "Foster curiosity about the natural world",
      ],
    },
    "language-arts": {
      name: "Language Arts",
      description: "Develop strong reading, writing, and communication skills through creative storytelling, literature analysis, and expressive writing.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop",
      keyTopics: [
        "Reading comprehension",
        "Creative and expository writing",
        "Grammar and vocabulary",
        "Oral communication",
        "Literary analysis",
      ],
      learningOutcomes: [
        "Read fluently with comprehension",
        "Write clearly and creatively",
        "Expand vocabulary and language skills",
        "Express ideas effectively",
      ],
    },
    "islamic-studies": {
      name: "Islamic Studies & Quran",
      description: "Learn Quranic recitation with Tajweed, Islamic history, prophetic stories, and core Islamic values that guide a meaningful life.",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=1200&h=600&fit=crop",
      keyTopics: [
        "Quranic recitation and Tajweed",
        "Islamic history and prophetic stories",
        "Core Islamic beliefs and practices",
        "Character development through Islamic values",
        "Arabic language basics",
      ],
      learningOutcomes: [
        "Recite Quran with proper Tajweed",
        "Understand Islamic history and heritage",
        "Apply Islamic values in daily life",
        "Develop strong moral character",
      ],
    },
    technology: {
      name: "Technology",
      description: "Introduction to digital literacy, coding basics, and safe, responsible technology usage designed for young learners.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
      keyTopics: [
        "Digital literacy fundamentals",
        "Introduction to coding",
        "Online safety and digital citizenship",
        "Educational software and tools",
        "Creative digital projects",
      ],
      learningOutcomes: [
        "Navigate technology safely and responsibly",
        "Understand basic coding concepts",
        "Create simple digital projects",
        "Develop 21st-century skills",
      ],
    },
    "character-development": {
      name: "Character Development",
      description: "Nurture empathy, leadership, emotional intelligence, and social skills through guided activities and reflective practices.",
      image: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=1200&h=600&fit=crop",
      keyTopics: [
        "Emotional intelligence",
        "Leadership and teamwork",
        "Conflict resolution",
        "Empathy and compassion",
        "Goal setting and perseverance",
      ],
      learningOutcomes: [
        "Develop self-awareness and regulation",
        "Build strong interpersonal skills",
        "Practice empathy and kindness",
        "Cultivate leadership qualities",
      ],
    },
  };

  const subject = subjectData[id || ""] || subjectData.mathematics;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={subject.image}
              alt={subject.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </motion.div>

          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/">
                <Button variant="ghost" className="text-white mb-4">
                  <FiArrowLeft className="mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white mb-4">
                {subject.name}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {subject.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Key Topics */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 shadow-elegant"
              >
                <h2 className="text-3xl font-bold font-poppins mb-6 bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                  Key Topics
                </h2>
                <ul className="space-y-4">
                  {subject.keyTopics.map((topic: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <FiCheck className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Learning Outcomes */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 shadow-elegant"
              >
                <h2 className="text-3xl font-bold font-poppins mb-6 bg-gradient-to-r from-accent to-yellow-600 bg-clip-text text-transparent">
                  Learning Outcomes
                </h2>
                <ul className="space-y-4">
                  {subject.learningOutcomes.map((outcome: string, index: number) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <FiCheck className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-lg">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <a href="/#enrollment">
                <Button
                  size="lg"
                  className="gradient-primary text-white hover:shadow-glow transition-smooth text-lg px-8"
                >
                  Enroll Your Child Today
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SubjectDetail;
