"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  Code,
  Database,
  Server,
  Smartphone,
  Cloud,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const skills = {
    primary: [
      { name: ".NET", icon: Code, category: "Backend" },
      { name: "React", icon: Code, category: "Frontend" },
      { name: "Tailwind CSS", icon: Code, category: "Frontend" },
      { name: "Bootstrap", icon: Code, category: "Frontend" },
      { name: "SQL Server", icon: Database, category: "Database" },
      { name: "MongoDB", icon: Database, category: "Database" },
      { name: "MySQL", icon: Database, category: "Database" },
      { name: "SOLID Principles", icon: Code, category: "Architecture" },
      { name: "Microservices", icon: Server, category: "Architecture" },
      { name: "RabbitMQ", icon: MessageSquare, category: "Messaging" },
      { name: "SignalR", icon: MessageSquare, category: "Real-time" },
    ],
    secondary: [
      { name: "Flutter", icon: Smartphone, category: "Mobile" },
      { name: "MAUI", icon: Smartphone, category: "Mobile" },
      { name: "Next.js", icon: Code, category: "Frontend" },
      { name: "NestJS", icon: Server, category: "Backend" },
      { name: "Angular", icon: Code, category: "Frontend" },
      { name: "AWS", icon: Cloud, category: "Cloud" },
    ],
  };

  const experiences = [
    {
      company: "Etraab",
      position: "Full-Stack Developer",
      duration: "1 year 9 months",
      period: "2023 - Present",
      description:
        "Currently working as a full-stack developer, building scalable web applications using modern technologies and best practices.",
      technologies: [".NET", "React", "SQL Server", "Microservices", "SignalR"],
    },
    {
      company: "Yedastegol",
      position: "Full-Stack Developer",
      duration: "4 months",
      period: "2022 - 2023",
      description:
        "Developed and maintained web applications with focus on user experience and performance optimization.",
      technologies: [".NET", "React", "MongoDB", "Bootstrap"],
    },
    {
      company: "Freelancer",
      position: "Full-Stack Developer",
      duration: "2 years",
      period: "2020 - 2022",
      description:
        "Worked with various clients to deliver custom web solutions, from small business websites to complex enterprise applications.",
      technologies: [".NET", "React", "MySQL", "Tailwind CSS", "RabbitMQ"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with microservices architecture, real-time notifications, and advanced analytics.",
      technologies: [".NET", "React", "SQL Server", "RabbitMQ", "SignalR"],
      features: [
        "Microservices Architecture",
        "Real-time Notifications",
        "Payment Integration",
        "Admin Dashboard",
      ],
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "NestJS", "MongoDB", "SignalR"],
      features: [
        "Real-time Collaboration",
        "File Sharing",
        "Progress Tracking",
        "Team Management",
      ],
    },
    {
      title: "Healthcare Management System",
      description:
        "A comprehensive healthcare management system for clinics and hospitals with patient records and appointment scheduling.",
      technologies: [".NET", "Angular", "SQL Server", "Bootstrap"],
      features: [
        "Patient Management",
        "Appointment Scheduling",
        "Medical Records",
        "Reporting",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode
            ? "bg-black/90 backdrop-blur-sm border-b border-orange-500/20"
            : "bg-white/90 backdrop-blur-sm border-b border-orange-500/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-orange-500"
            >
              Mobin Gholizadeh
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 hover:text-orange-500 ${
                    activeSection === item.id
                      ? "text-orange-500"
                      : darkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="hover:bg-orange-500/10"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-orange-500/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${
                darkMode
                  ? "bg-black border-t border-orange-500/20"
                  : "bg-white border-t border-orange-500/20"
              }`}
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 px-4 rounded transition-colors duration-200 hover:bg-orange-500/10 ${
                      activeSection === item.id
                        ? "text-orange-500"
                        : darkMode
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className={darkMode ? "text-white" : "text-gray-900"}>
                Hi, I'm{" "}
              </span>
              <span className="text-orange-500">Mobin</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-orange-400">
              Full-Stack Developer
            </h2>
            <p
              className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about creating scalable web applications with modern
              technologies. Specialized in .NET, React, and microservices
              architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-full h-96 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                } flex items-center justify-center`}
              >
                <Code className="w-24 h-24 text-orange-500" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-orange-500">
                Full-Stack Developer
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm a passionate full-stack developer with expertise in building
                scalable web applications using modern technologies. My journey
                in software development has been driven by a love for creating
                efficient, user-friendly solutions that solve real-world
                problems.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                With a strong foundation in both frontend and backend
                technologies, I specialize in .NET ecosystem, React, and modern
                database solutions. I'm also experienced in microservices
                architecture and real-time communication systems.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Iran</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-orange-500" />
                  <span>Etraab</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 ${darkMode ? "bg-gray-900/50" : "bg-gray-50"}`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-orange-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-12">
            {/* Primary Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-orange-500">
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.primary.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`${
                        darkMode
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      } hover:border-orange-500 transition-colors duration-300`}
                    >
                      <CardContent className="p-4 text-center">
                        <skill.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                        <h4 className="font-semibold mb-1">{skill.name}</h4>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {skill.category}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Secondary Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8 text-orange-500">
                Additional Experience
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.secondary.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`${
                        darkMode
                          ? "bg-gray-800 border-gray-700"
                          : "bg-white border-gray-200"
                      } hover:border-orange-500 transition-colors duration-300`}
                    >
                      <CardContent className="p-4 text-center">
                        <skill.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                        <h4 className="font-semibold text-sm mb-1">
                          {skill.name}
                        </h4>
                        <p
                          className={`text-xs ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {skill.category}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="text-orange-500">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } hover:border-orange-500 transition-colors duration-300`}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-orange-500">
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 md:mt-0">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-orange-500 text-orange-500"
                        >
                          {exp.duration}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`mb-4 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 ${darkMode ? "bg-gray-900/50" : "bg-gray-50"}`}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  } hover:border-orange-500 transition-colors duration-300`}
                >
                  <CardHeader>
                    <CardTitle className="text-orange-500">
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className={darkMode ? "text-gray-300" : "text-gray-600"}
                    >
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-orange-500/10 text-orange-500 hover:bg-orange-500/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul
                        className={`space-y-1 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-8"></div>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card
              className={`${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-orange-500">
                      Let's Connect
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Feel free to reach out if you have any questions or would
                      like to discuss potential collaborations.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-orange-500" />
                        <span>mobin.gholizadeh@email.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-orange-500" />
                        <span>+98 XXX XXX XXXX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        <span>Iran</span>
                      </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent"
                      >
                        <Mail className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        className={`w-full px-3 py-2 rounded-md border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 focus:border-orange-500"
                            : "bg-white border-gray-300 focus:border-orange-500"
                        } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className={`w-full px-3 py-2 rounded-md border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 focus:border-orange-500"
                            : "bg-white border-gray-300 focus:border-orange-500"
                        } focus:outline-none focus:ring-1 focus:ring-orange-500`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <textarea
                        rows={4}
                        className={`w-full px-3 py-2 rounded-md border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 focus:border-orange-500"
                            : "bg-white border-gray-300 focus:border-orange-500"
                        } focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none`}
                        placeholder="Your message..."
                      />
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Send Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © 2024 Mobin Gholizadeh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
