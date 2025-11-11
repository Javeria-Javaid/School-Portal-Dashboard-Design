import { Users, FileText, Briefcase, MessageCircle, TrendingUp } from 'lucide-react';
import { StatCard } from '../StatCard';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const admissionData = [
  { month: 'Jan', applications: 45 },
  { month: 'Feb', applications: 52 },
  { month: 'Mar', applications: 68 },
  { month: 'Apr', applications: 73 },
  { month: 'May', applications: 85 },
  { month: 'Jun', applications: 92 },
];

const jobData = [
  { department: 'Math', applications: 24 },
  { department: 'Science', applications: 18 },
  { department: 'English', applications: 32 },
  { department: 'Arts', applications: 15 },
  { department: 'Sports', applications: 12 },
];

const queryData = [
  { name: 'Admission', value: 45, color: '#4DB6E2' },
  { name: 'Fees', value: 30, color: '#34D399' },
  { name: 'Transport', value: 15, color: '#F59E0B' },
  { name: 'Others', value: 10, color: '#8B5CF6' },
];

const recentActivities = [
  { id: 1, type: 'admission', message: 'New Application Received for Grade 8', time: '10 mins ago' },
  { id: 2, type: 'job', message: 'Math Teacher Position - 5 new applicants', time: '25 mins ago' },
  { id: 3, type: 'query', message: 'Parent query about transportation', time: '1 hour ago' },
  { id: 4, type: 'admission', message: 'Application approved for Grade 6', time: '2 hours ago' },
  { id: 5, type: 'vendor', message: 'New vendor request for uniforms', time: '3 hours ago' },
];

export function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-sm sm:text-base text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active Admissions"
          value="124"
          icon={Users}
          gradient="bg-gradient-to-br from-sky-400 to-sky-500"
          trend="+12% from last month"
        />
        <StatCard
          title="Total Applicants"
          value="892"
          icon={FileText}
          gradient="bg-gradient-to-br from-emerald-400 to-emerald-500"
          trend="+8% from last month"
        />
        <StatCard
          title="Active Job Posts"
          value="7"
          icon={Briefcase}
          gradient="bg-gradient-to-br from-violet-400 to-violet-500"
          trend="2 expiring soon"
        />
        <StatCard
          title="Parent Queries"
          value="23"
          icon={MessageCircle}
          gradient="bg-gradient-to-br from-amber-400 to-amber-500"
          trend="5 pending response"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-4 sm:p-6 rounded-2xl border-0 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Monthly Admission Trends</h3>
              <p className="text-sm text-gray-500">Application submissions over time</p>
            </div>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={admissionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="applications" 
                stroke="#4DB6E2" 
                strokeWidth={3}
                dot={{ fill: '#4DB6E2', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4 sm:p-6 rounded-2xl border-0 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Job Applications by Department</h3>
            <p className="text-sm text-gray-500">Total applicants per department</p>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={jobData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="department" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Bar dataKey="applications" fill="#34D399" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-4 sm:p-6 rounded-2xl border-0 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Parent Query Types</h3>
            <p className="text-sm text-gray-500">Distribution of queries</p>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={queryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {queryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4">
            {queryData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-gray-600 truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="lg:col-span-2 p-4 sm:p-6 rounded-2xl border-0 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <p className="text-sm text-gray-500">Latest updates from your portal</p>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start justify-between gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                    activity.type === 'admission' ? 'bg-sky-400' :
                    activity.type === 'job' ? 'bg-emerald-400' :
                    activity.type === 'query' ? 'bg-amber-400' :
                    'bg-violet-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 leading-snug">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
                <Badge variant="outline" className={`flex-shrink-0 ${
                  activity.type === 'admission' ? 'border-sky-200 bg-sky-50 text-sky-700' :
                  activity.type === 'job' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' :
                  activity.type === 'query' ? 'border-amber-200 bg-amber-50 text-amber-700' :
                  'border-violet-200 bg-violet-50 text-violet-700'
                }`}>
                  {activity.type}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
