"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useGetDistance = (elementId) => {
    const [elementDistance, setElementDistance] = react_1.useState({
        elementToTop: 0,
    });
    const getNewTranslatePosition = () => {
        if (elementId === null)
            return {
                elementToTop: 0,
            };
        return {
            elementToTop: elementId.getBoundingClientRect().top,
        };
    };
    const currentTranslate = react_1.useRef(getNewTranslatePosition());
    const updateTranslate = react_1.useCallback(() => (effect) => {
        const newTranslatePosition = getNewTranslatePosition();
        effect({ currentTranslate: newTranslatePosition });
        currentTranslate.current = newTranslatePosition;
        setElementDistance(newTranslatePosition);
    }, []);
    react_1.useLayoutEffect(() => {
        window.addEventListener("scroll", updateTranslate);
        return () => window.removeEventListener("scroll", updateTranslate);
    });
    return elementDistance;
};
exports.default = useGetDistance;
