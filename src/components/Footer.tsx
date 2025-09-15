import { motion } from "framer-motion";
import { Github, Twitter, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary glow-primary" />
              <span className="text-xl font-bold gradient-text">Reality Check</span>
            </div>
            <p className="text-muted-foreground">
              Advanced AI-powered deepfake detection for a safer digital world.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="hover:glow-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:glow-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:glow-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Detection Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Detection Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Video Analysis</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Image Forensics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Audio Detection</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Text Verification</a></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Technology</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">Neural Networks</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Model Performance</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Research Papers</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Reality Check. All rights reserved. Built with advanced AI for digital authenticity.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="glass px-3 py-1 rounded-full">
              <span className="text-xs text-success">●</span>
              <span className="text-xs text-muted-foreground ml-2">All systems operational</span>
            </div>
            
            <div className="glass px-3 py-1 rounded-full">
              <span className="text-xs gradient-text font-mono">v2.1.0</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute bottom-8 left-8 opacity-30">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-2 h-2 rounded-full bg-primary glow-primary"
          />
        </div>
        
        <div className="absolute bottom-16 right-16 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-secondary glow-secondary"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;