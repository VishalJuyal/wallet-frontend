"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiUser, FiMail, FiPhone, FiCamera, FiSave } from "react-icons/fi";

const ChangeProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Vishal",
    lastName: "Juyal",
    email: "vishaljuyal237@gmail.com",
    phone: "+1 (555) 123-4567",
    bio: "Cryptocurrency enthusiast and blockchain developer"
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setIsEdited(true);
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Profile updated:", formData);
      alert("Profile updated successfully!");
      setIsEdited(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Profile image selected:", file.name);
      alert("Profile image upload functionality would be implemented here");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#1A1A1A] text-white">
      <div className="flex-1 p-4 sm:p-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <Link href="/settings">
            <div className="flex items-center gap-3 cursor-pointer hover:text-purple-400 transition-colors">
              <FiArrowLeft size={20} />
              <h1 className="text-2xl font-bold text-purple-500">
                V Wallet
              </h1>
            </div>
          </Link>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Edit Profile
          </h2>
          <p className="text-gray-400 text-base">
            Update your personal information and preferences
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1F1D1F] rounded-xl p-6 shadow-lg border border-gray-800/30">
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {formData.firstName.charAt(0)}{formData.lastName.charAt(0)}
                </div>
                <label htmlFor="profileImage" className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 rounded-full p-2 cursor-pointer transition-colors">
                  <FiCamera className="text-white" size={16} />
                  <input
                    type="file"
                    id="profileImage"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="text-gray-400 text-sm">
                Wallet User
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-400 font-medium mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-gray-400 font-medium mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-400 font-medium mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="bio" className="block text-gray-400 font-medium mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  rows={4}
                  className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-600/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <FiSave className="text-yellow-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-yellow-400 font-medium mb-1">Profile Information</h4>
                    <p className="text-gray-300 text-sm">
                      Your profile information is used to personalize your wallet experience and for account verification purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/settings" className="flex-1">
                  <button
                    type="button"
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  type="submit"
                  disabled={!isEdited}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
