import { useCallback, useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    setLoading(true);
    fetch(url)
      .then((result) => result.json())
      .then((dataAPI) => setData(dataAPI.results))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, [url]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { loading, error, data, refresh };
}
