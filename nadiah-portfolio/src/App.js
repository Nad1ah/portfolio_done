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
  User,
  GraduationCap,
  Star,
  ChevronDown,
  Globe,
} from "lucide-react";
import profileImage from "./assets/profile.jpg";
import "./App.css";

// Particles Component
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
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

// Navigation Component with Mobile Menu
const Navigation = ({
  activeSection,
  setActiveSection,
  language,
  setLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: language === "pt" ? "Início" : "Home" },
    { id: "about", label: language === "pt" ? "Sobre" : "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: language === "pt" ? "Projetos" : "Projects" },
    { id: "education", label: language === "pt" ? "Formação" : "Education" },
    { id: "contact", label: language === "pt" ? "Contato" : "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="navigation">
      <div className="nav-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="nav-brand"
          onClick={() => scrollToSection("home")}
        >
          NM
        </motion.div>

        <div className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
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
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLanguage}
          className="language-toggle"
        >
          <Globe size={16} />
          <span>{language.toUpperCase()}</span>
        </motion.button>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState("pt");

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

  const content = {
    pt: {
      heroTitle: "Olá! Eu sou",
      heroSubtitle: "Desenvolvedora Full Stack & Analista de Dados",
      heroDescription:
        "Apaixonada por tecnologia, focada em criar soluções inovadoras com React, Node.js, Python e análise de dados. Em transição para a área tech com projetos práticos e aprendizagem contínua.",
      downloadCV: "Download CV",
      viewProjects: "Ver Projetos",
      scrollToExplore: "Scroll para explorar",
      aboutTitle: "Sobre",
      aboutSubtitle: "Mim",
      aboutHeading: "Desenvolvedora em Crescimento",
      aboutText1:
        "Estou em uma jornada empolgante de transição para a área de tecnologia, combinando minha paixão por programação com habilidades analíticas para criar soluções inovadoras.",
      aboutText2:
        "Com formação em Full Stack Web Development e Análise de Dados, busco constantemente aprender novas tecnologias e aplicar conhecimentos em projetos práticos.",
      aboutText3:
        "Meu foco está em desenvolvimento web moderno, análise de dados e criação de experiências digitais que fazem a diferença.",
      location: "Lisboa, Portugal",
      skillsTitle: "Minhas",
      skillsSubtitle: "Skills",
      projectsTitle: "Meus",
      projectsSubtitle: "Projetos",
      educationTitle: "Minha",
      educationSubtitle: "Formação",
      contactTitle: "Vamos",
      contactSubtitle: "Conversar?",
      contactCTA: "Pronta para novos desafios!",
      contactDescription:
        "Estou sempre aberta a novas oportunidades e colaborações. Vamos conversar sobre como posso contribuir para o seu projeto!",
      contactButton: "Entrar em Contato",
    },
    en: {
      heroTitle: "Hello! I'm",
      heroSubtitle: "Full Stack Developer & Data Analyst",
      heroDescription:
        "Passionate about technology, focused on creating innovative solutions with React, Node.js, Python and data analysis. Transitioning to tech with practical projects and continuous learning.",
      downloadCV: "Download CV",
      viewProjects: "View Projects",
      scrollToExplore: "Scroll to explore",
      aboutTitle: "About",
      aboutSubtitle: "Me",
      aboutHeading: "Growing Developer",
      aboutText1:
        "I'm on an exciting journey transitioning to the technology field, combining my passion for programming with analytical skills to create innovative solutions.",
      aboutText2:
        "With training in Full Stack Web Development and Data Analysis, I constantly seek to learn new technologies and apply knowledge in practical projects.",
      aboutText3:
        "My focus is on modern web development, data analysis and creating digital experiences that make a difference.",
      location: "Lisbon, Portugal",
      skillsTitle: "My",
      skillsSubtitle: "Skills",
      projectsTitle: "My",
      projectsSubtitle: "Projects",
      educationTitle: "My",
      educationSubtitle: "Education",
      contactTitle: "Let's",
      contactSubtitle: "Talk?",
      contactCTA: "Ready for new challenges!",
      contactDescription:
        "I'm always open to new opportunities and collaborations. Let's talk about how I can contribute to your project!",
      contactButton: "Get in Touch",
    },
  };

  const currentContent = content[language];

  return (
    <div className="app">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        language={language}
        setLanguage={setLanguage}
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
              {currentContent.heroTitle}{" "}
              <span className="highlight">Nadiah</span>
            </motion.h1>

            <div className="hero-subtitle">
              <TypingEffect text={currentContent.heroSubtitle} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-description"
            >
              {currentContent.heroDescription}
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
                onClick={() =>
                  window.open("./assets/cv_nadiah_mauricio.jpg", "_blank")
                }
              >
                <Download size={20} />
                <span>{currentContent.downloadCV}</span>
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
                {currentContent.viewProjects}
              </motion.button>
            </motion.div>

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

              {/* FOTO CORRIGIDA - usando img tag em vez de background */}
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
                  onError={(e) => {
                    console.log("Erro ao carregar imagem:", e);
                    e.target.style.display = "none";
                  }}
                  onLoad={() => {
                    console.log("Imagem carregada com sucesso!");
                  }}
                />

                {/* Placeholder só aparece se a imagem falhar */}
                <div
                  className="profile-placeholder"
                  style={{ display: "none" }}
                >
                  <User size={80} />
                </div>
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
            <span>{currentContent.scrollToExplore}</span>
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
              {currentContent.aboutTitle}{" "}
              <span className="highlight">{currentContent.aboutSubtitle}</span>
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
              <h3>{currentContent.aboutHeading}</h3>
              <p>{currentContent.aboutText1}</p>
              <p>{currentContent.aboutText2}</p>
              <p>{currentContent.aboutText3}</p>

              <div className="location">
                <MapPin size={20} />
                <span>{currentContent.location}</span>
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
                  title: "Frontend",
                  desc: "React, HTML/CSS, Tailwind",
                },
                {
                  icon: Database,
                  title: "Backend",
                  desc: "Node.js, MongoDB, SQL",
                },
                {
                  icon: BarChart3,
                  title: "Data Analysis",
                  desc: "Python, Pandas, Power BI",
                },
                {
                  icon: Rocket,
                  title: language === "pt" ? "Projetos" : "Projects",
                  desc: "MERN Stack, Flask, APIs",
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
              {currentContent.skillsTitle}{" "}
              <span className="highlight">{currentContent.skillsSubtitle}</span>
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="skills-grid">
            {[
              {
                title: "Frontend",
                icon: Code,
                skills: [
                  { name: "React", level: 85 },
                  { name: "HTML/CSS", level: 90 },
                  { name: "Tailwind", level: 80 },
                  { name: "JavaScript", level: 85 },
                ],
              },
              {
                title: "Backend",
                icon: Database,
                skills: [
                  { name: "Node.js", level: 75 },
                  { name: "MongoDB", level: 70 },
                  { name: "SQL", level: 80 },
                  { name: "APIs REST", level: 75 },
                ],
              },
              {
                title: "Data & Tools",
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
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="skill-item"
                      >
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
                      </motion.div>
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
              {currentContent.projectsTitle}{" "}
              <span className="highlight">
                {currentContent.projectsSubtitle}
              </span>
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="projects-grid">
            {[
              {
                title: "E-commerce Platform",
                description:
                  language === "pt"
                    ? "Plataforma completa de e-commerce com React, Node.js e MongoDB. Inclui autenticação, carrinho de compras e painel administrativo."
                    : "Complete e-commerce platform with React, Node.js and MongoDB. Includes authentication, shopping cart and admin panel.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                color: "project-blue",
                icon: <Rocket size={40} />,
              },
              {
                title: "Data Analytics Dashboard",
                description:
                  language === "pt"
                    ? "Dashboard interativo para análise de dados com Python, Pandas e visualizações dinâmicas. Conecta com APIs externas."
                    : "Interactive dashboard for data analysis with Python, Pandas and dynamic visualizations. Connects with external APIs.",
                tech: ["Python", "Pandas", "Flask", "Chart.js"],
                color: "project-green",
                icon: <BarChart3 size={40} />,
              },
              {
                title: "Task Management App",
                description:
                  language === "pt"
                    ? "Aplicação de gestão de tarefas com funcionalidades avançadas, drag & drop e colaboração em tempo real."
                    : "Task management application with advanced features, drag & drop and real-time collaboration.",
                tech: ["React", "Firebase", "Material-UI"],
                color: "project-purple",
                icon: <Code size={40} />,
              },
              {
                title: "Portfolio Website",
                description:
                  language === "pt"
                    ? "Website portfolio responsivo com animações suaves, design moderno e otimizado para SEO."
                    : "Responsive portfolio website with smooth animations, modern design and SEO optimized.",
                tech: ["React", "Framer Motion", "CSS3"],
                color: "project-orange",
                icon: <Star size={40} />,
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="project-card"
              >
                <div className={`project-image ${project.color}`}>
                  <div className="project-overlay">{project.icon}</div>
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
                    <a href="#" className="project-link primary">
                      <ExternalLink size={16} />
                      <span>
                        {language === "pt" ? "Ver Demo" : "View Demo"}
                      </span>
                    </a>
                    <a href="#" className="project-link secondary">
                      <Github size={16} />
                      <span>
                        {language === "pt" ? "Ver Código" : "View Code"}
                      </span>
                    </a>
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
              {currentContent.educationTitle}{" "}
              <span className="highlight">
                {currentContent.educationSubtitle}
              </span>
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="timeline">
            <div className="timeline-line"></div>

            {[
              {
                period: "2025",
                title: language === "pt" ? "Análise de Dados" : "Data Analysis",
                institution: "TripleTen",
                description:
                  language === "pt"
                    ? "Curso completo focado em análise de dados, Python, estatística e visualização de dados com ferramentas modernas."
                    : "Complete course focused on data analysis, Python, statistics and data visualization with modern tools.",
                status: "completed",
                side: "right",
              },
              {
                period: "2024",
                title:
                  language === "pt"
                    ? "Full Stack Web Development"
                    : "Full Stack Web Development",
                institution: "EDIT - Disruptive Digital Education",
                description:
                  language === "pt"
                    ? "Formação completa em desenvolvimento web com React, Node.js, MongoDB e tecnologias modernas."
                    : "Complete training in web development with React, Node.js, MongoDB and modern technologies.",
                status: "completed",
                side: "left",
              },
              {
                period: "2023",
                title:
                  language === "pt"
                    ? "Introdução à Programação"
                    : "Introduction to Programming",
                institution:
                  language === "pt" ? "Cursos Online" : "Online Courses",
                description:
                  language === "pt"
                    ? "Primeiros passos na programação com JavaScript, HTML, CSS e fundamentos de lógica de programação."
                    : "First steps in programming with JavaScript, HTML, CSS and programming logic fundamentals.",
                status: "completed",
                side: "right",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`timeline-item ${item.side}`}
              >
                <div className="timeline-content">
                  <div className="timeline-period">{item.period}</div>
                  <h3>{item.title}</h3>
                  <div className="institution">{item.institution}</div>
                  <p className="description">{item.description}</p>

                  <span className={`status-badge ${item.status}`}>
                    {language === "pt" ? "Concluído" : "Completed"}
                  </span>
                </div>
                <div className="timeline-dot"></div>
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
              {currentContent.contactTitle}{" "}
              <span className="highlight">
                {currentContent.contactSubtitle}
              </span>
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="contact-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-info"
            >
              <h3>
                {language === "pt"
                  ? "Informações de Contato"
                  : "Contact Information"}
              </h3>

              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "nadiahmauricio@gmail.com",
                  href: "mailto:nadiahmauricio@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Telefone",
                  href: "tel:+351920012739",
                },
                {
                  icon: MapPin,
                  title: language === "pt" ? "Localização" : "Location",
                  info:
                    language === "pt" ? "Lisboa, Portugal" : "Lisbon, Portugal",
                  href: "#",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  info: "/in/nadiahmauricio",
                  href: "https://www.linkedin.com/in/nadiahmauricio/",
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={
                      contact.href.startsWith("http") ? "_blank" : "_self"
                    }
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      <Icon size={24} />
                    </div>
                    <div className="contact-details">
                      <h4>{contact.title}</h4>
                      <p>{contact.info}</p>
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
              <h3>{currentContent.contactCTA}</h3>
              <p>{currentContent.contactDescription}</p>

              <div className="cta-features">
                {[
                  language === "pt" ? "Resposta rápida" : "Quick response",
                  language === "pt"
                    ? "Disponível para projetos"
                    : "Available for projects",
                  language === "pt"
                    ? "Colaboração remota"
                    : "Remote collaboration",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="cta-feature"
                  >
                    <Star size={16} />
                    <span>{feature}</span>
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
                <span>{currentContent.contactButton}</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Nadiah Mauricio</h3>
            <p>
              {language === "pt"
                ? "Desenvolvedora Full Stack & Analista de Dados"
                : "Full Stack Developer & Data Analyst"}
            </p>
          </div>

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
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <div className="footer-copyright">
            <p>
              © 2025 Nadiah Mauricio.{" "}
              {language === "pt"
                ? "Todos os direitos reservados."
                : "All rights reserved."}
              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-500">Feito com ❤️ e muito código.</p>
              </div>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
