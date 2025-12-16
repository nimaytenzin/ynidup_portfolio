'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FiMap, 
  FiGlobe, 
  FiDatabase, 
  FiTrendingUp, 
  FiAward, 
  FiMail,
  FiLinkedin,
  FiGithub,
  FiCalendar,
  FiBriefcase,
  FiCode
} from 'react-icons/fi';
import Typewriter from '@/components/Typewriter';

export default function Home() {
  const projects = [
    {
      title: 'National Property Taxation & Building Database',
      period: 'Jan 2023 - Present',
      year: '2023',
      description: 'Led development of Bhutan\'s nationwide Property Taxation and Building Database, coordinating 250+ supervisors and enumerators across 66 urban centers. Introduced QR-based building identification system for continuous data management.',
      achievements: [
        'Completed nationwide data collection in 7 months',
        'Integrated with Department of Revenue and Customs',
        'Foundation for new Property Tax System'
      ],
      icon: FiDatabase,
      color: '#8b5cf6'
    },
    {
      title: 'Zoning & COVID-19 Response - Sarpang Dzongkhag',
      period: '2020 - 2022',
      year: '2020',
      description: 'Led Zoning Task Force during COVID-19 pandemic. Coordinated GIS-enabled surveillance, mapped high-risk areas, and supported mass screening operations for timely detection and containment.',
      achievements: [
        'GIS-enabled door-to-door household surveillance',
        'Real-time case tracking and cluster identification',
        'Enhanced cross-sector coordination'
      ],
      icon: FiTrendingUp,
      color: '#f59e0b'
    },
    {
      title: 'GIS Infrastructure - Gelephu Thromde',
      period: '2019 - 2022',
      year: '2019',
      description: 'Pioneered GIS introduction in Gelephu Thromde, developing comprehensive geodatabase covering land parcels, infrastructure, utilities, and critical spatial layers.',
      achievements: [
        'Established first GIS system in the organization',
        'Created reliable foundation for urban data management',
        'Integrated GIS into day-to-day governance'
      ],
      icon: FiMap,
      color: '#10b981'
    },
    {
      title: 'Southern Central Regional Plan',
      period: 'Ongoing',
      year: '2023',
      description: 'Technical Working Group member collaborating with JICA experts, leading GIS and Environmental sub-group. Provided spatial analysis for Regional Development Strategy and structure planning.',
      achievements: [
        'Led GIS and Environmental sub-group',
        'Conducted field visits and spatial analysis',
        'Contributed to nationwide planning standards'
      ],
      icon: FiGlobe,
      color: '#3b82f6'
    }
  ];

  const skills = [
    { name: 'Spatial Data Management', level: 95 },
    { name: 'GIS Analysis & Mapping', level: 95 },
    { name: 'Urban Planning', level: 90 },
    { name: 'Database Development', level: 90 },
    { name: 'Hazard Mapping', level: 85 },
    { name: 'Project Coordination', level: 90 },
  ];

  return (
    <div className="min-h-screen terminal-bg text-green-400 typewriter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 terminal-bg/90 backdrop-blur-md terminal-border-b border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <FiCode className="w-6 h-6 text-green-400" />
              <span className="text-xl font-bold text-green-400">&gt; yeshi_portfolio.exe</span>
            </motion.div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">[about]</a>
              <a href="#experience" className="text-gray-400 hover:text-green-400 transition-colors">[experience]</a>
              <a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors">[projects]</a>
              <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">[contact]</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-lg terminal-border terminal-glow overflow-hidden">
        <Image
                src="/profile.jpeg"
                alt="Yeshi"
                fill
                className="object-cover"
          priority
        />
              <div className="absolute inset-0 border-2 border-green-400/50" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full terminal-glow animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl space-y-6"
          >
            <div className="text-green-500 text-sm mb-4">
              <span className="text-gray-500">&gt;</span> whoami
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-green-400 leading-tight">
              <Typewriter text="GIS Analyst & Developer" speed={100} />
          </h1>
            
            <div className="text-gray-400 text-sm mb-4">
              <span className="text-gray-500">&gt;</span> cat about.txt
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Over <span className="text-green-400 font-bold">7 years</span> of experience in spatial data management, 
              hazard mapping, and urban planning across <span className="text-green-400 font-bold">Bhutan</span>. 
              Transforming complex geospatial data into actionable insights for climate-resilient urban development.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded font-semibold hover:bg-green-500/30 transition-colors terminal-border"
              >
                [view_projects]
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 rounded font-semibold hover:border-green-500 hover:text-green-400 transition-colors"
              >
                [contact]
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl font-bold text-green-400">7+</div>
                <div className="text-xs text-gray-500">years_experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">66</div>
                <div className="text-xs text-gray-500">urban_centers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">250+</div>
                <div className="text-xs text-gray-500">team_members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 terminal-bg border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-green-500 text-sm mb-2">
              <span className="text-gray-500">&gt;</span> cat about_me.txt
            </div>
            <h2 className="text-4xl font-bold text-green-400 mb-4">About Me</h2>
            <div className="w-24 h-0.5 bg-green-500" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-300 leading-relaxed terminal-border bg-gray-900/50 p-6 rounded"
            >
              <p>
                I am a <span className="text-green-400 font-bold">GIS Analyst</span> with over seven years of experience 
                in spatial data management, hazard mapping, and urban planning across Bhutan. I have contributed to major 
                national initiatives including the <span className="text-green-400">National Spatial Data Infrastructure (NSDI)</span>, 
                the <span className="text-green-400">Southern Central Regional Plan</span>, Bhutan's nationwide 
                property taxation building database, and the <span className="text-green-400">Thimphu-Paro Urban Resilience project</span>.
              </p>
              <p>
                My work focuses on transforming complex geospatial data into clear, actionable insights for planning and 
                decision-making. I am committed to advancing data-driven, climate-resilient urban development through modern 
                GIS and spatial technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="terminal-border bg-gray-900/50 rounded p-6 border-l-4 border-l-blue-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <FiBriefcase className="w-5 h-5" />
                  Current Position
                </h3>
                <p className="text-gray-300 font-medium">Senior GIS Officer</p>
                <p className="text-gray-500 text-sm">Geomatics and Logistics Division</p>
                <p className="text-xs text-gray-600 mt-2">2023 - Present</p>
              </div>

              <div className="terminal-border bg-gray-900/50 rounded p-6 border-l-4 border-l-green-500">
                <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <FiAward className="w-5 h-5" />
                  Education
                </h3>
                <p className="text-gray-300 font-medium">Bachelor of Civil Engineering</p>
                <p className="text-gray-500 text-sm">Chitkara University, Himachal Pradesh, India</p>
                <p className="text-xs text-gray-600 mt-2">August 2013 - July 2017</p>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-green-500 text-sm mb-4">
              <span className="text-gray-500">&gt;</span> skills --list
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-8">Core Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="terminal-border bg-gray-900/50 rounded p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-green-500 h-2 rounded-full terminal-glow"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section id="projects" className="py-20 terminal-bg border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-green-500 text-sm mb-2">
              <span className="text-gray-500">&gt;</span> history --timeline
            </div>
            <h2 className="text-4xl font-bold text-green-400 mb-4">Project Timeline</h2>
            <div className="w-24 h-0.5 bg-green-500" />
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800 hidden lg:block" />
            
            <div className="space-y-12">
              {projects.map((project, index) => {
                const Icon = project.icon;
                
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 lg:left-8 top-6 w-4 h-4 bg-green-500 rounded-full terminal-glow z-10 border-2 border-gray-900" />
                    
                    <div className="ml-16 lg:ml-20 terminal-border bg-gray-900/50 rounded-lg p-6 hover:bg-gray-900/70 transition-colors border-l-4" style={{ borderLeftColor: project.color }}>
                      <div className="flex items-start gap-4">
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white terminal-border"
                          style={{ backgroundColor: project.color }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3 className="text-xl font-bold text-green-400 mb-1">{project.title}</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded terminal-border">
                              <FiCalendar className="w-3 h-3" />
                              <span>{project.period}</span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="space-y-2">
                            {project.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                <span className="text-green-500 mt-1">▸</span>
                                <span>{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 terminal-bg border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-green-500 text-sm mb-2">
              <span className="text-gray-500">&gt;</span> contact --init
            </div>
            <h2 className="text-4xl font-bold text-green-400 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-400">
              Interested in collaborating on GIS projects or discussing spatial data solutions?
            </p>
            <div className="flex justify-center gap-6 pt-8">
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-gray-900/50 border border-gray-700 rounded-full flex items-center justify-center text-green-400 hover:border-green-500 hover:bg-gray-900 transition-colors terminal-border"
              >
                <FiMail className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-gray-900/50 border border-gray-700 rounded-full flex items-center justify-center text-green-400 hover:border-green-500 hover:bg-gray-900 transition-colors terminal-border"
              >
                <FiLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-gray-900/50 border border-gray-700 rounded-full flex items-center justify-center text-green-400 hover:border-green-500 hover:bg-gray-900 transition-colors terminal-border"
              >
                <FiGithub className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="terminal-bg text-gray-600 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          <p>
            <span className="text-gray-500">&gt;</span> echo "© {new Date().getFullYear()} Yeshi Portfolio. Built with Next.js, TypeScript & Framer Motion"
          </p>
        </div>
      </footer>
    </div>
  );
}
