import React, { useEffect, useState } from "react";

const useWindowWidthAndHeight = () => {
  let windowInnerSize = [window.innerWidth, window.innerHeight];

  const [windowSize, setWindowSize] = useState(windowInnerSize);

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", changeWindowSize);
    return () => window.removeEventListener("resize", changeWindowSize);
  }, []);
  return windowSize;
};

export default useWindowWidthAndHeight;
