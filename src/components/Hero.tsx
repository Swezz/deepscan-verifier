import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Eye } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full glow-primary"
          >
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Advanced AI Detection</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="gradient-text glitch">Reality Check</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Detect Deepfakes in <span className="text-primary">Video</span>, 
            <span className="text-secondary"> Image</span>, 
            <span className="text-accent"> Audio</span> & 
            <span className="text-success"> News</span>
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
          >
            {[
              { icon: Eye, text: "Neural Networks", color: "text-primary" },
              { icon: Zap, text: "Real-time Analysis", color: "text-secondary" },
              { icon: Shield, text: "99.2% Accuracy", color: "text-accent" }
            ].map((feature, index) => (
              <div key={index} className={`glass px-4 py-2 rounded-full flex items-center space-x-2 ${feature.color}`}>
                <feature.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button 
              variant="gradient"
              size="lg"
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById('detect')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Verification
              <Zap className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg glow-primary"
              onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}
            >
              How It Works
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground text-sm flex flex-col items-center space-y-2"
          >
            <span>Scroll to explore</span>
            <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;