// import {motion} from "framer-motion";
"use client";
import { motion} from 'framer-motion';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
        <footer className="py-12 px-4 md:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 via-cyan/50 to-black" />
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
        
    )
}

export default Footer;