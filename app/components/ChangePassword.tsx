"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiLock, FiEye, FiEyeOff, FiShield } from "react-icons/fi";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const togglePasswordVisibility = (field: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field as keyof typeof prev]
    }));
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = "New password must be different from current password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Password change submitted:", {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword
      });
      alert("Password changed successfully!");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
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
            Change Password
          </h2>
          <p className="text-gray-400 text-base">
            Update your account password to keep your wallet secure
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-[#1F1D1F] rounded-xl p-6 shadow-lg border border-gray-800/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FiLock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Security Update
                </h3>
                <p className="text-gray-400 text-sm">
                  Choose a strong, unique password
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="currentPassword" className="block text-gray-400 font-medium mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.current ? "text" : "password"}
                    id="currentPassword"
                    value={formData.currentPassword}
                    onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                    className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your current password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('current')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPasswords.current ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
                {errors.currentPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.currentPassword}</p>
                )}
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-gray-400 font-medium mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.new ? "text" : "password"}
                    id="newPassword"
                    value={formData.newPassword}
                    onChange={(e) => handleInputChange('newPassword', e.target.value)}
                    className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your new password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('new')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPasswords.new ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
                {errors.newPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.newPassword}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-gray-400 font-medium mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.confirm ? "text" : "password"}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="w-full bg-[#2C2A2C] text-white border border-[#3D3B3D] rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Confirm your new password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('confirm')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPasswords.confirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <FiShield className="text-blue-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-blue-400 font-medium mb-1">Password Requirements</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• At least 8 characters long</li>
                      <li>• Different from your current password</li>
                      <li>• Use a combination of letters, numbers, and symbols</li>
                    </ul>
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
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
