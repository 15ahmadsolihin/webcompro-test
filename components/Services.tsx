import React from 'react';
import { Globe, Smartphone, Cloud, Lock, Database, Bot } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with React, Next.js, and modern frameworks.",
    icon: <Globe className="h-8 w-8" />,
  },
  {
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile apps providing seamless experiences on iOS and Android.",
    icon: <Smartphone className="h-8 w-8" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure and scalable cloud architecture design, migration, and management on AWS & Azure.",
    icon: <Cloud className="h-8 w-8" />,
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security audits, penetration testing, and compliance strategies.",
    icon: <Lock className="h-8 w-8" />,
  },
  {
    title: "Big Data & Analytics",
    description: "Transforming raw data into actionable insights with advanced data pipelines.",
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "AI & Machine Learning",
    description: "Custom AI models, NLP, and automation solutions to smarten your business processes.",
    icon: <Bot className="h-8 w-8" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineering Digital Excellence</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We deliver end-to-end IT solutions tailored to your unique business challenges, leveraging the latest technologies for maximum impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-dark-800 border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1">
              <div className="bg-dark-950 w-16 h-16 rounded-xl flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};