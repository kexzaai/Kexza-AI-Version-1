'use client';

import React, { useEffect, useState } from 'react';
import GlassCard from '@/components/common/GlassCard';
import { 
  Users, 
  CheckSquare, 
  Clock, 
  AlertCircle,
  Plus,
  Upload,
  MessageSquare,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  TrendingDown
} from 'lucide-react';
import * as dashboardService from '@/services/dashboardService';
import DashboardSkeleton from '@/components/dashboard/DashboardSkeleton';

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<dashboardService.DashboardStats | null>(null);
  const [tasks, setTasks] = useState<dashboardService.Task[]>([]);
  const [deadlines, setDeadlines] = useState<dashboardService.Deadline[]>([]);
  const [activity, setActivity] = useState<dashboardService.ClientActivity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, tasksData, deadlinesData, activityData] = await Promise.all([
          dashboardService.getDashboardStats(),
          dashboardService.getTasks(),
          dashboardService.getDeadlines(),
          dashboardService.getClientActivity(),
        ]);
        setStats(statsData);
        setTasks(tasksData);
        setDeadlines(deadlinesData);
        setActivity(activityData);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <DashboardSkeleton />;

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Good morning, Ankit 👋</h1>
          <p className="text-gray-500 font-medium">Here's a summary of your firm's activity today, March 26th.</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-secondary text-sm backdrop-blur-xl bg-white/40 border-white/50 px-4 py-2.5 shadow-sm">
            <Clock size={16} /> History
          </button>
          <button className="btn btn-primary text-sm px-6 py-2.5 shadow-lg shadow-blue-500/20">
            <Plus size={16} /> New Client
          </button>
        </div>
      </section>

      {/* Metrics Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Clients" 
          value={stats?.totalClients || 0} 
          icon={Users} 
          trend="+12%" 
          trendUp={true} 
          color="bg-blue-500" 
        />
        <MetricCard 
          title="Pending Tasks" 
          value={stats?.pendingTasks || 0} 
          icon={CheckSquare} 
          trend="+5%" 
          trendUp={false} 
          color="bg-amber-500" 
        />
        <MetricCard 
          title="Completed Tasks" 
          value={stats?.completedTasks || 0} 
          icon={CheckSquare} 
          trend="+28%" 
          trendUp={true} 
          color="bg-emerald-500" 
        />
        <MetricCard 
          title="Upcoming Deadlines" 
          value={stats?.upcomingDeadlines || 0} 
          icon={AlertCircle} 
          trend="-2" 
          trendUp={true} 
          color="bg-red-500" 
        />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              Today's Tasks <span className="text-xs font-normal py-1 px-2.5 bg-gray-100 rounded-full text-gray-500">{tasks.length}</span>
            </h2>
            <button className="text-[var(--accent)] text-sm font-semibold hover:underline flex items-center gap-1 group">
              View all tasks <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="space-y-4">
            {tasks.map((task) => (
              <GlassCard key={task.id} className="group hover:bg-white/80 transition-all cursor-pointer p-0 border-white/40 shadow-sm overflow-hidden">
                <div className="flex items-center gap-4 p-5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 
                    ${task.status === 'overdue' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                    <CheckSquare size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 group-hover:text-[var(--accent)] transition-colors truncate">{task.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                      <span className="font-semibold text-gray-700">{task.client}</span> • Due {task.dueDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider
                      ${task.priority === 'high' ? 'bg-red-100 text-red-600' : 
                        task.priority === 'medium' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                      {task.priority}
                    </span>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Activity Section */}
          <div className="pt-4">
            <h2 className="text-xl font-bold mb-6">Recent Client Activity</h2>
            <GlassCard className="p-2 border-white/40 shadow-sm">
              <div className="divide-y divide-gray-100">
                {activity.map((item) => (
                   <div key={item.id} className="flex items-center gap-4 py-4 px-4 hover:bg-gray-50/50 transition-colors rounded-xl group cursor-pointer">
                      <div className="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-xs uppercase shrink-0">
                        {item.clientName.substring(0, 1)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-bold text-gray-900">{item.clientName}</span> {item.action}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">{item.timestamp}</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-300 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                   </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Right Column: Alerts & Actions */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <section>
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <ActionButton icon={Plus} label="New Client" color="bg-blue-50 text-blue-600" />
              <ActionButton icon={CheckSquare} label="Add Task" color="bg-emerald-50 text-emerald-600" />
              <ActionButton icon={Upload} label="Upload Docs" color="bg-indigo-50 text-indigo-600" />
              <ActionButton icon={MessageSquare} label="Ask AI" color="bg-amber-50 text-amber-600" />
            </div>
          </section>

          {/* Compliance Deadlines */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Compliance Alerts</h2>
              <span className="text-[10px] bg-red-100 text-red-600 font-bold px-2 py-0.5 rounded-full">Urgent</span>
            </div>
            <div className="space-y-3">
              {deadlines.map((deadline) => (
                <div key={deadline.id} className="flex gap-4 p-4 rounded-2xl bg-white/60 border border-white/50 shadow-sm hover:translate-y-[-2px] transition-all cursor-pointer group">
                  <div className={`w-1 h-10 rounded-full shrink-0 ${deadline.urgent ? 'bg-red-500' : 'bg-gray-300 group-hover:bg-[var(--accent)] transition-colors'}`}></div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{deadline.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{deadline.type} Deadline • {deadline.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Simple Analytics Card */}
          <section>
            <GlassCard className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-none p-6 shadow-xl shadow-blue-500/20">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-lg">Task Completion</h3>
                  <p className="text-indigo-100 text-xs">Exceeding last week by 15%</p>
                </div>
                <div className="p-2 bg-white/20 rounded-lg">
                  <TrendingUp size={18} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-semibold">
                  <span>Progress</span>
                  <span>78%</span>
                </div>
                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full w-[78%]"></div>
                </div>
                <button className="w-full mt-2 py-2.5 bg-white text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-50 transition-colors">
                  View Detailed Reports
                </button>
              </div>
            </GlassCard>
          </section>
        </div>
      </div>
    </div>
  );
}

const MetricCard = ({ title, value, icon: Icon, trend, trendUp, color }: any) => (
  <GlassCard className="p-6 border-white/40 shadow-sm hover:scale-[1.02] hover:shadow-md transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-current/10`}>
        <Icon size={24} />
      </div>
      <div className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-full ${trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
        {trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
        {trend}
      </div>
    </div>
    <h3 className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">{title}</h3>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </GlassCard>
);

const ActionButton = ({ icon: Icon, label, color }: any) => (
  <button className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-transparent hover:border-white/50 hover:bg-white/80 transition-all group shrink-0 ${color}`}>
    <div className="p-2 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
      <Icon size={20} />
    </div>
    <span className="text-xs font-bold">{label}</span>
  </button>
);
