'use client';

import React from 'react';
import { motion } from 'framer-motion';
import LocationMap from './ui/LocationMap';

const LocationConnection = () => {
  return (
    <div className="relative py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-grid-small" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-dark/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Connecting From <span className="text-primary">Stockton, CA</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Currently based in Northern California's Central Valley, I work with clients and teams globally. 
              Let's see how far our connection reaches!
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
            <LocationMap />
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6 rounded-xl bg-secondary-light/50 backdrop-blur-sm border border-primary/20">
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="text-text-secondary">Availability</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary-light/50 backdrop-blur-sm border border-primary/20">
              <h3 className="text-2xl font-bold text-primary">Global</h3>
              <p className="text-text-secondary">Collaboration</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary-light/50 backdrop-blur-sm border border-primary/20">
              <h3 className="text-2xl font-bold text-primary">Real-time</h3>
              <p className="text-text-secondary">Communication</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LocationConnection;