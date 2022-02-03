import { useLayoutEffect, useRef } from "react";

const useGetDistance = (
  elementId: HTMLElement | null,
  effect: ({ currentTranslate }: any) => void
) => {
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
  const updateTranslate = () => {
    const newTranslatePosition = getNewTranslatePosition();
    effect({ currentTranslate: newTranslatePosition });
    currentTranslate.current = newTranslatePosition;
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", updateTranslate);
    return () => window.removeEventListener("scroll", updateTranslate);
  });
};

export default useGetDistance;
