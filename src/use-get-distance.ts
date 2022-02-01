/* const { useRef, useLayoutEffect } = require("react/cjs/react.production.min");

export function useGetDistance(
  effect: ({ currentTranslate }) => void,
  elementId: string
) {
  const element = document.getElementById(elementId);

  const getNewTranslatePosition = () => {
    if (element === null)
      return {
        elementToTop: 0,
      };
    return {
      elementToTop: element.getBoundingClientRect().top,
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
} */

import { useRef } from "react";

const useGetDistance = (x: number, y: number, elementId: string) => {
  const ref = useRef(console.log("this is the ref bla bla"));
  const endvar = console.log(x + y, elementId, ref.current);
  return endvar;
};

export default useGetDistance;
