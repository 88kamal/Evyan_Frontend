// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useSubmitQueryMutation } from '../redux/slices/querySlice';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
  });

  const [submitQuery, { isLoading }] = useSubmitQueryMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitQuery(formData).unwrap();
      alert('✅ Query submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        description: '',
      });
    } catch (err) {
      console.error(err);
      alert('❌ Failed to submit query. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Contact Us</h1>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              We're here to answer your questions and provide the support you need. Reach out to us anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-1">Our Office</h3>
                    <p className="text-blue-700">
                      Fact. 1: Plot no. 137, UV Extension, Ecotech II, <br />
                      Greater Noida - 201310, UP, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <PhoneCall className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-1">Phone Numbers</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919311859995" className="text-blue-700 hover:text-blue-900">+91 9311859995</a>
                      <a href="tel:+919311859996" className="text-blue-700 hover:text-blue-900">+91 9311859996</a>
                      <a href="tel:+919311859997" className="text-blue-700 hover:text-blue-900">+91 9311859997</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-1">Email Addresses</h3>
                    <div className="flex flex-col gap-1">
                      <a href="mailto:evyanscm@gmail.com" className="text-blue-700 hover:text-blue-900">evyanscm@gmail.com</a>
                      <a href="mailto:bharatevyan@gmail.com" className="text-blue-700 hover:text-blue-900">bharatevyan@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Business Hours</h3>
                <p className="text-blue-700">Monday - Saturday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-cyan-500">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Service</label>
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="What service are you interested in?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">Your Message</label>
                  <textarea
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 px-6 rounded-xl text-lg font-medium transition-all shadow-md"
                >
                  {isLoading ? "Sending..." : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
