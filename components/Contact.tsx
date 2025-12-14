import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
    };

  return (
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-brand-900/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Build Something Amazing Together</h3>
            <p className="text-slate-400 mb-10 text-lg">
              Ready to transform your business? Schedule a consultation or drop us a message. Our team is ready to help you navigate your digital journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dark-800 rounded-lg border border-white/5 text-brand-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Headquarters</h4>
                  <p className="text-slate-500 mt-1">123 Innovation Blvd, Tech City, TC 90210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dark-800 rounded-lg border border-white/5 text-brand-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Us</h4>
                  <p className="text-slate-500 mt-1">hello@technova.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dark-800 rounded-lg border border-white/5 text-brand-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Call Us</h4>
                  <p className="text-slate-500 mt-1">+1 (555) 000-1234</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-900 p-8 rounded-2xl border border-white/10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input type="text" id="name" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input type="email" id="email" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@company.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <select id="subject" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors">
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>Cloud Infrastructure</option>
                  <option>AI Solutions</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea id="message" rows={4} className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-semibold py-4 rounded-lg transition-colors">
                {status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};