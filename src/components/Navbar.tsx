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
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          scrolled
            ? "glass-card shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo (replaced spans with responsive image, no background) */}
            <Link to="/" className="flex items-center gap-3">
              {/* wrapper constrains height so the logo never overflows the navbar */}
              <div className="h-10 sm:h-12 md:h-14 lg:h-16 flex items-center">
                <motion.img
                  src="/images/logo.png"
                  alt="TarbiyaX logo"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-full w-auto object-contain bg-transparent block"
                />
              </div>
              <span className="sr-only">TarbiyaX</span>
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
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full glass-card"
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

  {/* spacer to offset fixed navbar height so page content doesn't sit under the fixed nav */}
  <div className="h-16 sm:h-20 md:h-24 lg:h-28" aria-hidden="true" />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed inset-0 z-40 md:hidden glass-card pt-20"
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
          </div>
        </motion.div>
      )}
    </>
  );
};
