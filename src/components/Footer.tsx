import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = {
    About: [
      { name: "Our Story", path: "/about" },
      { name: "Teachers", path: "/#teachers" },
      { name: "Curriculum", path: "/curriculum" },
      { name: "Careers", path: "/careers" },
    ],
    Resources: [
      { name: "Blog", path: "/#blog" },
      { name: "FAQ", path: "/faq" },
      { name: "Support", path: "/support" },
      { name: "Contact", path: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, url: "#", label: "Facebook" },
    { icon: FiTwitter, url: "#", label: "Twitter" },
    { icon: FiInstagram, url: "#", label: "Instagram" },
    { icon: FiLinkedin, url: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* larger responsive logo for footer */}
                <div className="h-12 sm:h-14 md:h-16 lg:h-20 flex items-center">
                  <motion.img
                    src="/images/logo.png"
                    alt="TarbiyaX logo"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-full w-auto object-contain bg-transparent block"
                  />
                </div>
                {/* <span className="text-2xl sm:text-3xl font-bold font-poppins bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                  TarbiyaX
                </span> */}
              </div>
              <p className="text-muted-foreground mb-6">
                Modern online schooling for Grades 1-5, combining world-class curriculum with Islamic teachings.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:shadow-glow transition-smooth"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-poppins font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} TarbiyaX . All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-smooth">
                Privacy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-primary transition-smooth">
                Terms
              </Link>
              <span>•</span>
              <Link to="/cookies" className="hover:text-primary transition-smooth">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
