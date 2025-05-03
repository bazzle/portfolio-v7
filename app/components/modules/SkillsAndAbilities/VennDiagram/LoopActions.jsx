"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SkillsContent } from '@/app/content/BodyContent';

function LoopActions() {

  const actions = SkillsContent.skillsActions
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % actions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [actions.length]);

	return (
    	<AnimatePresence mode="wait">
        	<motion.span
				className="loopingText"
        		key={actions[currentIndex]}
          		initial={{ opacity: 0 }}
          		animate={{ opacity: 1 }}
          		exit={{ opacity: 0 }}
          		transition={{ duration: 0.5 }}
        	>
        		{actions[currentIndex]}
        	</motion.span>
      </AnimatePresence>
  	);
}

export default LoopActions;
