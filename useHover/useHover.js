const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseover", onClick);
    }
    return () => {
      // componentWillUnMount
      if (element.current) {
        element.current.removeEventListener("mouseover", onClick);
      }
    };
  }, []);
  return element;
};
