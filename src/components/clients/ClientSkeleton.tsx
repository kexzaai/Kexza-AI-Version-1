import React from 'react';
import { Skeleton } from '../dashboard/DashboardSkeleton';

const ClientSkeleton = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="glass p-4 rounded-2xl flex items-center justify-between border-white/40">
          <div className="flex items-center gap-4 flex-1">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
          <div className="flex items-center gap-8 px-4 hidden md:flex">
             <Skeleton className="h-4 w-24" />
             <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex gap-2">
             <Skeleton className="w-8 h-8 rounded-lg" />
             <Skeleton className="w-8 h-8 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientSkeleton;
