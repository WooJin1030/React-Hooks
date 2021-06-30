import { useEffect, useState } from "react";

const useOnline = () => {
  const [state, setState] = useState(false);

  const handleOnline = () => {
    setState(true);
  };

  const handleOffline = () => {
    setState(false);
  };

  useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  });

  return state;
};

export default useOnline;
