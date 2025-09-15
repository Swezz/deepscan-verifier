import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, File, Video, Image, AudioLines, FileText, Check, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface UploadCardProps {
  type: 'video' | 'image' | 'audio' | 'text';
  title: string;
  description: string;
  acceptedTypes: string;
  endpoint: string; // Placeholder for Python backend endpoint
}

type AnalysisResult = {
  verdict: 'real' | 'fake';
  confidence: number;
};

const UploadCard = ({ type, title, description, acceptedTypes, endpoint }: UploadCardProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [textContent, setTextContent] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const getIcon = () => {
    switch (type) {
      case 'video': return Video;
      case 'image': return Image;
      case 'audio': return AudioLines;
      case 'text': return FileText;
      default: return File;
    }
  };

  const IconComponent = getIcon();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
    simulateUpload();
  };

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleAnalyze = async () => {
    if (!file && type !== 'text') return;
    if (type === 'text' && !textContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to analyze",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);

    try {
      // ---- BACKEND INTEGRATION PLACEHOLDER ----
      // Replace with actual Python FastAPI/Flask endpoint
      // This is where you'll connect to your deepfake detection scripts
      
      const formData = new FormData();
      if (file) {
        formData.append('file', file);
      }
      if (type === 'text') {
        formData.append('text', textContent);
      }

      // Simulated API call - replace with actual endpoint
      console.log(`Making request to ${endpoint}:`, { file: file?.name, text: textContent });
      
      // Simulate analysis delay
      await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));

      // Mock response - replace with actual API response
      const mockResult: AnalysisResult = {
        verdict: Math.random() > 0.6 ? 'fake' : 'real',
        confidence: Math.round((0.7 + Math.random() * 0.3) * 100) / 100
      };

      /* 
      ACTUAL BACKEND INTEGRATION WOULD LOOK LIKE:
      
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      // Expected response format:
      // {
      //   "verdict": "real" or "fake",
      //   "confidence": 0.87
      // }
      
      setResult(result);
      */

      setResult(mockResult);
      
      toast({
        title: "Analysis Complete",
        description: `Detection confidence: ${(mockResult.confidence * 100).toFixed(1)}%`,
      });

    } catch (error) {
      console.error('Analysis failed:', error);
      toast({
        title: "Analysis Failed",
        description: "Something went wrong during analysis. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetUpload = () => {
    setFile(null);
    setTextContent('');
    setResult(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-6 space-y-6 hover:glow-primary transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center space-x-3">
        <div className="p-3 rounded-lg bg-gradient-primary">
          <IconComponent className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Upload Area */}
      {type !== 'text' ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 cursor-pointer ${
            dragActive ? 'border-primary bg-primary/5 glow-primary' : 'border-border hover:border-primary/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg font-medium mb-2">
            {file ? file.name : `Drop your ${type} file here`}
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            or click to browse • {acceptedTypes}
          </p>
          
          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedTypes}
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
            className="hidden"
          />
        </div>
      ) : (
        <div className="space-y-4">
          <textarea
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            placeholder="Paste news article, social media post, or any text content here..."
            className="w-full h-32 p-4 rounded-lg bg-input border border-border focus:border-primary focus:ring-1 focus:ring-primary resize-none"
          />
        </div>
      )}

      {/* Upload Progress */}
      {isUploading && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Uploading...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleAnalyze}
          disabled={(!file && type !== 'text') || (type === 'text' && !textContent.trim()) || isUploading || isAnalyzing}
          className="flex-1 bg-gradient-primary hover:opacity-90"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Analyzing...
            </>
          ) : (
            'Analyze'
          )}
        </Button>
        
        {(file || textContent) && (
          <Button variant="outline" onClick={resetUpload}>
            Reset
          </Button>
        )}
      </div>

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`glass rounded-lg p-4 border-l-4 ${
            result.verdict === 'real' 
              ? 'border-l-success bg-success/5' 
              : 'border-l-destructive bg-destructive/5'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {result.verdict === 'real' ? (
                <Check className="h-6 w-6 text-success" />
              ) : (
                <X className="h-6 w-6 text-destructive" />
              )}
              <div>
                <p className="font-semibold text-lg">
                  {result.verdict === 'real' ? 'Likely Authentic' : 'Deepfake Detected'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Confidence: {(result.confidence * 100).toFixed(1)}%
                </p>
              </div>
            </div>
            <div className={`text-2xl font-bold ${result.verdict === 'real' ? 'text-success' : 'text-destructive'}`}>
              {(result.confidence * 100).toFixed(0)}%
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default UploadCard;