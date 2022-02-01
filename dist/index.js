import { useRef } from "react";
const useGetDistance = (x, y, elementId) => {
    const ref = useRef(console.log("this is the ref bla bla"));
    const endvar = console.log(x + y, elementId, ref.current);
    return endvar;
};
export default useGetDistance;
