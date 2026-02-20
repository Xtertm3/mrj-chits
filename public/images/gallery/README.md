# MRJ Chits - Photo Gallery

## How to Add Photos to the Gallery

### Quick Instructions:

1. **Add your photos to this folder** (`public/images/gallery/`)

2. **Update the PhotoGallery component** with your image details

### Method 1: Auto-Display Images
Simply place images in this folder with these naming conventions:
- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- `gallery-4.jpg`
- `gallery-5.jpg`
- `gallery-6.jpg`

The gallery will automatically display them.

### Method 2: Custom Names and Descriptions
Edit `src/pages/PhotoGallery.jsx` and update the `galleryImages` array:

```jsx
const galleryImages = [
  { 
    id: 1, 
    src: '/images/gallery/event-1.jpg', 
    alt: 'Customer Event 2024', 
    placeholder: false 
  },
  { 
    id: 2, 
    src: '/images/gallery/team-photo.jpg', 
    alt: 'Team Photo', 
    placeholder: false 
  },
  // Add more images as needed
];
```

### Image Specifications:
- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x600px or similar aspect ratio
- **Aspect Ratio**: 4:3 works best
- **Max File Size**: 500KB per image for optimal performance

### Step-by-Step Example:

1. You have 4 images: `event1.jpg`, `event2.jpg`, `team.jpg`, `awards.jpg`

2. Place them in: `public/images/gallery/`

3. Edit `src/pages/PhotoGallery.jsx`:

```jsx
const galleryImages = [
  { id: 1, src: '/images/gallery/event1.jpg', alt: 'Customer Event', placeholder: false },
  { id: 2, src: '/images/gallery/event2.jpg', alt: 'Training Session', placeholder: false },
  { id: 3, src: '/images/gallery/team.jpg', alt: 'Team Meeting', placeholder: false },
  { id: 4, src: '/images/gallery/awards.jpg', alt: 'Awards Ceremony', placeholder: false },
];
```

4. Save the file and rebuild: `npm run build`

5. Deploy to Vercel: `vercel --prod`

### Add More Images:
To add more than 6 images, simply:
1. Add more image files to this folder
2. Add more objects to the `galleryImages` array with unique IDs
3. The gallery grid will automatically adjust

### Troubleshooting:

- **Images not showing?**
  - Check file paths are correct
  - Verify images are in `public/images/gallery/` folder
  - Make sure you updated the `galleryImages` array in `src/pages/PhotoGallery.jsx`

- **Images look blurry?**
  - Use higher resolution images (at least 800x600px)
  - Compress images using tools like TinyPNG for faster loading

- **Gallery looks unbalanced?**
  - Use images with consistent aspect ratios
  - Resize all images to the same dimensions before uploading

---

**Last Updated**: February 20, 2026
