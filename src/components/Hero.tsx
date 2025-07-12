'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Hero() {
  const [showImage, setShowImage] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      setShowText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Bitcoin background elements configuration
  const bitcoinElements = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: 12 + Math.random() * 20, // Size between 12-32px
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: 0.1 + Math.random() * 0.3, // Keep them subtle
    delay: Math.random() * 2,
    duration: 15 + Math.random() * 20,
    yMovement: 20 + Math.random() * 50
  }));

  // Fix for framer-motion type error
  const MotionDiv = motion.div as any;
  const MotionH1 = motion.h1 as any;
  const MotionP = motion.p as any;
  const MotionButton = motion.button as any;

  return (
    <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Subtle Bitcoin Background Elements */}
      {bitcoinElements.map((btc) => (
        <MotionDiv
          key={`btc-${btc.id}`}
          className="absolute text-yellow-400 pointer-events-none"
          style={{
            fontSize: `${btc.size}px`,
            left: `${btc.left}%`,
            top: `${btc.top}%`,
            opacity: btc.opacity,
            zIndex: 0
          }}
          animate={{
            y: [0, -btc.yMovement, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: btc.duration,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: btc.delay
          }}
        >
          ₿
        </MotionDiv>
      ))}

      {/* Your Perfect Existing Content - Completely Unchanged */}
      <AnimatePresence>
        {showImage && (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8 }}
            className="absolute z-10"
          >
            <img
              src="/hero-image.png"
              alt="Crypto Rocket"
              className="w-64 h-64 md:w-96 md:h-96 object-contain"
            />
          </MotionDiv>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showText && (
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 px-4"
          >
            <MotionH1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-yellow-300 to-yellow-600 bg-clip-text text-transparent"
            >
              KING OF CRYPTO PIRATES
            </MotionH1>
            <MotionP
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join the ultimate crypto adventure with Luffy Coin
            </MotionP>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full font-bold text-black text-lg shadow-lg hover:shadow-yellow-500/40 transition-all"
              >
                BUY NOW 🚀
              </MotionButton>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </section>
  );
}