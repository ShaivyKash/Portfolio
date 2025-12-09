import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Award, BookOpen, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const [projectsRes, achievementsRes, skillsRes] = await Promise.all([
        fetch('http://localhost:5000/api/projects'),
        fetch('http://localhost:5000/api/achievements'),
        fetch('http://localhost:5000/api/skills')
      ]);
      
      setProjects(await projectsRes.json());
      setAchievements(await achievementsRes.json());
      setSkills(await skillsRes.json());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const defaultProjects = [
    {
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
      title: "AI-Based Anomaly Detection Software",
      description: "Designed and deployed an LSTM-based time series anomaly detection system with GenAI-generated synthetic data.",
      highlights: [
        "Implemented RAG-style workflows for contextual data fusion",
        "Integrated XAI techniques (SHAP, LIME) for transparency",
        "Enhanced accuracy with synthetic data for rare patterns"
      ],
      tech: ["Python", "LSTM", "GenAI", "RAG", "SHAP", "LIME"]
    }
  ];

  const defaultAchievements = [
    {
      title: "Hackvision by IEEE NSUT",
      description: "Certificate of Appreciation for qualifying the Final Round under INNOVISION'25",
      icon: "🏆"
    },
    {
      title: "SheBuildsHackathon 2024",
      description: "Selected for and cleared Round 2 of a national-level women-focused Hackathon",
      icon: "💻"
    },
    {
      title: "Flipkart Runway 2024",
      description: "Selected participant in Flipkart's flagship early career program for women in tech",
      icon: "🚀"
    },
    {
      title: "Hacktoberfest 2024",
      description: "Completed 4 PRs contributing to open source projects",
      icon: "🌟"
    }
  ];

  const defaultSkills = {
    "Languages": ["Java (OOP)", "Python (Core + ML)"],
    "CS Fundamentals": ["OOP", "DSA"],
    "AI/ML": ["GenAI (RAG)", "LSTM", "XAI (SHAP/LIME)"],
    "Web": ["HTML", "Basic UI"],
    "Tools": ["Git CLI", "GitHub", "VS Code"]
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-rose-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  const displayAchievements = achievements.length > 0 ? achievements : defaultAchievements;
  const displaySkills = Object.keys(skills).length > 0 ? skills : defaultSkills;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            SK
          </div>
          <div className="flex gap-6">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-rose-600 transition-colors duration-300 font-medium"
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            SHAIVY KASHYAP
          </h1>
          <p className="text-2xl text-rose-700 mb-6 font-medium">Computer Science Engineer | AI/ML Enthusiast</p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building intelligent systems and contributing to open source. 
            Specializing in AI/ML, anomaly detection, and computer vision.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="mailto:shaivykashyap@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="#projects" className="flex items-center gap-2 border-2 border-rose-500 text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-lg transition-all duration-300">
              View Projects
            </a>
          </div>
          <div className="flex gap-6 justify-center mt-8">
            <a href="https://github.com/shaivykashyap" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-rose-600 transition-colors">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/shaivykashyap" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition-colors">
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a motivated Computer Science undergraduate specializing in Data Science with a strong foundation 
              in software development and AI/ML. Currently maintaining a 7.4 CGPA, I'm passionate about creating 
              impactful solutions through technology.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-rose-50 to-purple-50 p-6 rounded-xl border border-rose-200">
                <BookOpen className="text-rose-600 mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Education</h3>
                <p className="text-gray-700">B.Tech in CSE with Data Science</p>
                <p className="text-rose-600 font-medium">CGPA: 7.4/10</p>
                <p className="text-sm text-gray-500 mt-2">12th: 87% | 10th: 91.6%</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
                <Code className="text-purple-600 mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Open Source</h3>
                <p className="text-gray-700">Active contributor to GitHub projects</p>
                <p className="text-purple-600 font-medium">Hacktoberfest 2024 Participant</p>
                <p className="text-sm text-gray-500 mt-2">4 merged PRs</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Certifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Award className="text-amber-600" size={20} />
                  Spring5 Basics with Spring Boot - Infosys
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-amber-600" size={20} />
                  OOPS with Java - Udemy
                </li>
                <li className="flex items-center gap-2">
                  <Award className="text-amber-600" size={20} />
                  GenAI Powered Data Analytics Job Simulation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {displayProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-rose-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-rose-600 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gradient-to-r from-rose-100 to-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Achievements & Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {displayAchievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-purple-200 hover:shadow-lg hover:border-rose-300 transition-all">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(displaySkills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-md border border-purple-200 hover:border-rose-300 transition-colors">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-gradient-to-r from-rose-50 to-purple-50 text-gray-700 px-3 py-2 rounded-lg text-sm border border-rose-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I'm currently looking for opportunities in open source development and internships. 
            Feel free to reach out if you'd like to collaborate!
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-200">
            <div className="space-y-4">
              <a href="mailto:shaivykashyap@gmail.com" className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-rose-600 transition-colors">
                <Mail size={24} />
                shaivykashyap@gmail.com
              </a>
              <a href="tel:+919919885210" className="flex items-center justify-center gap-3 text-lg text-gray-700 hover:text-purple-600 transition-colors">
                <Phone size={24} />
                +91 9919885210
              </a>
              <div className="flex gap-6 justify-center mt-6 pt-6 border-t border-rose-200">
                <a href="https://github.com/shaivykashyap" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-rose-600 transition-colors transform hover:scale-110">
                  <Github size={32} />
                </a>
                <a href="https://linkedin.com/in/shaivykashyap" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-purple-600 transition-colors transform hover:scale-110">
                  <Linkedin size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-md py-6 text-center border-t border-gray-200">
        <p className="text-gray-600">© 2024 Shaivy Kashyap. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}
