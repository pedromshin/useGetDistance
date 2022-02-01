import { useLayoutEffect, useRef, useState } from "react";

const useGetDistance = (elementId: HTMLElement) => {
  const [toTop, setToTop] = useState(0);

  const getNewTranslatePosition = () => {
    if (elementId === null)
      return {
        elementToTop: 0,
      };
    return {
      containerToTop: elementId!.getBoundingClientRect().top,
    };
  };

  const useTranslate = (effect: ({ currentTranslate }: any) => void) => {
    const currentTranslate = useRef(getNewTranslatePosition());
    const updateTranslate = () => {
      const newTranslatePosition = getNewTranslatePosition();
      effect({ currentTranslate: newTranslatePosition });
      currentTranslate.current = newTranslatePosition;
      console.log(currentTranslate.current);
    };

    useLayoutEffect(() => {
      window.addEventListener("scroll", updateTranslate);
      window.addEventListener("scroll", () => console.log("hi"));

      return () => window.removeEventListener("scroll", updateTranslate);
    });
  };

  useTranslate(({ currentTranslate }) => {
    const setTranslate = () => {
      return currentTranslate.elementToTop;
    };
    setToTop(setTranslate());
  });
};

export default useGetDistance;
