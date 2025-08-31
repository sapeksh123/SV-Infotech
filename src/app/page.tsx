"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Cloud, Cpu, Users, Star, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-400 text-white rounded-b-3xl shadow-lg">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-yellow-300">SV InfoTech 🚀</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Empowering businesses with next-gen IT solutions. From cloud to AI, we
          bring your digital vision to life.
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="/about"
            className="px-6 py-3 border border-white font-semibold rounded-xl hover:bg-white hover:text-blue-700 transition duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Responsive, modern, and scalable web applications.",
              icon: <Code className="w-10 h-10 text-blue-600" />,
            },
            {
              title: "Cloud Solutions",
              desc: "Secure, optimised, and scalable cloud technology.",
              icon: <Cloud className="w-10 h-10 text-blue-600" />,
            },
            {
              title: "AI & Automation",
              desc: "Boost productivity and innovation with AI tools.",
              icon: <Cpu className="w-10 h-10 text-blue-600" />,
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            href="/services"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 border-2 border-cyan-400 font-semibold rounded-xl text-white shadow-md hover:shadow-lg transition duration-300"
          >
            Explore Services
          </Link>
        </motion.div>
      </section>

     

      {/* Testimonials */}
      <section className="py-20 bg-white px-6 md:px-12">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: "Rahul Sharma",
              feedback:
                "SV InfoTech transformed our business with their cloud solutions. Highly recommended!",
            },
            {
              name: "Priya Verma",
              feedback:
                "Amazing team! Their AI tools helped us automate our workflow efficiently.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-100 rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <Star className="text-yellow-500 w-6 h-6 mb-2" />
              <p className="italic text-gray-700">"{t.feedback}"</p>
              <p className="mt-2 font-semibold">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Insights
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Future of AI in Business",
              desc: "Discover how AI is reshaping industries across the globe.",
            },
            {
              title: "Why Cloud is Essential",
              desc: "The benefits of cloud adoption for modern enterprises.",
            },
            {
              title: "Design Thinking in IT",
              desc: "How design-first approaches create better user experiences.",
            },
          ].map((blog, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <BookOpen className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600">{blog.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-400 text-center text-white rounded-t-3xl shadow-lg">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Build the Future Together
        </motion.h2>
        <motion.p
          className="mb-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Ready to transform your ideas into reality? Get in touch with our
          experts today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
