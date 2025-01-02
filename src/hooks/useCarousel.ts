import { useState, useCallback } from 'react';

export default function useCarousel(length: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % length);
  }, [length]);

  const previous = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + length) % length);
  }, [length]);

  return { currentIndex, next, previous };
}