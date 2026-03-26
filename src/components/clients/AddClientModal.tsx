'use client';

import React, { useState } from 'react';
import { X, User, Mail, Phone, Hash, Briefcase, Info } from 'lucide-react';
import GlassCard from '../common/GlassCard';
import { Client } from '@/services/clientService';

interface AddClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (client: Omit<Client, 'id' | 'lastUpdated' | 'createdAt'>) => void;
}

const AddClientModal = ({ isOpen, onClose, onAdd }: AddClientModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Individual' as 'Individual' | 'Business',
    email: '',
    phone: '',
    pan: '',
    gstin: '',
    status: 'active' as 'active' | 'inactive',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <GlassCard className="relative w-full max-w-lg p-8 shadow-2xl animate-in zoom-in-95 duration-200 border-white/50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add New Client</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
           <div className="space-y-2">
             <label className="text-sm font-semibold ml-1">Client Name / Firm Name</label>
             <div className="relative">
               <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <input 
                 type="text" 
                 placeholder="e.g. Reliance Industries"
                 required
                 className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm"
                 value={formData.name}
                 onChange={(e) => setFormData({...formData, name: e.target.value})}
               />
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <label className="text-sm font-semibold ml-1">Client Type</label>
               <select 
                 className="w-full px-4 py-3 bg-white/50 border border-gray-200 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm appearance-none"
                 value={formData.type}
                 onChange={(e) => setFormData({...formData, type: e.target.value as any})}
               >
                 <option value="Individual">Individual</option>
                 <option value="Business">Business</option>
               </select>
             </div>
             <div className="space-y-2">
               <label className="text-sm font-semibold ml-1">Status</label>
               <select 
                 className="w-full px-4 py-3 bg-white/50 border border-gray-200 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm appearance-none"
                 value={formData.status}
                 onChange={(e) => setFormData({...formData, status: e.target.value as any})}
               >
                 <option value="active">Active</option>
                 <option value="inactive">Inactive</option>
               </select>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <label className="text-sm font-semibold ml-1">Work Email</label>
               <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input 
                   type="email" 
                   placeholder="name@firm.com"
                   className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm"
                   value={formData.email}
                   onChange={(e) => setFormData({...formData, email: e.target.value})}
                 />
               </div>
             </div>
             <div className="space-y-2">
               <label className="text-sm font-semibold ml-1">Phone Number</label>
               <div className="relative">
                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input 
                   type="tel" 
                   placeholder="+91 99999 00000"
                   className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm"
                   value={formData.phone}
                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
                 />
               </div>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <label className="text-sm font-semibold ml-1">PAN Number</label>
               <div className="relative">
                 <Hash className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input 
                   type="text" 
                   placeholder="ABCDE1234F"
                   required
                   className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm uppercase"
                   value={formData.pan}
                   onChange={(e) => setFormData({...formData, pan: e.target.value.toUpperCase()})}
                 />
               </div>
             </div>
             <div className="space-y-2">
               <label className="text-sm font-semibold ml-1">GSTIN (Optional)</label>
               <div className="relative">
                 <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                 <input 
                   type="text" 
                   placeholder="27ABCDE1234F1Z1"
                   className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm uppercase"
                   value={formData.gstin}
                   onChange={(e) => setFormData({...formData, gstin: e.target.value.toUpperCase()})}
                 />
               </div>
             </div>
           </div>

           <div className="pt-4 flex gap-3">
             <button 
               type="button" 
               onClick={onClose}
               className="flex-1 py-3 text-sm font-bold bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
             >
               Cancel
             </button>
             <button 
               type="submit" 
               className="flex-1 py-3 text-sm font-bold bg-[var(--accent)] text-white rounded-xl shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all"
             >
               Create Client
             </button>
           </div>
        </form>
      </GlassCard>
    </div>
  );
};

export default AddClientModal;
