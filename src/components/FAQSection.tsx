import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  
  const faqs = [
    {
      question: "What age groups do you cater to?",
      answer: "Al-Fajr Academy serves students in Grades 1-5 (typically ages 6-11). Our curriculum is specifically designed for elementary-level learners, with age-appropriate Islamic and academic content.",
    },
    {
      question: "How does online learning work for young children?",
      answer: "Our platform uses interactive, engaging tools specifically designed for young learners. Live classes are kept short and dynamic, with plenty of visual aids, activities, and breaks. All lessons are recorded for review, and our teachers provide personalized support.",
    },
    {
      question: "Are your teachers qualified?",
      answer: "All our teachers hold teaching certifications and relevant subject expertise. Our Quran teachers have Ijazah certification, and all staff undergo thorough background checks and regular professional development training.",
    },
    {
      question: "What technology do I need?",
      answer: "You'll need a computer or tablet with a stable internet connection, a webcam, and a microphone. We support Windows, Mac, iPad, and Android tablets. Our platform works on most modern browsers.",
    },
    {
      question: "Can my child learn at their own pace?",
      answer: "Yes! While we have scheduled live classes for interaction and community building, all lessons are recorded and available 24/7. Students can review materials as many times as needed and work through assignments at their own pace within weekly deadlines.",
    },
    {
      question: "How do you integrate Islamic values into regular subjects?",
      answer: "Islamic values are woven throughout our entire curriculum. In science, we explore Allah's creation; in math, we emphasize honesty and precision; in language arts, we study moral stories. We also have dedicated Islamic Studies classes for Quran, Islamic history, and character development.",
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 14-day money-back guarantee from the start of the semester. If you're not satisfied for any reason within the first two weeks, we'll provide a full refund. After this period, refunds are prorated based on unused months.",
    },
    {
      question: "How much parent involvement is required?",
      answer: "For younger students (Grades 1-2), we recommend parents be nearby during live classes to help with technical issues and keep children focused. Grades 3-5 typically need less hands-on support. We provide weekly parent updates and are always available for communication.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -15, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        delay: index * 0.08,
      },
    }),
  };

  return (
    <section id="faq" className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring", stiffness: 60 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Al-Fajr Academy
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                custom={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="perspective-1000"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="relative glass-card rounded-3xl px-8 border border-border/20 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden backdrop-blur-xl bg-gradient-to-r from-background/60 to-background/40"
                >
                  {/* Decorative gradient blob */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <AccordionTrigger className="text-left hover:no-underline py-6 group">
                    <div className="flex items-center gap-4 pr-4">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 shadow-md"
                      >
                        <span className="text-primary font-bold text-lg">{index + 1}</span>
                      </motion.div>
                      <span className="text-lg font-bold font-poppins group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AccordionContent className="text-muted-foreground pb-6 pl-14 leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </motion.div>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <a href="/#enrollment">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:shadow-xl transition-smooth"
            >
              Contact Us
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
