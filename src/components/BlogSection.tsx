import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiClock, FiUser } from "react-icons/fi";

export const BlogSection = () => {
  const blogPosts = [
    {
      id: "why-online-learning-works",
      title: "Why Online Learning Works for Elementary Students",
      excerpt: "Discover the science-backed benefits of online education and how it can transform your child's learning experience.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      author: "Dr. Sarah Ahmad",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      id: "islamic-education-modern-world",
      title: "Islamic Education in the Modern World",
      excerpt: "How TarbiyaX  seamlessly integrates traditional Islamic values with contemporary educational methods.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      author: "Sheikh Omar Hassan",
      date: "March 12, 2024",
      readTime: "7 min read",
    },
    {
      id: "parent-guide-online-school",
      title: "A Parent's Guide to Supporting Online Learning",
      excerpt: "Practical tips and strategies to help your child thrive in an online learning environment.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&h=400&fit=crop",
      author: "Fatima Khan",
      date: "March 10, 2024",
      readTime: "6 min read",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
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
            Latest <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice, educational insights, and community stories
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <Link to={`/blog/${post.id}`}>
                <motion.article
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-smooth group h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Read Time Badge */}
                    <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full flex items-center gap-2">
                      <FiClock className="w-4 h-4 text-accent" />
                      <span className="text-sm text-white">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Author & Date */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <FiUser className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-poppins mb-3 group-hover:text-primary transition-smooth">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
