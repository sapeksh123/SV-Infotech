"use client";
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">SV InfoTech 🚀</h2>
          <p className="text-sm leading-relaxed">
            Empowering businesses with next-gen IT solutions. From web
            development to AI automation — we turn your vision into reality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
           
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Connect</h2>
          <p className="text-sm mb-3 flex items-center gap-2">
            <Mail size={16} /> support@svinfotech.com
          </p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-sky-400 transition"
            >
              <Twitter />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <Github />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} <span className="text-white font-semibold">SV InfoTech</span>. All rights reserved.
      </div>
    </footer>
  );
}
