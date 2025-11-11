import { Save, MapPin, Upload } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';

const userRoles = [
  { name: 'Principal', email: 'principal@school.edu', permissions: ['all'] },
  { name: 'Admission Officer', email: 'admission@school.edu', permissions: ['admissions', 'communication'] },
  { name: 'HR Manager', email: 'hr@school.edu', permissions: ['jobs', 'reports'] },
  { name: 'Admin Assistant', email: 'assistant@school.edu', permissions: ['communication', 'vendors'] },
];

export function Settings() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your portal preferences and configuration</p>
        </div>
        <Button className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 rounded-xl">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Card className="p-6 rounded-2xl border-0 shadow-sm">
        <h3 className="text-gray-900 mb-6">School Profile</h3>
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-900 mb-1">School Logo</p>
              <p className="text-xs text-gray-500 mb-3">Upload a square image (recommended 512x512px)</p>
              <Button variant="outline" size="sm" className="rounded-lg">
                Upload New Logo
              </Button>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>School Name</Label>
              <Input defaultValue="Springfield Academy" />
            </div>
            <div className="space-y-2">
              <Label>Established Year</Label>
              <Input defaultValue="1985" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Address</Label>
            <Input defaultValue="123 Education Street, Springfield, IL 62701" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input defaultValue="admin@springfieldacademy.edu" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Website</Label>
            <Input defaultValue="www.springfieldacademy.edu" />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-500" />
              Location
            </Label>
            <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Google Maps Location Picker</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 rounded-2xl border-0 shadow-sm">
        <h3 className="text-gray-900 mb-6">User Roles & Permissions</h3>
        <div className="space-y-4">
          {userRoles.map((user, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
              <div>
                <p className="text-sm text-gray-900 mb-1">{user.name}</p>
                <p className="text-xs text-gray-500 mb-2">{user.email}</p>
                <div className="flex gap-2 flex-wrap">
                  {user.permissions.map((permission) => (
                    <Badge key={permission} variant="outline" className="text-xs bg-sky-50 text-sky-700 border-sky-200">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-lg">
                Edit Permissions
              </Button>
            </div>
          ))}
          <Button variant="outline" className="w-full rounded-xl">
            + Add New User
          </Button>
        </div>
      </Card>

      <Card className="p-6 rounded-2xl border-0 shadow-sm">
        <h3 className="text-gray-900 mb-6">Notification Preferences</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-900">Email Notifications</p>
              <p className="text-xs text-gray-500">Receive notifications via email</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-900">SMS Notifications</p>
              <p className="text-xs text-gray-500">Receive important updates via SMS</p>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-900">Push Notifications</p>
              <p className="text-xs text-gray-500">Browser push notifications</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-900">New Admission Alerts</p>
              <p className="text-xs text-gray-500">Get notified about new applications</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-900">Job Application Alerts</p>
              <p className="text-xs text-gray-500">Notifications for new job applications</p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-900">Parent Query Alerts</p>
              <p className="text-xs text-gray-500">Get notified about parent messages</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </Card>

      <Card className="p-6 rounded-2xl border-0 shadow-sm">
        <h3 className="text-gray-900 mb-6">Billing & Subscription</h3>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 border border-sky-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-900 mb-1">Current Plan</p>
                <p className="text-2xl text-gray-900">Premium</p>
              </div>
              <Badge className="bg-emerald-500 text-white">Active</Badge>
            </div>
            <p className="text-sm text-gray-600 mb-4">Unlimited admissions, jobs, and vendor management</p>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-xl">View Plans</Button>
              <Button className="rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600">
                Manage Subscription
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-gray-50 text-center">
              <p className="text-xs text-gray-500 mb-1">Billing Cycle</p>
              <p className="text-sm text-gray-900">Annual</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 text-center">
              <p className="text-xs text-gray-500 mb-1">Next Payment</p>
              <p className="text-sm text-gray-900">Dec 1, 2024</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 text-center">
              <p className="text-xs text-gray-500 mb-1">Amount</p>
              <p className="text-sm text-gray-900">$1,200/year</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
