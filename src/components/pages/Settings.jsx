import { Save, MapPin, Upload, Plus } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { useState } from 'react';

const initialUserRoles = [
  { id: 1, name: 'Principal', email: 'principal@school.edu', permissions: ['all'] },
  { id: 2, name: 'Admission Officer', email: 'admission@school.edu', permissions: ['admissions', 'communication'] },
  { id: 3, name: 'HR Manager', email: 'hr@school.edu', permissions: ['jobs', 'reports'] },
  { id: 4, name: 'Admin Assistant', email: 'assistant@school.edu', permissions: ['communication', 'vendors'] },
];

const initialNotifications = [
  { id: 'email', label: 'Email Notifications', description: 'Receive notifications via email', enabled: true },
  { id: 'sms', label: 'SMS Notifications', description: 'Receive important updates via SMS', enabled: false },
  { id: 'push', label: 'Push Notifications', description: 'Browser push notifications', enabled: true },
  { id: 'admission', label: 'New Admission Alerts', description: 'Get notified about new applications', enabled: true },
  { id: 'job', label: 'Job Application Alerts', description: 'Notifications for new job applications', enabled: true },
  { id: 'parent', label: 'Parent Query Alerts', description: 'Get notified about parent messages', enabled: true },
];

export function Settings() {
  const [schoolProfile, setSchoolProfile] = useState({
    name: 'Springfield Academy',
    established: '1985',
    address: '123 Education Street, Springfield, IL 62701',
    phone: '+1 (555) 123-4567',
    email: 'admin@springfieldacademy.edu',
    website: 'www.springfieldacademy.edu',
  });

  const [userRoles, setUserRoles] = useState(initialUserRoles);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [billingInfo, setBillingInfo] = useState({
    plan: 'Premium',
    status: 'Active',
    cycle: 'Annual',
    nextPayment: 'Dec 1, 2024',
    amount: '$1,200/year'
  });

  const handleProfileChange = (field, value) => {
    setSchoolProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationToggle = (id) => {
    setNotifications(prev =>
        prev.map(notification =>
            notification.id === id
                ? { ...notification, enabled: !notification.enabled }
                : notification
        )
    );
  };

  const handleAddUser = () => {
    const newUser = {
      id: userRoles.length + 1,
      name: 'New User',
      email: 'newuser@school.edu',
      permissions: ['basic']
    };
    setUserRoles(prev => [...prev, newUser]);
  };

  const handleEditPermissions = (userId) => {
    console.log('Editing permissions for user:', userId);
    // Permission editing logic would go here
  };

  const handleSaveChanges = () => {
    console.log('Saving settings:', {
      schoolProfile,
      notifications,
      billingInfo
    });
    // Save logic would go here
  };

  const handleLogoUpload = () => {
    console.log('Uploading new logo...');
    // Logo upload logic would go here
  };

  return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your portal preferences and configuration</p>
          </div>
          <Button
              onClick={handleSaveChanges}
              className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 rounded-xl"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        {/* School Profile Section */}
        <Card className="p-6 rounded-2xl border-0 shadow-sm">
          <h3 className="text-gray-900 mb-6">School Profile</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div
                  onClick={handleLogoUpload}
                  className="w-24 h-24 rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-900 mb-1">School Logo</p>
                <p className="text-xs text-gray-500 mb-3">Upload a square image (recommended 512x512px)</p>
                <Button variant="outline" size="sm" className="rounded-lg" onClick={handleLogoUpload}>
                  Upload New Logo
                </Button>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>School Name</Label>
                <Input
                    value={schoolProfile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Established Year</Label>
                <Input
                    value={schoolProfile.established}
                    onChange={(e) => handleProfileChange('established', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Address</Label>
              <Input
                  value={schoolProfile.address}
                  onChange={(e) => handleProfileChange('address', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input
                    value={schoolProfile.phone}
                    onChange={(e) => handleProfileChange('phone', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input
                    value={schoolProfile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Website</Label>
              <Input
                  value={schoolProfile.website}
                  onChange={(e) => handleProfileChange('website', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500" />
                Location
              </Label>
              <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="text-gray-500">Google Maps Location Picker</p>
              </div>
            </div>
          </div>
        </Card>

        {/* User Roles & Permissions */}
        <Card className="p-6 rounded-2xl border-0 shadow-sm">
          <h3 className="text-gray-900 mb-6">User Roles & Permissions</h3>
          <div className="space-y-4">
            {userRoles.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
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
                  <Button
                      variant="outline"
                      size="sm"
                      className="rounded-lg"
                      onClick={() => handleEditPermissions(user.id)}
                  >
                    Edit Permissions
                  </Button>
                </div>
            ))}
            <Button variant="outline" className="w-full rounded-xl" onClick={handleAddUser}>
              <Plus className="w-4 h-4 mr-2" />
              Add New User
            </Button>
          </div>
        </Card>

        {/* Notification Preferences */}
        <Card className="p-6 rounded-2xl border-0 shadow-sm">
          <h3 className="text-gray-900 mb-6">Notification Preferences</h3>
          <div className="space-y-6">
            {notifications.map((notification, index) => (
                <div key={notification.id}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-900">{notification.label}</p>
                      <p className="text-xs text-gray-500">{notification.description}</p>
                    </div>
                    <Switch
                        checked={notification.enabled}
                        onCheckedChange={() => handleNotificationToggle(notification.id)}
                    />
                  </div>
                  {index < notifications.length - 1 && <Separator />}
                </div>
            ))}
          </div>
        </Card>

        {/* Billing & Subscription */}
        <Card className="p-6 rounded-2xl border-0 shadow-sm">
          <h3 className="text-gray-900 mb-6">Billing & Subscription</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-emerald-50 border border-sky-100">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-900 mb-1">Current Plan</p>
                  <p className="text-2xl text-gray-900">{billingInfo.plan}</p>
                </div>
                <Badge className="bg-emerald-500 text-white">{billingInfo.status}</Badge>
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
                <p className="text-sm text-gray-900">{billingInfo.cycle}</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 text-center">
                <p className="text-xs text-gray-500 mb-1">Next Payment</p>
                <p className="text-sm text-gray-900">{billingInfo.nextPayment}</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 text-center">
                <p className="text-xs text-gray-500 mb-1">Amount</p>
                <p className="text-sm text-gray-900">{billingInfo.amount}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
  );
}