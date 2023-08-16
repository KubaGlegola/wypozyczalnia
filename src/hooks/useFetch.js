import React, { useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
