'use client';

import React from 'react';
import { CheckCircle2, Circle, Clock, AlertCircle, Plus, MoreVertical, Edit2, Trash2, Calendar } from 'lucide-react';
import { Task } from '@/services/dashboardService';

interface TasksSectionProps {
  tasks: Task[];
  onAddTask: () => void;
  onToggleComplete: (taskId: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks, onAddTask, onToggleComplete, onEditTask, onDeleteTask }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="text-emerald-400" size={18} />;
      case 'overdue': return <AlertCircle className="text-rose-400" size={18} />;
      default: return <Circle className="text-gray-400" size={18} />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'medium': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'low': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Client Tasks</h2>
        <button
          onClick={onAddTask}
          className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white border border-white/10 hover:bg-white/10 transition-all active:scale-95"
        >
          <Plus size={16} />
          New Task
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div
              key={task.id}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => onToggleComplete(task.id)}
                  className="mt-1 transition-transform active:scale-90"
                >
                  {getStatusIcon(task.status)}
                </button>
                <div>
                  <h3 className={`font-semibold transition-all ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-white'}`}>
                    {task.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      Due: {task.dueDate}
                    </div>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  onClick={() => onEditTask(task)}
                  className="rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                  title="Edit"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="rounded-lg p-2 text-gray-400 hover:bg-rose-500/10 hover:text-rose-400 transition-all"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 py-12 text-center">
            <div className="mb-4 rounded-full bg-white/5 p-4 text-gray-500">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-lg font-medium text-white">No tasks yet</h3>
            <p className="mt-1 text-sm text-gray-400">Add a task to get started with this client.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksSection;
