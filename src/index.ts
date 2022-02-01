import { useCallback, useLayoutEffect, useRef, useState } from "react";

const useGetDistance = (elementId: HTMLElement) => {
  const [elementDistance, setElementDistance] = useState({
    elementToTop: 0,
  });
  const getNewTranslatePosition = () => {
    if (elementId === null)
      return {
        elementToTop: 0,
      };
    return {
      elementToTop: elementId!.getBoundingClientRect().top,
    };
  };

  const currentTranslate = useRef(getNewTranslatePosition());
  const updateTranslate = useCallback(
    () => (effect: ({ currentTranslate }: any) => void) => {
      const newTranslatePosition = getNewTranslatePosition();
      effect({ currentTranslate: newTranslatePosition });
      currentTranslate.current = newTranslatePosition;
      setElementDistance(newTranslatePosition);
    },
    []
  );

  useLayoutEffect(() => {
    window.addEventListener("scroll", updateTranslate);
    return () => window.removeEventListener("scroll", updateTranslate);
  });

  return elementDistance;
};

export default useGetDistance;
