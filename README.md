# 👨‍💻 Soumyadip Dhara - Portfolio Website
### 👀 Preview Link- https://soumyadip-dhara-portfolio.netlify.app/

A modern, responsive full-stack developer portfolio built with React. Showcase your projects, skills, experience, and certifications in an elegant, interactive interface.

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Dark/Light Mode** - Toggle theme with localStorage persistence
- **Experience & Education Timeline** - Two-column layout with professional timeline
- **Skills Showcase** - Display technical skills and competencies
- **Projects Portfolio** - Showcase your best work with descriptions and links
- **Certifications & Awards** - Highlight professional achievements
- **Contact Section** - Easy way for visitors to connect with you
- **Smooth Animations** - Modern transitions and hover effects
- **SEO Optimized** - Meta tags and semantic HTML

## 📁 Project Structure

```
myportfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── Experience/
│   │   │   ├── Experience.js
│   │   │   └── Experience.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── Projects.css
│   │   ├── Skills/
│   │   │   ├── Skills.js
│   │   │   └── Skills.css
│   │   └── shared/
│   │       └── Section.css
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Soumyadip9382/Portfolio.git
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile photo**
   - Create a `static` folder in the `public` directory
   - Add your profile photo as `profile_photo.jpg`

### Development

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

### Building for Production

Build the app for production:

```bash
npm run build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 📝 Customization

### Update Portfolio Data

Edit the `portfolioData` object in `src/App.js`:

```javascript
const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  about: "Your about text",
  profilePhoto: "/static/profile_photo.jpg",
  
  skills: [
    { name: "Skill Name", icon: "🎨", description: "Description" },
    // Add more skills
  ],
  
  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      year: "2024 - Present",
      location: "City, Country",
      description: "Job description"
    },
    // Add more experience
  ],
  
  education: [
    {
      title: "Degree",
      school: "University Name",
      year: "2014 - 2018",
      location: "City, Country",
      gpa: "3.8/4.0",
      details: "Details about your education",
      achievements: ["Achievement 1", "Achievement 2"]
    }
  ],
  
  certifications: [
    { title: "Certification Name", icon: "📜" },
    // Add more certifications
  ],
  
  projects: [
    {
      title: "Project Name",
      description: "Project description",
      technologies: ["Tech1", "Tech2"],
      codelink: "GitHub link",
      viewlink: "Live demo link",
      icon: "📚"
    },
    // Add more projects
  ],
  
  contact: {
    email: "your.email@example.com",
    phone: "+1 (234) 567-8900",
    location: "City, Country",
    social: [
      { icon: "💼", name: "LinkedIn", link: "https://linkedin.com" },
      { icon: "🐙", name: "GitHub", link: "https://github.com" },
      { icon: "𝕏", name: "Twitter", link: "https://twitter.com" }
    ]
  }
};
```

### Styling

- Global styles in `src/index.css`
- Component-specific styles in respective CSS files
- CSS variables for easy theming

## 🎨 Theme Colors

The portfolio uses CSS variables for easy customization. Edit `src/index.css`:

```css
:root {
  --primary-color: #6e59f5;
  --accent-color: #ec4899;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --bg-white: #ffffff;
  --bg-light: #f9fafb;
  --border-radius: 12px;
  --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.15);
  --transition: all 0.3s ease;
}

[data-theme="dark"] {
  --primary-color: #8b5cf6;
  --text-dark: #f9fafb;
  --bg-white: #1f2937;
  --bg-light: #111827;
  /* Add more dark mode colors */
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Desktop**: Full layout (1024px+)
- **Tablet**: Optimized grid layout (768px - 1023px)
- **Mobile**: Single column layout (<768px)

## 🔗 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:

```json
"homepage": "https://yourusername.github.io/portfolio-repo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:

```bash
npm run deploy
```

## 🛠 Technologies Used

- **React 18** - UI library
- **CSS3** - Styling with modern features
- **JavaScript (ES6+)** - Programming language
- **Create React App** - Build tool

## 📚 Core Components

- **Navbar** - Navigation with theme toggle
- **Home** - Hero section with CTA buttons
- **About** - Personal introduction with profile photo
- **Skills** - Skill categories and descriptions
- **Experience** - Professional timeline with education
- **Projects** - Portfolio of completed projects
- **Contact** - Contact information and social links
- **Footer** - Footer with links

## 💡 Features in Detail

### Dark Mode
- Toggle theme button in navbar
- Theme preference saved to localStorage
- Smooth transitions between themes

### Two-Column Experience Layout
- Professional experience on the left
- Education on the right
- Vertical timeline divider
- Responsive stacking on mobile

### Certifications Section
- Dedicated section for awards and certifications
- Grid layout with icons
- Professional styling with hover effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

## 📧 Contact

- **Email**: soumyadipdhara0@gmail.com
- **Phone**: +91 9382063695
- **LinkedIn**: [linkedin.com/in/soumyadip-dhara](https://linkedin.com)
- **GitHub**: [github.com/Soumyadip9382](https://github.com/Soumyadip9382)

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/) - React boilerplate
- [React Documentation](https://react.dev/) - React resources
- Inspired by modern portfolio designs

---

**Made with ❤️ by Soumyadip Dhara**

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
