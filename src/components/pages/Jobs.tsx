import { useState } from 'react';
import { Plus, Calendar, DollarSign, Users, Eye } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

const jobListings = [
  {
    id: 1,
    title: 'Mathematics Teacher',
    subject: 'Mathematics',
    salary: '$45,000 - $55,000',
    applicants: 24,
    expiry: '2024-11-15',
    status: 'active',
    description: 'Seeking an experienced mathematics teacher for grades 6-8'
  },
  {
    id: 2,
    title: 'Science Teacher',
    subject: 'Science',
    salary: '$42,000 - $52,000',
    applicants: 18,
    expiry: '2024-11-10',
    status: 'active',
    description: 'Looking for a passionate science educator'
  },
  {
    id: 3,
    title: 'English Teacher',
    subject: 'English',
    salary: '$40,000 - $50,000',
    applicants: 32,
    expiry: '2024-11-20',
    status: 'active',
    description: 'English teacher needed for high school grades'
  },
  {
    id: 4,
    title: 'PE Instructor',
    subject: 'Physical Education',
    salary: '$38,000 - $45,000',
    applicants: 12,
    expiry: '2024-10-25',
    status: 'expired',
    description: 'Sports and physical education instructor'
  },
  {
    id: 5,
    title: 'Art Teacher',
    subject: 'Arts',
    salary: '$40,000 - $48,000',
    applicants: 15,
    expiry: '2024-11-25',
    status: 'upcoming',
    description: 'Creative arts teacher for all grade levels'
  },
  {
    id: 6,
    title: 'Music Teacher',
    subject: 'Music',
    salary: '$40,000 - $48,000',
    applicants: 9,
    expiry: '2024-11-18',
    status: 'active',
    description: 'Music instructor with focus on instruments and vocals'
  },
];

export function Jobs() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Job Management</h1>
          <p className="text-gray-600">Manage teaching positions and applicants</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Post a New Job</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Job Title</Label>
                  <Input type="text" placeholder="e.g., Mathematics Teacher" />
                </div>
                <div className="space-y-2">
                  <Label>Subject/Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                      <SelectItem value="pe">Physical Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Job Description</Label>
                <Textarea placeholder="Describe the role, responsibilities, and requirements..." rows={4} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Salary Range</Label>
                  <Input type="text" placeholder="$40,000 - $50,000" />
                </div>
                <div className="space-y-2">
                  <Label>Schedule</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="parttime">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Application Deadline</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Required Experience</Label>
                  <Input type="text" placeholder="e.g., 3+ years" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Qualifications</Label>
                <Textarea placeholder="List required qualifications and certifications..." rows={3} />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-gradient-to-r from-sky-500 to-emerald-500">Post Job</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job) => (
          <Card key={job.id} className="p-6 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.subject}</p>
              </div>
              <Badge
                className={
                  job.status === 'active'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : job.status === 'expired'
                    ? 'bg-red-50 text-red-700 border-red-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }
                variant="outline"
              >
                {job.status}
              </Badge>
            </div>

            <p className="text-sm text-gray-600 mb-4">{job.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3 text-sm">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                <span className="text-gray-700">{job.salary}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users className="w-4 h-4 text-sky-500" />
                <span className="text-gray-700">{job.applicants} applicants</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-violet-500" />
                <span className="text-gray-700">Expires: {job.expiry}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-gray-100">
              <Button variant="outline" className="flex-1 rounded-xl">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button className="flex-1 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600">
                <Users className="w-4 h-4 mr-2" />
                Applicants
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
