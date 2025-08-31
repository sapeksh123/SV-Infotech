"use client";
import { Users, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-12 text-gray-900">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold">SV InfoTech</span>, we are
          passionate about building technology solutions that transform ideas
          into reality and empower businesses worldwide.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-8 h-8 text-blue-600" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
          </div>
          <p className="text-gray-600">
            To deliver innovative, reliable, and scalable IT services that help
            businesses embrace digital transformation with speed, security, and
            efficiency.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <h2 className="text-xl font-semibold">Our Vision</h2>
          </div>
          <p className="text-gray-600">
            To become a global leader in IT services by driving innovation,
            empowering businesses, and creating sustainable digital ecosystems.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Sapeksh Vishwakarma", role: "Founder & CEO" },
            { name: "Akash Sharma", role: "Lead Developer" },
            { name: "Rahul Mehta", role: "UI/UX Designer" },
            { name: "Priya Kapoor", role: "Cloud Engineer" },
            { name: "Arjun Patel", role: "AI Specialist" },
            { name: "Neha Singh", role: "Project Manager" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition"
            >
              <Users className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl py-12 px-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Why Choose SV InfoTech?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          With years of experience and a passion for innovation, we provide
          reliable IT services that help businesses grow and succeed in the
          digital era.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
