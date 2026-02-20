import React from 'react';
import { FaImage } from 'react-icons/fa';
import './PhotoGallery.css';

const PhotoGallery = () => {
  // Update these with your actual images
  // Place images in: public/images/gallery/
  // Uncomment the src and change placeholder to false when you add images
  const galleryImages = [
    { 
      id: 1, 
      src: '/images/gallery/gallery-1.jpg',
      alt: 'Gallery Image 1', 
      placeholder: false 
    },
    { 
      id: 2, 
      src: '/images/gallery/gallery-2.jpg',
      alt: 'Gallery Image 2', 
      placeholder: false 
    },
    { 
      id: 3, 
      src: '/images/gallery/gallery-3.jpg',
      alt: 'Gallery Image 3', 
      placeholder: false 
    },
    { 
      id: 4, 
      src: '/images/gallery/gallery-4.jpg',
      alt: 'Gallery Image 4', 
      placeholder: false 
    },
    { 
      id: 5, 
      src: '/images/gallery/gallery-5.jpg',
      alt: 'Gallery Image 5', 
      placeholder: false 
    },
    { 
      id: 6, 
      src: '/images/gallery/gallery-6.jpg',
      alt: 'Gallery Image 6', 
      placeholder: false 
    }
  ];

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Photo Gallery</h1>
          <p className="page-subtitle">Moments That Define Our Journey</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="gallery-intro">
            Take a glimpse into our world at MRJ Chits. From customer events to 
            award ceremonies, these photos capture the essence of our commitment 
            to excellence and community engagement.
          </p>

          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                {image.placeholder ? (
                  <div className="image-placeholder">
                    <FaImage />
                    <p>Image {image.id}</p>
                  </div>
                ) : (
                  <img src={image.src} alt={image.alt} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;
