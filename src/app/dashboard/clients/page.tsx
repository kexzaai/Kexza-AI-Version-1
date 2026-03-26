'use client';

import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ExternalLink,
  User,
  Building2,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/common/GlassCard';
import * as clientService from '@/services/clientService';
import ClientSkeleton from '@/components/clients/ClientSkeleton';
import AddClientModal from '@/components/clients/AddClientModal';

const ClientsPage = () => {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState<clientService.Client[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ type: 'All', status: 'All' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await clientService.getClients(search, filter);
        setClients(data);
      } catch (error) {
        console.error("Error fetching clients", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [search, filter]);

  const handleAddClient = async (clientData: any) => {
    try {
      const newClient = await clientService.createClient(clientData);
      setClients([newClient, ...clients]);
    } catch (error) {
      console.error("Error creating client", error);
    }
  };

  const handleDeleteClient = async (id: string) => {
    if (confirm("Are you sure you want to delete this client?")) {
      try {
        await clientService.deleteClient(id);
        setClients(clients.filter(c => c.id !== id));
      } catch (error) {
        console.error("Error deleting client", error);
      }
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(clients.length / itemsPerPage);
  const currentClients = clients.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Clients</h1>
          <p className="text-gray-500 font-medium">Manage and organize your firm's client records.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary px-6 py-3 shadow-lg shadow-blue-500/20"
        >
          <Plus size={20} /> Add Client
        </button>
      </section>

      {/* Search & Filter Bar */}
      <GlassCard className="p-4 border-white/40 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--accent)] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, PAN, or GSTIN..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-4">
            <select 
              className="px-4 py-3 bg-white border border-gray-100 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm appearance-none min-w-[140px]"
              value={filter.type}
              onChange={(e) => setFilter({...filter, type: e.target.value})}
            >
              <option value="All">All Types</option>
              <option value="Individual">Individual</option>
              <option value="Business">Business</option>
            </select>
            
            <select 
              className="px-4 py-3 bg-white border border-gray-100 focus:border-[var(--accent)] rounded-xl outline-none transition-all text-sm appearance-none min-w-[140px]"
              value={filter.status}
              onChange={(e) => setFilter({...filter, status: e.target.value})}
            >
              <option value="All">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            
            <button className="p-3 bg-white border border-gray-100 hover:bg-gray-50 rounded-xl transition-all">
              <Filter size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Clients List */}
      <div className="relative min-h-[400px]">
        {loading ? (
          <ClientSkeleton />
        ) : clients.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
               <User size={32} />
             </div>
             <div>
               <h3 className="text-xl font-bold">No clients found</h3>
               <p className="text-gray-500 max-w-xs mx-auto">Try adjusting your search or filters, or add your first client.</p>
             </div>
             <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-secondary"
             >
               Add First Client
             </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <div className="col-span-4">Client Name</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-3">Identifiers (PAN/GST)</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>

            {currentClients.map((client) => (
              <GlassCard key={client.id} className="p-0 border-white/40 shadow-sm hover:translate-y-[-2px] hover:shadow-md transition-all group">
                <div className="grid grid-cols-12 items-center gap-4 p-5">
                  <div className="col-span-12 lg:col-span-4 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm
                      ${client.type === 'Business' ? 'bg-indigo-500' : 'bg-amber-500'}`}>
                      {client.type === 'Business' ? <Building2 size={20} /> : <User size={20} />}
                    </div>
                    <div className="min-w-0">
                      <Link href={`/dashboard/clients/${client.id}`} className="font-bold text-gray-900 group-hover:text-[var(--accent)] transition-colors truncate block">
                        {client.name}
                      </Link>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Mail size={12} /> {client.email}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 lg:col-span-2">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider
                      ${client.type === 'Business' ? 'bg-indigo-50 text-indigo-600' : 'bg-amber-50 text-amber-600'}`}>
                      {client.type}
                    </span>
                  </div>

                  <div className="col-span-6 lg:col-span-3 space-y-1">
                    <div className="text-xs font-medium text-gray-700 flex items-center gap-1.5">
                      <span className="text-[10px] text-gray-400 font-bold w-10">PAN:</span> {client.pan}
                    </div>
                    {client.gstin && (
                      <div className="text-xs font-medium text-gray-700 flex items-center gap-1.5">
                        <span className="text-[10px] text-gray-400 font-bold w-10">GST:</span> {client.gstin}
                      </div>
                    )}
                  </div>

                  <div className="col-span-6 lg:col-span-1">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${client.status === 'active' ? 'bg-emerald-500' : 'bg-gray-300'}`} />
                      <span className="text-xs font-bold capitalize">{client.status}</span>
                    </div>
                  </div>

                  <div className="col-span-6 lg:col-span-2 flex justify-end gap-2">
                    <Link 
                      href={`/dashboard/clients/${client.id}`}
                      className="p-2.5 bg-gray-50 hover:bg-[var(--accent)] hover:text-white text-gray-600 rounded-xl transition-all"
                    >
                      <ExternalLink size={16} />
                    </Link>
                    <button 
                      className="p-2.5 bg-gray-50 hover:bg-gray-200 text-gray-600 rounded-xl transition-all"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button 
                      onClick={() => handleDeleteClient(client.id)}
                      className="p-2.5 bg-gray-50 hover:bg-red-50 hover:text-red-600 text-gray-600 rounded-xl transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-between items-center px-4 pt-4">
                <p className="text-xs text-gray-500 font-medium">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, clients.length)} of {clients.length} clients
                </p>
                <div className="flex gap-2">
                  <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                    className="p-2 bg-white border border-gray-100 rounded-xl disabled:opacity-50 transition-all hover:bg-gray-50"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => p + 1)}
                    className="p-2 bg-white border border-gray-100 rounded-xl disabled:opacity-50 transition-all hover:bg-gray-50"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <AddClientModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={handleAddClient} 
      />
    </div>
  );
};

export default ClientsPage;
