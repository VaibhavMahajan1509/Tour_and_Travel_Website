import React from 'react';
import styles from './Photogallery.module.css';
import image1 from '../../assets/photogallery1.jpg';
import image2 from '../../assets/photogallery2.jpg';
import image3 from '../../assets/photogallery3.jpg';
import image4 from '../../assets/photogallery4.jpg';
import image5 from '../../assets/photogallery5.jpg';
import image6 from '../../assets/photogallery6.jpg';

const Photogallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="container mt-4">
        <h2 className='my-4'>Photo Gallery</h2>
      <div className="row mb-3">
        {images.slice(0, 3).map((src, index) => (
          <div className="col-4" key={index}>
            <img src={src} className={`img-fluid ${styles.imageHover}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="row mb-5">
        {images.slice(3).map((src, index) => (
          <div className="col-4" key={index + 3}>
            <img src={src} className={`img-fluid ${styles.imageHover}`} alt={`Image ${index + 4}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photogallery;
