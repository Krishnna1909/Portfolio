export interface Project {
  title: string;
  tech: string;
  thumbnail: string;
  github: string;
  demo?: string;
  description?: string;
  highlights?: string[];
  date?: string;
}

export interface Certificate {
  title: string;
  tech: string;
  thumbnail: string;
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "instagram" | "github" | "youtube" | "telegram" | "whatsapp" | "email" | "linkedin" | "leetcode";
}

export interface PortfolioData {
  personal: {
    name: string;
    fullName: string;
    brandName: string;
    role: string;
    heroHeadline: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    whatsappNumber: string;
    websiteUrl: string;
    availableForWork: boolean;
    heroImage: string;
    profilePhoto: string;
  };
  marqueeLogos: string[];
  skills: {
    hero: string[];
    all: TechItem[];
    categories: {
      category: string;
      skills: string[];
    }[];
    highlights: string[];
  };
  projects: Project[];
  certificates: Certificate[];
  socials: SocialLink[];
  education: {
    institution: string;
    degree: string;
    years: string;
    score: string;
  }[];
  achievements: string[];
  about: {
    summary: string;
    strengths: string[];
    careerObjective: string;
    interests: string[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Krishna",
    fullName: "Krishna Singh",
    brandName: "KRISHNA · DEV",
    role: "Full-Stack Developer & AI/ML Engineer",
    heroHeadline: "KRISHNA",
    tagline: "Building Scalable Systems & AI Solutions.",
    bio: "Full-Stack Developer and AI/ML Enthusiast passionate about building scalable web applications, intelligent systems, and data-driven solutions. Continuously learning, experimenting, and transforming ideas into impactful products.",
    location: "NIT Kurukshetra, Haryana, India",
    email: "krishnasinghstg4@gmail.com",
    phone: "+91 6397404913",
    whatsappNumber: "916397404913",
    websiteUrl: "https://github.com/Krishnna1909",
    availableForWork: true,
    heroImage: "/src/assets/tech-hero-bg.jpg",
    profilePhoto: "/assets/krishna-profile.png",
  },
  marqueeLogos: [
    "ARTIFICIAL INTELLIGENCE",
    "MACHINE LEARNING",
    "DATA SCIENCE",
    "DATA ANALYTICS",
  ],
  skills: {
    hero: ["React.js", "Node.js", "Python", "AI/ML", "Computer Vision", "MongoDB"],
    all: [
      { name: "C", icon: "https://cdn.simpleicons.org/c/A8B9CC", color: "#A8B9CC" },
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C", color: "#00599C" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", color: "#4479A1" },
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
      { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E", color: "#F7931E" },
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458", color: "#150458" },
      { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243", color: "#013243" },
      { name: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit/FF4B4B", color: "#FF4B4B" },
      { name: "Plotly", icon: "https://cdn.simpleicons.org/plotly/3F4F75", color: "#3F4F75" },
      { name: "Power BI", icon: "/assets/powerbi.png", color: "#F2C811" },
      { name: "Tableau", icon: "/assets/tableau.png", color: "#E97627" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", color: "#FF6C37" },
    ],
    categories: [
      {
        category: "Languages",
        skills: ["C", "C++", "Python", "JavaScript", "MySQL"],
      },
      {
        category: "Data Tools & Visualization",
        skills: ["Excel", "Power BI", "Tableau", "Streamlit", "Plotly"],
      },
      {
        category: "Libraries & Frameworks",
        skills: ["React.js", "Node.js", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
      },
      {
        category: "Tools & Platforms",
        skills: ["Git", "GitHub", "Postman"],
      },
      {
        category: "Core Competencies",
        skills: ["Data Analysis", "EDA", "Visualization", "Machine Learning", "REST APIs", "DSA (500+ Problems)"],
      },
    ],
    highlights: [
      "Full-Stack Web Development",
      "Data Analysis & Cleaning",
      "Exploratory Data Analysis (EDA)",
      "Interactive Visualization",
      "Machine Learning & Fraud Detection",
      "500+ DSA LeetCode Problems",
    ],
  },
  education: [
    {
      institution: "National Institute of Technology, Kurukshetra",
      degree: "B.Tech in Electrical Engineering",
      years: "2023 – 2027",
      score: "CGPA: 8.35",
    },
    {
      institution: "GVN – The Global School",
      degree: "Senior Secondary (Class XII) CBSE",
      years: "2022 – 2023",
      score: "90.40%",
    },
    {
      institution: "G.S Convent School",
      degree: "Secondary (Class X) CBSE",
      years: "2020 – 2021",
      score: "93.0%",
    },
  ],
  achievements: [
    "Solved 500+ DSA problems on LeetCode across multiple difficulty levels.",
    "Full-Stack Web Development & Scalable Web Application Engineering.",
  ],
  projects: [
    {
      title: "InterviewIQ – AI-Powered Interview Preparation Platform",
      tech: "React.js, Node.js, Express.js, MongoDB, Claude AI, Firebase, Razorpay",
      thumbnail: "/assets/interviewiq.png",
      github: "https://github.com/Krishnna1909/InterviewIQ",
      demo: "https://interviewiq-530c.onrender.com/",
      date: "Nov 2025",
      description: "Full-stack SaaS platform that parses resumes and generates personalized interview questions using Claude AI.",
      highlights: [
        "Built a full-stack SaaS platform that parses resumes and generates personalized interview questions using Claude AI.",
        "Designed real-time answer evaluation system scoring Confidence, Communication, and Correctness in under 2 seconds.",
        "Implemented secure authentication (Firebase + JWT) and credit-based payments via Razorpay.",
        "Deployed scalable MERN application with REST APIs, file handling, and optimized backend architecture.",
      ],
    },
    {
      title: "FraudShield – AI Credit Card Fraud Detection",
      tech: "Python, XGBoost, SHAP, Streamlit, Scikit-learn, SMOTE, Plotly",
      thumbnail: "/assets/fraudshield.png",
      github: "https://github.com/Krishnna1909",
      demo: "https://fraudshield-ai-fraud-detection.streamlit.app/",
      date: "Jan 2026",
      description: "AI-Powered Credit Card Fraud Detection System achieving 99.4% accuracy & 0.974 ROC-AUC.",
      highlights: [
        "Trained XGBoost on 284K+ transactions with 99.4% accuracy and 0.974 ROC-AUC.",
        "Applied SMOTE and class-weight balancing for extreme class imbalance.",
        "Integrated SHAP explainability for per-transaction feature impact visualizations.",
        "Automated analyst-readable fraud summaries generated via Claude AI.",
        "Deployed interactive Streamlit dashboard supporting real-time and batch CSV analysis.",
      ],
    },
    {
      title: "Customer Trends – End-to-End Data Analytics",
      tech: "Python (Pandas, NumPy), MySQL, Power BI",
      thumbnail: "/assets/customertrends.png",
      github: "https://github.com/Krishnna1909",
      date: "Dec 2025",
      description: "End-to-End data analytics workflow transforming raw data into actionable insights.",
      highlights: [
        "Implemented end-to-end data analytics workflow using Python for cleaning & EDA.",
        "Executed analytical SQL queries in MySQL to evaluate customer segments & purchasing behavior.",
        "Designed interactive Power BI dashboards visualizing key KPIs for stakeholder decision-making.",
        "Leveraged AI tools to enhance visual communication and presentation decks.",
      ],
    },
    {
      title: "Air Hockey – Hand Gesture Controlled",
      tech: "Python, OpenCV, OOP (Object-Oriented)",
      thumbnail: "/assets/airhockey.jpg",
      github: "https://github.com/Krishnna1909/Air_Hockey",
      date: "Feb 2026",
      description: "Interactive Air Hockey game built with Python and OpenCV controlled using real-time hand gestures.",
      highlights: [
        "Centroid-based hand tracking using OpenCV contour detection for precise real-time paddle movement.",
        "Implemented custom ball physics, paddle-to-ball elastic collisions, and dynamic speed increments.",
        "Engineered automatic goal scoring logic, match state resets, and UI overlays.",
        "Followed clean OOP design principles with modular classes for paddles, pucks, and game engine.",
      ],
    },
    {
      title: "Coffee Shop Sales Analysis Dashboard",
      tech: "Python, SQL (MySQL), Power BI, Excel",
      thumbnail: "/assets/coffeeshopsales.png",
      github: "https://github.com/Krishnna1909/-Coffee-Shop-Sales-Analytics-Dashboard-",
      date: "Dec 2025",
      description: "An end-to-end data analytics project focused on analyzing coffee shop retail sales data to generate actionable business insights.",
      highlights: [
        "Analyzed 149K+ footfall metrics, average bill values, and order distributions using Pandas and NumPy.",
        "Executed complex analytical SQL queries to evaluate temporal purchasing behaviors and hourly sales peaks.",
        "Designed an interactive Power BI dashboard featuring product category share, transaction trends, and location metrics.",
        "Synthesized retail performance insights to recommend high-impact optimization strategies for local managers.",
      ],
    },
    {
      title: "Netflix India Homepage Clone",
      tech: "HTML5, CSS3, Google Fonts",
      thumbnail: "/assets/netflix.png",
      github: "https://github.com/Krishnna1909/Netflix_Clone",
      date: "Oct 2025",
      description: "A responsive clone of the Netflix India homepage featuring interactive elements, media showcases, and clean layout styles.",
      highlights: [
        "Hero section with background image and call-to-action.",
        "TV showcase with video playback overlay.",
        "Mobile section for offline downloads.",
        "Kids profile section with unique UI.",
        "Interactive FAQs with expand effects.",
        "Fully responsive design across all screen sizes.",
      ],
    },
  ],
  certificates: [
    { title: "Web Development", tech: "Full-Stack React & Node Applications", thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80" },
    { title: "LeetCode 500+ DSA Mastery", tech: "Data Structures & Algorithms", thumbnail: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&auto=format&fit=crop&q=80" },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Krishnna1909", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/krishnna1909", icon: "linkedin" },
    { name: "LeetCode", url: "https://leetcode.com/u/Krishnna07/", icon: "leetcode" },
    { name: "WhatsApp", url: "https://wa.me/916397404913", icon: "whatsapp" },
  ],
  about: {
    summary: "Passionate about creating modern web applications and AI-powered solutions through the combination of Full-Stack Development, Machine Learning, and Data Analytics. Currently pursuing B.Tech at NIT Kurukshetra, continuously learning, building, and solving challenging problems.",
    strengths: [
      "500+ LeetCode DSA Problems Solved",
      "Full-Stack Web Development",
      "End-to-End Data Analytics Pipelines",
      "Machine Learning & Fraud Detection (XGBoost, SHAP)",
      "Interactive Dashboards (Power BI, Streamlit)",
      "REST APIs & Web Engineering",
    ],
    careerObjective: "Designing technology that is intelligent, scalable, and built for people.",
    interests: ["Machine Learning & Fraud Detection", "Exploratory Data Analysis", "Interactive Power BI Dashboards", "Data Structures & Algorithms"],
  },
};
