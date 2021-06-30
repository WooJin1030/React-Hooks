const useGeolocation = () => {
  const [state, setState] = useState({
    coords: {
      lat: 0,
      long: 0,
    },
    error: "null",
  });

  const success = (position) => {
    setState({
      coords: {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      },
    });
  };

  const err = () => {
    setState({
      error: "Can't load your position",
    });
  };

  useEffect(() => {
    return navigator.geolocation.getCurrentPosition(success, err);
  });

  return state;
};

export default useGeolocation;
