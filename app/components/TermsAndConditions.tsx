"use client";
import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiFileText, FiShield, FiInfo } from "react-icons/fi";

const TermsAndConditions = () => {
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
            Terms and Conditions
          </h2>
          <p className="text-gray-400 text-base">
            Last updated: August 13, 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1F1D1F] rounded-xl p-6 shadow-lg border border-gray-800/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FiFileText className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  V Crypto Wallet Terms of Service
                </h3>
                <p className="text-gray-400 text-sm">
                  Please read these terms carefully before using our service
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                <section>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FiInfo className="text-blue-400" size={20} />
                    1. Acceptance of Terms
                  </h3>
                  <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                    <p>
                      By accessing and using V Crypto Wallet (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <p>
                      These Terms of Service constitute a legally binding agreement between you and V Crypto Wallet regarding your use of the Service.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <FiShield className="text-green-400" size={20} />
                    2. Service Description
                  </h3>
                  <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                    <p>
                      V Crypto Wallet is a digital wallet platform that allows users to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Store and manage cryptocurrency assets</li>
                      <li>View portfolio balances and performance</li>
                      <li>Execute cryptocurrency transactions</li>
                      <li>Access market data and analytics</li>
                      <li>Manage account settings and preferences</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">3. User Responsibilities</h3>
                  <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                    <p>As a user of V Crypto Wallet, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information when creating your account</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Use the Service in compliance with all applicable laws and regulations</li>
                      <li>Not engage in any fraudulent or illegal activities</li>
                      <li>Report any security vulnerabilities or suspicious activities</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">4. Security and Privacy</h3>
                  <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                    <p>
                      We take the security of your digital assets and personal information seriously. Our security measures include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>End-to-end encryption of sensitive data</li>
                      <li>Multi-factor authentication options</li>
                      <li>Regular security audits and updates</li>
                      <li>Secure storage of private keys</li>
                    </ul>
                    <p>
                      However, you acknowledge that no system is completely secure, and you use the Service at your own risk.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">5. Risks and Disclaimers</h3>
                  <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                    <p>
                      Cryptocurrency investments carry inherent risks, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>High volatility and potential for significant losses</li>
                      <li>Regulatory changes that may affect cryptocurrency markets</li>
                      <li>Technical risks associated with blockchain technology</li>
                      <li>Potential for loss of access to digital assets</li>
                    </ul>
                    <p>
                      V Crypto Wallet does not provide investment advice and is not responsible for any investment decisions you make.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">6. Limitation of Liability</h3>
                  <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                    <p>
                      To the maximum extent permitted by law, V Crypto Wallet shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">7. Modifications to Terms</h3>
                  <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                    <p>
                      We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">8. Contact Information</h3>
                  <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                    <p>
                      If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="bg-[#2C2A2C] rounded-lg p-4 mt-4">
                      <p><strong>Email:</strong> support@vcryptowallet.com</p>
                      <p><strong>Address:</strong> V Crypto Wallet Legal Department</p>
                      <p><strong>Phone:</strong> +1 (555) 123-WALLET</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-600/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <FiShield className="text-purple-400 mt-1" size={20} />
                  <div>
                    <h4 className="text-purple-400 font-medium mb-1">Agreement Acknowledgment</h4>
                    <p className="text-gray-300 text-sm">
                      By using V Crypto Wallet, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
