"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion,   AnimatePresence } from 'framer-motion';
import { Github, Twitter, Linkedin, Brain, Globe, Cpu, Command, } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ParticleField = () => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};


const RoleText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Blockchain Engineer', 'GenAI Engineer ', 'Full Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <motion.div 
      className="text-2xl md:text-3xl mb-12 h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="relative overflow-hidden h-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={roles[currentIndex]}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-600"
          >
            {roles[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const UltraModernPortfolio = () => {
  const [,setMousePosition] = useState({ x: 0, y: 0 });
  // const [setActiveSection] = useState('home');
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll();

  //   {
  //     title: "Quantum DeFi Protocol",
  //     category: "Blockchain",
  //     image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=2073&auto=format&fit=crop",
  //     tech: ["Solidity", "Web3.js", "React"],
  //     description: "Next-gen DeFi platform with quantum-resistant security",
  //     color: "from-purple-600 to-blue-600",
  //   },
  //   {
  //     title: "Neural Art Engine",
  //     category: "AI",
  //     image: "https://images.unsplash.com/photo-1681412332858-ec477ef5a550?q=80&w=2128&auto=format&fit=crop",
  //     tech: ["Python", "TensorFlow", "DALL-E"],
  //     description: "Generative AI system for creating digital masterpieces",
  //     color: "from-pink-600 to-purple-600"
  //   },
  //   {
  //     title: "Metaverse Analytics",
  //     category: "Data Science",
  //     image: "https://images.unsplash.com/photo-1676299081847-8b021cd4e952?q=80&w=2070&auto=format&fit=crop",
  //     tech: ["Python", "PyTorch", "Three.js"],
  //     description: "3D visualization of blockchain data in virtual space",
  //     color: "from-blue-600 to-cyan-600"
  //   }
  // ];

  // First, update your projects data to include GitHub links:
  const projects = [
    {
      title: "Blockchain Funding Contract",
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop",
      tech: ["Solidity", "Foundry"],
      description: "Smart Contract for Funding Application",
      color: "from-purple-600 to-blue-600",
      github: "https://github.com/alimurtaza8/Smart_Contract_Projects/tree/main/Foundry-Funding-Contract"
    },
    {
      title: "Blockchain Decentralized-Voting-System",
      category: "Blockchain",
      // image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=2073&auto=format&fit=crop",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2073&auto=format&fit=crop",
      tech: ["Solidity", "Foundry"],
      description: "Decentralized-Voting-System Application",
      color: "from-blue-600 to-orange-600",
      github: "https://github.com/alimurtaza8/Smart_Contract_Projects/tree/main/Foundry-Decentralized-Voting-System"
    },
    {
      title: "AI diet planner",
      category: "AI",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
      tech: ["Python", "OpenAI"],
      description: "Generative AI system for guiding about diet plan",
      color: "from-pink-600 to-purple-600",
      github: "https://github.com/alimurtaza8/AI-Innovations-Hub/tree/main/AI%20diet%20planner"
    },
    {
      title: "Ollama llama Text Summarizer",
      category: "AI",
      // image: "https://images.unsplash.com/photo-1655720033654-a4239d966b39?q=80&w=2070&auto=format&fit=crop",
      image: "https://plus.unsplash.com/premium_photo-1677016464632-8b4b92bfa50f?q=80&w=2070&auto=format&fit=crop",
      tech: ["Python", "Ollama"],
      description: "Generative AI system for text summarizer",
      color: "from-yellow-600 to-blue-600",
      github: "https://github.com/alimurtaza8/AI-Innovations-Hub/tree/main/Ollama%20llama%20Text%20Summarizer"
    },
    {
      title: "House Price Prediction Data Science Project",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
      tech: ["Python", "sklearn", "pandas", "numpy", "seaborn"],
      description: "Great Model for predict the house price",
      color: "from-blue-600 to-cyan-600",
      github: "https://github.com/alimurtaza8/Data-Science-Projects/tree/main/California%20House%20Price%20Prediction%20Project"
    }
  ];




  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // const calculateRotation = (element) => {
  //   if (!element) return { x: 0, y: 0 };
  //   const rect = element.getBoundingClientRect();
  //   const x = (mousePosition.y - rect.top - rect.height / 2) / 20;
  //   const y = (mousePosition.x - rect.left - rect.width / 2) / 20;
  //   return { x, y };
  // };

  return (
    <div className="bg-black text-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent_70%)]" />
        <ParticleField />
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/50 to-black" />
          <motion.div
            className="absolute inset-0"
            style={{
              // background: `url('https://images.unsplash.com/photo-1681412332858-ec477ef5a550?q=80&w=2128&auto=format&fit=crop')`,
              // background: `url('https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.3) hue-rotate(45deg)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              filter: [
                'brightness(0.3) hue-rotate(45deg)',
                'brightness(0.4) hue-rotate(90deg)',
                'brightness(0.3) hue-rotate(45deg)'
              ]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-bold mb-8"
              style={{
                background: 'linear-gradient(to right, #fff, #8b5cf6, #ec4899, #fff)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'shine 5s linear infinite',
              }}
            >
              Ali Murtaza
            </motion.h1>

            {/* Animated Role Text */}
            <RoleText />
            {/* <motion.div 
              className="text-2xl md:text-3xl mb-12 h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative overflow-hidden h-full">
                <AnimatePresence mode="wait">
                  {['Blockchain Engineer','Full Stack Engineer','Full Stack Developer'].map((text, i) => (
                    <motion.p
                      key={text}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                    >
                      {text}
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div> */}

            {/* Tech Stack Icons */}
            <motion.div 
              className="flex justify-center gap-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { Icon: Globe, gradient: "from-purple-500 to-blue-500" },
                { Icon: Cpu, gradient: "from-blue-500 to-cyan-500" },
                { Icon: Brain, gradient: "from-cyan-500 to-green-500" },
                { Icon: Command, gradient: "from-green-500 to-yellow-500" }
              ].map(({ Icon, gradient }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 180,
                    transition: { duration: 0.5 }
                  }}
                  className={`p-4 rounded-xl bg-gradient-to-br ${gradient} backdrop-blur-lg relative group`}
                >
                  <Icon className="w-8 h-8 transform group-hover:rotate-180 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {[
                { href: "https://twitter.com/AliMurt90850271", Icon: Twitter, color: "blue" },
                { href: "https://www.linkedin.com/in/ali-murtaza-361110246/", Icon: Linkedin, color: "indigo" },
                { href: "https://github.com/alimurtaza8", Icon: Github, color: "purple" }
              ].map(({ href, Icon, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                  className={`p-4 bg-${color}-500/20 rounded-full relative group`}
                >
                  <Icon className="w-6 h-6 relative z-10" />
                  <div className={`absolute inset-0 bg-${color}-500/40 rounded-full blur group-hover:blur-xl transition-all duration-500`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-2 h-2 bg-white rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
       {projects.map((project, index) => (
      <motion.div
      key={index}
      className="relative group perspective"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      <motion.div
        className="relative preserve-3d"
        whileHover={{ 
          scale: 1.05,
          rotateX: 5,
          rotateY: 5,
          transition: { duration: 0.5 }
        }}
      >
        <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-purple-500/30 backdrop-blur-lg">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative h-64 group">
              <motion.div 
                className="absolute inset-0 bg-cover bg-center transform"
                style={{ backgroundImage: `url(${project.image})` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
  
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Github className="w-6 h-6" />
                  <span className="font-medium">View on GitHub</span>
                </div>
              </div>
            </div>
          </a>
          
          <div className="p-6 relative">
            <motion.h3 
              className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
              whileHover={{ scale: 1.05 }}
            >
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.title}
              </a>
            </motion.h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <motion.span 
                  key={techIndex}
                  className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-sm backdrop-blur-lg`}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} opacity-80 hover:opacity-100 transition-opacity duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </motion.a>
            </div>
          </Card>
        </motion.div>
      </motion.div>
      ))}
    </div>

  
      <footer className="py-12 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Ali Murtaza. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default UltraModernPortfolio;

          