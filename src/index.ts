import { useLayoutEffect, useRef, useState } from "react";

const useGetDistance = (
  elementId: HTMLElement,
  effect: ({ currentTranslate }: any) => void
) => {
  /*   const [toTop, setToTop] = useState({ elementToTop: 0 });
   */
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
    /*     setToTop(newTranslatePosition);
    console.log(toTop); */
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", updateTranslate);
    return () => window.removeEventListener("scroll", updateTranslate);
  });
};

export default useGetDistance;
