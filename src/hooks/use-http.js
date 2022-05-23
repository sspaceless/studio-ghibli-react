import { useState, useCallback } from 'react';

const useHttp = (url, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const result = await response.json();
      const processedData = applyData(result);
      setData(processedData);
    } catch (e) {
      setError(e.message);
    }

    setIsLoading(false);
  }, []);

  return {
    fetchDataHandler,
    isLoading,
    data,
    error,
  };
};

export default useHttp;
