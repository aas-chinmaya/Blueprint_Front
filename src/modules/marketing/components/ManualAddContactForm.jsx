
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Mail, Phone, User, MessageSquare, FileText, Loader2, PlusCircle } from 'lucide-react';
import { toast } from 'sonner';

const ManualAddContactForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquirySource: '',
    message: '',
    internalNotes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, inquirySource: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, email, phone, inquirySource } = formData;

    if (!fullName.trim()) return toast.error('Full name is required');
    if (!email.trim()) return toast.error('Email is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return toast.error('Invalid email format');
    if (!phone.trim()) return toast.error('Phone number is required');
    if (!inquirySource) return toast.error('Inquiry source is required');

    setIsSubmitting(true);
    try {
      await onSubmit?.(formData);
      toast.success('Contact added successfully!');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquirySource: '',
        message: '',
        internalNotes: '',
      });
    } catch (error) {
      toast.error('Error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-4 flex items-center justify-center">
      <div className="w-full md:max-w-4xl space-y-6 border rounded-lg p-6 bg-white shadow-sm">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName" className="font-medium flex items-center">
              <User className="h-4 w-4 mr-1 text-blue-600" />
              Contact Person <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="font-medium flex items-center">
              <Mail className="h-4 w-4 mr-1 text-blue-600" />
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="font-medium flex items-center">
              <Phone className="h-4 w-4 mr-1 text-blue-600" />
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <Label htmlFor="inquirySource" className="font-medium flex items-center">
              <MessageSquare className="h-4 w-4 mr-1 text-blue-600" />
              Inquiry Source <span className="text-red-500">*</span>
            </Label>
            <Select value={formData.inquirySource} onValueChange={handleSelectChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select inquiry source" />
              </SelectTrigger>
              <SelectContent>
                {[ 'Social Media', 'Event', 'Referral', 'Marketing Team', 'Other'].map((src) => (
                  <SelectItem key={src} value={src}>{src}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message Field */}
        <div>
          <Label htmlFor="message" className="font-medium flex items-center">
            <MessageSquare className="h-4 w-4 mr-1 text-blue-600" />
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message or inquiry details"
            rows={4}
          />
        </div>

        {/* Internal Notes */}
        <div>
          <Label htmlFor="internalNotes" className="font-medium flex items-center">
            <FileText className="h-4 w-4 mr-1 text-blue-600" />
            Internal Notes
          </Label>
          <Textarea
            id="internalNotes"
            name="internalNotes"
            value={formData.internalNotes}
            onChange={handleChange}
            placeholder="Add internal notes (optional)"
            rows={3}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-4">
          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <PlusCircle className="h-4 w-4 mr-2" />
            )}
            Add Contact
          </Button>

          {onCancel && (
            <Button
              type="button"
              variant="outline"
              className="w-full border-gray-300 hover:bg-gray-100 rounded-md"
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default ManualAddContactForm;
