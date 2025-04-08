import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-amber-500 text-black dark:text-white py-8"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-center">Contact Me</h3>
          <p className="text-gray-500">Email: osman.kiral96@gmail.com</p>
          <p className="text-gray-500">Phone: +90 (541) 432-7005</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-4 text-center">Follow Me</h3>

          <div className="flex space-x-3 justify-center mx-auto">
            <Link
              href="https://github.com/osmankiral"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6 hover:text-gray-400" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/osmankiral/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-6 h-6 hover:text-blue-600" />
            </Link>
            <Link
              href="https://www.instagram.com/kiralosm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 hover:text-pink-500" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-500 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} osmankiral. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
