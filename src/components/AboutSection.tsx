import { motion } from "framer-motion";
import { FiAward, FiHeart, FiUsers, FiTarget } from "react-icons/fi";

export const AboutSection = () => {
  const stats = [
    { icon: FiAward, value: "100+", label: "Expert Educators" },
    { icon: FiUsers, value: "500+", label: "Happy Students" },
    { icon: FiHeart, value: "98%", label: "Parent Satisfaction" },
    { icon: FiTarget, value: "10+", label: "Years Experience" },
  ];

  const values = [
    {
      title: "Academic Excellence",
      description: "World-class curriculum aligned with international standards, ensuring your child receives the best education possible.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    },
    {
      title: "Islamic Values",
      description: "Integrating Quranic teachings and Islamic principles into daily learning, nurturing both mind and soul.",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=600&fit=crop",
    },
    {
      title: "Modern Technology",
      description: "State-of-the-art online learning platform with interactive tools and engaging multimedia content.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">TarbiyaX Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pioneering online Islamic education since 2014, combining modern pedagogy with traditional values
          </p>
        </motion.div>

        {/* Stats Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" as const }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card rounded-2xl p-6 text-center shadow-elegant hover:shadow-glow transition-smooth"
            >
              <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-poppins mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Values Section */}
        <div className="space-y-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="glass-card rounded-3xl overflow-hidden shadow-elegant">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </motion.div>

              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold font-poppins mb-6">
                    {value.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass-card rounded-3xl p-12 shadow-elegant text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold font-poppins mb-6">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To provide a transformative educational experience that nurtures young minds through a perfect balance of 
            rigorous academics and authentic Islamic teachings. We believe every child deserves an education that 
            prepares them not just for success in this world, but also for the hereafter.
          </p>
        </motion.div>
      </div>
    </section>
  );
};