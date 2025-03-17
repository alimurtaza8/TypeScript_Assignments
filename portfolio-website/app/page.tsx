"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion,   AnimatePresence } from 'framer-motion';
import { Github, Twitter, Linkedin, Brain, Globe, Cpu, Command, Database, Layers, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Chatbot from '@/components/Chatbot';

// const ParticleField = () => {
//   const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

//   useEffect(() => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight
//     });

//     const handleResize = () => {
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(50)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-white/50 dark:bg-gray-100 rounded-full"
//           animate={{
//             x: [Math.random() * dimensions.width, Math.random() * dimensions.width],
//             y: [Math.random() * dimensions.height, Math.random() * dimensions.height],
//             scale: [0, 1, 0],
//           }}
//           transition={{
//             duration: Math.random() * 10 + 5,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

interface Particle {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
}

const ParticleField = () => {
  const [, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1000,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  // const [particles, setParticles] = useState([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const initializeParticles = () => {
      const newParticles = Array.from({ length: 50 }, () => ({
        startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        startY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        endX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        endY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        duration: Math.random() * 25 + 20  // Slower movement: between 20-45 seconds
      }));
      setParticles(newParticles);
    };

    if (typeof window !== 'undefined') {
      updateDimensions();
      initializeParticles();
      window.addEventListener('resize', updateDimensions);
      
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/50 dark:bg-gray-100 rounded-full"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            willChange: 'transform'
          }}
          initial={{
            x: particle.startX,
            y: particle.startY,
            scale: 0
          }}
          animate={{
            x: [particle.startX, particle.endX, particle.startX],
            y: [particle.startY, particle.endY, particle.startY],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.5, 1]
          }}
        />
      ))}
    </div>
  );
};



const RoleText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Software Engineer','Blockchain Engineer', 'GenAI Engineer ', 'Full Stack Developer'];

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

const AboutUs = () => {
  return (
    <div>
    <div className="bg-black text-white min-h-screen p-8">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')`,
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
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-black/50 to-black" />
        </div>

        <motion.h1 
          className="relative text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
      </section>

      {/* Main Content */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Bio Section */}
          <motion.div
            className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
              Journey & Experience
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed">
                As a Web3 developer and AI engineer, I&apos;ve dedicated my career to exploring the intersection of blockchain technology and artificial intelligence. My journey began with a deep fascination for how these technologies could reshape our digital future.
              </p>
              <p className="text-xl leading-relaxed">
                With a background in computer science and a passion for innovation, I&apos;ve worked on various projects ranging from DeFi protocols to AI-powered applications. My expertise spans across smart contract development, machine learning model deployment, and full-stack web development.
              </p>
              <p className="text-xl leading-relaxed">
                I believe in building decentralized solutions that are not only technically robust but also accessible and user-friendly. My goal is to contribute to the Web3 ecosystem while making complex technologies more approachable.
              </p> */}
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                      Journey & Experience
                    </h2>
                    <div className="space-y-6 text-gray-300">
                      <p className="text-xl leading-relaxed">
                        As a Web3 developer and AI engineer, I&apos;ve dedicated my career to exploring the intersection of blockchain technology and artificial intelligence. My journey began with a deep fascination for how these technologies could reshape our digital future.
                      </p>
                      <p className="text-xl leading-relaxed">
                        With a background in computer science and a passion for innovation, I&apos;ve worked on various projects ranging from Smart Contract Web3 dApps to AI-powered applications. My expertise spans across smart contract development, Agentic AI Assistant development, machine learning model and full-stack web development.
                      </p>
                      <p className="text-xl leading-relaxed">
                        I believe in building decentralized solutions that are not only technically robust but also accessible and user-friendly. My goal is to contribute to the Web3 ecosystem and AI community while making complex technologies more approachable.
                      </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              // {
              //   title: "Blockchain Expertise",
              //   icon: Database,
              //   skills: ["Smart Contract Development", "DeFi Protocol Design", "Web3 Integration", "Blockchain Architecture"],
              //   gradient: "from-purple-600 to-blue-600"
              // },
              // {
              //   title: "AI & Machine Learning",
              //   icon: Brain,
              //   skills: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Model Deployment"],
              //   gradient: "from-blue-600 to-cyan-600"
              // },
              // {
              //   title: "Frontend Development",
              //   icon: Layers,
              //   skills: ["React/Next.js", "Three.js/WebGL", "Responsive Design", "UI/UX Implementation"],
              //   gradient: "from-cyan-600 to-green-600"
              // },
              // {
              //   title: "Backend Development",
              //   icon: Code,
              //   skills: ["Node.js/Express", "Python/Django", "API Design", "Database Management"],
              //   gradient: "from-green-600 to-yellow-600"
              // }
                                    {
                                      title: "Blockchain Development",
                                      icon: Database,
                                      skills: ["Smart Contract Development", "NFT Systems", "Web3 Integration", "DApps"],
                                      gradient: "from-cyan-600 to-blue-800"
                                    },
                                    {
                                      title: "AI Engineering",
                                      icon: Brain,
                                      skills: ["LLM Development","AI Agent", "Natural Language Processing", "Predictive Analytics", "ML Model Deployment"],
                                      gradient: "from-blue-600 to-cyan-600"
                                    },
                                    {
                                      title: "Frontend Development",
                                      icon: Layers,
                                      skills: ["Next.js", "Three.js", "Responsive Design", "UI/UX Implementation"],
                                      gradient: "from-cyan-600 to-green-600"
                                    },
                                    {
                                      title: "Backend Development",
                                      icon: Code,
                                      skills: ["TypeScript", "Python", "Database Management"],
                                      gradient: "from-green-600 to-yellow-600"
                                    }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                  <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.gradient} mb-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${category.gradient} opacity-80 hover:opacity-100 transition-opacity duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

const Portfolio = () => {
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
      title: "Web3 Equipments Rental Marketplace Website",
      category: "Blockchain",
      image: "/images/p-1.png",
      tech: ["Solidity", "NextJs"],
      description: "Smart Contract based Web3 Marketplace",
      color: "from-cyan-600 to-blue-600",
      github: "https://tokenrent.vercel.app/"
    },
    {
      title: "E-Commerce Website",
      category: "Full Stack",
      image: "/images/p-5.png",
      tech: ["Nextjs", "Frontend"],
      description: "Modern E-Commerce Frontend Website",
      color: "from-purple-600 to-blue-600",
      github: "https://ui-and-ux-hackatone-project.vercel.app/"
    },
    // {
    //   title: "OrchestrAgent AI Agent Project",
    //   category: "AI Agent",
    //   image: "/images/p-7.png",
    //   tech: ["Python", "langgraph"],
    //   description: "Muli AI Agents Working Project",
    //   color: "from-pink-600 to-purple-600",
    //   github: "https://github.com/alimurtaza8/Agentic-AI-Staff/tree/main/OrchestrAgent%20Project"
    // },
    {
      title: "GrowthMindset.AI Agent Project",
      category: "AI Agent",
      image: "/images/growth.png",
      tech: ["Python", "streamlit"],
      description: "Muli AI Agents Working Project",
      color: "from-cyan-600 to-blue-600",
      github: "https://growthmindai.streamlit.app/"
    },

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
    {/* // <div className='from-cyan-900/20 via-cyan/50 to-black text-white' ref> */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent_70%)]" />
        <ParticleField />
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-cyan/50 to-black" />
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
                // background: 'linear-gradient(to right, #fff, #8b5cf6, #ec4899, #fff)',
                background: 'linear-gradient(to right, #fff, #00FFFF, #0000FF, #fff)',
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
                { Icon: Globe, gradient: "from-cyan-500 to-blue-500" },
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
                { href: "https://github.com/alimurtaza8", Icon: Github, color: "blue" }
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

      <Chatbot />

    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
    </div> */}

    {/* Card Grid */}
    <section className="relative py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-purple-500/30 backdrop-blur-lg h-full">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative group h-full"
                      >
                        <div className="relative h-48">
                          <motion.div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.image})` }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
                        </div>
    
                        <div className="p-6">
                          <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {project.title}
                          </h3>
                          <p className="text-gray-300 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.color} opacity-80`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
    
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex items-center gap-2 text-white">
                            <Github className="w-6 h-6" />
                            <span className="font-medium">View</span>
                          </div>
                        </div>
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>



    {/* About us code*/}

   <AboutUs/>

    </div>
  );
};

export default Portfolio;

          