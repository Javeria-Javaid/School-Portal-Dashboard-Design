import { useState } from 'react';
import { Plus, Download, Filter, Eye, CheckCircle, XCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const applications = [
  { id: 1, name: 'Emma Johnson', class: 'Grade 8', date: '2024-10-15', status: 'pending', email: 'emma.j@email.com' },
  { id: 2, name: 'Michael Chen', class: 'Grade 6', date: '2024-10-14', status: 'approved', email: 'michael.c@email.com' },
  { id: 3, name: 'Sophia Williams', class: 'Grade 9', date: '2024-10-13', status: 'pending', email: 'sophia.w@email.com' },
  { id: 4, name: 'Liam Brown', class: 'Grade 7', date: '2024-10-12', status: 'rejected', email: 'liam.b@email.com' },
  { id: 5, name: 'Olivia Davis', class: 'Grade 8', date: '2024-10-11', status: 'approved', email: 'olivia.d@email.com' },
  { id: 6, name: 'Noah Martinez', class: 'Grade 6', date: '2024-10-10', status: 'pending', email: 'noah.m@email.com' },
  { id: 7, name: 'Ava Garcia', class: 'Grade 9', date: '2024-10-09', status: 'approved', email: 'ava.g@email.com' },
  { id: 8, name: 'Ethan Rodriguez', class: 'Grade 7', date: '2024-10-08', status: 'pending', email: 'ethan.r@email.com' },
];

export function Admissions() {
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredApplications = filterStatus === 'all'
      ? applications
      : applications.filter(app => app.status === filterStatus);

  return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">Admission Management</h1>
            <p className="text-gray-600">Review and manage student applications</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="rounded-xl border-gray-200">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 rounded-xl">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Admission Info
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Admission Information</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Grade Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grade6">Grade 6</SelectItem>
                          <SelectItem value="grade7">Grade 7</SelectItem>
                          <SelectItem value="grade8">Grade 8</SelectItem>
                          <SelectItem value="grade9">Grade 9</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Age Requirement</Label>
                      <Input type="text" placeholder="e.g., 11-12 years" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Eligibility Criteria</Label>
                    <Textarea placeholder="Enter eligibility criteria..." rows={3} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Application Fee</Label>
                      <Input type="text" placeholder="$100" />
                    </div>
                    <div className="space-y-2">
                      <Label>Application Deadline</Label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Required Documents</Label>
                    <Textarea placeholder="List required documents (birth certificate, report cards, etc.)" rows={3} />
                  </div>
                  <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-gradient-to-r from-sky-500 to-emerald-500">Save Information</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card className="p-6 rounded-2xl border-0 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('all')}
                  className="rounded-xl"
              >
                All
              </Button>
              <Button
                  variant={filterStatus === 'pending' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('pending')}
                  className="rounded-xl"
              >
                Pending
              </Button>
              <Button
                  variant={filterStatus === 'approved' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('approved')}
                  className="rounded-xl"
              >
                Approved
              </Button>
              <Button
                  variant={filterStatus === 'rejected' ? 'default' : 'outline'}
                  onClick={() => setFilterStatus('rejected')}
                  className="rounded-xl"
              >
                Rejected
              </Button>
            </div>
            <Button variant="outline" className="rounded-xl">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Class Applied For</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date Applied</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center text-white">
                          {application.name.charAt(0)}
                        </div>
                        <span>{application.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{application.class}</TableCell>
                    <TableCell className="text-gray-600">{application.email}</TableCell>
                    <TableCell>{application.date}</TableCell>
                    <TableCell>
                      <Badge
                          className={
                            application.status === 'approved'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : application.status === 'rejected'
                                    ? 'bg-red-50 text-red-700 border-red-200'
                                    : 'bg-amber-50 text-amber-700 border-amber-200'
                          }
                          variant="outline"
                      >
                        {application.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="rounded-lg">
                          <Eye className="w-4 h-4" />
                        </Button>
                        {application.status === 'pending' && (
                            <>
                              <Button variant="ghost" size="icon" className="rounded-lg text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                                <CheckCircle className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="rounded-lg text-red-600 hover:text-red-700 hover:bg-red-50">
                                <XCircle className="w-4 h-4" />
                              </Button>
                            </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
  );
}