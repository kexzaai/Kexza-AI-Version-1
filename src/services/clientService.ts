import { Task, Deadline, ClientActivity } from './dashboardService';

export interface Client {
  id: string;
  name: string;
  type: 'Individual' | 'Business';
  pan: string;
  gstin?: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  lastUpdated: string;
  createdAt: string;
  lastActivity: string;
}

// Mock database to simulate CRUD
let clients: Client[] = [
  {
    id: '1',
    name: 'Reliance Industries Ltd',
    type: 'Business',
    email: 'finance@reliance.com',
    phone: '+91 22 2278 5000',
    pan: 'AAA CR 1234 A',
    gstin: '27AAAAA0000A1Z5',
    status: 'active',
    lastUpdated: '2 hours ago',
    createdAt: '2024-01-15',
    lastActivity: '2 hours ago',
  },
  {
    id: '2',
    name: 'Ankit Kumar',
    type: 'Individual',
    email: 'ankit.k@gmail.com',
    phone: '+91 98765 43210',
    pan: 'BCC PK 5678 B',
    status: 'active',
    lastUpdated: '1 day ago',
    createdAt: '2024-02-10',
    lastActivity: '1 day ago',
  },
];

// Simulating 100+ more clients for performance testing
for (let i = 3; i <= 100; i++) {
  clients.push({
    id: i.toString(),
    name: `Client ${i} ${i % 3 === 0 ? 'Enterprises' : i % 2 === 0 ? 'Solutions' : 'Pvt Ltd'}`,
    type: i % 4 === 0 ? 'Individual' : 'Business',
    email: `contact${i}@example.com`,
    phone: `+91 90000 ${10000 + i}`,
    pan: `ABCDE${1000 + i}F`,
    gstin: i % 2 === 0 ? `27ABCDE${1000 + i}F1Z${i % 9}` : undefined,
    status: i % 5 === 0 ? 'inactive' : 'active',
    lastUpdated: `${i % 24} hours ago`,
    createdAt: '2024-03-01',
    lastActivity: `${i % 24} hours ago`,
  });
}

export const getClients = async (search?: string, filter?: { type?: string; status?: string }): Promise<Client[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  let filtered = [...clients];
  
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(s) || 
      c.pan.toLowerCase().includes(s) || 
      (c.gstin && c.gstin.toLowerCase().includes(s))
    );
  }
  
  if (filter?.type && filter.type !== 'All') {
    filtered = filtered.filter(c => c.type === filter.type);
  }
  
  if (filter?.status && filter.status !== 'All') {
    filtered = filtered.filter(c => c.status.toLowerCase() === filter.status?.toLowerCase());
  }
  
  return filtered;
};

export const getClientById = async (id: string): Promise<Client | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return clients.find(c => c.id === id);
};

export const createClient = async (clientData: Omit<Client, 'id' | 'lastUpdated' | 'createdAt' | 'lastActivity'>): Promise<Client> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const newClient: Client = {
    ...clientData,
    id: (clients.length + 1).toString(),
    lastUpdated: 'Just now',
    createdAt: new Date().toISOString().split('T')[0],
    lastActivity: 'Just now',
  };
  clients = [newClient, ...clients];
  return newClient;
};

export const updateClient = async (id: string, clientData: Partial<Client>): Promise<Client> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const index = clients.findIndex(c => c.id === id);
  if (index === -1) throw new Error('Client not found');
  
  clients[index] = { ...clients[index], ...clientData, lastUpdated: 'Just now' };
  return clients[index];
};

export const deleteClient = async (id: string): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  clients = clients.filter(c => c.id !== id);
};

// Original interface extensions from step 209 logic if we want to keep them for future use
export interface ClientDocument {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  category: 'Tax' | 'Legal' | 'Financial' | 'Other';
}

export interface ClientNote {
  id: string;
  content: string;
  createdAt: string;
  author: string;
}

export interface ClientFullData {
  client: Client;
  tasks: Task[];
  deadlines: Deadline[];
  documents: ClientDocument[];
  notes: ClientNote[];
  activities: ClientActivity[];
}

// --- Detail page service functions ---

export const getClientDetails = async (clientId: string): Promise<ClientFullData> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  const client = clients.find(c => c.id === clientId);
  if (!client) throw new Error('Client not found');

  const tasks: Task[] = [
    { id: 't1', title: 'GST Filing - Q4', status: 'pending', priority: 'high', dueDate: '2026-03-31', client: client.name },
    { id: 't2', title: 'Annual Audit', status: 'pending', priority: 'medium', dueDate: '2026-04-15', client: client.name },
    { id: 't3', title: 'TDS Payment', status: 'completed', priority: 'low', dueDate: '2026-03-20', client: client.name },
  ];

  const deadlines: Deadline[] = [
    { id: 'd1', title: 'GSTR-3B Filing', date: '2026-03-20', type: 'GST', urgent: true },
    { id: 'd2', title: 'Income Tax Return', date: '2026-07-31', type: 'ITR', urgent: false },
  ];

  const documents: ClientDocument[] = [
    { id: 'doc1', name: 'Balance Sheet 2025.pdf', type: 'PDF', size: '2.4 MB', uploadDate: '2026-01-15', category: 'Financial' },
    { id: 'doc2', name: 'GST Certificate.pdf', type: 'PDF', size: '540 KB', uploadDate: '2025-12-10', category: 'Tax' },
  ];

  const notes: ClientNote[] = [
    { id: 'n1', content: 'Client requested priority handling for Q4 GST filing.', createdAt: '2026-03-15', author: 'Admin' },
  ];

  const activities: ClientActivity[] = [
    { id: 'a1', clientName: client.name, action: 'Uploaded 2 documents', timestamp: '2 hours ago' },
    { id: 'a2', clientName: client.name, action: 'Task "GST Filing" created', timestamp: '1 day ago' },
  ];

  return { client, tasks, deadlines, documents, notes, activities };
};

export const addTask = async (clientId: string, taskData: Omit<Task, 'id'>): Promise<Task> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { ...taskData, id: `t_${Date.now()}` };
};

export const uploadDocument = async (
  clientId: string,
  file: File,
  category: string
): Promise<ClientDocument> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  return {
    id: `doc_${Date.now()}`,
    name: file.name,
    type: file.name.split('.').pop()?.toUpperCase() || 'FILE',
    size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    uploadDate: new Date().toISOString().split('T')[0],
    category: category as ClientDocument['category'],
  };
};

export const addNote = async (clientId: string, content: string): Promise<ClientNote> => {
  await new Promise(resolve => setTimeout(resolve, 400));
  return {
    id: `n_${Date.now()}`,
    content,
    createdAt: new Date().toISOString().split('T')[0],
    author: 'You',
  };
};
