# IMAGE PLACEMENT GUIDE

This is a quick reference for where to place all your images.

## 📁 Folder Structure to Create

```
public/
└── images/
    ├── logo.png         (Your company logo)
    ├── gallery/
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   ├── gallery-4.jpg
    │   ├── gallery-5.jpg
    │   └── gallery-6.jpg
    ├── team/
    │   ├── ramaiah.jpg
    │   ├── munnanju.jpg
    │   ├── jairaj.jpg
    │   └── srinivas.jpg
    └── testimonials/
        ├── kiran.jpg
        ├── chetan.jpg
        └── mohan.jpg
```

## 🖼️ Image Details

### 1. Logo
- **File:** `public/images/logo.png`
- **Size:** 200-300px wide
- **File to edit:** `src/components/Navigation.js` (line ~20)

### 2. Photo Gallery (6 images)
- **Folder:** `public/images/gallery/`
- **Names:** `gallery-1.jpg` through `gallery-6.jpg`
- **Size:** 800x600px recommended
- **File to edit:** `src/pages/PhotoGallery.js` (only if using custom names)

### 3. Team Photos (4 images)
- **Folder:** `public/images/team/`
- **Names:** 
  - `ramaiah.jpg` (D Ramaiah)
  - `munnanju.jpg` (V Munnanju)
  - `jairaj.jpg` (M Jairaj)
  - `srinivas.jpg` (R Srinivas)
- **Size:** 500x500px (square)
- **File to edit:** `src/pages/OurTeam.js`

### 4. Testimonial Photos (3 images)
- **Folder:** `public/images/testimonials/`
- **Names:**
  - `kiran.jpg` (Kiran Kumar J)
  - `chetan.jpg` (M Chetan Kumar)
  - `mohan.jpg` (Mohan N)
- **Size:** 400x400px (square)
- **File to edit:** `src/pages/Testimonials.js`

---

## ⚡ Quick Steps to Add Images

### Step 1: Create Folders
In your project, create:
- `public/images/gallery/`
- `public/images/team/`
- `public/images/testimonials/`

### Step 2: Add Images
Copy your images to the appropriate folders with the names above.

### Step 3: Update Code (for team and testimonials only)

**For Team Photos:**
Open `src/pages/OurTeam.js` and change `placeholder: true` to `placeholder: false` and add `image: '/images/team/filename.jpg'`

**For Testimonial Photos:**
Open `src/pages/Testimonials.js` and change `placeholder: true` to `placeholder: false` and add `image: '/images/testimonials/filename.jpg'`

**For Logo:**
Open `src/components/Navigation.js` and follow the instructions in the comments.

---

That's it! Your images will now appear on the website. 🎉
