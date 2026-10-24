export const personalInfo = {
  name: "Pratik Dabhi",
  nickname: "PD",
  role: "Full-Stack Developer",
  taglines: [
    "Full-Stack Developer",
    "React & Frontend Specialist",
    "Node.js & Express Builder",
    "B.Tech Information Technology Student"
  ],
  location: "Bhavnagar, Gujarat, India",
  email: "pratikdabhi4902@gmail.com",
  github: "https://github.com/Dabhi-Pratik",
  linkedin: "https://linkedin.com/in/pratik-dabhi-1a9836355",
  status: "Open to Work / Internships",
  availableForHire: true,
  degree: "B.Tech in Information Technology",
  university: "Gujarat Technological University (GTU)",
  college: "Shantilal Shah Engineering College, Bhavnagar",
  institute: "Red & White Multimedia Education",
  languages: ["English", "Hindi", "Gujarati"],
  bio: "A passionate developer building modern, high-performance, and responsive web applications with React, Node.js, and modern CSS/Bootstrap. Dedicated to clean code, sleek UI/UX, and solving real-world challenges.",
  fullAbout: `I am Pratik Dabhi, a dedicated Full-Stack and Frontend Developer and an Information Technology student at Shantilal Shah Engineering College, Bhavnagar (affiliated with GTU).
  
  I love crafting clean, intuitive, and visually engaging digital experiences. My toolkit revolves around React.js, JavaScript (ES6+), Bootstrap, HTML5, and CSS3, complemented by hands-on backend expertise in Node.js, Express, and MongoDB.
  
  I am continually exploring cutting-edge web technologies, expanding my problem-solving skills, and looking forward to exciting internships, freelance opportunities, and collaborative developer teams.`,
  stats: [
    { label: "Projects Completed", value: "7+", icon: "bi-laptop" },
    { label: "Core Technologies", value: "12+", icon: "bi-code-slash" },
    { label: "Dedication & Passion", value: "100%", icon: "bi-fire" },
    { label: "Availability", value: "Immediate", icon: "bi-check-circle" }
  ]
};

export const skillsData = [
  {
    name: "React.js",
    category: "frontend",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tag: "Library"
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    tag: "Core"
  },
  {
    name: "Bootstrap 5",
    category: "frontend",
    level: 92,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    tag: "UI Framework"
  },
  {
    name: "HTML5",
    category: "frontend",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    tag: "Markup"
  },
  {
    name: "CSS3",
    category: "frontend",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    tag: "Styling"
  },
  {
    name: "Node.js",
    category: "backend",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    tag: "Runtime"
  },
  {
    name: "Express.js",
    category: "backend",
    level: 82,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    tag: "Backend Framework"
  },
  {
    name: "MongoDB",
    category: "backend",
    level: 78,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    tag: "NoSQL Database"
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    tag: "Full-Stack"
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: 88,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    tag: "Version Control"
  },
  {
    name: "C++",
    category: "tools",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    tag: "Data Structures"
  },
  {
    name: "Python",
    category: "tools",
    level: 72,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    tag: "Language"
  },
  {
    name: "Photoshop",
    category: "tools",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    tag: "Design"
  }
];

export const projectsData = [
  {
    id: "organic-grocery",
    title: "Organic Grocery",
    category: "web-apps",
    featured: true,
    image: "/projects/p-1.png",
    description: "An online organic grocery store with a clean modern aesthetic, dynamic product catalogs, interactive cart, checkout flow, and responsive design.",
    longDescription: "Organic Grocery is a feature-rich e-commerce store concept focusing on eco-friendly farm-fresh products. It features intuitive catalog navigation across fruits, vegetables, dairy, and organics, interactive cart quantity management, pricing calculations, and smooth checkout flow designed for both desktop and mobile users.",
    technologies: ["React", "HTML5", "CSS3", "JavaScript", "Responsive UI"],
    liveUrl: "https://organic-grocery-six.vercel.app/",
    githubUrl: "https://github.com/Dabhi-Pratik/Organic-Grocery",
    highlights: ["Interactive cart state & totals", "Product categorization & filters", "Modern responsive checkout layout"]
  },
  {
    id: "online-learning",
    title: "Online Learning Platform",
    category: "web-apps",
    featured: true,
    image: "/projects/p-2.png",
    description: "An EdTech demo platform showcasing comprehensive courses, expert instructor cards, curriculum overviews, and student reviews.",
    longDescription: "Online Learning Platform is designed to deliver a modern, structured educational experience. It showcases diverse curriculum catalogs, subject categories, instructor credentials, and student testimonial carousels with an emphasis on accessibility and layout harmony.",
    technologies: ["Bootstrap 5", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://max-width-project-courses.vercel.app/",
    githubUrl: "https://github.com/Dabhi-Pratik/Max-width-Project-Courses.git",
    highlights: ["Bootstrap 5 grid architecture", "Subject & course category filtering", "Clean instructor and review modules"]
  },
  {
    id: "free-courses",
    title: "Harvard Free Courses Hub",
    category: "web-apps",
    featured: true,
    image: "/projects/p-3.png",
    description: "A centralized hub featuring 100+ free Harvard University online courses spanning CS, data science, humanities, and business.",
    longDescription: "A curated educational discovery portal aggregating high-quality free online courses from Harvard University. Enables learners worldwide to explore computer science, machine learning, data structures, and humanities with clear categorization and direct course enrollment access.",
    technologies: ["Responsive Design", "HTML5", "CSS3", "UI/UX"],
    liveUrl: "https://min-width-project-ten.vercel.app/",
    githubUrl: "https://github.com/Dabhi-Pratik/-Min-width-Project-.git",
    highlights: ["100+ course listings compiled", "Discipline tags & fast navigation", "Adaptive multi-screen layout"]
  },
  {
    id: "temp-converter",
    title: "Temperature Converter",
    category: "utilities",
    featured: false,
    image: "/projects/p-5.png",
    description: "An interactive utility converting Fahrenheit to Celsius in real time, featuring dynamic weather visuals and smart outfit suggestions.",
    longDescription: "An intuitive web application demonstrating real-time mathematical conversions, DOM events, and state-driven UI updates. Based on the calculated temperature, the app dynamically changes theme colors, weather indicators, and suggests appropriate clothing.",
    technologies: ["JavaScript (ES6)", "DOM Manipulation", "CSS3", "HTML5"],
    liveUrl: "https://github.com/Dabhi-Pratik/JAVASCRIPT-ASSIGNMENT/blob/main/Conditional%20Statements/index.html",
    githubUrl: "https://github.com/Dabhi-Pratik/JAVASCRIPT-ASSIGNMENT/blob/main/Conditional%20Statements/index.html",
    highlights: ["Instant Fahrenheit to Celsius calculation", "Dynamic weather visual indicators", "Smart conditional outfit advice"]
  },
  {
    id: "electricity-calculator",
    title: "Electricity Bill Calculator",
    category: "utilities",
    featured: false,
    image: "/projects/p-6.png",
    description: "A utility app calculating total power costs based on slab units consumed, tariff tiers, and tax breakdown.",
    longDescription: "A targeted calculator simulating utility board billing algorithms. Takes units consumed as input, evaluates tiered electricity rates and government surcharges, and outputs an itemized billing receipt with zero latency.",
    technologies: ["JavaScript Logic", "Form Validation", "CSS3", "HTML5"],
    liveUrl: "https://github.com/Dabhi-Pratik/JAVASCRIPT-ASSIGNMENT/blob/main/Day-7%20Project-1/bill.html",
    githubUrl: "https://github.com/Dabhi-Pratik/JAVASCRIPT-ASSIGNMENT/blob/main/Day-7%20Project-1/bill.html",
    highlights: ["Tiered tariff slab logic", "Instant mathematical computation", "Clean tabular receipt preview"]
  },
  {
    id: "salary-calculator",
    title: "Gross Salary Calculator",
    category: "utilities",
    featured: false,
    image: "/projects/p-7.png",
    description: "A payroll computation tool computing gross pay from Basic Salary, HRA, DA, and allowances with instant breakdowns.",
    longDescription: "A financial tool built for accurate salary computation. Computes total compensation incorporating basic salary, House Rent Allowance (HRA), Dearness Allowance (DA), and Travel Allowance (TA) with interactive inputs and instant validation.",
    technologies: ["JavaScript Logic", "Responsive UI", "Form Controls"],
    liveUrl: "https://github.com/Dabhi-Pratik/JAVASCRIPT-ASSIGNMENT/blob/main/Day-7%20Project-1/index.html",
    githubUrl: "https://github.com/Dabhi-Pratik/JAVASCRIPT-ASSIGNMENT/blob/main/Day-7%20Project-1/index.html",
    highlights: ["Multi-field salary breakdown", "Real-time earnings tally", "Intuitive input format"]
  }
];

export const educationData = [
  {
    id: "btech-it",
    degree: "B.Tech in Information Technology",
    institution: "Shantilal Shah Engineering College, Bhavnagar",
    affiliation: "Gujarat Technological University (GTU)",
    status: "Currently Enrolled",
    logo: "/edu/gtu.png",
    description: "Pursuing Bachelor of Engineering in Information Technology, acquiring strong theoretical foundation and practical skills in algorithms, data structures, object-oriented programming, computer networks, and software engineering methodologies.",
    highlights: ["Object-Oriented Programming & C++", "Database Management Systems & SQL", "Computer Networking & Operating Systems"]
  },
  {
    id: "fullstack-rw",
    degree: "Full-Stack Web Development Program",
    institution: "Red & White Multimedia Education",
    affiliation: "Industry Certification Program",
    status: "Currently Enrolled",
    logo: "/edu/redwhite.png",
    description: "Hands-on, project-centric curriculum covering modern frontend engineering (HTML5, CSS3, modern JavaScript, React.js, Bootstrap) and backend architectures (Node.js, Express, MongoDB, RESTful APIs).",
    highlights: ["Single Page Applications with React", "Server development with Node.js & Express", "Database design & CRUD operations with MongoDB"]
  }
];

export const testimonialsData = [
  {
    id: "dharmik",
    name: "Dharmik",
    role: "Peer Reviewer & Developer",
    avatar: "/testimonials/dharmik.avif",
    rating: 5,
    quote: "Organic Grocery is really impressive — feels like a real online store. The cart and checkout features are smooth and intuitive. With payment integration, it could easily be a production product!"
  },
  {
    id: "vaishali",
    name: "Vaishali",
    role: "Peer Reviewer & Designer",
    avatar: "/testimonials/vaishali.jpg",
    rating: 5,
    quote: "Online Learning has a clean layout and gives off strong EdTech vibes. I love how organized the content is across subjects and instructors. A fantastic portfolio showcase!"
  },
  {
    id: "utsav",
    name: "Utsav",
    role: "Peer Reviewer & Colleague",
    avatar: "/testimonials/utsav.avif",
    rating: 5,
    quote: "Harvard Free Courses Hub is such a helpful idea! It's awesome to see all those high-value academic resources brought together in one clean, responsive interface."
  }
];
