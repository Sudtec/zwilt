import React from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = React.useState({
    width: 2000,
    height: 0,
  });

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}

export default useScreenSize;
