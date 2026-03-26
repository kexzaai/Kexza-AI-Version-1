'use client';

import React from 'react';
import { User, Building2, MoreHorizontal, Edit, Trash2, Plus, Upload, Mail, Phone, MapPin } from 'lucide-react';
import { Client } from '@/services/clientService';

interface ClientHeaderProps {
  client: Client;
  onEdit: () => void;
  onDelete: () => void;
  onAddTask: () => void;
  onUpload: () => void;
}

const ClientHeader: React.FC<ClientHeaderProps> = ({ client, onEdit, onDelete, onAddTask, onUpload }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/15">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Client Info */}
        <div className="flex items-start gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
            {client.type === 'Individual' ? <User size={32} /> : <Building2 size={32} />}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-white">{client.name}</h1>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${client.status === 'active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                {client.status}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-300">PAN:</span> {client.pan}
              </div>
              {client.gstin && (
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-gray-300">GST:</span> {client.gstin}
                </div>
              )}
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-300">Type:</span> {client.type}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onAddTask}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-95"
          >
            <Plus size={18} />
            Add Task
          </button>
          <button
            onClick={onUpload}
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
          >
            <Upload size={18} />
            Upload
          </button>
          <button
            onClick={onEdit}
            className="flex items-center justify-center rounded-xl border border-white/20 bg-white/5 p-2 text-white transition-all hover:bg-white/10 active:scale-95"
            title="Edit Client"
          >
            <Edit size={18} />
          </button>
          <button
            onClick={onDelete}
            className="flex items-center justify-center rounded-xl border border-rose-500/40 bg-rose-500/10 p-2 text-rose-400 transition-all hover:bg-rose-500/20 active:scale-95"
            title="Delete Client"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gray-400">
            <Mail size={16} />
          </div>
          <a href={`mailto:${client.email}`} className="hover:text-indigo-400 transition-colors">{client.email}</a>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gray-400">
            <Phone size={16} />
          </div>
          <a href={`tel:${client.phone}`} className="hover:text-indigo-400 transition-colors">{client.phone}</a>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-gray-400">
            <MapPin size={16} />
          </div>
          <span className="line-clamp-1">Last updated: {client.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientHeader;
