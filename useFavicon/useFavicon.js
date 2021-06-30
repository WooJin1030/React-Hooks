const useFavicon = (initialFavicon) => {
  const [favicon, setFavicon] = useState(initialFavicon);

  const updateFavicon = () => {
    const faviconHTML = document.getElementById("favicon");
    faviconHTML.href = favicon;
  };

  useEffect(updateFavicon, [favicon]);

  return setFavicon;
};

export default useFavicon;
