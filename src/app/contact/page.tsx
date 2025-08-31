"use client";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6 md:px-12">
      <section className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you! Whether you have a question, project idea, 
          or just want to say hello — reach out to us.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
               
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">info@svinfotech.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">
                  SV InfoTech <br />
                  2nd Floor,IT Park,<br />
                  Jabalpur MP , India
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-pink-600">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
