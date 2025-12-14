import React from 'react';
import { ArrowRight, Zap, Shield, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span className="text-sm text-slate-300 font-medium">Innovating for the Future</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Digital</span> World of Tomorrow
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              We engineer scalable software, robust cloud infrastructure, and AI-driven solutions to propel your business into the next era of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-brand-500/25 group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="inline-flex justify-center items-center px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all">
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-slate-500 text-sm">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">98%</h3>
                <p className="text-slate-500 text-sm">Client Retention</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="text-slate-500 text-sm">Support Active</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-500/10 border border-white/10 bg-dark-800/50 backdrop-blur-sm p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="bg-dark-800 p-6 rounded-xl border border-white/5">
                    <Zap className="h-8 w-8 text-yellow-400 mb-3" />
                    <div className="h-2 w-20 bg-white/10 rounded mb-2"></div>
                    <div className="h-2 w-12 bg-white/10 rounded"></div>
                  </div>
                  <div className="bg-dark-800 p-6 rounded-xl border border-white/5">
                    <Cpu className="h-8 w-8 text-brand-400 mb-3" />
                    <div className="h-2 w-24 bg-white/10 rounded mb-2"></div>
                    <div className="h-2 w-16 bg-white/10 rounded"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-dark-800 p-6 rounded-xl border border-white/5">
                    <Shield className="h-8 w-8 text-green-400 mb-3" />
                    <div className="h-2 w-16 bg-white/10 rounded mb-2"></div>
                    <div className="h-2 w-24 bg-white/10 rounded"></div>
                  </div>
                  <div className="bg-gradient-to-br from-brand-600 to-purple-600 p-6 rounded-xl shadow-lg">
                    <div className="text-white font-bold text-lg mb-1">AI Ready</div>
                    <div className="text-white/80 text-sm">Next-gen tech integration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};