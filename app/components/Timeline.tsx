'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/projects';

const TimelineItem = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative ${isEven ? 'pr-8 ml-auto text-right' : 'pl-8'} w-1/2 mb-16`}
    >
      <div className="bg-secondary-light/50 backdrop-blur-xl p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
        <h3 className="text-xl font-bold text-text-primary mb-2">{experience.title}</h3>
        <h4 className="text-primary mb-1">{experience.company}</h4>
        <p className="text-sm text-text-secondary mb-4">{experience.period}</p>
        <p className="text-text-secondary">{experience.description}</p>
      </div>
      
      <motion.div
        className={`absolute top-1/2 ${
          isEven ? 'right-[-5px]' : 'left-[-5px]'
        } w-3 h-3 rounded-full bg-primary`}
        whileInView={{ scale: [0, 1.5, 1] }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="min-h-screen py-20 relative">
      <h2 className="text-4xl font-bold text-center text-text-primary mb-16">
        Experience
      </h2>
      
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent"
        style={{ scaleY: 1 }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-7xl mx-auto relative">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;