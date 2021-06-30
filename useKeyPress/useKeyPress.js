const useKeyPress = (targetKey) => {
  const [iskeyPress, setKeyPress] = useState(false);

  const handleKeyUp = (e) => {
    const key = e.key;
    if (targetKey === key) {
      setKeyPress(false);
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    if (targetKey === key) {
      setKeyPress(true);
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return iskeyPress;
};

export default useKeyPress;
