'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateDistance } from '@/lib/utils';
import { WorldMap } from '../WorldMap';

export interface Location {
  lat: number;
  lng: number;
}

export interface VisitorLocation extends Location {
  city: string;
  country: string;
}

interface StocktonLocation extends Location {
  label: string;
}

const MAP_STYLES = {
  modern: {
    dotColor: '#3B82F6',
    backgroundColor: '#0F172A',
    gridColor: 'rgba(255,255,255,0.1)',
  },
  neon: {
    dotColor: '#10B981',
    backgroundColor: '#18181B',
    gridColor: 'rgba(16,185,129,0.1)',
  },
  classic: {
    dotColor: '#F59E0B',
    backgroundColor: '#1F2937',
    gridColor: 'rgba(245,158,11,0.1)',
  }
} as const;

type MapStyle = keyof typeof MAP_STYLES;

interface LocationMapProps {
  style?: MapStyle;
}

const LocationMap = ({ style = 'modern' }: LocationMapProps) => {
  const [visitorLocation, setVisitorLocation] = useState<VisitorLocation>({
    lat: 0,
    lng: 0,
    city: '',
    country: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [connectionStrength, setConnectionStrength] = useState(0);
  const [currentStyle, setCurrentStyle] = useState(MAP_STYLES[style]);
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'established' | 'error'>('connecting');

  // Stockton, CA coordinates
  const STOCKTON: StocktonLocation = {
    lat: 37.9577,
    lng: -121.2908,
    label: 'Stockton, CA'
  };

  // Animation variants
  const strengthVariants = {
    initial: { 
      scale: 0, 
      opacity: 0 
    },
    animate: (strength: number) => ({ 
      scale: 1, 
      opacity: 1,
      boxShadow: `0 0 ${strength}px ${currentStyle.dotColor}`
    })
  };

  useEffect(() => {
    const getVisitorLocation = async () => {
      try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        const ipData = await ipResponse.json();
        
        let location: VisitorLocation;

        try {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            } else {
              reject(new Error('Geolocation not supported'));
            }
          });

          location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            city: ipData.city || 'Unknown City',
            country: ipData.country_name || 'Unknown Country'
          };
        } catch {
          location = {
            lat: parseFloat(ipData.latitude),
            lng: parseFloat(ipData.longitude),
            city: ipData.city || 'Unknown City',
            country: ipData.country_name || 'Unknown Country'
          };
        }

        setVisitorLocation(location);
        
        const distance = calculateDistance(
          STOCKTON.lat,
          STOCKTON.lng,
          location.lat,
          location.lng
        );
        const strength = Math.max(0, Math.min(100, 100 - (distance / 200)));
        setConnectionStrength(strength);
        setConnectionStatus('established');
        
      } catch (error) {
        console.error('Error getting location:', error);
        setConnectionStatus('error');
        setVisitorLocation({
          lat: 37.7749,
          lng: -122.4194,
          city: 'Unknown',
          country: 'Location'
        });
      } finally {
        setIsLoading(false);
      }
    };

    getVisitorLocation();
  }, []);

  const renderLocationLabel = (location: StocktonLocation | VisitorLocation) => {
    if ('label' in location) {
      return location.label;
    }
    return `${location.city}, ${location.country}`;
  };

  const mapDots = [{
    start: STOCKTON,
    end: visitorLocation,
  }];

  return (
    <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-secondary-dark">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-secondary-dark/80 flex items-center justify-center z-20 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <motion.div
                  className="absolute inset-0 border-4 border-primary/20 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <p className="text-text-primary font-medium">Establishing Connection...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full">
        <WorldMap
          dots={connectionStatus === 'established' ? mapDots : []} 
          lineColor={currentStyle.dotColor}
        />
        
        {connectionStatus === 'established' && (
          <>
            <motion.div
              variants={strengthVariants}
              initial="initial"
              animate="animate"
              custom={connectionStrength}
              className="absolute bottom-4 right-4 p-4 bg-secondary-light/50 backdrop-blur-sm rounded-lg border border-primary/20"
            >
              <div className="space-y-2">
                <p className="text-sm text-text-secondary">Connection Strength</p>
                <div className="h-2 w-32 bg-secondary-dark rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${connectionStrength}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
                <div className="flex justify-between text-xs text-text-secondary">
                  <span>Distance: {calculateDistance(STOCKTON.lat, STOCKTON.lng, visitorLocation.lat, visitorLocation.lng).toFixed(0)} km</span>
                  <span>{connectionStrength.toFixed(0)}%</span>
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-0 pointer-events-none">
              {[STOCKTON, visitorLocation].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.5 }}
                  className="absolute"
                  style={{
                    left: `${((location.lng + 180) * 100) / 360}%`,
                    top: `${((90 - location.lat) * 100) / 180}%`,
                  }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-4 h-4 rounded-full bg-primary/30" />
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                    </motion.div>
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-secondary-light/90 px-2 py-1 rounded-md text-xs text-text-primary">
                      {renderLocationLabel(location)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="absolute top-4 right-4 flex space-x-2">
        {Object.entries(MAP_STYLES).map(([styleName, style]) => (
          <button
            key={styleName}
            onClick={() => setCurrentStyle(style)}
            className={`w-6 h-6 rounded-full border-2 transition-all ${
              currentStyle === style ? 'scale-110 border-white' : 'border-transparent'
            }`}
            style={{ backgroundColor: style.dotColor }}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationMap;