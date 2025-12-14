import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-200">
      <Header />
      <main>
        <Hero />
        <Services />
        
        {/* Simple About/Stats Section spacer */}
        <section id="about" className="py-20 bg-dark-900 border-y border-white/5">
           <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-2xl font-bold text-white mb-4">Trusted by Market Leaders</h2>
             <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               {/* Placeholder logos */}
               <img src="https://picsum.photos/100/40?random=1" alt="Partner" className="h-10" />
               <img src="https://picsum.photos/100/40?random=2" alt="Partner" className="h-10" />
               <img src="https://picsum.photos/100/40?random=3" alt="Partner" className="h-10" />
               <img src="https://picsum.photos/100/40?random=4" alt="Partner" className="h-10" />
             </div>
           </div>
        </section>

        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-brand-500 font-semibold uppercase text-sm mb-2">Portfolio</h2>
                    <h3 className="text-3xl font-bold text-white">Recent Success Stories</h3>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                     <div className="group relative overflow-hidden rounded-2xl aspect-video">
                        <img src="https://picsum.photos/800/600?random=10" alt="Project 1" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <h4 className="text-xl font-bold text-white">FinTech Dashboard</h4>
                            <p className="text-slate-300 text-sm">Real-time analytics platform for banking sector.</p>
                        </div>
                     </div>
                     <div className="group relative overflow-hidden rounded-2xl aspect-video">
                        <img src="https://picsum.photos/800/600?random=11" alt="Project 2" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                            <h4 className="text-xl font-bold text-white">HealthCare AI</h4>
                            <p className="text-slate-300 text-sm">Diagnostic assistant powered by machine learning.</p>
                        </div>
                     </div>
                 </div>
            </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;