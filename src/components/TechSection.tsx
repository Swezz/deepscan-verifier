import { motion } from "framer-motion";
import { Brain, Network, Database, Zap, Shield, Eye } from "lucide-react";

const TechSection = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Advanced CNN and transformer architectures trained on millions of authentic and synthetic samples",
      features: ["ResNet-50 backbone", "Vision Transformers", "Multi-modal fusion"]
    },
    {
      icon: Network,
      title: "Ensemble Detection",
      description: "Multiple specialized models working together to achieve higher accuracy and reduce false positives",
      features: ["Face detection networks", "Temporal analysis", "Frequency domain analysis"]
    },
    {
      icon: Database,
      title: "Training Datasets",
      description: "Comprehensive datasets including FaceForensics++, Deepfake Detection Challenge, and proprietary collections",
      features: ["50M+ samples", "Cross-platform data", "Continuous updates"]
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Optimized inference pipeline with GPU acceleration for sub-second analysis of complex media",
      features: ["CUDA optimization", "Batch processing", "Edge deployment"]
    }
  ];

  const metrics = [
    { icon: Eye, metric: "99.2%", label: "Video Detection", color: "text-primary" },
    { icon: Shield, metric: "98.7%", label: "Image Analysis", color: "text-secondary" },
    { icon: Brain, metric: "97.9%", label: "Audio Detection", color: "text-accent" },
    { icon: Zap, metric: "96.4%", label: "Text Analysis", color: "text-success" }
  ];

  return (
    <section id="tech" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technology Behind It</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our detection system combines cutting-edge machine learning models, 
            extensive training datasets, and advanced signal processing techniques.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-primary transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <tech.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground mb-4">{tech.description}</p>
                  <ul className="space-y-1">
                    {tech.features.map((feature, i) => (
                      <li key={i} className="text-sm text-primary flex items-center">
                        <div className="w-1 h-1 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Detection Accuracy by Media Type
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className={`inline-flex p-4 rounded-full glass glow-primary mb-4 ${item.color}`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${item.color}`}>
                  {item.metric}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/20 text-center">
            <p className="text-muted-foreground">
              Continuously improving through adversarial training and real-world feedback
            </p>
          </div>
        </motion.div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-xl p-12">
            <Network className="h-16 w-16 mx-auto text-primary glow-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">Neural Network Architecture</h3>
            <p className="text-muted-foreground mb-6">
              Multi-stage pipeline with feature extraction, temporal analysis, and ensemble voting
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="glass rounded-lg p-4">
                <div className="text-primary font-semibold">Input Processing</div>
                <div className="text-sm text-muted-foreground mt-2">Preprocessing & feature extraction</div>
              </div>
              <div className="glass rounded-lg p-4">
                <div className="text-secondary font-semibold">Analysis</div>
                <div className="text-sm text-muted-foreground mt-2">Multi-model inference & scoring</div>
              </div>
              <div className="glass rounded-lg p-4">
                <div className="text-accent font-semibold">Decision</div>
                <div className="text-sm text-muted-foreground mt-2">Ensemble voting & confidence</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;