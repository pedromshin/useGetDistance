"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useGetDistance = (elementId, effect) => {
    const getNewTranslatePosition = () => {
        if (elementId === null)
            return {
                elementToTop: 0,
            };
        return {
            elementToTop: elementId.getBoundingClientRect().top,
        };
    };
    const currentTranslate = (0, react_1.useRef)(getNewTranslatePosition());
    const updateTranslate = () => {
        const newTranslatePosition = getNewTranslatePosition();
        effect({ currentTranslate: newTranslatePosition });
        currentTranslate.current = newTranslatePosition;
    };
    (0, react_1.useLayoutEffect)(() => {
        window.addEventListener("scroll", updateTranslate);
        return () => window.removeEventListener("scroll", updateTranslate);
    });
};
exports.default = useGetDistance;
