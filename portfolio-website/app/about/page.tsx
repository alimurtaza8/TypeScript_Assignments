"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Layers, Code } from 'lucide-react';

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
        startX: Math.random() * window.innerWidth,
        startY: Math.random() * window.innerHeight,
        endX: Math.random() * window.innerWidth,
        endY: Math.random() * window.innerHeight,
        duration: Math.random() * 25 + 20
      }));
      setParticles(newParticles);
    };

    if (typeof window !== 'undefined') {
      updateDimensions();
      initializeParticles();
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/50 dark:bg-gray-100 rounded-full"
          initial={{ x: particle.startX, y: particle.startY, scale: 0 }}
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



export default function About() {
  return (
    <div className="bg-black  text-white min-h-screen">
      <ParticleField />
      {/* Animated Hero Section */}
      {/* <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden"> */}
      {/* <section className="relative flex items-center justify-center overflow-hidden">

        
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-cyan/50 to-black" />
        
          <motion.div
          className="relative z-10 text-center " 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >  
           <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            About Me
          </motion.h1> 
           
            
        </motion.div>
      </section> */}

       <section className="relative min-h-[40vh] flex items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-b from-cyan-900/20 via-cyan/50 to-black">
              <div className="max-w-7xl mx-auto text-center">
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  About Me
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Combining blockchain innovation with AI capabilities and full-stack proficiency to deliver cutting-edge solutions
                </motion.p>
              </div>
            </section>

        {/* Main content */}

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
        
                {/* <motion.h1 
                  className="relative text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  About Me
                </motion.h1> */}
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
    //   </div>

      

    )
}



