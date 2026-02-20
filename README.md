# MRJ Chits Pvt Ltd - Website

A modern, responsive React website for MRJ Chits Pvt Ltd, featuring a stunning UI with comprehensive information about chit schemes, team members, testimonials, and payment options.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Open terminal in the project folder
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit: `http://localhost:3000`

## 📸 Adding Images

### Logo
**Location:** Navigation bar (top-left)
**How to add:**
1. Save your logo as: `public/images/logo.png`
2. Open: `src/components/Navigation.js`
3. Find the comment: `/* Replace with your actual logo */`
4. Replace the placeholder div with:
```jsx
<img src="/images/logo.png" alt="MRJ Chits Logo" className="logo-img" />
```

---

### Photo Gallery (6 images)
**Location:** Photo Gallery page
**How to add:**

**Method 1 - Simple (Automatic):**
1. Create folder: `public/images/gallery/`
2. Add images named: `gallery-1.jpg`, `gallery-2.jpg`, ..., `gallery-6.jpg`
3. Done! Images will show automatically

**Method 2 - Custom names:**
1. Place images in: `public/images/gallery/`
2. Open: `src/pages/PhotoGallery.js`
3. Update the `galleryImages` array:
```javascript
const galleryImages = [
  { id: 1, src: '/images/gallery/your-image-1.jpg', alt: 'Description', placeholder: false },
  // ... add more
];
```

---

### Team Member Photos (4 images)
**Location:** Our Team page
**How to add:**
1. Create folder: `public/images/team/`
2. Add photos: `ramaiah.jpg`, `munnanju.jpg`, `jairaj.jpg`, `srinivas.jpg`
3. Open: `src/pages/OurTeam.js`
4. For each team member, update:
```javascript
{
  id: 1,
  name: 'D RAMAIAH',
  position: 'Managing Director',
  description: '...',
  image: '/images/team/ramaiah.jpg',  // Add this line
  placeholder: false  // Change this to false
}
```

---

### Testimonial Photos (3 images)
**Location:** Testimonials page
**How to add:**
1. Create folder: `public/images/testimonials/`
2. Add photos: `kiran.jpg`, `chetan.jpg`, `mohan.jpg`
3. Open: `src/pages/Testimonials.js`
4. For each testimonial, update:
```javascript
{
  id: 1,
  name: 'Kiran Kumar J',
  company: '...',
  text: '...',
  rating: 5,
  image: '/images/testimonials/kiran.jpg',  // Add this line
  placeholder: false  // Change this to false
}
```

---

## 📁 Project Structure

```
mrj/
├── public/
│   ├── images/              # Create this folder for all images
│   │   ├── logo.png        # Your logo
│   │   ├── gallery/        # Photo gallery images
│   │   ├── team/           # Team member photos
│   │   └── testimonials/   # Customer photos
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js   # Header with logo
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js         # Landing page with hero
│   │   ├── About.js
│   │   ├── PhotoGallery.js # 6 image placeholders
│   │   ├── ChitSchemes.js  # All chit plans
│   │   ├── OurTeam.js      # 4 team members
│   │   ├── Testimonials.js # 3 customer reviews
│   │   ├── Payments.js     # Bank details
│   │   └── Contact.js      # Contact form + map
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 Features

- ✅ Modern, responsive design
- ✅ 8 pages with navigation
- ✅ Stunning hero section
- ✅ Interactive chit schemes display
- ✅ Team member profiles
- ✅ Customer testimonials
- ✅ Payment information with copy-to-clipboard
- ✅ Contact form (opens email client)
- ✅ Google Maps integration
- ✅ Mobile-friendly
- ✅ Easy image replacement

## 📝 Pages

1. **Home** - Hero section, features, stats, recent posts
2. **About** - Company story, why chits, how it operates
3. **Photo Gallery** - 6 image placeholders
4. **Chit Schemes** - All mid-term and long-term plans
5. **Our Team** - 4 directors with photos and bios
6. **Testimonials** - 3 customer reviews with photos
7. **Payments** - NEFT/RTGS and cheque details
8. **Contact Us** - Form and Google Maps location

## 🛠️ Customization

### Change Colors
Edit `src/index.css` and modify the CSS variables:
```css
:root {
  --primary-color: #1a4d2e;
  --secondary-color: #4f772d;
  --accent-color: #d4af37;
  /* ... */
}
```

### Update Contact Email
Open `src/pages/Contact.js` and change:
```javascript
mailto:ankittiwari3334@gmail.com
```

### Update Bank Details
Open `src/pages/Payments.js` and modify the `bankDetails` object.

## 📱 Responsive Design

The website is fully responsive and looks great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktops

## 🚀 Building for Production

When ready to deploy:
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📧 Contact Form

Currently uses `mailto:` link which opens the user's email client.

**To implement server-side email:**
1. Install EmailJS: `npm install emailjs-com`
2. Create account at https://www.emailjs.com/
3. Update the form in `src/pages/Contact.js`

Alternatively, use a backend service like Nodemailer, SendGrid, etc.

## 🗺️ Google Maps

The contact page includes an embedded Google Map. The location is set to the coordinates from:
https://maps.app.goo.gl/JhdEK39MpWrkNyew9

To update the location, edit the iframe `src` in `src/pages/Contact.js`.

## 💡 Tips

1. **Image Sizes:**
   - Logo: 200-300px wide
   - Gallery: 800x600px or similar aspect ratio
   - Team: 500x500px (square)
   - Testimonials: 400x400px (square)

2. **Image Format:** JPG or PNG recommended

3. **Testing:** Always test on mobile devices after adding images

## 📞 Support

For questions about the website code, refer to the comments in each file.

---

**Built with React ⚛️**
**Designed for MRJ Chits Pvt Ltd** 🏦
