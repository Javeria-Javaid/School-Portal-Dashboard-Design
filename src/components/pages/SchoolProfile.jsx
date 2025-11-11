import { School, MapPin, Phone, Mail, Globe, Users, Calendar, Edit } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { useState } from 'react';

export function SchoolProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState({
    name: 'Springfield Academy',
    established: '1985',
    address: '123 Education Street, Springfield, IL 62701',
    phone: '+1 (555) 123-4567',
    email: 'admin@springfieldacademy.edu',
    website: 'www.springfieldacademy.edu',
    about: 'Springfield Academy is a premier educational institution dedicated to nurturing young minds and preparing students for a bright future. With over 38 years of excellence in education, we provide a comprehensive learning environment that combines academic rigor with extracurricular opportunities.',
    students: '1,245',
    staff: '87',
    grades: '12',
    years: '38'
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setSchoolInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving school profile:', schoolInfo);
    setIsEditing(false);
    // Save logic would go here
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: schoolInfo.address,
      field: 'address',
      color: 'text-sky-500'
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: schoolInfo.phone,
      field: 'phone',
      color: 'text-emerald-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: schoolInfo.email,
      field: 'email',
      color: 'text-violet-500'
    },
    {
      icon: Globe,
      label: 'Website',
      value: schoolInfo.website,
      field: 'website',
      color: 'text-amber-500'
    }
  ];

  const statistics = [
    {
      icon: Users,
      value: schoolInfo.students,
      label: 'Total Students',
      bgColor: 'bg-sky-50',
      iconColor: 'text-sky-500',
      field: 'students'
    },
    {
      icon: Users,
      value: schoolInfo.staff,
      label: 'Teaching Staff',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      field: 'staff'
    },
    {
      icon: School,
      value: schoolInfo.grades,
      label: 'Grade Levels',
      bgColor: 'bg-violet-50',
      iconColor: 'text-violet-500',
      field: 'grades'
    },
    {
      icon: Calendar,
      value: schoolInfo.years,
      label: 'Years Active',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-500',
      field: 'years'
    }
  ];

  const certifications = [
    { text: 'CBSE Affiliated', color: 'bg-sky-400' },
    { text: 'State Board Recognition', color: 'bg-emerald-400' },
    { text: 'ISO 9001:2015 Certified', color: 'bg-violet-400' }
  ];

  return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">School Profile</h1>
            <p className="text-gray-600">Manage your school's information and settings</p>
          </div>
          <Button
              onClick={isEditing ? handleSave : handleEditToggle}
              className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 rounded-xl"
          >
            <Edit className="w-4 h-4 mr-2" />
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* School Logo & Basic Info */}
          <Card className="lg:col-span-1 p-6 rounded-2xl border-0 shadow-sm">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center mb-4">
                <School className="w-16 h-16 text-white" />
              </div>
              {isEditing ? (
                  <div className="space-y-3">
                    <input
                        type="text"
                        value={schoolInfo.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full text-center text-lg font-semibold text-gray-900 bg-transparent border-b border-gray-300 focus:border-sky-500 focus:outline-none"
                    />
                    <input
                        type="text"
                        value={`Est. ${schoolInfo.established}`}
                        onChange={(e) => handleInputChange('established', e.target.value.replace('Est. ', ''))}
                        className="w-full text-center text-sm text-gray-500 bg-transparent border-b border-gray-300 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
              ) : (
                  <>
                    <h2 className="text-gray-900 mb-1">{schoolInfo.name}</h2>
                    <p className="text-sm text-gray-500 mb-4">Est. {schoolInfo.established}</p>
                  </>
              )}
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                Verified School
              </Badge>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="lg:col-span-2 p-6 rounded-2xl border-0 shadow-sm">
            <h3 className="text-gray-900 mb-6">Basic Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                    <item.icon className={`w-5 h-5 ${item.color} mt-1`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">{item.label}</p>
                      {isEditing ? (
                          <input
                              type="text"
                              value={item.value}
                              onChange={(e) => handleInputChange(item.field, e.target.value)}
                              className="w-full text-gray-900 bg-transparent border-b border-gray-300 focus:border-sky-500 focus:outline-none"
                          />
                      ) : (
                          <p className="text-gray-900">{item.value}</p>
                      )}
                    </div>
                  </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* School Statistics */}
          <Card className="p-6 rounded-2xl border-0 shadow-sm">
            <h3 className="text-gray-900 mb-6">School Statistics</h3>
            <div className="grid grid-cols-2 gap-6">
              {statistics.map((stat, index) => (
                  <div key={index} className={`text-center p-4 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-8 h-8 ${stat.iconColor} mx-auto mb-2`} />
                    {isEditing ? (
                        <input
                            type="text"
                            value={stat.value}
                            onChange={(e) => handleInputChange(stat.field, e.target.value)}
                            className="w-full text-2xl text-center text-gray-900 bg-transparent border-b border-gray-300 focus:border-sky-500 focus:outline-none mb-1"
                        />
                    ) : (
                        <p className="text-2xl text-gray-900 mb-1">{stat.value}</p>
                    )}
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
              ))}
            </div>
          </Card>

          {/* About Section */}
          <Card className="p-6 rounded-2xl border-0 shadow-sm">
            <h3 className="text-gray-900 mb-6">About</h3>
            {isEditing ? (
                <textarea
                    value={schoolInfo.about}
                    onChange={(e) => handleInputChange('about', e.target.value)}
                    rows="4"
                    className="w-full text-gray-600 bg-transparent border border-gray-300 rounded-lg p-3 focus:border-sky-500 focus:outline-none mb-4"
                />
            ) : (
                <p className="text-gray-600 mb-4">{schoolInfo.about}</p>
            )}
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${cert.color}`} />
                    <p className="text-sm text-gray-700">{cert.text}</p>
                  </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
  );
}