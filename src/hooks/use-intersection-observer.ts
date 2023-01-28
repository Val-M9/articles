import { useEffect, useLayoutEffect } from 'react';

type IntersectionObserverProps = {
  currentCount: number;
  totalCount: number;
  observer: React.MutableRefObject<IntersectionObserver | null>;
  lastItemRef: React.MutableRefObject<HTMLDivElement | null>;
  itemsList: Array<Record<any, any>>;
  onIntersectCallback: () => void;
};

export const useIntersectionObserver = ({
  currentCount,
  totalCount,
  observer,
  lastItemRef,
  itemsList,
  onIntersectCallback,
}: IntersectionObserverProps) => {
  useLayoutEffect(() => {
    const options = {
      root: document,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const callback = (entries: Array<IntersectionObserverEntry>) => {
      if (entries[0].isIntersecting && currentCount < totalCount) {
        onIntersectCallback();
      }
    };

    if (itemsList.length === 0) {
      onIntersectCallback();
    }

    observer.current = new IntersectionObserver(callback, options);
    if (lastItemRef.current) {
      observer.current?.observe(lastItemRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [currentCount, itemsList.length, totalCount, lastItemRef, observer, onIntersectCallback]);
};
