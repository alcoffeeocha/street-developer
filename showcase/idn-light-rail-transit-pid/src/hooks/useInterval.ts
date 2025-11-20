import React from "react";

/**
 *
 * @param callback Function to invoke on interval
 * @param delay Milliseconds time to wait before next interval
 * @returns {React.RefObject} a ref contains id of interval instance created
 */
export function useInterval(
  callback: () => void,
  delay: number
): React.RefObject<null | number> {
  const intervalRef = React.useRef<null | number>(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(tick, delay);

      return () => window.clearInterval(intervalRef.current!);
    }
  }, [delay]);

  return intervalRef;
}
