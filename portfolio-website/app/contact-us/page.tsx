"use client";

import React, { useState, useRef ,useEffect} from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Database, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from "@emailjs/browser";
import Link from 'next/link';

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

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setError("");
      
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email sent successfully!', result.text);
      setSubmitStatus('success');
      if (formRef.current) formRef.current.reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setError(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // const validateForm = () => {
  //   const newErrors: Record<string, string> = {};
  //   if (!formData.from_name.trim()) newErrors.from_name = 'Name is required';
  //   if (!formData.user_email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
  //     newErrors.user_email = 'Invalid email address';
  //   }
  //   if (!formData.message.trim()) newErrors.message = 'Message is required';
  //   return Object.keys(newErrors).length === 0;
  // };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <ParticleField />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-b from-cyan-900/20 via-cyan/50 to-black">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-600">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to chat about tech, drop me a message below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <input
                      type="text"
                      required
                      name="from_name"
                      placeholder="Your Name"
                      className={`w-full p-4 bg-black/50 backdrop-blur-lg rounded-xl border ${
                        error.includes('from_name') ? 'border-red-500' : 'border-purple-500/30'
                      } focus:border-purple-400 focus:ring-2 focus:ring-purple-600/50 transition-all`}
                      onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                    />
                  </motion.div>
                </div>

                <div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    <input
                      type="email"
                      required
                      name="user_email"
                      placeholder="Your Email"
                      className={`w-full p-4 bg-black/50 backdrop-blur-lg rounded-xl border ${
                        error.includes('user_email') ? 'border-red-500' : 'border-purple-500/30'
                      } focus:border-purple-400 focus:ring-2 focus:ring-purple-600/50 transition-all`}
                      onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                    />
                  </motion.div>
                </div>

                <div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    <textarea
                      name="message"
                      required
                      placeholder="Your Message"
                      rows={5}
                      className={`w-full p-4 bg-black/50 backdrop-blur-lg rounded-xl border ${
                        error.includes('message') ? 'border-red-500' : 'border-purple-500/30'
                      } focus:border-purple-400 focus:ring-2 focus:ring-purple-600/50 transition-all`}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </motion.div>
                </div>
              </div>

              <input type="hidden" name="to_name" value="Ali Murtaza" />

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-[1.02] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700 translate-x-full group-hover:translate-x-0 transition-transform duration-300"/>
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Mail className="w-5 h-5" />
                    )}
                    {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                  </span>
                </Button>
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
              </motion.div>
            </motion.form>

            {/* Rest of your contact info section remains the same */}
            {/* ... */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-purple-500/30 h-full">
                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-600">
                  Direct Channels
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-gray-400">alibalochbirmani760@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Blockchain Address</h3>
                      {/* <p className="text-gray-400"></p>
                       */}
                       <Link href="https://sepolia.etherscan.io/address/0x5E64eC4d4BcE73195BC6F180c2b20c4160f83D53">0x5E64eC4d4BcE73195BC6F180c2b20c4160f83D53</Link>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">Find Me Online</h3>
                  <div className="flex gap-6">
                    {[
                      { href: "https://github.com/alimurtaza8", Icon: Github },
                      { href: "https://twitter.com/AliMurt90850271", Icon: Twitter },
                      { href: "https://www.linkedin.com/in/ali-murtaza-361110246/", Icon: Linkedin }
                    ].map(({ href, Icon }, index) => (
                      <motion.a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="p-3 bg-purple-500/20 rounded-full relative group"
                      >
                        <Icon className="w-6 h-6" />
                        <div className="absolute inset-0 bg-cyan-500/40 rounded-full blur group-hover:blur-xl transition-all duration-500" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;