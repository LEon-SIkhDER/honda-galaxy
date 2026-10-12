'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export function useDraggableCarousel(itemsDependency = []) {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasMovedRef = useRef(false);

  const updateScrollButtons = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

      const card = carouselRef.current.firstElementChild;
      if (card) {
        const itemWidth = card.clientWidth + 24;
        const index = Math.round(scrollLeft / itemWidth);
        setCurrentSlideIndex(Math.max(0, index));
      }
    }
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons, { passive: true });
      updateScrollButtons();
      return () => el.removeEventListener('scroll', updateScrollButtons);
    }
  }, [updateScrollButtons, itemsDependency]);

  const scrollCarousel = useCallback((direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild;
      const scrollStep = card ? card.clientWidth + 24 : 360;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollStep : scrollStep,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToSlide = useCallback((index) => {
    if (carouselRef.current) {
      const card = carouselRef.current.firstElementChild;
      const scrollStep = card ? card.clientWidth + 24 : 360;
      carouselRef.current.scrollTo({
        left: index * scrollStep,
        behavior: 'smooth'
      });
      setCurrentSlideIndex(index);
    }
  }, []);

  // Mouse drag-to-scroll handlers
  const handleMouseDown = useCallback((e) => {
    if (!carouselRef.current) return;
    // Only respond to main left click
    if (e.button !== 0) return;

    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartX.current = e.pageX - carouselRef.current.offsetLeft;
    dragScrollLeft.current = carouselRef.current.scrollLeft;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const currentX = e.pageX - carouselRef.current.offsetLeft;
    const distance = currentX - dragStartX.current;

    if (Math.abs(distance) > 5) {
      hasMovedRef.current = true;
    }

    carouselRef.current.scrollLeft = dragScrollLeft.current - distance * 1.25;
  }, [isDragging]);

  const handleMouseUpOrLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      // Brief delay before resetting hasMovedRef to allow clickCapture to suppress accidental clicks
      setTimeout(() => {
        hasMovedRef.current = false;
      }, 80);
    }
  }, [isDragging]);

  const handleClickCapture = useCallback((e) => {
    if (hasMovedRef.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, []);

  return {
    carouselRef,
    isDragging,
    canScrollLeft,
    canScrollRight,
    currentSlideIndex,
    scrollCarousel,
    scrollToSlide,
    dragProps: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUpOrLeave,
      onMouseLeave: handleMouseUpOrLeave,
      onClickCapture: handleClickCapture
    }
  };
}
