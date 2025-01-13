import { useEffect, useState } from 'react';

const App = () => {
  const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      let isMounted = true;
      fetch(url)
        .then((response) => response.json)
        .then((data) => {
          if (isMounted) {
            setData(data);
            setLoading(false);
          }
        })
        .catch((error) => {
          if (isMounted) {
            setError(error);
            setLoading(false);
          }
        });

      return () => {
        isMounted = false;
      };
    }, [url]);

    return { data, loading, error };
  };

  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default App;
