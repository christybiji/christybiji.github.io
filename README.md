# Academic Website

A modern, responsive academic website built with HTML, CSS, and JavaScript. Features a clean design with dark/light mode toggle and particle slider background effect.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Particle Slider**: Interactive background animation (based on CodePen reference)
- **Modern UI**: Clean, professional design suitable for academics
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized CSS and minimal JavaScript

## File Structure

```
academic-website/
├── index.html              # Main HTML file
├── css/
│   ├── wc.min.css          # Main stylesheet
│   └── themes/
│       └── blue.min.css    # Blue theme colors
├── js/
│   ├── theme-toggle.js     # Dark/light mode functionality
│   └── particle-slider.js  # Background animation
├── media/                  # Images and media files
│   └── placeholder.txt
├── uploads/                # Downloadable files
│   └── placeholder.txt
└── README.md
```

## Setup Instructions

1. **Add Your Content**: 
   - Replace placeholder text in `index.html` with your information
   - Update links to your social media profiles
   - Add your actual experience, education, and awards

2. **Add Media Files**:
   - Add your profile picture as `media/avatar.jpg`
   - Add a favicon as `media/icon.png`
   - Add your CV/resume as `uploads/resume.pdf`
   - Add your thesis as `uploads/thesis.pdf` (if applicable)

3. **Customize Colors**:
   - Edit `css/themes/blue.min.css` to change the primary color scheme
   - Modify CSS variables in the `:root` selector

4. **Deploy**:
   - Upload all files to your web server
   - Ensure all file paths are correct
   - Test the website on different devices

## Customization

### Changing Colors
Edit the CSS variables in `css/themes/blue.min.css`:

```css
:root {
  --primary-500: #3b82f6; /* Main blue color */
  --primary-700: #1d4ed8; /* Darker blue */
  /* ... other colors */
}
```

### Adding Sections
You can add new sections by copying the existing section structure in `index.html`:

```html
<section id="section-your-section" class="relative hbb-section" style="padding:4rem 0">
    <div class="home-section-bg"></div>
    <div class="container mx-auto">
        <!-- Your content here -->
    </div>
</section>
```

### Particle Slider Settings
The particle slider effect can be customized in `js/particle-slider.js`. The GUI controls will appear on desktop devices (width > 1000px).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Credits

- **Particle Slider**: Based on the work by Tamino Martinius (http://zaku.eu)
- **Icons**: SVG icons from various sources
- **Design**: Inspired by modern academic websites

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For issues or questions, please check the code comments or create an issue in the repository.
