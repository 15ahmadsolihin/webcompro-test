import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I\'m Nova, your TechNova assistant. How can I help you today?', timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-600 hover:bg-brand-500 animate-bounce-slow'
        } text-white`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-[350px] sm:w-[380px] bg-dark-900 border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="p-4 bg-brand-600 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 bg-white/20 rounded-full">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Nova AI Assistant</h3>
                <span className="flex items-center text-xs text-brand-100">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark-950/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-br-none'
                      : 'bg-dark-800 border border-white/5 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-dark-800 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 text-brand-400 animate-spin" />
                  <span className="text-xs text-slate-400">Nova is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-dark-900 border-t border-white/10">
            <div className="flex items-center space-x-2 bg-dark-950 border border-white/10 rounded-full px-4 py-2 focus-within:border-brand-500/50 transition-colors">
              <input
                type="text"
                placeholder="Ask about our services..."
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-1.5 bg-brand-600 rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-500 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center mt-2">
                <span className="text-[10px] text-slate-600">Powered by Google Gemini</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};