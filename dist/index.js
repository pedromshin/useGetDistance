"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useGetDistance = (x, y, elementId) => {
    const ref = react_1.useRef(console.log("this is the ref bla bla"));
    const endvar = console.log(x + y, elementId, ref.current);
    return endvar;
};
exports.default = useGetDistance;
