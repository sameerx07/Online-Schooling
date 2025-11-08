import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

export const EnrollmentSection = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    parentEmail: "",
    studentName: "",
    grade: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Enrollment request sent!", {
        description: "We'll contact you within 24 hours.",
      });
      setFormData({
        parentName: "",
        parentEmail: "",
        studentName: "",
        grade: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="enrollment" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
              Join the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Founding Families
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Spots are limited for our first semester! Be part of a community that values both academic excellence and spiritual growth.
            </p>

            <div className="space-y-4">
              {[
                "✓ World-class curriculum",
                "✓ Expert Islamic educators",
                "✓ Small class sizes (max 15 students)",
                "✓ Personalized learning paths",
                "✓ 10% discount for founding families",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 shadow-elegant"
            >
              <h3 className="text-2xl font-bold font-poppins mb-6">
                Request Enrollment Info
              </h3>

              <div className="space-y-6">
                {/* Parent Name */}
                <div>
                  <Label htmlFor="parentName" className="text-base mb-2">
                    Parent's Full Name
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) =>
                      setFormData({ ...formData, parentName: e.target.value })
                    }
                    className="h-12 glass-card border-white/20"
                    placeholder="John Doe"
                  />
                </div>

                {/* Parent Email */}
                <div>
                  <Label htmlFor="parentEmail" className="text-base mb-2">
                    Parent's Email
                  </Label>
                  <Input
                    id="parentEmail"
                    type="email"
                    required
                    value={formData.parentEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, parentEmail: e.target.value })
                    }
                    className="h-12 glass-card border-white/20"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Student Name */}
                <div>
                  <Label htmlFor="studentName" className="text-base mb-2">
                    Student's Name
                  </Label>
                  <Input
                    id="studentName"
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) =>
                      setFormData({ ...formData, studentName: e.target.value })
                    }
                    className="h-12 glass-card border-white/20"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Grade */}
                <div>
                  <Label htmlFor="grade" className="text-base mb-2">
                    Student's Grade
                  </Label>
                  <Select
                    value={formData.grade}
                    onValueChange={(value) =>
                      setFormData({ ...formData, grade: value })
                    }
                    required
                  >
                    <SelectTrigger className="h-12 glass-card border-white/20">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Grade 1</SelectItem>
                      <SelectItem value="2">Grade 2</SelectItem>
                      <SelectItem value="3">Grade 3</SelectItem>
                      <SelectItem value="4">Grade 4</SelectItem>
                      <SelectItem value="5">Grade 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 gradient-primary text-white text-lg font-semibold hover:shadow-glow transition-smooth"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Request Info
                        <FiSend className="ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
