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

          <div className="gallery-instructions">
            <h3>📸 How to Add Your Photos:</h3>
            <ol>
              <li>Create a folder: <code>public/images/gallery/</code></li>
              <li>Add your images with names: <code>gallery-1.jpg</code>, <code>gallery-2.jpg</code>, etc.</li>
              <li>The images will automatically appear in the gallery</li>
            </ol>
            <p className="note">
              <strong>Note:</strong> Recommended image size: 800x600px or similar aspect ratio for best results.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;

/* 
===========================================
IMAGE REPLACEMENT INSTRUCTIONS:
===========================================

METHOD 1 - Simple Image Replacement:
1. Create folder: public/images/gallery/
2. Add 6 images named: gallery-1.jpg, gallery-2.jpg, ..., gallery-6.jpg
3. Images will automatically display

METHOD 2 - Custom Image Names:
1. Place your images in: public/images/gallery/
2. Open this file: src/pages/PhotoGallery.js
3. Update the galleryImages array:

const galleryImages = [
  { id: 1, src: '/images/gallery/your-image-1.jpg', alt: 'Description 1', placeholder: false },
  { id: 2, src: '/images/gallery/your-image-2.jpg', alt: 'Description 2', placeholder: false },
  // Add more images as needed
];

METHOD 3 - Add More Images:
Simply add more objects to the galleryImages array with unique IDs.

===========================================
*/
