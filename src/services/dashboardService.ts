export interface Task {
  id: string;
  title: string;
  status: 'pending' | 'completed' | 'overdue';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  client: string;
}

export interface Deadline {
  id: string;
  title: string;
  date: string;
  type: 'GST' | 'ITR' | 'Audit' | 'Other';
  urgent: boolean;
}

export interface ClientActivity {
  id: string;
  clientName: string;
  action: string;
  timestamp: string;
}

export interface DashboardStats {
  totalClients: number;
  pendingTasks: number;
  completedTasks: number;
  upcomingDeadlines: number;
}

export const getDashboardStats = async (): Promise<DashboardStats> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    totalClients: 124,
    pendingTasks: 42,
    completedTasks: 158,
    upcomingDeadlines: 8,
  };
};

export const getTasks = async (): Promise<Task[]> => {
  await new Promise(resolve => setTimeout(resolve, 1200));
  return [
    { id: '1', title: 'GST Filing - March 2026', status: 'overdue', priority: 'high', dueDate: '2026-03-20', client: 'Reliance Industries' },
    { id: '2', title: 'Audit Review', status: 'pending', priority: 'medium', dueDate: '2026-03-27', client: 'Tata Motors' },
    { id: '3', title: 'Income Tax Return', status: 'pending', priority: 'high', dueDate: '2026-03-28', client: 'Infosys' },
    { id: '4', title: 'TDS Payment', status: 'completed', priority: 'low', dueDate: '2026-03-25', client: 'Wipro' },
  ];
};

export const getDeadlines = async (): Promise<Deadline[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return [
    { id: '1', title: 'GSTR-3B Filing', date: '2026-03-20', type: 'GST', urgent: true },
    { id: '2', title: 'Income Tax Return - Individual', date: '2026-03-31', type: 'ITR', urgent: false },
    { id: '3', title: 'Statutory Audit', date: '2026-04-15', type: 'Audit', urgent: false },
  ];
};

export const getClientActivity = async (): Promise<ClientActivity[]> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return [
    { id: '1', clientName: 'Reliance Industries', action: 'Uploaded 5 documents', timestamp: '2 hours ago' },
    { id: '2', clientName: 'Adani Group', action: 'Updated profile information', timestamp: '5 hours ago' },
    { id: '3', clientName: 'HDFC Bank', action: 'New task created', timestamp: '1 day ago' },
  ];
};
