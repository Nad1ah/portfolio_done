import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  BarChart3,
  Rocket,
  Star,
  ChevronDown,
  Globe,
} from "lucide-react";
import "./App.css";
import profileImage from "./assets/profile.jpg";

// Traduções
const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      education: "Formação",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá! Eu sou",
      subtitle: "Desenvolvedora Full Stack & Analista de Dados",
      description:
        "Apaixonada por tecnologia, focada em criar soluções inovadoras com React, Node.js, Python e análise de dados. Em transição para a área tech com projetos práticos e aprendizagem contínua.",
      downloadCV: "Download CV",
      viewProjects: "Ver Projetos",
      scrollText: "Scroll para explorar",
    },
    about: {
      title: "Sobre",
      subtitle: "Mim",
      cardTitle: "Desenvolvedora em Crescimento",
      description1:
        "Estou em uma jornada empolgante de transição para a área de tecnologia, combinando minha paixão por programação com habilidades analíticas para criar soluções inovadoras.",
      description2:
        "Com formação em Full Stack Web Development e atualmente estudando Análise de Dados, busco constantemente aprender novas tecnologias e aplicar conhecimentos em projetos práticos.",
      description3:
        "Meu foco está em desenvolvimento web moderno, análise de dados e criação de experiências digitais que fazem a diferença.",
      location: "Lisboa, Portugal",
      cards: {
        frontend: { title: "Frontend", desc: "React, HTML/CSS, Tailwind" },
        backend: { title: "Backend", desc: "Node.js, MongoDB, SQL" },
        data: { title: "Data Analysis", desc: "Python, Pandas, Power BI" },
        projects: { title: "Projetos", desc: "MERN Stack, Flask, APIs" },
      },
    },
    skills: {
      title: "Minhas",
      subtitle: "Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        dataTools: "Data & Tools",
      },
    },
    projects: {
      title: "Meus",
      subtitle: "Projetos",
      description:
        "Projetos que demonstram minhas habilidades em desenvolvimento full stack e análise de dados",
      items: [
        {
          title: "Sports Dashboard",
          description:
            "Dashboard interativo para análise de dados esportivos com visualizações em tempo real.",
          tech: ["Flask", "React", "Chart.js", "Python"],
        },
        {
          title: "E-commerce Platform",
          description:
            "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
          tech: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
          title: "Task Manager",
          description:
            "Aplicação de gerenciamento de tarefas com funcionalidades colaborativas.",
          tech: ["React", "MongoDB", "Node.js", "Socket.io"],
        },
        {
          title: "Análise Bet",
          description:
            "Sistema de análise de dados para apostas esportivas com machine learning.",
          tech: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
        },
      ],
      buttons: {
        code: "Código",
        demo: "Demo",
      },
    },
    education: {
      title: "Minha",
      subtitle: "Formação",
      description:
        "Jornada de aprendizagem contínua em tecnologia e desenvolvimento",
      current: "Atual",
      items: [
        {
          period: "2024 — 2025",
          title: "Análise de Dados",
          institution: "Tripleten",
          status: "Em curso",
          description:
            "Curso intensivo focado em Python, Pandas, visualização de dados e machine learning.",
        },
        {
          period: "2023 — 2024",
          title: "Full Stack Web Development",
          institution: "EDIT.",
          status: "Concluído",
          description:
            "Formação completa em desenvolvimento web com React, Node.js, MongoDB e metodologias ágeis.",
        },
        {
          period: "2024",
          title: "Workshop Python",
          institution: "EDIT.",
          status: "Concluído",
          description:
            "Workshop intensivo de Python para desenvolvimento e análise de dados.",
        },
        {
          period: "2024",
          title: "Power BI",
          institution: "Santander Academy",
          status: "Concluído",
          description:
            "Curso de Business Intelligence e visualização de dados com Power BI.",
        },
      ],
    },
    contact: {
      title: "Vamos",
      subtitle: "Conversar?",
      description:
        "Estou sempre aberta a novas oportunidades e colaborações. Entre em contato!",
      info: "Informações de Contato",
      cta: {
        title: "Pronta para Novos Desafios",
        description:
          "Estou em busca de oportunidades na área de tecnologia onde possa aplicar minhas habilidades em desenvolvimento web e análise de dados. Vamos criar algo incrível juntos!",
        features: [
          "Desenvolvimento Full Stack",
          "Análise de Dados",
          "Projetos Inovadores",
          "Aprendizagem Contínua",
        ],
        button: "Enviar Email",
      },
      items: {
        email: "Email",
        phone: "Telefone",
        location: "Localização",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      title: "Nadiah Mauricio",
      subtitle: "Desenvolvedora Full Stack & Analista de Dados",
      copyright: "© 2024 Nadiah Mauricio. Feito com ❤️ e muito código.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello! I am",
      subtitle: "Full Stack Developer & Data Analyst",
      description:
        "Passionate about technology, focused on creating innovative solutions with React, Node.js, Python and data analysis. Transitioning to tech with practical projects and continuous learning.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      scrollText: "Scroll to explore",
    },
    about: {
      title: "About",
      subtitle: "Me",
      cardTitle: "Growing Developer",
      description1:
        "I am on an exciting journey transitioning to the technology field, combining my passion for programming with analytical skills to create innovative solutions.",
      description2:
        "With training in Full Stack Web Development and currently studying Data Analysis, I constantly seek to learn new technologies and apply knowledge in practical projects.",
      description3:
        "My focus is on modern web development, data analysis and creating digital experiences that make a difference.",
      location: "Lisbon, Portugal",
      cards: {
        frontend: { title: "Frontend", desc: "React, HTML/CSS, Tailwind" },
        backend: { title: "Backend", desc: "Node.js, MongoDB, SQL" },
        data: { title: "Data Analysis", desc: "Python, Pandas, Power BI" },
        projects: { title: "Projects", desc: "MERN Stack, Flask, APIs" },
      },
    },
    skills: {
      title: "My",
      subtitle: "Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        dataTools: "Data & Tools",
      },
    },
    projects: {
      title: "My",
      subtitle: "Projects",
      description:
        "Projects that demonstrate my skills in full stack development and data analysis",
      items: [
        {
          title: "Sports Dashboard",
          description:
            "Interactive dashboard for sports data analysis with real-time visualizations.",
          tech: ["Flask", "React", "Chart.js", "Python"],
        },
        {
          title: "E-commerce Platform",
          description:
            "Complete e-commerce platform with cart, payments and administrative panel.",
          tech: ["React", "Node.js", "MongoDB", "Express"],
        },
        {
          title: "Task Manager",
          description:
            "Task management application with collaborative features.",
          tech: ["React", "MongoDB", "Node.js", "Socket.io"],
        },
        {
          title: "Bet Analysis",
          description:
            "Data analysis system for sports betting with machine learning.",
          tech: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
        },
      ],
      buttons: {
        code: "Code",
        demo: "Demo",
      },
    },
    education: {
      title: "My",
      subtitle: "Education",
      description: "Continuous learning journey in technology and development",
      current: "Current",
      items: [
        {
          period: "2024 — 2025",
          title: "Data Analysis",
          institution: "Tripleten",
          status: "In progress",
          description:
            "Intensive course focused on Python, Pandas, data visualization and machine learning.",
        },
        {
          period: "2023 — 2024",
          title: "Full Stack Web Development",
          institution: "EDIT.",
          status: "Completed",
          description:
            "Complete training in web development with React, Node.js, MongoDB and agile methodologies.",
        },
        {
          period: "2024",
          title: "Python Workshop",
          institution: "EDIT.",
          status: "Completed",
          description:
            "Intensive Python workshop for development and data analysis.",
        },
        {
          period: "2024",
          title: "Power BI",
          institution: "Santander Academy",
          status: "Completed",
          description:
            "Business Intelligence and data visualization course with Power BI.",
        },
      ],
    },
    contact: {
      title: "Let's",
      subtitle: "Talk?",
      description:
        "I am always open to new opportunities and collaborations. Get in touch!",
      info: "Contact Information",
      cta: {
        title: "Ready for New Challenges",
        description:
          "I am looking for opportunities in the technology field where I can apply my skills in web development and data analysis. Let's create something amazing together!",
        features: [
          "Full Stack Development",
          "Data Analysis",
          "Innovative Projects",
          "Continuous Learning",
        ],
        button: "Send Email",
      },
      items: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        github: "GitHub",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      title: "Nadiah Mauricio",
      subtitle: "Full Stack Developer & Data Analyst",
      copyright: "© 2024 Nadiah Mauricio. Made with ❤️ and lots of code.",
    },
  },
};

// Particles Component
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.speed * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Typing Effect Component
const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="cursor"
      />
    </span>
  );
};

// Navigation Component
const Navigation = ({
  activeSection,
  setActiveSection,
  language,
  setLanguage,
  t,
}) => {
  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="navigation">
      <div className="nav-container">
        <motion.div whileHover={{ scale: 1.05 }} className="nav-brand">
          NM
        </motion.div>

        <div className="nav-links">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </motion.button>
          ))}

          {/* Language Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
            className="language-toggle"
          >
            <Globe size={16} />
            <span>{language === "pt" ? "EN" : "PT"}</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState("pt");
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Particles />

        <div className="hero-container">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-title"
            >
              {t.hero.greeting} <span className="highlight">Nadiah</span>
            </motion.h1>

            <div className="hero-subtitle">
              <TypingEffect text={t.hero.subtitle} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-description"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="hero-buttons"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => window.open("/cv_nadiah.pdf", "_blank")}
              >
                <Download size={20} />
                <span>{t.hero.downloadCV}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {t.hero.viewProjects}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="social-links"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Nad1ah",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/nadiahmauricio/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:nadiahmauricio@gmail.com",
                  label: "Email",
                },
                { icon: Phone, href: "tel:+351920012739", label: "Telefone" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-image"
          >
            <div className="profile-container">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="profile-ring"
              />

              <div className="profile-image">
                <img
                  src={profileImage}
                  alt="Nadiah Mauricio"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="floating-icon floating-icon-1"
              >
                <Code size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="floating-icon floating-icon-2"
              >
                <Database size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="scroll-content"
          >
            <span>{t.hero.scrollText}</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>
              {t.about.title}{" "}
              <span className="highlight">{t.about.subtitle}</span>
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <h3>{t.about.cardTitle}</h3>
              <p>{t.about.description1}</p>
              <p>{t.about.description2}</p>
              <p>{t.about.description3}</p>

              <div className="location">
                <MapPin size={20} />
                <span>{t.about.location}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-cards"
            >
              {[
                {
                  icon: Code,
                  title: t.about.cards.frontend.title,
                  desc: t.about.cards.frontend.desc,
                },
                {
                  icon: Database,
                  title: t.about.cards.backend.title,
                  desc: t.about.cards.backend.desc,
                },
                {
                  icon: BarChart3,
                  title: t.about.cards.data.title,
                  desc: t.about.cards.data.desc,
                },
                {
                  icon: Rocket,
                  title: t.about.cards.projects.title,
                  desc: t.about.cards.projects.desc,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="about-card"
                  >
                    <div className="card-icon">
                      <Icon size={24} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>
              {t.skills.title}{" "}
              <span className="highlight">{t.skills.subtitle}</span>
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="skills-grid">
            {[
              {
                title: t.skills.categories.frontend,
                icon: Code,
                skills: [
                  { name: "React", level: 85 },
                  { name: "HTML/CSS", level: 90 },
                  { name: "Tailwind", level: 80 },
                  { name: "JavaScript", level: 85 },
                ],
              },
              {
                title: t.skills.categories.backend,
                icon: Database,
                skills: [
                  { name: "Node.js", level: 75 },
                  { name: "MongoDB", level: 70 },
                  { name: "SQL", level: 80 },
                  { name: "APIs REST", level: 75 },
                ],
              },
              {
                title: t.skills.categories.dataTools,
                icon: BarChart3,
                skills: [
                  { name: "Python", level: 80 },
                  { name: "Pandas", level: 75 },
                  { name: "Power BI", level: 70 },
                  { name: "Git", level: 85 },
                ],
              },
            ].map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="skill-category"
                >
                  <div className="category-header">
                    <div className="category-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{category.title}</h3>
                  </div>

                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="skill-progress"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>
              {t.projects.title}{" "}
              <span className="highlight">{t.projects.subtitle}</span>
            </h2>
            <div className="section-divider"></div>
            <p>{t.projects.description}</p>
          </motion.div>

          <div className="projects-grid">
            {t.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="project-card"
              >
                <div
                  className={`project-image project-${
                    ["blue", "green", "purple", "orange"][index]
                  }`}
                >
                  <div className="project-overlay">
                    <Rocket size={48} />
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.a
                      href="https://github.com/Nad1ah"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="project-link primary"
                    >
                      <Github size={16} />
                      <span>{t.projects.buttons.code}</span>
                    </motion.a>

                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="project-link secondary"
                    >
                      <ExternalLink size={16} />
                      <span>{t.projects.buttons.demo}</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>
              {t.education.title}{" "}
              <span className="highlight">{t.education.subtitle}</span>
            </h2>
            <div className="section-divider"></div>
            <p>{t.education.description}</p>
          </motion.div>

          <div className="timeline">
            <div className="timeline-line"></div>

            {t.education.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="timeline-content"
                >
                  {index === 0 && (
                    <div className="current-badge">{t.education.current}</div>
                  )}

                  <div className="timeline-period">{item.period}</div>
                  <h3>{item.title}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="description">{item.description}</p>

                  <div
                    className={`status-badge ${
                      index === 0 ? "current" : "completed"
                    }`}
                  >
                    {item.status}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="timeline-dot"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>
              {t.contact.title}{" "}
              <span className="highlight">{t.contact.subtitle}</span>
            </h2>
            <div className="section-divider"></div>
            <p>{t.contact.description}</p>
          </motion.div>

          <div className="contact-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-info"
            >
              <h3>{t.contact.info}</h3>

              {[
                {
                  icon: Mail,
                  title: t.contact.items.email,
                  value: "nadiahmauricio@gmail.com",
                  href: "mailto:nadiahmauricio@gmail.com",
                },
                {
                  icon: Phone,
                  title: t.contact.items.phone,
                  value: "(+351) 920 012 739",
                  href: "tel:+351920012739",
                },
                {
                  icon: MapPin,
                  title: t.contact.items.location,
                  value: "Lisboa, Portugal",
                  href: "#",
                },
                {
                  icon: Github,
                  title: t.contact.items.github,
                  value: "github.com/Nad1ah",
                  href: "https://github.com/Nad1ah",
                },
                {
                  icon: Linkedin,
                  title: t.contact.items.linkedin,
                  value: "linkedin.com/in/nadiahmauricio",
                  href: "https://www.linkedin.com/in/nadiahmauricio/",
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      <Icon size={24} />
                    </div>
                    <div className="contact-details">
                      <h4>{contact.title}</h4>
                      <p>{contact.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-cta"
            >
              <h3>{t.contact.cta.title}</h3>
              <p>{t.contact.cta.description}</p>

              <div className="cta-features">
                {t.contact.cta.features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="cta-feature"
                  >
                    <Star size={16} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="mailto:nadiahmauricio@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button"
              >
                <Mail size={20} />
                <span>{t.contact.cta.button}</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-info"
          >
            <h3>{t.footer.title}</h3>
            <p>{t.footer.subtitle}</p>

            <div className="footer-social">
              {[
                { icon: Github, href: "https://github.com/Nad1ah" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/nadiahmauricio/",
                },
                { icon: Mail, href: "mailto:nadiahmauricio@gmail.com" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="footer-social-link"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            <div className="footer-copyright">
              <p>{t.footer.copyright}</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
