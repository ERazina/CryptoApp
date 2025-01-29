import { useCallback } from "react";
function useHumanReadableNumber() {
    const formatNumber = useCallback((value) => {
        if (typeof value === "number") {
            return value.toString().includes("e")
                ? value.toFixed(10).replace(/\.?0+$/, "")
                : value;
        }
        if (typeof value === "string") {
            const number = parseFloat(value);
            if (isNaN(number)) {
                return value;
            }
            return value.toLowerCase().includes("e")
                ? number.toFixed(10).replace(/\.?0+$/, "")
                : number;
        }
        return value;
    }, []);
    return formatNumber;
}
export default useHumanReadableNumber;
