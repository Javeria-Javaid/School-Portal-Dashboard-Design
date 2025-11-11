import { Download, FileText, TrendingUp, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const conversionData = [
  { month: 'Jan', rate: 68 },
  { month: 'Feb', rate: 72 },
  { month: 'Mar', rate: 75 },
  { month: 'Apr', rate: 78 },
  { month: 'May', rate: 82 },
  { month: 'Jun', rate: 85 },
];

const jobPerformanceData = [
  { position: 'Math Teacher', views: 245, applications: 24 },
  { position: 'Science Teacher', views: 198, applications: 18 },
  { position: 'English Teacher', views: 312, applications: 32 },
  { position: 'PE Instructor', views: 156, applications: 12 },
  { position: 'Art Teacher', views: 187, applications: 15 },
];

const feedbackData = [
  { category: 'Teaching Quality', rating: 4.8, count: 156 },
  { category: 'Facilities', rating: 4.6, count: 143 },
  { category: 'Communication', rating: 4.7, count: 178 },
  { category: 'Administration', rating: 4.5, count: 134 },
];

export function Reports() {
  const handleExportPDF = () => {
    console.log('Exporting PDF report...');
    // PDF export logic would go here
  };

  const handleExportCSV = () => {
    console.log('Exporting CSV report...');
    // CSV export logic would go here
  };

  const handleTimeRangeChange = (value) => {
    console.log('Time range changed to:', value);
    // Filter data based on time range
  };

  return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">Reports & Analytics</h1>
            <p className="text-gray-600">Insights and performance metrics</p>
          </div>
          <div className="flex gap-3">
            <Select defaultValue="30days" onValueChange={handleTimeRangeChange}>
              <SelectTrigger className="w-40 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">This year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="rounded-xl" onClick={handleExportPDF}>
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
            <Button
                className="rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600"
                onClick={handleExportCSV}
            >
              <FileText className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 rounded-2xl border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-sky-50">
                <TrendingUp className="w-6 h-6 text-sky-500" />
              </div>
              <span className="text-sm text-emerald-600">+12%</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Admission Rate</p>
            <p className="text-2xl text-gray-900">85%</p>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-emerald-50">
                <TrendingUp className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-sm text-emerald-600">+8%</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Job Fill Rate</p>
            <p className="text-2xl text-gray-900">92%</p>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-violet-50">
                <TrendingUp className="w-6 h-6 text-violet-500" />
              </div>
              <span className="text-sm text-emerald-600">+15%</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Parent Satisfaction</p>
            <p className="text-2xl text-gray-900">4.7/5</p>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-amber-50">
                <Calendar className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-sm text-red-600">-3%</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Avg Response Time</p>
            <p className="text-2xl text-gray-900">2.3h</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 rounded-2xl border-0 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Admission Conversion Rate</h3>
              <p className="text-sm text-gray-500">Applications to enrollment ratio over time</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
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
                    dataKey="rate"
                    stroke="#34D399"
                    strokeWidth={3}
                    dot={{ fill: '#34D399', r: 5 }}
                    activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 rounded-2xl border-0 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Job Post Performance</h3>
              <p className="text-sm text-gray-500">Views vs applications by position</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={jobPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="position" stroke="#9CA3AF" tick={{ fontSize: 12 }} />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                />
                <Legend />
                <Bar dataKey="views" fill="#4DB6E2" radius={[8, 8, 0, 0]} name="Views" />
                <Bar dataKey="applications" fill="#34D399" radius={[8, 8, 0, 0]} name="Applications" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        <Card className="p-6 rounded-2xl border-0 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Feedback Summary</h3>
            <p className="text-sm text-gray-500">Average ratings across different categories</p>
          </div>
          <div className="space-y-6">
            {feedbackData.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-900">{item.category}</span>
                      <span className="text-xs text-gray-500">({item.count} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <div
                                key={star}
                                className={`w-4 h-4 rounded-sm ${
                                    star <= Math.round(item.rating)
                                        ? 'bg-amber-400'
                                        : 'bg-gray-200'
                                }`}
                            />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{item.rating}</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"
                        style={{ width: `${(item.rating / 5) * 100}%` }}
                    />
                  </div>
                </div>
            ))}
          </div>
        </Card>
      </div>
  );
}