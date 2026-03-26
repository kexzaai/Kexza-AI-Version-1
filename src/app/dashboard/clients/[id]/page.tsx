'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Hash, 
  Briefcase, 
  Edit2, 
  Calendar,
  FileText,
  CheckSquare,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/common/GlassCard';
import * as clientService from '@/services/clientService';
import { Skeleton } from '@/components/dashboard/DashboardSkeleton';

const ClientDetailPage = () => {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const [client, setClient] = useState<clientService.Client | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClient = async () => {
      if (!id) return;
      try {
        const data = await clientService.getClientById(id);
        if (data) {
          setClient(data);
        } else {
          router.push('/dashboard/clients');
        }
      } catch (error) {
        console.error("Error fetching client", error);
        router.push('/dashboard/clients');
      } finally {
        setLoading(false);
      }
    };
    fetchClient();
  }, [id, router]);

  if (loading) {
    return (
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex items-center gap-4">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Skeleton className="w-24 h-24 rounded-2xl" />
          <div className="space-y-3">
             <Skeleton className="h-8 w-64" />
             <Skeleton className="h-4 w-48" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <Skeleton className="h-64 w-full rounded-2xl" />
           <Skeleton className="h-64 w-full rounded-2xl md:col-span-2" />
        </div>
      </div>
    );
  }

  if (!client) return null;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumbs / Back */}
      <Link 
        href="/dashboard/clients" 
        className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[var(--accent)] transition-colors group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Back to Clients
      </Link>

      {/* Header Profile Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className={`w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-xl
            ${client.type === 'Business' ? 'bg-gradient-to-br from-indigo-500 to-indigo-700' : 'bg-gradient-to-br from-amber-500 to-orange-600'}`}>
            {client.type === 'Business' ? <Building2 size={40} /> : <User size={40} />}
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{client.name}</h1>
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider 
                ${client.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>
                {client.status}
              </span>
            </div>
            <p className="text-gray-500 flex flex-wrap items-center gap-4 font-medium text-sm">
               <span className="flex items-center gap-1.5"><Mail size={14} /> {client.email}</span>
               <span className="flex items-center gap-1.5"><Phone size={14} /> {client.phone}</span>
            </p>
          </div>
        </div>
        <button className="btn btn-secondary px-6 py-2.5 bg-white border-gray-200">
           <Edit2 size={16} /> Edit Profile
        </button>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Identifiers */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Tax Identifiers</h2>
          <GlassCard className="p-6 space-y-6 border-white/40 shadow-sm">
             <div className="space-y-1">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">PAN Number</p>
               <p className="text-base font-bold text-gray-900 flex items-center gap-2">
                 <Hash size={16} className="text-[var(--accent)]" /> {client.pan}
               </p>
             </div>
             {client.gstin && (
               <div className="space-y-1 pt-4 border-t border-gray-100">
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">GSTIN</p>
                 <p className="text-base font-bold text-gray-900 flex items-center gap-2">
                   <Briefcase size={16} className="text-[var(--accent)]" /> {client.gstin}
                 </p>
               </div>
             )}
             <div className="space-y-1 pt-4 border-t border-gray-100">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Client Since</p>
               <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                 <Calendar size={14} className="text-gray-400" /> {client.createdAt}
               </p>
             </div>
             <div className="space-y-1 pt-4 border-t border-gray-100">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Updated</p>
               <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                 <MapPin size={14} className="text-gray-400" /> {client.lastUpdated}
               </p>
             </div>
          </GlassCard>
        </div>

        {/* Right Columns: Activity/Documents Placeholder */}
        <div className="md:col-span-2 space-y-8">
           <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Quick Shortcuts</h2>
                <span className="text-xs text-[var(--accent)] font-semibold cursor-pointer hover:underline">Customize</span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                 <ShortcutCard icon={CheckSquare} title="Tasks" count={12} color="bg-blue-50 text-blue-600" />
                 <ShortcutCard icon={FileText} title="Documents" count={45} color="bg-emerald-50 text-emerald-600" />
                 <ShortcutCard icon={Calendar} title="Filings" count={3} color="bg-red-50 text-red-600" />
              </div>
           </section>

           <section className="space-y-4">
              <h2 className="text-xl font-bold">Recent History</h2>
              <GlassCard className="p-0 border-white/40 shadow-sm overflow-hidden">
                 <div className="divide-y divide-gray-100">
                    <HistoryItem 
                      title="GSTR-1 Filed" 
                      desc="GST filing for January 2026 was completed successfully." 
                      time="Feb 10, 2026" 
                      type="success"
                    />
                    <HistoryItem 
                      title="Document Uploaded" 
                      desc="Purchase register for Q3 and balance sheet added to vault." 
                      time="Feb 02, 2026" 
                    />
                    <HistoryItem 
                      title="TDS Payment" 
                      desc="TDS deduction for salary and contract payments processed." 
                      time="Jan 28, 2026" 
                      type="success"
                    />
                 </div>
                 <button className="w-full py-4 text-sm font-bold text-[var(--accent)] bg-gray-50/50 hover:bg-gray-50 transition-colors">
                    View Comprehensive History
                 </button>
              </GlassCard>
           </section>
        </div>
      </div>
    </div>
  );
};

const ShortcutCard = ({ icon: Icon, title, count, color }: any) => (
  <button className={`flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white/50 hover:scale-[1.02] hover:bg-white transition-all shadow-sm ${color}`}>
    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/80 shadow-sm">
      <Icon size={20} />
    </div>
    <div className="text-left">
      <p className="text-sm font-bold text-gray-900">{title}</p>
      <p className="text-xs text-gray-500 font-medium">{count} Items</p>
    </div>
  </button>
);

const HistoryItem = ({ title, desc, time, type }: any) => (
  <div className="p-5 hover:bg-gray-50/50 transition-colors flex gap-4">
    <div className={`w-1.5 h-10 rounded-full shrink-0 ${type === 'success' ? 'bg-emerald-500' : 'bg-blue-500'}`} />
    <div className="flex-1">
      <div className="flex justify-between items-start gap-4">
        <h4 className="text-sm font-bold text-gray-900">{title}</h4>
        <span className="text-[10px] font-bold text-gray-400 whitespace-nowrap uppercase tracking-widest">{time}</span>
      </div>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default ClientDetailPage;
