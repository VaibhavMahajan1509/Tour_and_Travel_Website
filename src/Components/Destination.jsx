import { useState } from "react";
import image1 from "../assets/Paris.png";
import image2 from "../assets/Nhatrang.png";
import image3 from "../assets/Bali.png";
import image4 from "../assets/Tokyo.png";
import image5 from "../assets/Cancun.png";
import image6 from "../assets/Malaysia.png";
import styles from "./Destination.module.css"; // Import CSS

const destinations = [
  { image: image1, title: "Paris" },
  { image: image2, title: "Nha Trang" },
  { image: image3, title: "Bali" },
  { image: image4, title: "Tokyo" },
  { image: image5, title: "Cancun" },
  { image: image6, title: "Malaysia" },
];

function Destination() {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3; // Shows 3 items per slide

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Math.ceil(destinations.length / itemsPerSlide));
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(destinations.length / itemsPerSlide) - 1 : prevIndex - 1
    );
  };

  // Group destinations into slides of 3 items each
  const slides = [];
  for (let i = 0; i < destinations.length; i += itemsPerSlide) {
    slides.push(destinations.slice(i, i + itemsPerSlide));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Top Destinations For Your Next Vacation</h2>
      <div className={styles.carousel}>
        <button onClick={handlePrev} className={styles.navButton}>❮</button>
        <div className={styles.carouselWrapper}>
          {slides[index].map((destination, j) => (
            <div key={j} className={styles.card}>
              <img src={destination.image} alt={destination.title} className={styles.image} />
              <h3 className={styles.cardTitle}>{destination.title}</h3>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className={styles.navButton}>❯</button>
      </div>
    </div>
  );
}

export default Destination;
