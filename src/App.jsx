import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

// Main Landing Page
export default function App() {
  return (
    <div className="bg-[#010208] min-h-screen w-full">
      <Navbar />
      <Banner />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonial />
      <Faqs />
      <Footer />
    </div>
  );
}
