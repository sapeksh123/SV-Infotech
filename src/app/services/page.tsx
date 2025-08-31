"use client";
import { Code, Smartphone, Palette, Cloud, Cpu, Shield } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc: "We create responsive, scalable, and secure websites using modern technologies to boost your business online.",
      icon: <Code className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Mobile App Development",
      desc: "Build cross-platform and native mobile applications with smooth UI and robust performance.",
      icon: <Smartphone className="w-10 h-10 text-green-600" />,
    },
    {
      title: "UI/UX Design",
      desc: "Delivering user-friendly and attractive designs that enhance customer satisfaction and engagement.",
      icon: <Palette className="w-10 h-10 text-pink-600" />,
    },
    {
      title: "Cloud Solutions",
      desc: "Secure, scalable, and cost-effective cloud infrastructure for businesses of all sizes.",
      icon: <Cloud className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: "AI & Automation",
      desc: "Boost efficiency with intelligent automation, machine learning, and AI-powered tools.",
      icon: <Cpu className="w-10 h-10 text-yellow-600" />,
    },
    {
      title: "Cybersecurity",
      desc: "Protect your business with our advanced security solutions, audits, and monitoring.",
      icon: <Shield className="w-10 h-10 text-red-600" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 text-gray-900">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Our Services</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold">SV InfoTech</span>, we provide
          end-to-end IT solutions that help businesses scale, innovate, and
          thrive in the digital era.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Need a custom solution for your business?
        </h2>
        <p className="text-gray-600 mb-6">
          Let our experts craft innovative and tailored IT services to help your
          company stay ahead of the competition.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
