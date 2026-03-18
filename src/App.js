import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme to document
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Sample data - Replace with your actual information
  const portfolioData = {
    name: "Soumyadip Dhara",
    title: "Full Stack Developer",
    tagline: "Building innovative web solutions with modern technologies",
    about: "I'm a passionate full-stack developer with expertise in creating responsive, user-friendly web applications. With a strong foundation in both frontend and backend technologies, I transform complex requirements into elegant solutions.",
    profilePhoto:"/static/photo.jpg",
    
    skills: [
      { name: "Backend", icon: "⚙️", description: "C#, Python,ASP.Net Core, ASP.Net Core MVC, ASP.Net Core Web API, Python Fast API" },
       { name: "Frontend", icon: "🎨", description: "React, JavaScript, HTML5, CSS3, Bootstrap, Responsive Design" },
      { name: "Database", icon: "🗄️", description: "SQL Server, PostgreSQL" },
      { name: "Tools", icon: "🛠️", description: "Git, GitHub, VS Code, Postman" },
      {name: "Concepts", icon: "📚", description: "OOP, RESTful APIs, MVC Architecture, Authentication & Authorization, Agile Methodologies" }
      // { name: "Cloud", icon: "☁️", description: "AWS, Heroku, Firebase Hosting, Netlify" },
      // { name: "DevOps", icon: "🚀", description: "CI/CD Pipelines, Docker, GitHub Actions" }
    ],

    experience: [
      {
        title: "Full Stack Developer",
        company: "GyanSys",
        year: "2024 - Present",
        location: "Bangalore, India",
        description: "Developed and maintained multiple web applications using React and ASP .Net Core, improved performance by 40%, and collaborated with cross-functional teams."
      },
      {
        title: "Product Engineer Intern",
        company: "HighRadius",
        year: "2023 - 2023",
        location: "Hyderabad, India",
        description: "Involved in creating a full stack web-based product. Developing a deep understanding of all aspects of product development such as identifying appropriate user requirements, designing a great user experience and building appropriate data models and machine learning models along with relevant UI components and backend design."
      }
    ],

    education: [
      {
        title: "Bachelor of Technology in Computer Science & Communication Engineering",
        school: "Kalinga Institute of Industrial Technology (KIIT)",
        year: "2020 - 2024",
        location: "Bhubaneswar, Odisha",
        gpa: "8.87/10.0",
        details: "Graduated . Focused on software engineering, data structures, and algorithms."
      }
    ],

    certifications: [
      {
        title: "Foundational C# with Microsoft",
        icon: "💻",
        link: "https://www.freecodecamp.org/certification/soumyadipdhara/foundational-c-sharp-with-microsoft"
      },
      {
        title: "Tulip ",
        icon: "🌷",
        link: "https://verify.skilljar.com/c/ik59vjfr2tnm"
      },
      {
        title: "React (Basic) with HackerRank",
        icon: "⚛️",
        link:"https://www.hackerrank.com/certificates/b506305ab5e5"
      },
      {
        title: "HackerRank Problem Solving (Intermediate)",
        icon: "🧩",
        link: "https://www.hackerrank.com/certificates/372e485449ac"
      },
      {
        title: "HackerRank SQL (Basic)",
        icon: "🗄️",
        link: "https://www.hackerrank.com/certificates/3185a6dfa7fb"
      },
      {
        title: "HackerRank Python (Basic)",
        icon: "🐍",
        link: "https://www.hackerrank.com/certificates/57945f694d28"
      }
    ],

    projects: [
      {
        title: "BookStore Application",
        description: "Full-stack solution with books catalog, shopping cart, wishlist and secure payment integration.",
        technologies: ["ASP.Net Core MVC", "SQL Server", "Bootstrap"],
        codelink: "https://github.com/Soumyadip9382/BookStoreApplication",
        viewlink: "#",
        icon: "📚"
      },
      {
        title: "Recipe Book",
        description: "A web app for sharing and discovering recipes with user authentication, recipe management, and social features.",
        technologies: ["React", "ASP.Net Core Web API", "SQL Server"],
        codelink: "https://github.com/Soumyadip9382/Recipe_Book",
        viewlink: "#",
        icon: "🍲"
      },
      // {
      //   title: "Social Media API",
      //   description: "RESTful API for a social media platform with authentication, user profiles, and post management.",
      //   technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
      //   link: "#",
      //   icon: "📱"
      // },
      // {
      //   title: "Weather Dashboard",
      //   description: "Real-time weather application with location-based forecasts and interactive weather maps.",
      //   technologies: ["React", "OpenWeather API", "Chart.js"],
      //   link: "#",
      //   icon: "🌤️"
      // },
      // {
      //   title: "Blog Platform",
      //   description: "Content management system for creating and sharing blog posts with markdown support and comments.",
      //   technologies: ["Next.js", "MongoDB", "NextAuth"],
      //   link: "#",
      //   icon: "📝"
      // },
      // {
      //   title: "Fitness Tracker",
      //   description: "Mobile-responsive fitness tracking app with workout logging, progress analytics, and goal setting.",
      //   technologies: ["React", "Chart.js", "LocalStorage"],
      //   link: "#",
      //   icon: "💪"
      // }
    ],

    contact: {
      email: "soumyadipdhara0@gmail.com",
      phone: "+91 9382063695",
      location: "Bangalore, India",
      social: [
        { icon: "💼", name: "LinkedIn", link: "https://www.linkedin.com/in/soumyadip-dhara-22961a246/" },
        { icon: "🐙", name: "GitHub", link: "https://github.com/Soumyadip9382" },
        // { icon: "𝕏", name: "Twitter", link: "https://twitter.com" },
        { icon: "📧", name: "Email", link: "mailto:soumyadipdhara0@gmail.com" }
      ]
    }
  };

  return (
    <>
      <Navbar 
        menuActive={menuActive} 
        setMenuActive={setMenuActive} 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
      />
      <Home portfolioData={portfolioData} />
      <About portfolioData={portfolioData} />
      <Skills portfolioData={portfolioData} />
      <Experience portfolioData={portfolioData} />
      <Projects portfolioData={portfolioData} />
      <Contact portfolioData={portfolioData} />
      <Footer portfolioData={portfolioData} />
    </>
  );
}

export default App;
