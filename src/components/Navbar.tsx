import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Subjects", path: "/#subjects" },
    { name: "Teachers", path: "/#teachers" },
    { name: "Blog", path: "/#blog" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path.replace("/#", "/"));
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth glass-card ${
          scrolled ? "shadow-elegant" : ""
        } h-24 overflow-hidden`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo (big, responsive) */}
            <Link to="/" aria-label="Al-Fajr Academy" className="flex items-center h-full overflow-hidden" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <motion.img
                whileHover={{ rotate: 360, scale: 1.02 }}
                transition={{ duration: 0.6 }}
                src="/images/logo.png"
                alt="Al-Fajr Academy logo"
                className="object-contain w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 p-0 max-h-full"
                style={{ background: "transparent" }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`relative font-medium transition-smooth hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4 h-full">
                            {/* Dark Mode Toggle */}
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setIsDark(!isDark)}
                              className=" md:inline-flex p-2 rounded-full glass-card"
                              aria-label="Toggle dark mode"
                            >
                              {isDark ? (
                                <FiSun className="w-5 h-5 text-accent" />
                              ) : (
                                <FiMoon className="w-5 h-5 text-primary" />
                              )}
                            </motion.button>
                            
                            {/* Enroll Button */}
                            <Link to="/#enrollment">
                              <Button className="hidden md:flex gradient-primary text-white hover:shadow-glow transition-smooth">
                                Enroll Now
                              </Button>
                            </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

  {/* Spacer to push page content below fixed navbar (matches navbar height) */}
  <div aria-hidden="true" className="h-24" />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 md:hidden glass-card pt-20 md:pt-24"
        >
          <div className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-poppins font-semibold ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Link to="/#enrollment" onClick={() => setMobileMenuOpen(false)}>
              <Button className="gradient-primary text-white mt-4">
                Enroll Now
              </Button>
            </Link>
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="inline-flex p-2 rounded-full glass-card"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-accent" />
              ) : (
                <FiMoon className="w-5 h-5 text-primary" />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </>
  );
};