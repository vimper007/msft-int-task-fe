import { useEffect, useState } from "react";

export const useDebounce = (value: string, duration = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, duration);

    return () => clearTimeout(timeout);
  }, [value]);

  return debouncedValue;
};
