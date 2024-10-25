"use client";
import { useState, useEffect } from 'react';

function LoopActions() {
  const actions = ['Anticipate issues', 'Design in the browser', 'Understand constraints', 'Find middle ground'];
  const [currentIndex, setCurrentIndex] = useState(0);
  let currentString;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % actions.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  currentString = actions[currentIndex];

  return currentString;
}

export default LoopActions;