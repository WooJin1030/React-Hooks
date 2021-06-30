const useDeviceOrientation = () => {
  const [state, setState] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  const onDeviceOrientation = (e) => {
    setState({ alpha: e.alpha, beta: e.beta, gamma: e.gamma });
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", onDeviceOrientation);
    return () => {
      window.removeEventListener("deviceorientation", onDeviceOrientation);
    };
  }, []);

  return state;
};

export default useDeviceOrientation;
