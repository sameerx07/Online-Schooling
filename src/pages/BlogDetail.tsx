import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiClock, FiUser, FiCalendar } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { id } = useParams();

  const blogData: Record<string, any> = {
    "why-online-learning-works": {
      title: "Why Online Learning Works for Elementary Students",
      author: "Dr. Sarah Ahmad",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "Online learning has revolutionized education, and it's proving to be particularly effective for elementary students when implemented correctly. At TarbiyaX Academy, we've seen firsthand how digital education can transform young learners' experiences.",
        },
        {
          type: "heading",
          text: "The Science Behind Online Learning",
        },
        {
          type: "paragraph",
          text: "Research shows that online learning, when properly designed, can be just as effective—and in some cases more effective—than traditional classroom instruction. The key lies in personalization, engagement, and the ability to learn at one's own pace.",
        },
        {
          type: "paragraph",
          text: "Elementary students benefit from the visual and interactive nature of digital content. Animated lessons, educational games, and interactive exercises make learning fun and memorable.",
        },
        {
          type: "heading",
          text: "Key Benefits for Young Learners",
        },
        {
          type: "paragraph",
          text: "1. **Personalized Learning Pace**: Every child learns differently. Online platforms allow students to spend more time on challenging concepts and move quickly through material they've mastered.",
        },
        {
          type: "paragraph",
          text: "2. **Immediate Feedback**: Digital assessments provide instant feedback, helping students understand mistakes and learn from them in real-time.",
        },
        {
          type: "paragraph",
          text: "3. **Safe Learning Environment**: For many students, learning from home reduces anxiety and creates a comfortable space for asking questions and making mistakes.",
        },
        {
          type: "paragraph",
          text: "4. **Parent Involvement**: Online learning makes it easier for parents to be actively involved in their child's education, monitoring progress and supporting learning goals.",
        },
        {
          type: "heading",
          text: "The TarbiyaX Approach",
        },
        {
          type: "paragraph",
          text: "At TarbiyaX Academy, we combine the benefits of online learning with Islamic values and expert teaching. Our small class sizes ensure personalized attention, while our curriculum balances screen time with hands-on activities and family engagement.",
        },
      ],
    },
    "islamic-education-modern-world": {
      title: "Islamic Education in the Modern World",
      author: "Sheikh Omar Hassan",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "In today's rapidly changing world, providing children with a strong Islamic foundation while preparing them for modern challenges is more important than ever. At TarbiyaX Academy, we've designed a curriculum that honors tradition while embracing innovation.",
        },
        {
          type: "heading",
          text: "The Challenge of Modern Islamic Education",
        },
        {
          type: "paragraph",
          text: "Muslim parents face a unique challenge: ensuring their children receive a quality academic education while instilling Islamic values and knowledge. Traditional schools often separate religious and secular learning, creating a disconnect that can confuse young minds.",
        },
        {
          type: "heading",
          text: "An Integrated Approach",
        },
        {
          type: "paragraph",
          text: "Our philosophy is simple: Islamic values and modern education are not mutually exclusive—they complement each other. When teaching science, we encourage students to marvel at Allah's creation. In mathematics, we emphasize honesty and precision as Islamic virtues.",
        },
        {
          type: "paragraph",
          text: "This integrated approach helps children see their faith as a complete way of life rather than something separate from their daily activities and academic pursuits.",
        },
        {
          type: "heading",
          text: "Core Components of Our Islamic Studies",
        },
        {
          type: "paragraph",
          text: "1. **Quran with Tajweed**: Professional teachers guide students in proper recitation and basic understanding of selected verses.",
        },
        {
          type: "paragraph",
          text: "2. **Islamic History**: Bringing to life the stories of prophets, companions, and Islamic civilization in an engaging, age-appropriate manner.",
        },
        {
          type: "paragraph",
          text: "3. **Character Building**: Practical application of Islamic ethics in daily life—honesty, kindness, respect, and responsibility.",
        },
        {
          type: "paragraph",
          text: "4. **Arabic Language**: Introduction to the language of the Quran through fun, interactive lessons.",
        },
      ],
    },
    "parent-guide-online-school": {
      title: "A Parent's Guide to Supporting Online Learning",
      author: "Fatima Khan",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&h=600&fit=crop",
      content: [
        {
          type: "paragraph",
          text: "As a parent, supporting your child's online education might seem daunting at first. However, with the right strategies and mindset, you can create an environment where your child thrives academically and personally.",
        },
        {
          type: "heading",
          text: "Creating the Perfect Learning Space",
        },
        {
          type: "paragraph",
          text: "The physical environment matters. Set up a dedicated learning area that's quiet, well-lit, and free from distractions. It doesn't need to be a separate room—even a corner of the dining table can work if it's organized and consistent.",
        },
        {
          type: "heading",
          text: "Establishing Routines",
        },
        {
          type: "paragraph",
          text: "Children thrive on routine. Create a daily schedule that includes learning time, breaks, physical activity, and family time. Consistency helps children know what to expect and builds good habits.",
        },
        {
          type: "paragraph",
          text: "Start each day with a morning routine that might include getting dressed (even if staying home), breakfast, and a brief review of the day's schedule.",
        },
        {
          type: "heading",
          text: "Balancing Support and Independence",
        },
        {
          type: "paragraph",
          text: "Finding the right level of involvement is crucial. Be available to help when needed, but encourage your child to try solving problems independently first. This builds confidence and problem-solving skills.",
        },
        {
          type: "paragraph",
          text: "For younger students, you might need to be more hands-on initially, but gradually encourage greater independence as they become comfortable with the online platform and routines.",
        },
        {
          type: "heading",
          text: "Communication with Teachers",
        },
        {
          type: "paragraph",
          text: "Regular communication with your child's teachers is vital. Don't hesitate to reach out with questions or concerns. At TarbiyaX Academy, we encourage parents to be active partners in their child's education.",
        },
        {
          type: "heading",
          text: "Managing Screen Time",
        },
        {
          type: "paragraph",
          text: "Online learning involves screen time, but it should be balanced. Ensure your child takes regular breaks (we recommend the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds). Incorporate plenty of offline activities, outdoor play, and hands-on learning experiences.",
        },
      ],
    },
  };

  const blog = blogData[id || ""] || blogData["why-online-learning-works"];

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
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </motion.div>

          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl"
            >
              <Link to="/">
                <Button variant="ghost" className="text-white mb-4">
                  <FiArrowLeft className="mr-2" />
                  Back to Home
                </Button>
              </Link>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-gray-200">
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <FiCalendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white">
                {blog.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 shadow-elegant"
            >
              <div className="prose prose-lg max-w-none">
                {blog.content.map((block: any, index: number) => {
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="text-3xl font-bold font-poppins mt-8 mb-4 bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <p key={index} className="text-lg leading-relaxed mb-6 text-foreground">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-border/20 text-center">
                <h3 className="text-2xl font-bold font-poppins mb-4">
                  Ready to Join TarbiyaX Academy?
                </h3>
                <a href="/#enrollment">
                  <Button
                    size="lg"
                    className="gradient-primary text-white hover:shadow-glow transition-smooth"
                  >
                    Request Enrollment Info
                  </Button>
                </a>
              </div>
            </motion.article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
