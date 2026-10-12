"use client";

import React, { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Anxiety & Stress Therapy",
      description:
        "Practical tools and compassionate guidance to help you regain control, reduce overwhelm, and find daily calm in your personal and professional life.",
    },
    {
      title: "Trauma & Healing",
      description:
        "Evidence-based trauma resolution (EMDR & somatic therapy) to gently process past experiences and reclaim a strong sense of internal safety.",
    },
    {
      title: "Relationship Counseling",
      description:
        "Supportive space for individuals and couples looking to break destructive cycles, improve communication, and rebuild genuine connection.",
    },
  ];

  const faqs = [
    {
      q: "Do you offer in-person or virtual therapy sessions?",
      a: "I offer both in-person sessions at my peaceful office in Newbury Park / Conejo Valley, as well as secure telehealth sessions across California.",
    },
    {
      q: "What can I expect in our first therapy session?",
      a: "Our first session is a gentle intake where we discuss your background, current challenges, and goals for therapy in a warm, non-judgmental environment.",
    },
    {
      q: "How long does the therapeutic process usually last?",
      a: "Duration depends entirely on your specific goals. Some clients gain clarity in short-term counseling (8-12 sessions), while others prefer ongoing growth support.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f4efe6] text-[#1f2923]">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#f4efe6]/95 backdrop-blur-sm border-b border-[#2d4a43]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-serif font-bold text-[#2d4a43] tracking-wide">
            Dr. Maya Reynolds, Psy.D.
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#526358]">
            <a href="#about" className="hover:text-[#2d4a43] transition-colors">
              About Maya
            </a>
            <a href="#services" className="hover:text-[#2d4a43] transition-colors">
              Services
            </a>
            <a href="#office" className="hover:text-[#2d4a43] transition-colors">
              Our Office
            </a>
            <a href="#faq" className="hover:text-[#2d4a43] transition-colors">
              FAQ
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block bg-transparent text-[#2d4a43] border border-[#2d4a43] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all shadow-xs"
          >
            Book Consultation
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#2d4a43] focus:outline-hidden"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f4efe6] border-b border-[#2d4a43]/10 px-6 py-4 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#526358]">
              About Maya
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#526358]">
              Services
            </a>
            <a href="#office" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#526358]">
              Our Office
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#526358]">
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block w-full text-center bg-[#2d4a43] text-white py-2 rounded-full text-sm font-medium"
            >
              Book Consultation
            </a>
          </div>
        )}
      </header>

      {/* Hero Section - Image Left, Text Right */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-1 md:order-1">
          <div className="w-full bg-[#2d4a43]/10 rounded-2xl overflow-hidden relative shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Dr. Maya Reynolds"
              className="w-full max-h-[500px] object-top object-cover"
            />
          </div>
        </div>

        <div className="order-2 md:order-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c88d74] mb-3 block">
            Licensed Clinical Psychologist • Conejo Valley, CA
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2d4a43] leading-tight mb-6">
            Thoughtful Counseling for Lasting Internal Peace & Healing
          </h1>
          <p className="text-lg text-[#526358] mb-8 leading-relaxed">
            Welcome. I provide evidence-based, compassionate psychotherapy tailored for adults and couples in Newbury Park and across California. Reclaim clarity, confidence, and emotional freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a
              href="#contact"
              className="text-[#2d4a43] border-b-2 border-[#2d4a43] pb-1 font-medium hover:border-transparent transition-all duration-300"
            >
              Schedule Initial Session
            </a>
            <a
              href="#about"
              className="border border-[#2d4a43]/30 text-[#2d4a43] px-7 py-3 rounded-full font-medium text-center hover:bg-[#2d4a43]/5 transition-all"
            >
              Meet Dr. Maya
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/60 border-y border-[#2d4a43]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-[#2d4a43] mb-6">About Dr. Maya Reynolds</h2>
          <p className="text-lg text-[#526358] leading-relaxed mb-6">
            With over a decade of clinical experience, my goal is to provide a grounded, safe space where you feel genuinely heard and understood. My therapeutic philosophy combines psychodynamic depth with actionable, evidence-based tools.
          </p>
          <p className="text-md text-[#526358] leading-relaxed">
            Whether you are working through trauma, navigating life transitions, or seeking deeper connection in your relationships, we will work collaboratively to build emotional resilience and sustainable personal growth.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-[#2d4a43] mb-4">Areas of Practice</h2>
          <p className="text-[#526358]">
            Tailored therapeutic modalities designed to meet your unique emotional and relational needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-xs border border-[#2d4a43]/10 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-serif font-bold text-[#2d4a43] mb-3">{item.title}</h3>
              <p className="text-[#526358] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Section: Our Office */}
      <section id="office" className="py-20 bg-[#2d4a43] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c88d74] mb-2 block">
              A Safe Space for Healing
            </span>
            <h2 className="text-3xl font-serif font-bold mb-4">Our Therapy Office</h2>
            <p className="text-[#f4efe6]/80 text-sm md:text-base leading-relaxed">
              Designed with warm natural light, comfortable seating, and complete acoustic privacy, our Newbury Park office offers a quiet, restful environment for in-person therapy sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=500"
                alt="Therapy Room Design"
                className="rounded-xl object-cover h-48 w-full shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=500"
                alt="Seating Area"
                className="rounded-xl object-cover h-48 w-full shadow-md"
              />
            </div>
            <div className="space-y-4 text-sm text-[#f4efe6]/90 bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="text-lg font-serif font-semibold text-white">Session Details & Privacy</h3>
              <ul className="space-y-2 list-disc list-inside text-[#f4efe6]/80">
                <li>Conveniently located in Newbury Park, serving the broader Conejo Valley area.</li>
                <li>Hybrid model: In-person office appointments and confidential online telehealth.</li>
                <li>Sound-isolated rooms ensuring total confidentiality and peaceful reflection.</li>
                <li>Ample ground-level parking and accessible ground-floor entry.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-[#2d4a43] mb-3">Frequently Asked Questions</h2>
          <p className="text-[#526358] text-sm">Common questions regarding therapy and practice details.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-[#2d4a43]/10 shadow-xs">
              <h3 className="font-serif font-bold text-[#2d4a43] text-lg mb-2">{item.q}</h3>
              <p className="text-[#526358] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-[#1f2923] text-white py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Dr. Maya Reynolds, Psy.D.</h3>
            <p className="text-[#f4efe6]/70 text-sm leading-relaxed mb-6">
              Licensed Clinical Psychologist providing empathetic, individual & couple therapy in Newbury Park, CA and online throughout California.
            </p>
            <p className="text-xs text-[#f4efe6]/50">
              © 2026 Dr. Maya Reynolds. All rights reserved.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-serif font-semibold text-lg mb-4">Get In Touch</h4>
            <p className="text-sm text-[#f4efe6]/80 mb-2">📍 Newbury Park, Conejo Valley, CA</p>
            <p className="text-sm text-[#f4efe6]/80 mb-2">✉️ contact@drmayareynolds.com</p>
            <p className="text-sm text-[#f4efe6]/80 mb-6">📞 (805) 555-0199</p>
            <a
              href="mailto:contact@drmayareynolds.com"
              className="inline-block bg-[#c88d74] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send Direct Message
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}