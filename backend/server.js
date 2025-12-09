import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Portfolio data API
const portfolioData = {
  profile: {
    name: "Shaivy Kashyap",
    title: "Computer Science Engineer | AI/ML Enthusiast",
    email: "shaivykashyap@gmail.com",
    phone: "+91 9919885210",
    github: "https://github.com/shaivykashyap",
    linkedin: "https://linkedin.com/in/shaivykashyap",
    bio: "Passionate about building intelligent systems and contributing to open source. Specializing in AI/ML, anomaly detection, and computer vision.",
    education: {
      degree: "B.Tech in CSE with Data Science",
      cgpa: "7.4/10",
      class12: "87%",
      class10: "91.6%"
    }
  },
  projects: [
    {
      id: 1,
      title: "Face Detection Attendance System",
      description: "Built an automated attendance system using real-time facial recognition to mark student/employee presence.",
      highlights: [
        "Used OpenCV and Dlib for robust face detection and alignment",
        "Achieved ~85% recognition accuracy in varied lighting",
        "Significantly reduced manual attendance time and errors"
      ],
      tech: ["Python", "OpenCV", "Dlib", "Machine Learning"]
    },
    {
      id: 2,
      title: "AI-Based Anomaly Detection Software",
      description: "Designed and deployed an LSTM-based time series anomaly detection system with GenAI-generated synthetic data.",
      highlights: [
        "Implemented RAG-style workflows for contextual data fusion",
        "Integrated XAI techniques (SHAP, LIME) for transparency",
        "Enhanced accuracy with synthetic data for rare patterns"
      ],
      tech: ["Python", "LSTM", "GenAI", "RAG", "SHAP", "LIME"]
    }
  ],
  achievements: [
    {
      id: 1,
      title: "Hackvision by IEEE NSUT",
      description: "Certificate of Appreciation for qualifying the Final Round under INNOVISION'25",
      icon: "🏆"
    },
    {
      id: 2,
      title: "SheBuildsHackathon 2024",
      description: "Selected for and cleared Round 2 of a national-level women-focused Hackathon",
      icon: "💻"
    },
    {
      id: 3,
      title: "Flipkart Runway 2024",
      description: "Selected participant in Flipkart's flagship early career program for women in tech",
      icon: "🚀"
    },
    {
      id: 4,
      title: "Hacktoberfest 2024",
      description: "Completed 4 PRs contributing to open source projects",
      icon: "🌟"
    }
  ],
  skills: {
    "Languages": ["Java (OOP)", "Python (Core + ML)"],
    "CS Fundamentals": ["OOP", "DSA"],
    "AI/ML": ["GenAI (RAG)", "LSTM", "XAI (SHAP/LIME)"],
    "Web": ["HTML", "Basic UI"],
    "Tools": ["Git CLI", "GitHub", "VS Code"]
  },
  certifications: [
    "Spring5 Basics with Spring Boot - Infosys",
    "OOPS with Java - Udemy",
    "GenAI Powered Data Analytics Job Simulation"
  ]
};

// API Routes
app.get('/api/profile', (req, res) => {
  res.json(portfolioData.profile);
});

app.get('/api/projects', (req, res) => {
  res.json(portfolioData.projects);
});

app.get('/api/achievements', (req, res) => {
  res.json(portfolioData.achievements);
});

app.get('/api/skills', (req, res) => {
  res.json(portfolioData.skills);
});

app.get('/api/certifications', (req, res) => {
  res.json(portfolioData.certifications);
});

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Message received successfully!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
