import React from 'react';
import { Mail, PhoneCall, MapPin } from 'lucide-react';
import Layout from '../components/layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
            <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-blue-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-900">Get in Touch</h2>
          <p className="text-blue-800 text-lg">
            We'd love to hear from you! Whether you have a question about features, pricing, demo, or anything else—our team is ready to answer all your questions.
          </p>
          <ul className="space-y-4 text-blue-700 text-base">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              New Delhi, India
            </li>
            <li className="flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-blue-600" />
              <a href="tel:+918888888888" className="hover:underline">+91 88888 88888</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:info@evyan.com" className="hover:underline">info@evyan.com</a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-8 space-y-6 border-t-4 border-blue-600">
          <h3 className="text-2xl font-semibold text-blue-800">Send a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+91 99999 99999"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-1">Your Message</label>
              <textarea
                rows="5"
                required
                className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default ContactPage;
