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

//хук виконання функції при кліку поза елементом
//isActive властивість, має бути true, щоб виконалась функція
type RefType = RefObject<HTMLElement> | RefObject<HTMLElement>[];

/*
export const useClickOutside = (isActive: boolean, refs: RefType | null, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = (ref: RefObject<HTMLElement>) => ref.current && !ref.current.contains(event.target as Node);

    if (Array.isArray(refs)) {
      if (isActive && refs.every((ref) => ref && isOutside(ref))) {
        callback();
      }
    } else {
      if (isActive && refs && isOutside(refs)) {
        callback();
      }
    }
  };

  useEffect(() => {
    const options: AddEventListenerOptions | boolean = { passive: true };

    document.addEventListener('mousedown', handleClickOutside, options);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, options);
    };
  }, [isActive, refs, callback]);
};
*/

export const useClickOutside = (isActive: boolean, refs: RefType | null, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = (ref: RefObject<HTMLElement>) =>
      ref.current && document.body.contains(ref.current) && !ref.current.contains(event.target as Node);

    if (Array.isArray(refs)) {
      if (isActive && refs.every(ref => ref && ref.current && isOutside(ref))) {
        callback();
      }
    } else {
      if (isActive && refs && refs.current && isOutside(refs)) {
        callback();
      }
    }
  };

  useEffect(() => {
    const options: AddEventListenerOptions | boolean = { passive: true };

    document.addEventListener('mousedown', handleClickOutside, options);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, options);
    };
  }, [isActive, refs, callback]);
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

export const useBodyScrollLock = (isActive: boolean) => {
  useEffect(() => {
    if (isActive) {
      document.body.classList.add('noScroll');
      return () => {
        document.body.classList.remove('noScroll');
      };
    }
  }, [isActive]);
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
