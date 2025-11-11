import { LucideIcon } from 'lucide-react';
import { Card } from './ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  gradient: string;
  trend?: string;
}

export function StatCard({ title, value, icon: Icon, gradient, trend }: StatCardProps) {
  return (
    <Card className="p-4 sm:p-5 border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1 sm:mb-2 truncate">{title}</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{value}</p>
          {trend && (
            <p className="text-xs text-emerald-600 truncate">{trend}</p>
          )}
        </div>
        <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${gradient} ml-4`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
      </div>
    </Card>
  );
}
