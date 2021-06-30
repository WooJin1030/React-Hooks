const useLockScroll = (e) => {
  const [isLocked, setIsLocked] = useState(false);

  const handleScroll = {
    lockScroll: function () {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";

      return setIsLocked(true);
    },
    unlockScroll: function () {
      const body = document.querySelector("body");
      body.style.overflow = "visible";

      return setIsLocked(false);
    },
  };

  return [isLocked, handleScroll];
};

export default useLockScroll;
