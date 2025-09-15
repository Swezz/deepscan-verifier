import { useState } from "react";
import { Menu, X, Shield, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="h-8 w-8 text-primary glow-primary" />
            <span className="text-xl font-bold gradient-text">Reality Check</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-300">
                Home
              </a>
              <a href="#detect" className="text-foreground hover:text-primary transition-colors duration-300">
                Detection
              </a>
              <a href="#tech" className="text-foreground hover:text-primary transition-colors duration-300">
                Technology
              </a>
              <Button variant="outline" size="sm" className="ml-4 glow-primary">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 glass rounded-lg mt-2">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#detect" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Detection
              </a>
              <a href="#tech" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Technology
              </a>
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;