import React, {useState, useEffect} from 'react';
const useDebounce = (value: any, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay])
    return debouncedValue;
}

export default useDebounce;