import { motion } from "framer-motion";
import UploadCard from "./UploadCard";

const DetectionDashboard = () => {
  const detectionTypes = [
    {
      type: 'video' as const,
      title: 'Video Deepfake Detector',
      description: 'Analyze videos for AI-generated faces and synthetic content',
      acceptedTypes: '.mp4,.avi,.mov,.mkv',
      endpoint: '/api/video-detect' // Replace with actual Python FastAPI endpoint: <VIDEO_BACKEND_ENDPOINT>
    },
    {
      type: 'image' as const,
      title: 'Image Forensics',
      description: 'Detect manipulated photos and AI-generated images',
      acceptedTypes: '.jpg,.jpeg,.png,.webp',
      endpoint: '/api/image-detect' // Replace with actual Python endpoint: <IMAGE_BACKEND_ENDPOINT>
    },
    {
      type: 'audio' as const,
      title: 'Audio Clone Detector',
      description: 'Identify synthetic voices and audio deepfakes',
      acceptedTypes: '.mp3,.wav,.m4a,.aac',
      endpoint: '/api/audio-detect' // Replace with actual Python endpoint: <AUDIO_BACKEND_ENDPOINT>
    },
    {
      type: 'text' as const,
      title: 'Fake News Verifier',
      description: 'Analyze text content for AI-generated misinformation',
      acceptedTypes: 'text/plain',
      endpoint: '/api/news-detect' // Replace with actual Python endpoint: <NEWS_BACKEND_ENDPOINT>
    }
  ];

  return (
    <section id="detect" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Detection Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload your content and let our advanced AI models analyze it for signs of manipulation.
            Each detector uses state-of-the-art neural networks trained on millions of samples.
          </p>
        </motion.div>

        {/* Detection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detectionTypes.map((detector, index) => (
            <motion.div
              key={detector.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <UploadCard {...detector} />
            </motion.div>
          ))}
        </div>

        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "99.2%", label: "Detection Accuracy" },
            { value: "<3s", label: "Analysis Speed" },
            { value: "50M+", label: "Training Samples" },
            { value: "24/7", label: "Uptime" }
          ].map((stat, index) => (
            <div key={index} className="glass rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DetectionDashboard;