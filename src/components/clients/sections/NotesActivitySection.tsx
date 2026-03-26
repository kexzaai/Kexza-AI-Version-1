'use client';

import React, { useState } from 'react';
import { MessageSquare, History, User, Send, Trash2, Edit3, Clock, MoreVertical, FileText, CheckCircle2 } from 'lucide-react';
import { ClientNote } from '@/services/clientService';
import { ClientActivity } from '@/services/dashboardService';

interface NotesActivitySectionProps {
  notes: ClientNote[];
  activities: ClientActivity[];
  onAddNote: (content: string) => void;
  onDeleteNote: (noteId: string) => void;
}

const NotesActivitySection: React.FC<NotesActivitySectionProps> = ({ notes, activities, onAddNote, onDeleteNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      onAddNote(newNote);
      setNewNote('');
    }
  };

  const getActivityIcon = (action: string) => {
    if (action.includes('Upload')) return <FileText size={16} className="text-indigo-400" />;
    if (action.includes('Task')) return <CheckCircle2 size={16} className="text-emerald-400" />;
    return <History size={16} className="text-gray-400" />;
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Internal Notes */}
      <div className="flex flex-col gap-6 lg:col-span-2">
        <h2 className="text-xl font-semibold text-white">Internal Notes</h2>
        
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add a note for the team..."
            className="w-full min-h-[120px] rounded-2xl border border-white/10 bg-white/5 p-4 pb-14 text-sm text-white placeholder-gray-500 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
          />
          <div className="absolute bottom-3 right-3">
            <button
              type="submit"
              disabled={!newNote.trim()}
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white transition-all hover:bg-indigo-700 disabled:opacity-50 active:scale-95"
            >
              <Send size={16} />
              Save Note
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {notes.length > 0 ? (
            notes.map((note) => (
              <div key={note.id} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400">
                      <User size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{note.author}</p>
                      <p className="text-[10px] text-gray-500">{note.createdAt}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onDeleteNote(note.id)}
                    className="opacity-0 transition-opacity group-hover:opacity-100 rounded-lg p-2 text-gray-500 hover:bg-rose-500/10 hover:text-rose-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-gray-300">{note.content}</p>
              </div>
            ))
          ) : (
            <p className="py-8 text-center text-sm text-gray-500">No notes yet.</p>
          )}
        </div>
      </div>

      {/* Activity Log */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold text-white">Activity Log</h2>
        <div className="relative space-y-8 before:absolute before:left-[17px] before:top-4 before:h-[calc(100%-32px)] before:w-px before:bg-white/10">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <div key={activity.id} className="relative flex gap-4 pl-1">
                <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-neutral-900 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
                  {getActivityIcon(activity.action)}
                </div>
                <div className="pt-0.5">
                  <p className="text-sm text-white">
                    <span className="font-semibold">{activity.clientName}</span>
                    <span className="mx-1 text-gray-400">{activity.action}</span>
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-black">
                    <Clock size={10} />
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="py-8 text-center text-sm text-gray-500">No recent activity.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesActivitySection;
