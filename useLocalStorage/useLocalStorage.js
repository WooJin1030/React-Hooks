const useLocalStorage = (name, initialValue) => {
  const [currentLS, setLS] = useState(initialValue);

  useEffect(() => {
    return localStorage.setItem(name, initialValue);
  }, []);

  return [currentLS, setLS];
};

export default useLocalStorage;
