import { useEffect, useState } from "react";

const useLoading = (duration: number = 1200) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return loading;
};

export default useLoading; 