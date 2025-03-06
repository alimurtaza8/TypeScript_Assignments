"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github} from 'lucide-react';
import { Card } from '@/components/ui/card';

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
    title: "Defi Decentralized Stable Coin",
    category: "Blockchain",
    image: "/images/stable.jpg",
    tech: ["Solidity", "ERC20"],
    description: "Smart Contract based Defi Stable Coin",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/Blockchain-Projects/tree/main/Foundry-Defi-StableCoin"
  },

  {
    title: "Blockchain NFT Project ",
    category: "Blockchain",
    image: "/images/pug.png",
    tech: ["Solidity", "ERC721"],
    description: "Smart Contract based NFT",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/Block-Chain-Projects/tree/main/Foundry-NFTs"
  },
  {
    title: "Smart Contract Lottery Project",
    category: "Blockchain",
    image: "/images/p-2.png",
    tech: ["Solidity", "Chainlink"],
    description: "Smart Contract based Lottery Project Automations",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/Block-Chain-Projects/tree/main/Foundry-smart-contract-lottery"
  },
  {
    title: "Blockchain ERC20 Token Project",
    category: "Blockchain",
    image: "/images/p-3.png",
    tech: ["Solidity", "ERC20"],
    description: "ERC20 Token Project",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/Block-Chain-Projects/tree/main/Foundry-ERC-20-Token"
  },
  
  
  {
    title: "Blockchain Funding Contract Project",
    category: "Blockchain",
    image: "/images/p-4.jpg",
    tech: ["Solidity", "Foundry"],
    description: "Smart Contract for Funding Application",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/Smart_Contract_Projects/tree/main/Foundry-Funding-Contract"
  },
  {
    title: "Blockchain Decentralized Voting System",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2073&auto=format&fit=crop",
    tech: ["Solidity", "Foundry"],
    description: "Decentralized Voting System Application",
    color: "from-blue-600 to-orange-600",
    github: "https://github.com/alimurtaza8/Smart_Contract_Projects/tree/main/Foundry-Decentralized-Voting-System"
  },

  {
    title: "SmartChain Blog Website",
    category: "Full Stack",
    image: "/images/r-1.png",
    tech: ["Nextjs", "Frontend"],
    description: "Blockchain Blog Website",
    color: "from-cyan-600 to-blue-600",
    github: "https://blockchain-blog-iota.vercel.app/"
  },
  {
    title: "Vehical Intelligence Website",
    category: "Full Stack",
    image: "/images/r-2.png",
    tech: ["Nextjs", "Frontend"],
    description: "Modern Vehical Intelligence Frontend Website",
    color: "from-cyan-600 to-blue-600",
    github: "https://vehicalintelligence.vercel.app/"
  },


  {
    title: "E-Commerce Website",
    category: "Full Stack",
    image: "/images/p-5.png",
    tech: ["Nextjs", "Frontend"],
    description: "Modern E-Commerce Frontend Website",
    color: "from-cyan-600 to-blue-600",
    github: "https://ui-and-ux-hackatone-project.vercel.app/"
  },

  {
    title: "E-Commerce Web Application",
    category: "Full Stack",
    image: "/images/p-6.png",
    tech: ["Nextjs", "Frontend"],
    description: "Modern E-Commerce Website",
    color: "from-cyan-600 to-blue-600",
    github: "https://e-commerce-api-website.vercel.app/"
  },

  {
    title: "MediEquipments Medical Website",
    category: "Full Stack",
    image: "/images/medical-image.png",
    tech: ["Nextjs", "Frontend"],
    description: "Modern Medical Website",
    color: "from-cyan-600 to-blue-600",
    github: "https://mediequip.vercel.app/"
  },

  {
    title: "GrowthMindset.AI Agent Project",
    category: "AI Agent",
    image: "/images/growth.png",
    tech: ["Python", "streamlit"],
    description: "Muli AI Agents Working Project",
    color: "from-cyan-600 to-blue-600",
    github: "https://growthmindai.streamlit.app/"
  },

  {
    title: "OrchestrAgent AI Agent Project",
    category: "AI Agent",
    image: "/images/p-7.png",
    tech: ["Python", "langgraph"],
    description: "Muli AI Agents Working Project",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/Agentic-AI-Staff/tree/main/OrchestrAgent%20Project"
  },

  {
    title: "Multi AI Agent Project",
    category: "AI Agent",
    image: "/images/p-8.jpg",
    tech: ["Python", "langgraph"],
    description: "Muli AI Agents Working Project",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/Agentic-AI-Staff/tree/main/OrchestrAgent%20Project"
  },

  {
    title: "Student Helper AI Agent Project",
    category: "AI Agent",
    image: "/images/p-9.jpg",
    tech: ["Python", "langgraph"],
    description: "AI Agent Project",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/Agentic-AI-Staff/tree/main/Student%20Helper%20Agentic%20ChatAI"
  },

  {
    title: "Professional Unit Converter",
    category: "Unit Converter Scientific System",
    image: "/images/converter.png",
    tech: ["Python", "stream"],
    description: "Muli Support unit converter Working Project",
    color: "from-cyan-600 to-blue-600",
    github: "https://uintconverter.streamlit.app/"
  },

  {
    title: "AI Diet Planner",
    category: "AI",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
    tech: ["Python", "OpenAI"],
    description: "Generative AI system for diet planning",
    color: "from-cyan-600 to-blue-600",
    github: "https://github.com/alimurtaza8/AI-Innovations-Hub/tree/main/AI%20diet%20planner"
  },
  {
    title: "Text Summarizer",
    category: "AI",
    image: "https://plus.unsplash.com/premium_photo-1677016464632-8b4b92bfa50f?q=80&w=2070&auto=format&fit=crop",
    tech: ["Python", "Ollama"],
    description: "Generative AI system for text summarization",
    color: "from-yellow-600 to-blue-600",
    github: "https://github.com/alimurtaza8/AI-Innovations-Hub/tree/main/Ollama%20llama%20Text%20Summarizer"
  },
  {
    title: "House Price Prediction",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    tech: ["Python", "sklearn", "pandas"],
    description: "Machine learning model for price prediction",
    color: "from-blue-600 to-cyan-600",
    github: ""
  }
];

export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen">
      <ParticleField />
      {/* Animated Hero Section */}
      {/* <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-cyan/50 to-black" />
        
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            My Projects
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
                   My Projects
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                 Explore my portfolio of innovative Web3, AI solutions and Full Stack Websites, showcasing cutting-edge blockchain applications and intelligent systems.
                </motion.p>
              </div>
            </section>

      {/* Projects Grid */}
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

    </div>
  );
}