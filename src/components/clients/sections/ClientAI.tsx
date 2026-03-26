'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, Loader2, RefreshCw } from 'lucide-react';
import { ClientFullData } from '@/services/clientService';

interface ClientAIProps {
  clientData: ClientFullData;
}

const ClientAI: React.FC<ClientAIProps> = ({ clientData }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: `Hi! I'm your AI assistant for ${clientData.client.name}. How can I help you manage this client today?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // Simulate AI response based on client context
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let aiResponse = "I'm analyzing the client data...";
    
    if (userMessage.toLowerCase().includes('task')) {
      const pendingTasks = clientData.tasks.filter(t => t.status !== 'completed').length;
      aiResponse = `${clientData.client.name} has ${pendingTasks} pending tasks, including "${clientData.tasks.find(t => t.status === 'overdue')?.title || 'recent filings'}". Would you like me to send a reminder?`;
    } else if (userMessage.toLowerCase().includes('compliance') || userMessage.toLowerCase().includes('deadline')) {
      const nextDeadline = clientData.deadlines[0];
      aiResponse = `The next compliance deadline is ${nextDeadline.title} on ${nextDeadline.date}. This is marked as ${nextDeadline.urgent ? 'URGENT' : 'normal priority'}.`;
    } else if (userMessage.toLowerCase().includes('pan') || userMessage.toLowerCase().includes('gst')) {
      aiResponse = `The PAN for ${clientData.client.name} is ${clientData.client.pan}${clientData.client.gstin ? ` and the GST number is ${clientData.client.gstin}` : ''}.`;
    } else {
      aiResponse = `I've reviewed the records for ${clientData.client.name}. They are currently ${clientData.client.status} with a focus on ${clientData.client.type} operations. What specific information do you need?`;
    }

    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="flex h-[600px] flex-col overflow-hidden rounded-3xl border border-indigo-500/20 bg-white/5 backdrop-blur-xl">
      {/* AI Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-indigo-500/10 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/20">
            <Bot size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Kexza AI Assistant</h2>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-emerald-400">Context: {clientData.client.name}</span>
            </div>
          </div>
        </div>
        <button className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-all">
          <RefreshCw size={18} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-white/10'}`}>
                {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-indigo-400" />}
              </div>
              <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-500/10' 
                  : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <Bot size={16} className="text-indigo-400" />
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-gray-500">
                <Loader2 size={16} className="animate-spin" />
                <span className="text-xs font-medium">Thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 pt-0">
        <form onSubmit={handleSend} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask Kexza AI about ${clientData.client.name}...`}
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-6 pr-14 text-sm text-white placeholder-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-inner"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 h-10 w-10 flex items-center justify-center rounded-xl bg-indigo-600 text-white transition-all hover:bg-indigo-700 disabled:opacity-50 active:scale-95 shadow-lg shadow-indigo-500/20"
          >
            <Send size={18} />
          </button>
        </form>
        <div className="mt-3 flex flex-wrap gap-2">
          {['Active Tasks', 'GST Status', 'Compliance Deadline'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
              className="flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-semibold text-gray-400 uppercase tracking-widest hover:bg-white/10 hover:text-indigo-300 transition-all"
            >
              <Sparkles size={10} />
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientAI;
