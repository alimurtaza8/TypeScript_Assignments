"use client";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChevronRight } from 'lucide-react';

// import React { useState } from "react";
import React , {useState} from "react";
import { FaInstagram, FaYoutube, FaTwitter ,FaBars, FaTimes} from "react-icons/fa";
import Link from "next/link";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm py-2 px-4 
        flex flex-col md:flex-row justify-between items-center 
        space-y-2 md:space-y-0">
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start w-full md:w-auto">
          <span className="flex items-center gap-2">📞 (225) 555-0118</span>
          <span className="flex items-center gap-2">✉️ michelle.rivera@example.com</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="hidden md:block">Follow Us and get a chance to win 80% off</span>
          <div className="flex items-center gap-2">
            <span className="hidden md:block">Follow Us:</span>
            <div className="flex items-center gap-2">
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-wrap justify-between items-center py-4 px-4 md:px-6 border-b relative">
        {/* Logo */}
        <div className="text-xl font-bold w-1/2 md:w-auto flex justify-start items-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-black">Bandage</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={toggleMenu} 
            className="text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block 
          w-full md:w-auto 
          absolute md:relative 
          top-full left-0 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none 
          z-50 md:z-auto
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-lg p-4 md:p-0">
            {[
              { href: "./", label: "Home" },
              { href: "./product-list", label: "Shop" },
              { href: "/about", label: "About" },
              { href: "#", label: "Blog" },
              { href: "./contact-us", label: "Contact" },
              { href: "#", label: "Pages" }
            ].map((link) => (
              <li key={link.label} className="w-full md:w-auto text-center">
                <Link 
                  href={link.href} 
                  className="text-black hover:text-blue-600 transition block md:inline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          md:block 
          w-full md:w-auto 
          absolute md:relative 
          top-full left-0 
          bg-white md:bg-transparent 
          shadow-lg md:shadow-none 
          z-50 md:z-auto 
          p-4 md:p-0
        `}>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-lg">
            <Link 
              href="#" 
              className="text-blue-400 hover:text-blue-600 transition text-center w-full md:w-auto"
            >
              Login / Register
            </Link>
            <div className="flex items-center justify-center gap-4">
              <Link href="#" aria-label="Search" className="text-gray-700 hover:text-blue-600 transition">🔍</Link>
              <Link href="#" aria-label="Cart" className="text-gray-700 hover:text-blue-600 transition">🛒</Link>
              <Link href="#" aria-label="Wishlist" className="text-gray-700 hover:text-blue-600 transition">❤️</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const ProductHero = () => {
  // Sample product data
  const products = [
    {
      image: '/images/avl-1.jpg',
      title: 'Cloths',
      count: 5,
    },
    {
      image: '/images/avl-2.jpg',
      title: 'Cloths',
      count: 5,
    },
    {
      image: '/images/avl-3.jpg',
      title: 'Cloths',
      count: 5,
    },
    {
      image: '/images/avl-4.jpg',
      title: 'Cloths',
      count: 5,
    },
    {
      image: '/images/avl-2.jpg',
      title: 'Cloths',
      count: 5,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <Card key={index} className="h-full">
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent>
              <div className="flex items-center justify-between">
                <CardTitle>{product.title}</CardTitle>
                <span className="text-gray-500">{product.count} items</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500">Showing all 12 results</p>
        <div className="flex items-center space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
          <select className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Popularity</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

// export default ProductListPage;



const BestsellerProducts= () => {
    return (
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">BESTSELLER PRODUCTS</h2>
            <p className="text-gray-600 mt-2">Problems trying to resolve the conflict between</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Product Cards */}
            {[1, 2, 3, 4,5,6,7,8].map((item) => (
              <div className="col-span-1" key={item}>
                <Card>
                  <CardContent>
                    <img
                      // src={`/graphic-design-${item}.jpg`}
                      src="/images/image-5.jpg"
                      alt={`Graphic Design ${item}`}
                      className="w-full h-auto"
                    />
                    <div className="mt-4">
                      <h3 className="text-lg font-medium">Graphic Design</h3>
                      <p className="text-gray-600">English Department</p>
                      <p className="text-blue-500 font-medium mt-2">$16.48</p>
                      <a
                        href="#"
                        className="flex items-center text-blue-500 hover:text-blue-600 mt-4"
                      >
                        <span>Shop Now</span>
                        <ChevronRight size={18} className="ml-2" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
  
  
            ))}
          </div>
        </div>
      </section>
    );
  };


  const BigCompaniesSection: React.FC = () => {
    const companies = [
      '/images/avg-1.svg',
      '/images/avg-2.svg',
      '/images/avg-3.svg',
      '/images/avg-4.svg',
      '/images/avg-5.svg',
    ];
  
    return (
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Big Companies Are Here
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {companies.map((logo, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md p-6 flex items-center justify-center"
              >
                <img src={logo} alt={`Company ${index + 1} Logo`} className="w-32 h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

const ProductListPage = () => {
    return (
      <div>
        <Header />
        <ProductHero />
        {/* <Footer /> */}
        <BigCompaniesSection />
        <BestsellerProducts />

      </div>
    );
  };
  
  export default ProductListPage;