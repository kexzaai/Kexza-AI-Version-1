'use client';

import React from 'react';
import { FileText, Upload, Download, Trash2, MoreVertical, File, Search, Filter } from 'lucide-react';
import { ClientDocument } from '@/services/clientService';

interface DocumentsSectionProps {
  documents: ClientDocument[];
  onUpload: () => void;
  onDownload: (docId: string) => void;
  onDelete: (docId: string) => void;
}

const DocumentsSection: React.FC<DocumentsSectionProps> = ({ documents, onUpload, onDownload, onDelete }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Document Vault</h2>
          <p className="text-sm text-gray-400">Securely store and manage client documents.</p>
        </div>
        <button
          onClick={onUpload}
          className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-95 shadow-lg shadow-indigo-500/20"
        >
          <Upload size={18} />
          Upload Document
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
          />
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-all">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Document List */}
      <div className="grid grid-cols-1 gap-4">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <div
              key={doc.id}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                    {doc.name}
                  </h3>
                  <div className="mt-1 flex gap-3 text-xs text-gray-500">
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>{doc.uploadDate}</span>
                    <span>•</span>
                    <span className="rounded-full bg-white/5 px-2 py-0.5 text-gray-400">{doc.category}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDownload(doc.id)}
                  className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                  title="Download"
                >
                  <Download size={18} />
                </button>
                <button
                  onClick={() => onDelete(doc.id)}
                  className="rounded-lg p-2 text-gray-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 py-12 text-center">
            <div className="mb-4 rounded-full bg-white/5 p-4 text-gray-500">
              <File size={32} />
            </div>
            <h3 className="text-lg font-medium text-white">No documents uploaded</h3>
            <p className="mt-1 text-sm text-gray-400">Keep all your client files organized in one place.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsSection;
