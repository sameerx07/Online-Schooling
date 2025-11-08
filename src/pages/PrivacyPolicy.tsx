import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, enroll in courses, or contact us. This may include your name, email address, phone number, and payment information.",
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process enrollments, communicate with you, and comply with legal obligations.",
    },
    {
      title: "Information Sharing",
      content: "We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our platform and delivering our services.",
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us to exercise these rights.",
    },
    {
      title: "Children's Privacy",
      content: "Our services are designed for children with parental consent. We require parental authorization before collecting any personal information from children under 13.",
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
              Privacy <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Policy</span>
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
              <h2 className="text-2xl font-bold font-poppins mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@alfajracademy.com" className="text-primary hover:underline">
                  privacy@alfajracademy.com
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

export default PrivacyPolicy;