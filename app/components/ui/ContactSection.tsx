'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-secondary-light/50 backdrop-blur-xl p-8 rounded-2xl border border-primary/20"
        >
          <h2 className="text-4xl font-bold text-text-primary mb-8 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-text-primary text-sm">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-secondary-dark border border-primary/20 text-text-primary focus:outline-none focus:border-primary/40"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-text-primary text-sm">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-secondary-dark border border-primary/20 text-text-primary focus:outline-none focus:border-primary/40"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-text-primary text-sm">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-secondary-dark border border-primary/20 text-text-primary focus:outline-none focus:border-primary/40 h-32"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;