'use client';
import { useEffect, useState, RefObject } from 'react';

interface ScrollOptions {
  offset?: number;
}

export const useScroll = ({ offset = 0 }: ScrollOptions = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return isScrolled;
};

//закриття вікна при кліку поза ним
export const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    const options: AddEventListenerOptions | boolean = { passive: true };
    document.addEventListener('mousedown', handleClickOutside, options);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, options);
    };
  }, [ref, callback]);
};

//відміна scroll для body
export const useBodyScrollLockRight = (isActive: boolean) => {
  useEffect(() => {
    if (isActive) {
      const paddingForScroll = window.innerWidth - document.body.offsetWidth + 'px';
      document.body.classList.add('noScroll');
      document.body.style.paddingRight = paddingForScroll;
      return () => {
        document.body.classList.remove('noScroll');
        document.body.style.paddingRight = '0';
      };
    }
  }, [isActive]);
};

export const useBodyScrollLockLeft = (isActive: boolean) => {
  useEffect(() => {
    if (isActive) {
      const paddingForScroll = window.innerWidth - document.body.offsetWidth + 'px';
      document.body.classList.add('noScroll');
      document.body.style.paddingRight = paddingForScroll;
      return () => {
        document.body.classList.remove('noScroll');
        document.body.style.paddingRight = '0';
      };
    }
  }, [isActive]);
};
