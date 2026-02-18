import React, { useState, useEffect, useRef } from 'react';
import { sendMessageToConcierge } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Terminal } from 'lucide-react';

const Concierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Greetings. I am the Private Secretary for Civil Arms. How may I facilitate your geopolitical objectives today?',
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
    <div className="h-screen w-full flex items-center justify-center p-4 pt-12 pb-24">
      <div className="w-full max-w-2xl bg-[#faf9f6] border border-[#1c1917]/10 h-[70vh] flex flex-col shadow-2xl relative">
        {/* Header */}
        <div className="p-6 border-b border-[#1c1917]/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                    <h2 className="luxury-serif text-xl">Private Secretary</h2>
                    <p className="text-[10px] uppercase tracking-widest text-[#1c1917]/40">Secure Channel • End-to-End Encrypted</p>
                </div>
            </div>
            <Terminal size={16} className="text-[#1c1917]/20" />
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[80%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <p className={`text-sm leading-relaxed ${msg.role === 'user' ? 'font-light text-[#1c1917]/60' : 'font-normal text-[#1c1917]'}`}>
                  {msg.text}
                </p>
                <span className="text-[9px] uppercase tracking-widest text-[#1c1917]/20 mt-2 block">
                    {msg.role === 'model' ? 'Secretary' : 'Client'} • {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start">
               <div className="text-xs text-[#1c1917]/40 italic animate-pulse">The Secretary is composing a response...</div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-[#1c1917]/5 bg-[#faf9f6]">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your inquiry..."
              className="w-full bg-transparent border-b border-[#1c1917]/20 py-3 pr-12 text-sm focus:outline-none focus:border-[#1c1917]/60 transition-colors placeholder:text-[#1c1917]/20 font-light"
            />
            <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-0 text-[#1c1917] hover:text-[#1c1917]/60 transition-colors disabled:opacity-30"
            >
              <Send size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
        
        {/* Decorative Corner Lines */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1c1917]"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1c1917]"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1c1917]"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1c1917]"></div>
      </div>
    </div>
  );
};

export default Concierge;