import { useState, useEffect, useRef } from 'react';

function useInfiniteScroll(callback: () => void) {
  const [isScrollFetching, setIsScrollFetching] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsScrollFetching(true);
      } else {
        setIsScrollFetching(false);
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader.current]);

  useEffect(() => {
    if (isScrollFetching) {
      callback();
    }
  }, [isScrollFetching, callback]);

  return [loader, isScrollFetching];
}

export default useInfiniteScroll;
