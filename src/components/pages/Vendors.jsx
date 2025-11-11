import { Plus, Star, Phone, Mail, Package, ShoppingBag, Book } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';

const initialVendors = [
  {
    id: 1,
    name: 'Uniforms Plus',
    category: 'uniform',
    rating: 4.8,
    contact: '+1 (555) 234-5678',
    email: 'info@uniformsplus.com',
    products: 'School uniforms, sports wear, accessories',
    logo: '👔'
  },
  {
    id: 2,
    name: 'Bookstore Central',
    category: 'books',
    rating: 4.9,
    contact: '+1 (555) 345-6789',
    email: 'sales@bookstorecentral.com',
    products: 'Textbooks, workbooks, reference materials',
    logo: '📚'
  },
  {
    id: 3,
    name: 'Stationery World',
    category: 'stationery',
    rating: 4.7,
    contact: '+1 (555) 456-7890',
    email: 'orders@stationeryworld.com',
    products: 'Notebooks, pens, art supplies',
    logo: '✏️'
  },
  {
    id: 4,
    name: 'Smart Tech Education',
    category: 'technology',
    rating: 4.6,
    contact: '+1 (555) 567-8901',
    email: 'support@smarttechedu.com',
    products: 'Computers, tablets, smart boards',
    logo: '💻'
  },
  {
    id: 5,
    name: 'School Furniture Co.',
    category: 'furniture',
    rating: 4.5,
    contact: '+1 (555) 678-9012',
    email: 'contact@schoolfurniture.com',
    products: 'Desks, chairs, storage solutions',
    logo: '🪑'
  },
  {
    id: 6,
    name: 'Sports Equipment Pro',
    category: 'sports',
    rating: 4.8,
    contact: '+1 (555) 789-0123',
    email: 'info@sportsequipmentpro.com',
    products: 'Sports equipment, gym supplies',
    logo: '⚽'
  },
];

const categories = [
  { value: 'uniform', label: 'Uniform' },
  { value: 'books', label: 'Books' },
  { value: 'stationery', label: 'Stationery' },
  { value: 'technology', label: 'Technology' },
  { value: 'furniture', label: 'Furniture' },
  { value: 'sports', label: 'Sports Equipment' },
];

export function Vendors() {
  const [vendors, setVendors] = useState(initialVendors);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newVendor, setNewVendor] = useState({
    name: '',
    category: '',
    contact: '',
    email: '',
    products: '',
    notes: ''
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'uniform':
        return <ShoppingBag className="w-5 h-5" />;
      case 'books':
        return <Book className="w-5 h-5" />;
      case 'stationery':
        return <Package className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'uniform':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'books':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'stationery':
        return 'bg-violet-50 text-violet-700 border-violet-200';
      case 'technology':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'furniture':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'sports':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const handleVendorInputChange = (field, value) => {
    setNewVendor(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmitVendor = () => {
    const vendorToAdd = {
      id: vendors.length + 1,
      name: newVendor.name,
      category: newVendor.category,
      rating: 4.0, // Default rating for new vendors
      contact: newVendor.contact,
      email: newVendor.email,
      products: newVendor.products,
      logo: '🏢' // Default logo
    };

    setVendors(prev => [...prev, vendorToAdd]);
    setNewVendor({
      name: '',
      category: '',
      contact: '',
      email: '',
      products: '',
      notes: ''
    });

    console.log('New vendor submitted:', vendorToAdd);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredVendors = selectedCategory === 'all'
      ? vendors
      : vendors.filter(vendor => vendor.category === selectedCategory);

  const handleViewDetails = (vendorId) => {
    console.log('Viewing details for vendor:', vendorId);
    // Navigation or modal logic would go here
  };

  const handleContactVendor = (vendor) => {
    console.log('Contacting vendor:', vendor.name);
    // Contact logic would go here
  };

  return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-900 mb-2">Vendor Management</h1>
            <p className="text-gray-600">Manage suppliers and service providers</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Request New Vendor
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Request a New Vendor</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Vendor Name</Label>
                    <Input
                        type="text"
                        placeholder="Enter vendor name"
                        value={newVendor.name}
                        onChange={(e) => handleVendorInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <Select
                        value={newVendor.category}
                        onValueChange={(value) => handleVendorInputChange('category', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Contact Number</Label>
                    <Input
                        type="text"
                        placeholder="+1 (555) 000-0000"
                        value={newVendor.contact}
                        onChange={(e) => handleVendorInputChange('contact', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input
                        type="email"
                        placeholder="vendor@email.com"
                        value={newVendor.email}
                        onChange={(e) => handleVendorInputChange('email', e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Products/Services</Label>
                  <Textarea
                      placeholder="Describe products or services offered..."
                      rows={3}
                      value={newVendor.products}
                      onChange={(e) => handleVendorInputChange('products', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Additional Notes</Label>
                  <Textarea
                      placeholder="Any additional information..."
                      rows={2}
                      value={newVendor.notes}
                      onChange={(e) => handleVendorInputChange('notes', e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline">Cancel</Button>
                  <Button
                      className="bg-gradient-to-r from-sky-500 to-emerald-500"
                      onClick={handleSubmitVendor}
                  >
                    Submit Request
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex gap-3 flex-wrap">
          <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className="rounded-xl"
              onClick={() => handleCategoryFilter('all')}
          >
            All Vendors
          </Button>
          {categories.map((category) => (
              <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  className="rounded-xl"
                  onClick={() => handleCategoryFilter(category.value)}
              >
                {category.label}
              </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor) => (
              <Card key={vendor.id} className="p-6 rounded-2xl border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-100 to-emerald-100 flex items-center justify-center text-3xl">
                    {vendor.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{vendor.name}</h3>
                    <Badge variant="outline" className={getCategoryColor(vendor.category)}>
                      {vendor.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm text-gray-900">{vendor.rating}</span>
                  <span className="text-sm text-gray-500">(125 reviews)</span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3 text-sm">
                    <Phone className="w-4 h-4 text-sky-500 mt-0.5" />
                    <span className="text-gray-700">{vendor.contact}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="w-4 h-4 text-emerald-500 mt-0.5" />
                    <span className="text-gray-700 break-all">{vendor.email}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    {getCategoryIcon(vendor.category)}
                    <span className="text-gray-700">{vendor.products}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gray-100">
                  <Button
                      variant="outline"
                      className="flex-1 rounded-xl"
                      onClick={() => handleViewDetails(vendor.id)}
                  >
                    View Details
                  </Button>
                  <Button
                      className="flex-1 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600"
                      onClick={() => handleContactVendor(vendor)}
                  >
                    Contact
                  </Button>
                </div>
              </Card>
          ))}
        </div>
      </div>
  );
}