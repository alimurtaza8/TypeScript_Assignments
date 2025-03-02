// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Github, Twitter, Linkedin, Brain, Globe, Cpu, Command, Database, Layers, Code } from 'lucide-react';
// import { Card } from '@/components/ui/card';

// // ParticleField Component (unchanged)
// interface Particle {
//   startX: number;
//   startY: number;
//   endX: number;
//   endY: number;
//   duration: number;
// }

// const ParticleField = () => {
//   const [, setDimensions] = useState({
//     width: typeof window !== 'undefined' ? window.innerWidth : 1000,
//     height: typeof window !== 'undefined' ? window.innerHeight : 800
//   });
//   const [particles, setParticles] = useState<Particle[]>([]);

//   useEffect(() => {
//     const updateDimensions = () => {
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };

//     const initializeParticles = () => {
//       const newParticles = Array.from({ length: 50 }, () => ({
//         startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
//         startY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//         endX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
//         endY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//         duration: Math.random() * 25 + 20
//       }));
//       setParticles(newParticles);
//     };

//     if (typeof window !== 'undefined') {
//       updateDimensions();
//       initializeParticles();
//       window.addEventListener('resize', updateDimensions);
//       return () => window.removeEventListener('resize', updateDimensions);
//     }
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
//       {particles.map((particle, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-white/50 dark:bg-gray-100 rounded-full"
//           style={{
//             position: 'absolute',
//             left: 0,
//             top: 0,
//             willChange: 'transform'
//           }}
//           initial={{
//             x: particle.startX,
//             y: particle.startY,
//             scale: 0
//           }}
//           animate={{
//             x: [particle.startX, particle.endX, particle.startX],
//             y: [particle.startY, particle.endY, particle.startY],
//             scale: [0, 1, 0]
//           }}
//           transition={{
//             duration: particle.duration,
//             repeat: Infinity,
//             ease: "linear",
//             times: [0, 0.5, 1]
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // RoleText Component (unchanged)
// const RoleText = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const roles = ['Software Engineer','Blockchain Engineer', 'GenAI Engineer ', 'Full Stack Developer'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
//     }, 5000); 
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div 
//       className="text-2xl md:text-3xl mb-12 h-20"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5 }}
//     >
//       <div className="relative overflow-hidden h-full">
//         <AnimatePresence mode="wait">
//           <motion.p
//             key={roles[currentIndex]}
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -50, opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute w-full text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-600"
//           >
//             {roles[currentIndex]}
//           </motion.p>
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// };

// // AboutUs Component (unchanged)
// const AboutUs = () => {
//   return (
//     <div>
//       <div className="bg-black text-white min-h-screen p-8">
//         <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
//           <div className="absolute inset-0">
//             <motion.div
//               className="absolute inset-0"
//               style={{
//                 background: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 filter: 'brightness(0.3) hue-rotate(45deg)',
//               }}
//               animate={{
//                 scale: [1, 1.1, 1],
//                 filter: [
//                   'brightness(0.3) hue-rotate(45deg)',
//                   'brightness(0.4) hue-rotate(90deg)',
//                   'brightness(0.3) hue-rotate(45deg)'
//                 ]
//               }}
//               transition={{ duration: 20, repeat: Infinity }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-black/50 to-black" />
//           </div>

//           <motion.h1 
//             className="relative text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-600"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             About Me
//           </motion.h1>
//         </section>

//         <section className="relative py-20 px-4 md:px-8">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 mb-16"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
//                 Journey & Experience
//               </h2>
//               <div className="space-y-6 text-gray-300">
//                 <p className="text-xl leading-relaxed">
//                   As a Web3 developer and AI engineer, I&apos;ve dedicated my career to exploring the intersection of blockchain technology and artificial intelligence. My journey began with a deep fascination for how these technologies could reshape our digital future.
//                 </p>
//                 <p className="text-xl leading-relaxed">
//                   With a background in computer science and a passion for innovation, I&apos;ve worked on various projects ranging from Smart Contract Web3 dApps to AI-powered applications. My expertise spans across smart contract development, Agentic AI Assistant development, machine learning model and full-stack web development.
//                 </p>
//                 <p className="text-xl leading-relaxed">
//                   I believe in building decentralized solutions that are not only technically robust but also accessible and user-friendly. My goal is to contribute to the Web3 ecosystem and AI community while making complex technologies more approachable.
//                 </p>
//               </div>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   title: "Blockchain Development",
//                   icon: Database,
//                   skills: ["Smart Contract Development", "NFT Systems", "Web3 Integration", "DApps"],
//                   gradient: "from-cyan-600 to-blue-800"
//                 },
//                 {
//                   title: "AI Engineering",
//                   icon: Brain,
//                   skills: ["LLM Development","AI Agent", "Natural Language Processing", "Predictive Analytics", "ML Model Deployment"],
//                   gradient: "from-blue-600 to-cyan-600"
//                 },
//                 {
//                   title: "Frontend Development",
//                   icon: Layers,
//                   skills: ["Next.js", "Three.js", "Responsive Design", "UI/UX Implementation"],
//                   gradient: "from-cyan-600 to-green-600"
//                 },
//                 {
//                   title: "Backend Development",
//                   icon: Code,
//                   skills: ["TypeScript", "Python", "Database Management"],
//                   gradient: "from-green-600 to-yellow-600"
//                 }
//               ].map((category, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative group"
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.2 }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
//                   <div className="relative bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
//                     <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${category.gradient} mb-4`}>
//                       <category.icon className="w-6 h-6" />
//                     </div>
//                     <h3 className="text-xl font-bold mb-4">{category.title}</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {category.skills.map((skill, skillIndex) => (
//                         <span
//                           key={skillIndex}
//                           className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${category.gradient} opacity-80 hover:opacity-100 transition-opacity duration-300`}
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };



// // Extracted HeroSection Component
// // const HeroSection = () => {
// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       {/* Animated Background */}
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent_70%)]" />
// //       <ParticleField />
      
// //       <div className="absolute inset-0">
// //         <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-cyan/50 to-black" />
// //         <motion.div
// //           className="absolute inset-0"
// //           style={{
// //             backgroundSize: 'cover',
// //             backgroundPosition: 'center',
// //             filter: 'brightness(0.3) hue-rotate(45deg)',
// //           }}
// //           animate={{
// //             scale: [1, 1.1, 1],
// //             filter: [
// //               'brightness(0.3) hue-rotate(45deg)',
// //               'brightness(0.4) hue-rotate(90deg)',
// //               'brightness(0.3) hue-rotate(45deg)'
// //             ]
// //           }}
// //           transition={{ duration: 20, repeat: Infinity }}
// //         />
// //       </div>

// //       <div className="relative z-10 text-center px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 1 }}
// //         >
// //           <motion.h1 
// //             className="text-7xl md:text-9xl font-bold mb-8"
// //             style={{
// //               background: 'linear-gradient(to right, #fff, #00FFFF, #0000FF, #fff)',
// //               backgroundSize: '200% auto',
// //               WebkitBackgroundClip: 'text',
// //               backgroundClip: 'text',
// //               color: 'transparent',
// //               animation: 'shine 5s linear infinite',
// //             }}
// //           >
// //             Ali Murtaza
// //           </motion.h1>

// //           {/* Animated Role Text */}
// //           <RoleText />

// //           {/* Tech Stack Icons */}
// //           <motion.div 
// //             className="flex justify-center gap-8 mb-12"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 1 }}
// //           >
// //             {[
// //               { Icon: Globe, gradient: "from-cyan-500 to-blue-500" },
// //               { Icon: Cpu, gradient: "from-blue-500 to-cyan-500" },
// //               { Icon: Brain, gradient: "from-cyan-500 to-green-500" },
// //               { Icon: Command, gradient: "from-green-500 to-yellow-500" }
// //             ].map(({ Icon, gradient }, index) => (
// //               <motion.div
// //                 key={index}
// //                 whileHover={{ 
// //                   scale: 1.2, 
// //                   rotateY: 180,
// //                   transition: { duration: 0.5 }
// //                 }}
// //                 className={`p-4 rounded-xl bg-gradient-to-br ${gradient} backdrop-blur-lg relative group`}
// //               >
// //                 <Icon className="w-8 h-8 transform group-hover:rotate-180 transition-transform duration-500" />
// //                 <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
// //               </motion.div>
// //             ))}
// //           </motion.div>

// //           <motion.div 
// //             className="flex justify-center gap-6"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 1.5 }}
// //           >
// //             {[
// //               { href: "https://twitter.com/AliMurt90850271", Icon: Twitter, color: "blue" },
// //               { href: "https://www.linkedin.com/in/ali-murtaza-361110246/", Icon: Linkedin, color: "indigo" },
// //               { href: "https://github.com/alimurtaza8", Icon: Github, color: "blue" }
// //             ].map(({ href, Icon, color }, index) => (
// //               <motion.a
// //                 key={index}
// //                 href={href}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 whileHover={{ 
// //                   scale: 1.2,
// //                   rotate: 360,
// //                   transition: { duration: 0.5 }
// //                 }}
// //                 className={`p-4 bg-${color}-500/20 rounded-full relative group`}
// //               >
// //                 <Icon className="w-6 h-6 relative z-10" />
// //                 <div className={`absolute inset-0 bg-${color}-500/40 rounded-full blur group-hover:blur-xl transition-all duration-500`} />
// //               </motion.a>
// //             ))}
// //           </motion.div>
// //         </motion.div>
// //       </div>

// //       {/* Scroll Indicator */}
// //       <motion.div
// //         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //         animate={{ y: [0, 10, 0] }}
// //         transition={{ duration: 1.5, repeat: Infinity }}
// //       >
// //         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
// //           <motion.div 
// //             className="w-2 h-2 bg-white rounded-full mt-2"
// //             animate={{ opacity: [0.5, 1, 0.5] }}
// //             transition={{ duration: 1.5, repeat: Infinity }}
// //           />
// //         </div>
// //       </motion.div>
// //     </section>
// //   );
// // };


// // new

// // const HeroSection = () => {
// //     return (
// //       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //         {/* Background Gradient Animation */}
// //         <motion.div
// //           className="absolute inset-0"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 2 }}
// //           style={{ background: 'linear-gradient(135deg, #1f2937, #4b5563, #1f2937)' }}
// //         />
        
// //         {/* Particle Field */}
// //         <ParticleField />
  
// //         {/* Dark Overlay */}
// //         <div className="absolute inset-0 bg-black opacity-30"></div>
        
// //         {/* Content */}
// //         <div className="relative z-10 text-center px-4">
// //           <motion.h1
// //             className="text-5xl md:text-8xl font-extrabold text-white"
// //             initial={{ y: -50, opacity: 0 }}
// //             animate={{ y: 0, opacity: 1 }}
// //             transition={{ duration: 1 }}
// //           >
// //             Ali Murtaza
// //           </motion.h1>
// //           <motion.div
// //             className="mt-6 text-xl md:text-2xl text-gray-300"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.5, duration: 1 }}
// //           >
// //             <RoleText />
// //           </motion.div>
// //           <motion.div className="mt-8">
// //             <motion.a
// //               href="#contact"
// //               className="inline-block px-8 py-4 border border-white rounded-full text-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-500"
// //               initial={{ scale: 0.8 }}
// //               animate={{ scale: 1 }}
// //               transition={{ delay: 1, duration: 0.5 }}
// //             >
// //               Get in Touch
// //             </motion.a>
// //           </motion.div>
// //         </div>
  
// //         {/* Scroll Indicator */}
// //         <motion.div
// //           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //           animate={{ y: [0, 10, 0] }}
// //           transition={{ duration: 1.5, repeat: Infinity }}
// //         >
// //           <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
// //             <motion.div 
// //               className="w-2 h-2 bg-white rounded-full mt-2"
// //               animate={{ opacity: [0.5, 1, 0.5] }}
// //               transition={{ duration: 1.5, repeat: Infinity }}
// //             />
// //           </div>
// //         </motion.div>
// //       </section>
// //     );
// //   };


// // new code
// // const HeroSection = () => {
// //     const constraintsRef = useRef(null);
// //     const floatingElements = useRef<(HTMLDivElement | null)[]>([]);
  
// //     useEffect(() => {
// //       const animateFloating = () => {
// //         floatingElements.current.forEach((el, index) => {
// //           if (el) {
// //             el.style.transform = `
// //               translateY(${Math.sin((Date.now() / 1000 + index) * 2) * 15}px)
// //               rotate(${Math.sin((Date.now() / 1000 + index) * 1.5) * 5}deg)
// //             `;
// //           }
// //         });
// //         requestAnimationFrame(animateFloating);
// //       };
// //       animateFloating();
// //     }, []);
  
// //     return (
// //       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //         {/* Enhanced Background Effects */}
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,24,39,0.8),rgba(17,24,39,1))]" />
// //         <ParticleField />
        
// //         {/* Geometric Floating Elements */}
// //         {[...Array(12)].map((_, i) => (
// //           <div
// //             key={i}
// //             ref={el => floatingElements.current[i] = el}
// //             className="absolute border-2 border-purple-500/20 rounded-xl"
// //             style={{
// //               width: `${Math.random() * 100 + 50}px`,
// //               height: `${Math.random() * 100 + 50}px`,
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //               rotate: `${Math.random() * 360}deg`
// //             }}
// //           />
// //         ))}
  
// //         {/* Main Content */}
// //         <div className="relative z-10 text-center px-4">
// //           <motion.div 
// //             className="space-y-8"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 1.5 }}
// //           >
// //             {/* Enhanced Name Animation */}
// //             <motion.div
// //               initial={{ scale: 0.9, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               transition={{ duration: 1.2, ease: "backOut" }}
// //             >
// //               <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative">
// //                 <span className="relative inline-block">
// //                   <span className="absolute inset-0 bg-white/10 blur-3xl" />
// //                   Ali Murtaza
// //                 </span>
// //               </h1>
// //             </motion.div>
  
// //             {/* Role Text with Enhanced Animation */}
// //             <motion.div
// //               className="relative overflow-hidden"
// //               initial={{ height: 0 }}
// //               animate={{ height: "auto" }}
// //               transition={{ delay: 0.8 }}
// //             >
// //               <RoleText />
// //             </motion.div>
  
// //             {/* Tech Stack with Floating Animation */}
// //             <motion.div 
// //               className="flex justify-center gap-8 mb-12"
// //               ref={constraintsRef}
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 1.2 }}
// //             >
// //               {[
// //                 { Icon: Globe, gradient: "from-cyan-500 to-blue-500", text: "Web3" },
// //                 { Icon: Cpu, gradient: "from-blue-500 to-cyan-500", text: "AI" },
// //                 { Icon: Brain, gradient: "from-cyan-500 to-green-500", text: "ML" },
// //                 { Icon: Command, gradient: "from-green-500 to-yellow-500", text: "Dev" }
// //               ].map(({ Icon, gradient, text }, index) => (
// //                 <motion.div
// //                   key={index}
// //                   className={`p-4 rounded-xl bg-gradient-to-br ${gradient} backdrop-blur-lg relative group cursor-grab active:cursor-grabbing`}
// //                   whileHover={{ 
// //                     scale: 1.2,
// //                     rotate: [0, 15, -15, 0],
// //                     transition: { duration: 0.6 }
// //                   }}
// //                   drag
// //                   dragConstraints={constraintsRef}
// //                   dragElastic={0.1}
// //                 >
// //                   <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
// //                   <div className="relative z-10 flex flex-col items-center gap-2">
// //                     <Icon className="w-8 h-8 transform transition-transform duration-500 group-hover:scale-1.2" />
// //                     <span className="text-sm font-medium opacity-80">{text}</span>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
  
// //             {/* Social Links with Hover Beams */}
// //             <motion.div 
// //               className="flex justify-center gap-6"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 1.8 }}
// //             >
// //               {[
// //                 { href: "https://twitter.com/AliMurt90850271", Icon: Twitter, color: "sky" },
// //                 { href: "https://www.linkedin.com/in/ali-murtaza-361110246/", Icon: Linkedin, color: "blue" },
// //                 { href: "https://github.com/alimurtaza8", Icon: Github, color: "purple" }
// //               ].map(({ href, Icon, color }, index) => (
// //                 <motion.a
// //                   key={index}
// //                   href={href}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className={`relative p-4 rounded-full group hover:shadow-lg hover:shadow-${color}-500/30 transition-all duration-300`}
// //                   whileHover={{ 
// //                     scale: 1.15,
// //                     rotate: [0, 20, -20, 0],
// //                     transition: { duration: 0.6 }
// //                   }}
// //                 >
// //                   <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500 to-${color}-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
// //                   <div className="relative z-10">
// //                     <Icon className="w-6 h-6" />
// //                   </div>
// //                   <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 bg-gradient-to-br from-${color}-500 to-${color}-700 rounded-full transition-opacity duration-300`} />
// //                 </motion.a>
// //               ))}
// //             </motion.div>
// //           </motion.div>
// //         </div>
  
// //         {/* Animated Scroll Indicator */}
// //         <motion.div
// //           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //           initial={{ opacity: 0 }}
// //           animate={{ 
// //             opacity: [0, 1, 0],
// //             y: [0, 30, 60]
// //           }}
// //           transition={{ 
// //             duration: 3,
// //             repeat: Infinity,
// //             times: [0, 0.5, 1]
// //           }}
// //         >
// //           <div className="w-8 h-14 border-2 border-white/30 rounded-3xl flex justify-center">
// //             <motion.div 
// //               className="w-2 h-2 bg-white rounded-full mt-2"
// //               animate={{ y: [0, 10] }}
// //               transition={{ duration: 0.8, repeat: Infinity }}
// //             />
// //           </div>
// //         </motion.div>
// //       </section>
// //     );
// //   };
  


// // Again new

// // const HeroSection = () => {
// //     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //     const containerRef = useRef<HTMLDivElement>(null);
  
// //     useEffect(() => {
// //       const handleMouseMove = (e: MouseEvent) => {
// //         setMousePosition({ x: e.clientX, y: e.clientY });
// //       };
// //       window.addEventListener('mousemove', handleMouseMove);
// //       return () => window.removeEventListener('mousemove', handleMouseMove);
// //     }, []);
  
// //     return (
// //       <section 
// //         className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
// //         ref={containerRef}
// //       >
// //         {/* Dynamic Grid Background */}
// //         <div className="absolute inset-0 opacity-20">
// //           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-10" />
// //           <div 
// //             className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-purple-900/30"
// //             style={{
// //               maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
// //             }}
// //           />
// //         </div>
  
// //         {/* Floating Tech Elements */}
// //         <div className="absolute inset-0 pointer-events-none">
// //           {['TS', 'AI', 'WEB3', 'LLM', 'ETH', 'NEXT'].map((text, i) => (
// //             <motion.div
// //               key={i}
// //               className="absolute text-2xl font-bold text-white/10"
// //               initial={{
// //                 x: Math.random() * 100,
// //                 y: Math.random() * 100,
// //                 rotate: Math.random() * 360
// //               }}
// //               animate={{
// //                 x: [0, Math.random() * 100, 0],
// //                 y: [0, Math.random() * 100, 0],
// //                 rotate: [0, Math.random() * 360],
// //                 scale: [1, 0.8, 1]
// //               }}
// //               transition={{
// //                 duration: 15 + Math.random() * 10,
// //                 repeat: Infinity,
// //                 ease: "easeInOut"
// //               }}
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: `${Math.random() * 100}%`,
// //               }}
// //             >
// //               {text}
// //             </motion.div>
// //           ))}
// //         </div>
  
// //         {/* Main Content */}
// //         <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 1 }}
// //           >
// //             {/* Name with Gradient Shine */}
// //             <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent relative">
// //               <span className="relative inline-block">
// //                 <span className="absolute -inset-4 bg-gradient-to-r from-white/30 to-transparent opacity-40 blur-3xl" />
// //                 Ali Murtaza
// //               </span>
// //             </h1>
  
// //             {/* Animated Role Text */}
// //             <div className="relative overflow-hidden h-24 mb-12">
// //               <RoleText />
// //             </div>
  
// //             {/* Tech Stack Grid */}
// //             <motion.div 
// //               className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mx-auto max-w-3xl"
// //               initial={{ scale: 0.9 }}
// //               animate={{ scale: 1 }}
// //               transition={{ delay: 0.5 }}
// //             >
// //               {[
// //                 { icon: <Globe className="w-8 h-8" />, label: 'Web3 Architect' },
// //                 { icon: <Brain className="w-8 h-8" />, label: 'AI Engineer' },
// //                 { icon: <Code className="w-8 h-8" />, label: 'Full Stack Dev' },
// //                 { icon: <Database className="w-8 h-8" />, label: 'Blockchain' },
// //               ].map((item, index) => (
// //                 <motion.div
// //                   key={index}
// //                   className="p-4 bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl hover:border-cyan-400/30 transition-all duration-300 group"
// //                   whileHover={{ y: -5 }}
// //                 >
// //                   <div className="mb-2 text-cyan-400 group-hover:text-white transition-colors">
// //                     {item.icon}
// //                   </div>
// //                   <span className="text-sm font-medium text-gray-300 group-hover:text-white">
// //                     {item.label}
// //                   </span>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
  
// //             {/* Social Links with Hover Beams */}
// //             <motion.div 
// //               className="flex justify-center gap-6"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 1 }}
// //             >
// //               {[
// //                 { href: "https://twitter.com/AliMurt90850271", Icon: Twitter, color: "sky" },
// //                 { href: "https://www.linkedin.com/in/ali-murtaza-361110246/", Icon: Linkedin, color: "blue" },
// //                 { href: "https://github.com/alimurtaza8", Icon: Github, color: "purple" }
// //               ].map(({ href, Icon, color }, index) => (
// //                 <motion.a
// //                   key={index}
// //                   href={href}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className={`relative p-4 rounded-full group hover:bg-${color-500}/20 transition-all duration-300`}
// //                   whileHover={{ scale: 1.15 }}
// //                 >
// //                   <div 
// //                     className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
// //                     style={{
// //                       background: `radial-gradient(circle at ${mousePosition.x - (containerRef.current?.offsetLeft || 0)}px ${mousePosition.y - (containerRef.current?.offsetTop || 0)}px, rgba(var(--color-${color}-500), 0.3), transparent 70%)`
// //                     }}
// //                   />
// //                   <Icon className={`w-6 h-6 text-${color}-400 group-hover:text-${color}-200 transition-colors`} />
// //                 </motion.a>
// //               ))}
// //             </motion.div>
// //           </motion.div>
// //         </div>
  
// //         {/* Animated Scroll Indicator */}
// //         <motion.div
// //           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 2 }}
// //         >
// //           <div className="flex flex-col items-center gap-2">
// //             <motion.div
// //               className="w-5 h-8 border-2 border-cyan-400/30 rounded-full flex justify-center"
// //               animate={{ y: [0, 10] }}
// //               transition={{ duration: 1.5, repeat: Infinity }}
// //             >
// //               <div className="w-1 h-2 bg-cyan-400/80 rounded-full mt-1" />
// //             </motion.div>
// //             <span className="text-sm text-cyan-400/80 font-medium">Explore More</span>
// //           </div>
// //         </motion.div>
// //       </section>
// //     );
// //   };

// const HeroSection = () => {
//     const [isHovered, setIsHovered] = useState(false);
//     const containerRef = useRef<HTMLDivElement>(null);
  
//     return (
//       <section 
//         className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
//         ref={containerRef}
//       >
//         {/* Dynamic Gradient Background */}
//         <div className="absolute inset-0">
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/10 to-black"
//             animate={{
//               background: [
//                 'linear-gradient(45deg, rgba(12,74,110,0.2) 0%, rgba(88,28,135,0.1) 50%, rgba(0,0,0,1) 100%',
//                 'linear-gradient(135deg, rgba(12,74,110,0.3) 0%, rgba(88,28,135,0.2) 50%, rgba(0,0,0,1) 100%',
//                 'linear-gradient(225deg, rgba(12,74,110,0.2) 0%, rgba(88,28,135,0.3) 50%, rgba(0,0,0,1) 100%',
//                 'linear-gradient(315deg, rgba(12,74,110,0.1) 0%, rgba(88,28,135,0.4) 50%, rgba(0,0,0,1) 100%'
//               ]
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               repeatType: 'mirror'
//             }}
//           />
//         </div>
  
//         {/* Floating Holographic Grid */}
//         <div className="absolute inset-0 opacity-50">
//           <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30" />
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-500/10 to-transparent"
//             animate={{
//               opacity: [0.3, 0.5, 0.3],
//               scale: [1, 1.05, 1]
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: 'easeInOut'
//             }}
//           />
//         </div>
  
//         {/* Main Content */}
//         <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             {/* Name with Holographic Effect */}
//             <motion.h1
//               className="text-6xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent relative"
//               onHoverStart={() => setIsHovered(true)}
//               onHoverEnd={() => setIsHovered(false)}
//               animate={{
//                 textShadow: isHovered
//                   ? [
//                       '0 0 5px rgba(34,211,238,0.5)',
//                       '0 0 20px rgba(34,211,238,0.5)',
//                       '0 0 40px rgba(59,130,246,0.5)',
//                       '0 0 80px rgba(147,51,234,0.5)'
//                     ]
//                   : 'none'
//               }}
//               transition={{ duration: 0.5 }}
//             >
//               <span className="relative inline-block">
//                 <span className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
//                 Ali Murtaza
//               </span>
//             </motion.h1>
  
//             {/* Role Text with Neon Glow */}
//             <motion.div
//               className="relative overflow-hidden h-24 mb-12"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <RoleText />
//             </motion.div>
  
//             {/* Tech Stack with Holographic Cards */}
//             <motion.div
//               className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 mx-auto max-w-4xl"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//             >
//               {[
//                 { icon: <Globe className="w-10 h-10" />, label: 'Web3 Architect', color: 'cyan' },
//                 { icon: <Brain className="w-10 h-10" />, label: 'AI Engineer', color: 'purple' },
//                 { icon: <Code className="w-10 h-10" />, label: 'Full Stack Dev', color: 'blue' },
//                 { icon: <Database className="w-10 h-10" />, label: 'Blockchain', color: 'pink' },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   className={`p-6 bg-black/30 backdrop-blur-lg border border-${item.color}-500/20 rounded-2xl hover:border-${item.color}-500/50 transition-all duration-300 group relative overflow-hidden`}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {/* Holographic Effect */}
//                   <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/10 via-transparent to-${item.color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity`} />
//                   <div className={`absolute -inset-2 blur-xl opacity-0 group-hover:opacity-30 bg-gradient-to-br from-${item.color}-500/20 to-transparent transition-opacity`} />
  
//                   <div className={`relative z-10 text-${item.color}-400 group-hover:text-${item.color}-200 transition-colors`}>
//                     {item.icon}
//                   </div>
//                   <span className="relative z-10 text-lg font-medium text-gray-300 group-hover:text-white mt-4 block">
//                     {item.label}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>
  
//             {/* Social Links with Particle Trails */}
//             <motion.div
//               className="flex justify-center gap-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.2 }}
//             >
//               {[
//                 { href: "https://twitter.com/AliMurt90850271", Icon: Twitter, color: "sky" },
//                 { href: "https://www.linkedin.com/in/ali-murtaza-361110246/", Icon: Linkedin, color: "blue" },
//                 { href: "https://github.com/alimurtaza8", Icon: Github, color: "purple" }
//               ].map(({ href, Icon, color }, index) => (
//                 <motion.a
//                   key={index}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`relative p-4 rounded-full group hover:bg-${color}-500/20 transition-all duration-300`}
//                   whileHover={{ scale: 1.2 }}
//                 >
//                   <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 bg-gradient-to-br from-${color}-500/20 to-transparent transition-opacity`} />
//                   <Icon className={`w-8 h-8 text-${color}-400 group-hover:text-${color}-200 transition-colors`} />
//                 </motion.a>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
  
//         {/* Animated Scroll Indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.5 }}
//         >
//           <div className="flex flex-col items-center gap-2">
//             <motion.div
//               className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex justify-center"
//               animate={{ y: [0, 10] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <div className="w-2 h-2 bg-cyan-400/80 rounded-full mt-2" />
//             </motion.div>
//             <span className="text-sm text-cyan-400/80 font-medium">Scroll to Explore</span>
//           </div>
//         </motion.div>
//       </section>
//     );
//   };


// const Portfolio = () => {
//     const [, setMousePosition] = useState({ x: 0, y: 0 });
//     const containerRef = useRef(null);
  
//     useEffect(() => {
//       const handleMouseMove = (e: MouseEvent) => {
//         setMousePosition({ x: e.clientX, y: e.clientY });
//       };
//       window.addEventListener('mousemove', handleMouseMove);
//       return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);
  
//     const projects = [
//       {
//         title: "Web3 Equipments Rental Marketplace Website",
//         category: "Blockchain",
//         image: "/images/p-1.png",
//         tech: ["Solidity", "NextJs"],
//         description: "Smart Contract based Web3 Marketplace",
//         color: "from-cyan-600 to-blue-600",
//         github: "https://tokenrent.vercel.app/"
//       },
//       {
//         title: "E-Commerce Website",
//         category: "Full Stack",
//         image: "/images/p-5.png",
//         tech: ["Nextjs", "Frontend"],
//         description: "Modern E-Commerce Frontend Website",
//         color: "from-purple-600 to-blue-600",
//         github: "https://ui-and-ux-hackatone-project.vercel.app/"
//       },
//       {
//         title: "OrchestrAgent AI Agent Project",
//         category: "AI Agent",
//         image: "/images/p-7.png",
//         tech: ["Python", "langgraph"],
//         description: "Muli AI Agents Working Project",
//         color: "from-pink-600 to-purple-600",
//         github: "https://github.com/alimurtaza8/Agentic-AI-Staff/tree/main/OrchestrAgent%20Project"
//       },
//     ];
  
//     return (
//       <div className="bg-black text-white" ref={containerRef}>
//         {/* Hero Section */}
//         <HeroSection />
  
//         {/* Card Grid */}
//         <section className="relative py-20 px-4 md:px-8">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-purple-500/30 backdrop-blur-lg h-full">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block relative group h-full"
//                     >
//                       <div className="relative h-48">
//                         <motion.div
//                           className="absolute inset-0 bg-cover bg-center"
//                           style={{ backgroundImage: `url(${project.image})` }}
//                           whileHover={{ scale: 1.1 }}
//                           transition={{ duration: 0.5 }}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
//                       </div>
  
//                       <div className="p-6">
//                         <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
//                           {project.title}
//                         </h3>
//                         <p className="text-gray-300 mb-4">{project.description}</p>
//                         <div className="flex flex-wrap gap-2">
//                           {project.tech.map((tech, techIndex) => (
//                             <span
//                               key={techIndex}
//                               className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.color} opacity-80`}
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
  
//                       <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                         <div className="flex items-center gap-2 text-white">
//                           <Github className="w-6 h-6" />
//                           <span className="font-medium">View</span>
//                         </div>
//                       </div>
//                     </a>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
  
//         {/* About Us Section */}
//         <AboutUs />
//       </div>
//     );
//   };
  
// export default Portfolio;
  