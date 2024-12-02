import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/images/background.jpg')`
        }}
      />

      {/* Product Display */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: [0, -20, 0],
            opacity: 1
          }}
          transition={{
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 1
            }
          }}
        >
          <img 
            src="/images/wipes.png"
            alt="YummyPits Wet Wipes"
            className="w-64 h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default App;