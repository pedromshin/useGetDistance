const { useRef, useLayoutEffect } = require("react/cjs/react.production.min");

export default function useGetDistance(
  effect: ({}) => void,
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
}

module.exports = useGetDistance;
