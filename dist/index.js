"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useGetDistance = (elementId) => {
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
    }, []);
    react_1.useLayoutEffect(() => {
        window.addEventListener("scroll", updateTranslate);
        return () => window.removeEventListener("scroll", updateTranslate);
    });
    return currentTranslate;
};
exports.default = useGetDistance;
