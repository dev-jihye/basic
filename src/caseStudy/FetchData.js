import { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://api.example.com/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => {
        <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

export default FetchData;
