import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using Al-Fajr Academy's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
    },
    {
      title: "User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
    },
    {
      title: "Enrollment and Payment",
      content: "Enrollment is subject to availability and our admission criteria. Tuition fees must be paid in full or according to the payment plan agreed upon. Refunds are provided according to our refund policy.",
    },
    {
      title: "Code of Conduct",
      content: "Students and parents are expected to maintain respectful behavior towards teachers, staff, and other students. Any form of harassment, discrimination, or inappropriate conduct will not be tolerated.",
    },
    {
      title: "Intellectual Property",
      content: "All course materials, content, and resources provided through our platform are the intellectual property of Al-Fajr Academy and are protected by copyright laws. Unauthorized use or distribution is prohibited.",
    },
    {
      title: "Limitation of Liability",
      content: "Al-Fajr Academy shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.",
    },
    {
      title: "Modifications to Terms",
      content: "We reserve the right to modify these terms at any time. We will notify users of any significant changes. Continued use of our services after such modifications constitutes acceptance of the updated terms.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Terms of <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold font-poppins mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 glass-card rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold font-poppins mb-4">Questions?</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@alfajracademy.com" className="text-primary hover:underline">
                  legal@alfajracademy.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;