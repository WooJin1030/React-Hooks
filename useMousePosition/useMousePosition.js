const useMousePosition = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const handleMousePosition = (e) => {
    setState({
      x: e.offsetX,
      y: e.offsetY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);
    return () => window.removeEventListener("mousemove", handleMousePosition);
  });

  return state;
};

export default useMousePosition;
