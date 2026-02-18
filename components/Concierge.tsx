import React, { useState, useEffect, useRef } from 'react';
import { sendMessageToConcierge } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Fingerprint } from 'lucide-react';

const Concierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Civil Arms Private Secretary online. I am at your disposal for all inquiries regarding the Vikram series and relevant jurisdictional protocols.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await sendMessageToConcierge(userMsg.text, history);

    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="h-screen w-full flex items-center justify-center p-4 pt-12 pb-24 bg-[#e8e6e1] bg-opacity-30">
      <div className="w-full max-w-3xl flex flex-col relative">
        
        {/* Card Container */}
        <div className="bg-[#faf9f6] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-[#1c1917]/5 h-[75vh] flex flex-col relative overflow-hidden">
            
            {/* Header */}
            <div className="p-8 pb-4 flex items-center justify-between border-b border-[#1c1917]/5">
                <div>
                    <h2 className="luxury-serif text-3xl text-[#1c1917]">Private Secretary</h2>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-1.5 h-1.5 bg-[#1c1917] rounded-full animate-pulse"></div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#1c1917]/50">Secure Link • New Delhi HQ</p>
                    </div>
                </div>
                <Fingerprint className="text-[#1c1917]/10 w-12 h-12" strokeWidth={0.5} />
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-12">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div className={`max-w-[85%] relative`}>
                    {msg.role === 'model' && (
                        <span className="absolute -left-6 top-1 text-[8px] font-mono text-[#1c1917]/30">SEC</span>
                    )}
                    {msg.role === 'user' && (
                        <span className="absolute -right-6 top-1 text-[8px] font-mono text-[#1c1917]/30">YOU</span>
                    )}
                    
                    <p className={`text-base md:text-lg leading-relaxed ${
                        msg.role === 'user' 
                        ? 'font-serif italic text-[#1c1917]/60' 
                        : 'font-sans font-light text-[#1c1917]'
                    }`}>
                    {msg.text}
                    </p>
                </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex items-center gap-2 text-[#1c1917]/30">
                    <span className="text-[9px] uppercase tracking-widest animate-pulse">Transmitting</span>
                </div>
            )}
            </div>

            {/* Input */}
            <div className="p-8 pt-4 bg-[#faf9f6]">
                <div className="relative group">
                    <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Dictate your missive..."
                    className="w-full bg-transparent border-b border-[#1c1917]/20 py-4 pr-12 text-lg font-serif italic text-[#1c1917] focus:outline-none focus:border-[#1c1917] transition-all placeholder:text-[#1c1917]/20"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1c1917]/40 hover:text-[#1c1917] transition-colors disabled:opacity-0"
                    >
                    <Send size={20} strokeWidth={1} />
                    </button>
                </div>
            </div>
            
            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02]">
                 <img src="https://www.transparenttextures.com/patterns/cubes.png" alt="" className="w-64 h-64" />
            </div>

        </div>
        
        {/* Background stack effect */}
        <div className="absolute top-2 left-2 w-full h-full bg-[#1c1917] -z-10 opacity-5"></div>
      </div>
    </div>
  );
};

export default Concierge;