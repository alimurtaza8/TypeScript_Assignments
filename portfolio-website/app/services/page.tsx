

"use client";

import React , {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Layers, Code, Globe, Cpu} from 'lucide-react';
import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

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


const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Blockchain Development",
    description: "Building decentralized applications and smart contracts with Web3 integration",
    gradient: "from-cyan-600 to-blue-600",
    features: ["Smart Contracts", "NFT Marketplaces", "Decentralized Voting", "Token Systems"],
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Agents & Machine Learning",
    description: "Developing intelligent systems and agentic AI solutions",
    gradient: "from-blue-600 to-cyan-600",
    features: ["Generative AI", "LLM Applications", "AI Chatbots", "Predictive Modeling"],
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Full-Stack Development",
    description: "Building modern web applications with Next.js and TypeScript",
    gradient: "from-cyan-600 to-green-600",
    features: ["Next.js", "TypeScript", "REST APIs", "Database Design"],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Science",
    description: "Data analysis and predictive modeling solutions",
    gradient: "from-green-600 to-yellow-600",
    features: ["Pandas/Numpy", "Data Visualization", "Statistical Analysis", "Python"],
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Smart Contracts",
    description: "Secure and efficient blockchain contract development",
    gradient: "from-yellow-600 to-orange-600",
    features: ["Foundry Framework", "ERC Standards", "DeFi Protocols", "Security Audits"],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Python Development",
    description: "End-to-end Python solutions and automation",
    gradient: "from-orange-600 to-cyan-600",
    features: ["Automation Scripts", "Data Analysis", "API Integration", "AI Development"],
  },
];

const ServicePage = () => {
  const router = useRouter();

  const start = () => {
    router.push("./contact-us")
  }
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <ParticleField />

      {/* Updated Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-b from-cyan-900/20 via-cyan/50 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technical Expertise
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

      {/* Services Grid - Keep the same structure but with updated content */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {services.map((service, index) => (
              // Keep card structure same but with updated content
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all group h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl text-gray-400 font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Updated CTA Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Ready to Implement Innovation?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to build blockchain solutions and intelligent systems that push technological boundaries.
            </p>
            <button
              className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-105"
              onClick={start}
            >
              Start Collaboration
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;