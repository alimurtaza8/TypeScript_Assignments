
"use client";
// import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from 'lucide-react';

// import React { useState }  from "react";
import React, { useState } from 'react';

import Link from "next/link";
import { FaInstagram, FaYoutube, FaTwitter ,FaBars, FaTimes} from "react-icons/fa";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 
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

const HomeHeroSection = () => {
  return (
    <section className="bg-blue-500 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
         
          <div>
            <div className="font-bold text-white">
              SUMMAR 2024
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              NEW COLLECTION
            </h1>
            <p className="text-lg md:text-xl text-white mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md mt-6 flex items-center">
              <span className="mr-2">SHOP NOW</span>
              {/* <Button size={18} /> */}
            </button>
          </div>
          <div className="justify-self-end">
            <img
              src="/images/home-image.png"
              alt="Model"
              className="max-w-full h-auto md:max-w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


const EditorsPick= () => {
  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Editor's Pick Card */}
          <div className="col-span-1 md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>EDITOR&apos;S PICK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Problems trying to resolve the conflict between
                </p>

                <img
                  src="/images/image-4.jpg"
                  alt="Men's Collection"
                  className="w-full h-auto"
                />
                <a
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-600 mt-4"
                >
                  <span>Shop Now</span>
                  <ChevronRight size={18} className="ml-2" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Men and Women Section */}
          <div className="col-span-1 flex flex-col gap-8">
            {/* Men Card */}
            <Card>
              <CardHeader>
                <CardTitle>MEN</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/image-1.jpg"
                  alt="Men's Collection"
                  className="w-full h-auto"
                />
                <a
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-600 mt-4"
                >
                  <span>Shop Now</span>
                  <ChevronRight size={18} className="ml-2" />
                </a>
              </CardContent>
            </Card>

            {/* Women Card */}
            <Card>
              <CardHeader>
                <CardTitle>MAN</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  // src="/women.jpg"
                  src="/images/image-2.jpg"
                  alt="Women's Collection"
                  className="w-full h-auto"
                />
                <a
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-600 mt-4"
                >
                  <span>Shop Now</span>
                  <ChevronRight size={18} className="ml-2" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default EditorsPick;

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

const SummerCollectionSection: React.FC = () => {
  return (
    <section className="bg-[#087f8c] py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Vita Classic Product
            </h1>
            <p className="text-lg md:text-xl text-white mt-4">
              We know how large objects will act. We know how are objects will act.
              We know.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md mt-6 flex items-center">
              <span className="mr-2">ADD TO CART</span>
              {/* <Button size={18} /> */}
            </button>
          </div>
          <div className="justify-self-end">
            <img
              src="/images/image-4.jpg"
              alt="Model"
              className="max-w-full h-auto md:max-w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


const NeuralUniverseSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Part of the Neural Universe
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex items-center mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md mr-4">
                <span>BUY NOW</span>
              </button>
              <a href="#" className="text-blue-500 hover:text-blue-600 flex items-center">
                <span>READ MORE</span>
                {/* <Button size={18} className="ml-2" /> */}
              </a>
            </div>
          </div>
          <div className="justify-self-end">
            <img
              // src="/couple.jpg"
              src="/images/image-2.jpg"
              alt="Couple"
              className="max-w-full h-auto md:max-w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};



const FeaturedPosts: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Posts</h2>
          <p className="text-gray-600 mt-2">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Card>
              <CardContent>
                <img
                  // src="/loudest-madison-1.jpg"
                  src="/images/picture.png"
                  alt="Loudest à la Madison #1 (L'Integral)"
                  className="w-full h-auto"
                />
                <div className="mt-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-sm text-sm">NEW</span>
                  <h3 className="text-lg font-medium mt-2">Loudest à la Madison #1 (L&apos;Integral)</h3>
                  <p className="text-gray-600 mt-2">
                    We focus on ergonomics and meeting you where you work. It&apos;s only a keystore away.
                  </p>
                  <div className="flex items-center text-blue-500 hover:text-blue-600 mt-4">
                    <span>Learn More</span>
                    <ChevronRight size={18} className="ml-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1">
            <Card>
              <CardContent>
                <img
                  // src="/loudest-madison-2.jpg"
                  src="/images/f-2.png"
                  alt="Loudest à la Madison #1 (Unintegral)"
                  className="w-full h-auto"
                />
                <div className="mt-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-sm text-sm">NEW</span>
                  <h3 className="text-lg font-medium mt-2">Loudest à la Madison #1 (Unintegral)</h3>
                  <p className="text-gray-600 mt-2">
                    We focus on ergonomics and meeting you where you work. It&apos;s only a keystore away.
                  </p>
                  <div className="flex items-center text-blue-500 hover:text-blue-600 mt-4">
                    <span>Learn More</span>
                    <ChevronRight size={18} className="ml-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-1">
            <Card>
              <CardContent>
                <img
                  // src="/loudest-madison-3.jpg"
                  src="/images/f-3.png"
                  alt="Loudest à la Madison #1 (L'Integral)"
                  className="w-full h-auto"
                />
                <div className="mt-4">
                  <span className="bg-red-500 text-white px-2 py-1 rounded-sm text-sm">NEW</span>
                  <h3 className="text-lg font-medium mt-2">Loudest à la Madison #1 (L&apos;Integral)</h3>
                  <p className="text-gray-600 mt-2">
                    We focus on ergonomics and meeting you where you work. It&apos;s only a keystore away.
                  </p>
                  <div className="flex items-center text-blue-500 hover:text-blue-600 mt-4">
                    <span>Learn More</span>
                    <ChevronRight size={18} className="ml-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};




export default function Home() {
  return (
    <div>
      <Header />
      <HomeHeroSection />
      <EditorsPick />
      <BestsellerProducts />
      <SummerCollectionSection />
      <NeuralUniverseSection />

      <FeaturedPosts />

      {/* <Footer /> */}

    </div>
  )
}
