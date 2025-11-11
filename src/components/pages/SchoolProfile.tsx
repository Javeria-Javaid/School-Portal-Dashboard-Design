import { School, MapPin, Phone, Mail, Globe, Users, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function SchoolProfile() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">School Profile</h1>
          <p className="text-gray-600">Manage your school's information and settings</p>
        </div>
        <Button className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 rounded-xl">
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1 p-6 rounded-2xl border-0 shadow-sm">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center mb-4">
              <School className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-gray-900 mb-1">Springfield Academy</h2>
            <p className="text-sm text-gray-500 mb-4">Est. 1985</p>
            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
              Verified School
            </Badge>
          </div>
        </Card>

        <Card className="lg:col-span-2 p-6 rounded-2xl border-0 shadow-sm">
          <h3 className="text-gray-900 mb-6">Basic Information</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
              <MapPin className="w-5 h-5 text-sky-500 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-gray-900">123 Education Street, Springfield, IL 62701</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
              <Phone className="w-5 h-5 text-emerald-500 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-gray-900">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
              <Mail className="w-5 h-5 text-violet-500 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-900">admin@springfieldacademy.edu</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
              <Globe className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Website</p>
                <p className="text-gray-900">www.springfieldacademy.edu</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 rounded-2xl border-0 shadow-sm">
          <h3 className="text-gray-900 mb-6">School Statistics</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-4 rounded-xl bg-sky-50">
              <Users className="w-8 h-8 text-sky-500 mx-auto mb-2" />
              <p className="text-2xl text-gray-900 mb-1">1,245</p>
              <p className="text-sm text-gray-600">Total Students</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-emerald-50">
              <Users className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <p className="text-2xl text-gray-900 mb-1">87</p>
              <p className="text-sm text-gray-600">Teaching Staff</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-violet-50">
              <School className="w-8 h-8 text-violet-500 mx-auto mb-2" />
              <p className="text-2xl text-gray-900 mb-1">12</p>
              <p className="text-sm text-gray-600">Grade Levels</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-amber-50">
              <Calendar className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <p className="text-2xl text-gray-900 mb-1">38</p>
              <p className="text-sm text-gray-600">Years Active</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 rounded-2xl border-0 shadow-sm">
          <h3 className="text-gray-900 mb-6">About</h3>
          <p className="text-gray-600 mb-4">
            Springfield Academy is a premier educational institution dedicated to nurturing young minds 
            and preparing students for a bright future. With over 38 years of excellence in education, 
            we provide a comprehensive learning environment that combines academic rigor with 
            extracurricular opportunities.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <p className="text-sm text-gray-700">CBSE Affiliated</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <p className="text-sm text-gray-700">State Board Recognition</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-400" />
              <p className="text-sm text-gray-700">ISO 9001:2015 Certified</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
