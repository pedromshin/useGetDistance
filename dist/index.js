"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useGetDistance = (elementId) => {
    const [toTop, setToTop] = react_1.useState(0);
    const getNewTranslatePosition = () => {
        if (elementId === null)
            return {
                elementToTop: 0,
            };
        return {
            containerToTop: elementId.getBoundingClientRect().top,
        };
    };
    const useTranslate = (effect) => {
        const currentTranslate = react_1.useRef(getNewTranslatePosition());
        const updateTranslate = () => {
            const newTranslatePosition = getNewTranslatePosition();
            effect({ currentTranslate: newTranslatePosition });
            currentTranslate.current = newTranslatePosition;
        };
        react_1.useLayoutEffect(() => {
            window.addEventListener("scroll", updateTranslate);
            return () => window.removeEventListener("scroll", updateTranslate);
        });
    };
    useTranslate(({ currentTranslate }) => {
        setToTop(currentTranslate.current);
        console.log("current", currentTranslate.current);
        console.log("to top", toTop);
    });
};
exports.default = useGetDistance;
