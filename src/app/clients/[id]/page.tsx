'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Loader2, AlertTriangle } from 'lucide-react';

import ClientHeader from '@/components/clients/ClientHeader';
import ClientSummary from '@/components/clients/ClientSummary';
import ClientTabs, { ClientTab } from '@/components/clients/ClientTabs';
import TasksSection from '@/components/clients/sections/TasksSection';
import DocumentsSection from '@/components/clients/sections/DocumentsSection';
import ComplianceSection from '@/components/clients/sections/ComplianceSection';
import NotesActivitySection from '@/components/clients/sections/NotesActivitySection';
import ClientAI from '@/components/clients/sections/ClientAI';

import {
  getClientDetails,
  ClientFullData,
  addTask,
  uploadDocument,
  addNote,
  ClientNote,
} from '@/services/clientService';
import { Task } from '@/services/dashboardService';

// --- Modals ---

interface AddTaskModalProps {
  onClose: () => void;
  onSave: (task: Omit<Task, 'id'>) => void;
  clientName: string;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onSave, clientName }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !dueDate) return;
    onSave({ title, dueDate, priority, status: 'pending', client: clientName });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-neutral-900/95 p-8 shadow-2xl shadow-black/50">
        <h2 className="mb-6 text-xl font-bold text-white">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">Task Title</label>
            <input
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. GST Filing - April 2026"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-indigo-500/50 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-indigo-500/50 focus:outline-none [color-scheme:dark]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">Priority</label>
            <div className="grid grid-cols-3 gap-3">
              {(['low', 'medium', 'high'] as const).map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPriority(p)}
                  className={`rounded-xl border py-2.5 text-sm font-semibold capitalize transition-all ${priority === p
                      ? p === 'high' ? 'border-rose-500/50 bg-rose-500/20 text-rose-300'
                        : p === 'medium' ? 'border-amber-500/50 bg-amber-500/20 text-amber-300'
                          : 'border-emerald-500/50 bg-emerald-500/20 text-emerald-300'
                      : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-gray-300 hover:bg-white/10 transition-all">
              Cancel
            </button>
            <button type="submit" className="flex-1 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

interface UploadModalProps {
  onClose: () => void;
  onUpload: (file: File, category: string) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose, onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState('Tax');
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-neutral-900/95 p-8 shadow-2xl">
        <h2 className="mb-6 text-xl font-bold text-white">Upload Document</h2>
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`mb-6 rounded-2xl border-2 border-dashed p-8 text-center transition-all ${isDragging ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10 bg-white/5 hover:border-indigo-500/40 hover:bg-white/10'
            }`}
        >
          {file ? (
            <div>
              <p className="font-semibold text-white">{file.name}</p>
              <p className="text-sm text-gray-400">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          ) : (
            <>
              <p className="text-gray-400">Drag & drop a file here, or</p>
              <label className="mt-3 inline-block cursor-pointer rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-indigo-400 hover:bg-white/10 transition-all">
                Browse Files
                <input type="file" className="hidden" onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])} />
              </label>
            </>
          )}
        </div>
        <div className="mb-6">
          <label className="mb-1.5 block text-sm font-medium text-gray-300">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-indigo-500/50 focus:outline-none [color-scheme:dark]"
          >
            {['Tax', 'Legal', 'Financial', 'Other'].map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="flex gap-3">
          <button type="button" onClick={onClose} className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-gray-300 hover:bg-white/10 transition-all">Cancel</button>
          <button
            onClick={() => file && onUpload(file, category)}
            disabled={!file}
            className="flex-1 rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-lg shadow-indigo-500/20"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

interface DeleteConfirmModalProps {
  clientName: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ clientName, onClose, onConfirm }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <div className="w-full max-w-sm rounded-3xl border border-rose-500/20 bg-neutral-900/95 p-8 shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
        <AlertTriangle size={32} />
      </div>
      <h2 className="mb-2 text-xl font-bold text-white">Delete Client</h2>
      <p className="mb-8 text-sm text-gray-400">Are you sure you want to delete <span className="font-semibold text-white">{clientName}</span>? This action cannot be undone.</p>
      <div className="flex gap-3">
        <button onClick={onClose} className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-gray-300 hover:bg-white/10 transition-all">Cancel</button>
        <button onClick={onConfirm} className="flex-1 rounded-xl bg-rose-600 py-2.5 text-sm font-semibold text-white hover:bg-rose-700 transition-all shadow-lg shadow-rose-500/20">Delete</button>
      </div>
    </div>
  </div>
);

// --- Main Page ---

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const clientId = params.id as string;

  const [data, setData] = useState<ClientFullData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ClientTab>('overview');

  const [showAddTask, setShowAddTask] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await getClientDetails(clientId);
      setData(result);
    } catch {
      setError('Client not found or failed to load.');
    } finally {
      setIsLoading(false);
    }
  }, [clientId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAddTask = async (taskData: Omit<Task, 'id'>) => {
    if (!data) return;
    const newTask = await addTask(clientId, taskData);
    setData(prev => prev ? { ...prev, tasks: [newTask, ...prev.tasks] } : prev);
    setShowAddTask(false);
    showToast('Task added successfully!');
  };

  const handleToggleComplete = (taskId: string) => {
    setData(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        tasks: prev.tasks.map(t =>
          t.id === taskId
            ? { ...t, status: t.status === 'completed' ? 'pending' : 'completed' }
            : t
        ),
      };
    });
  };

  const handleDeleteTask = (taskId: string) => {
    setData(prev => prev ? { ...prev, tasks: prev.tasks.filter(t => t.id !== taskId) } : prev);
    showToast('Task removed.');
  };

  const handleUpload = async (file: File, category: string) => {
    setIsUploading(true);
    setShowUpload(false);
    try {
      const newDoc = await uploadDocument(clientId, file, category);
      setData(prev => prev ? { ...prev, documents: [newDoc, ...prev.documents] } : prev);
      showToast(`"${file.name}" uploaded successfully!`);
    } catch {
      showToast('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteDocument = (docId: string) => {
    setData(prev => prev ? { ...prev, documents: prev.documents.filter(d => d.id !== docId) } : prev);
    showToast('Document deleted.');
  };

  const handleAddNote = async (content: string) => {
    if (!data) return;
    const note = await addNote(clientId, content);
    setData(prev => prev ? { ...prev, notes: [note, ...prev.notes] } : prev);
    showToast('Note saved.');
  };

  const handleDeleteNote = (noteId: string) => {
    setData(prev => prev ? { ...prev, notes: prev.notes.filter(n => n.id !== noteId) } : prev);
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <Loader2 size={48} className="animate-spin text-indigo-400" />
        <p className="mt-4 text-gray-400">Loading client data...</p>
      </div>
    );
  }

  // Error / Not Found State
  if (error || !data) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="mb-4 rounded-full bg-rose-500/10 p-6 text-rose-400">
          <AlertTriangle size={48} />
        </div>
        <h2 className="text-2xl font-bold text-white">Client Not Found</h2>
        <p className="mt-2 text-gray-400">{error || 'This client does not exist.'}</p>
        <button
          onClick={() => router.push('/dashboard')}
          className="mt-6 flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-all"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>
      </div>
    );
  }

  const { client, tasks, deadlines, documents, notes, activities } = data;

  const stats = {
    activeTasks: tasks.filter(t => t.status !== 'completed').length,
    completedTasks: tasks.filter(t => t.status === 'completed').length,
    upcomingDeadlines: deadlines.length,
    lastActivity: client.lastActivity,
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <ClientSummary stats={stats} />
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
              <TasksSection
                tasks={tasks.slice(0, 3)}
                onAddTask={() => setShowAddTask(true)}
                onToggleComplete={handleToggleComplete}
                onEditTask={() => { }}
                onDeleteTask={handleDeleteTask}
              />
              <ComplianceSection deadlines={deadlines} />
            </div>
            <ClientAI clientData={data} />
          </div>
        );
      case 'tasks':
        return (
          <TasksSection
            tasks={tasks}
            onAddTask={() => setShowAddTask(true)}
            onToggleComplete={handleToggleComplete}
            onEditTask={() => { }}
            onDeleteTask={handleDeleteTask}
          />
        );
      case 'documents':
        return (
          <DocumentsSection
            documents={documents}
            onUpload={() => setShowUpload(true)}
            onDownload={(id) => showToast('Download started.')}
            onDelete={handleDeleteDocument}
          />
        );
      case 'compliance':
        return <ComplianceSection deadlines={deadlines} />;
      case 'notes':
        return (
          <NotesActivitySection
            notes={notes}
            activities={activities}
            onAddNote={handleAddNote}
            onDeleteNote={handleDeleteNote}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Modals */}
      {showAddTask && (
        <AddTaskModal
          clientName={client.name}
          onClose={() => setShowAddTask(false)}
          onSave={handleAddTask}
        />
      )}
      {showUpload && (
        <UploadModal
          onClose={() => setShowUpload(false)}
          onUpload={handleUpload}
        />
      )}
      {showDelete && (
        <DeleteConfirmModal
          clientName={client.name}
          onClose={() => setShowDelete(false)}
          onConfirm={() => {
            setShowDelete(false);
            router.push('/dashboard');
          }}
        />
      )}

      {/* Toast */}
      {(toast || isUploading) && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 animate-fade-in-up">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-800/90 px-6 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl">
            {isUploading && <Loader2 size={16} className="animate-spin text-indigo-400" />}
            {isUploading ? 'Uploading file...' : toast}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Back Navigation */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Clients
        </button>

        {/* Client Header */}
        <ClientHeader
          client={client}
          onEdit={() => showToast('Edit client — coming soon!')}
          onDelete={() => setShowDelete(true)}
          onAddTask={() => setShowAddTask(true)}
          onUpload={() => setShowUpload(true)}
        />

        {/* Tabs + Content */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
          <ClientTabs activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="p-6 lg:p-8 transition-all duration-300">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
}
