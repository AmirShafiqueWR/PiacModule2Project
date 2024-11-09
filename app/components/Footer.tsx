import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Importing icons from react-icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <p className="text-lg font-bold">Iqbal Rice Mills (Pvt.) Limited.</p>
        <div className="flex flex-wrap justify-center space-x-6">
          <a href="/about" className="text-sm hover:underline">About Us</a>
          <a href="/products" className="text-sm hover:underline">Our Products</a>
          <a href="/support" className="text-sm hover:underline">Customer Support</a>
          <a href="/faqs" className="text-sm hover:underline">FAQs</a>
          <a href="/shipping" className="text-sm hover:underline">Shipping Info</a>
          <a href="/returns" className="text-sm hover:underline">Return Policy</a>
          <a href="/blog" className="text-sm hover:underline">Blog Posts</a>
          <a href="/join" className="text-sm hover:underline">Join Us</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 text-white hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-white hover:text-pink-500" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-white hover:text-blue-400" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-white hover:text-blue-700" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6 text-white hover:text-red-600" />
          </a>
        </div>
        <div className="flex flex-wrap justify-center space-x-6">
          <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
          <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
          <a href="/cookies" className="text-sm hover:underline">Cookie Settings</a>
        </div>
        <h2 className="text-xs"> © 2024, All rights reserved.</h2>
      </div>
    </footer>
  );
};

export default Footer;
