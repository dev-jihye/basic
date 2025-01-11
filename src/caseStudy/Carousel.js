import { useState } from 'react';
import '../styles/carousel.scss';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={goToPrevious}>&lt;</button>
      <img className="image" src={images[currentIndex]} alt="carousel" />
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
};

const App = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8ivtYA8wE3cVraeyeoBQFjoHY-Wy_H2Gbg&s',
    'https://bookgeek.com.au/cdn/shop/files/book-lover-card-bookgeek-34420753760356.jpg?v=1726616957',
    'https://basmo.app/wp-content/uploads/2022/08/how-to-read-a-book-a-week.webp',
  ];

  return <Carousel images={images} />;
};

export default App;
