"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useGetDistance = (elementId) => {
    const [elementDistance, setElementDistance] = (0, react_1.useState)({
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
    const currentTranslate = (0, react_1.useRef)(getNewTranslatePosition());
    const updateTranslate = (0, react_1.useCallback)(() => (effect) => {
        const newTranslatePosition = getNewTranslatePosition();
        effect({ currentTranslate: newTranslatePosition });
        currentTranslate.current = newTranslatePosition;
        setElementDistance(newTranslatePosition);
        console.log("current", currentTranslate.current);
        console.log("new", newTranslatePosition);
    }, []);
    (0, react_1.useLayoutEffect)(() => {
        window.addEventListener("scroll", updateTranslate);
        return () => window.removeEventListener("scroll", updateTranslate);
    });
    return elementDistance;
};
exports.default = useGetDistance;
