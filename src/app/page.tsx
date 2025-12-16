'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { 
  FiMap, 
  FiGlobe, 
  FiDatabase, 
  FiTrendingUp, 
  FiAward, 
  FiCalendar,
  FiBriefcase,
  FiCode,
  FiX,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import Typewriter from '@/components/Typewriter';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; index: number; projectImages: string[] } | null>(null);
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
      color: '#8b5cf6',
      images: [] // No images found for this project
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
      color: '#f59e0b',
      images: [
        '/Project /Zoning & COVID-19 Response - Sarpang Dzongkhag/Containment Areas.jpg',
        '/Project /Zoning & COVID-19 Response - Sarpang Dzongkhag/Land Use Plan Map Mar 16.jpg'
      ]
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
      color: '#10b981',
      images: [
        '/Project /GIS infrastructure - Gelephu Thromde/Demkhong Map.jpg',
        '/Project /GIS infrastructure - Gelephu Thromde/LAPS Gelephu Thromde.jpg',
        '/Project /GIS infrastructure - Gelephu Thromde/Zonewise Cases.jpg'
      ]
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
      color: '#3b82f6',
      images: [
        '/Project /South Central Regional Plan/Land Use Plan Map Mar 16.jpg',
        '/Project /South Central Regional Plan/RCSP Proposed Actions Map.jpg',
        '/Project /South Central Regional Plan/South 3 Dzongkhag River Settlement.jpg',
        '/Project /South Central Regional Plan/South 3Dzongkhag DEM.jpg'
      ]
    }
  ];

  const skills = [
    { name: 'Spatial Data Management', level: 95 },
    { name: 'GIS Analysis & Mapping', level: 95 },
    { name: 'Urban Planning', level: 90 },
    { name: 'Hazard Mapping', level: 85 },
    { name: 'Project Coordination', level: 90 },
  ];

  return (
    <div className="min-h-screen terminal-bg text-white typewriter">
      {/* Navigation - Mobile First */}
      <nav className="fixed top-0 w-full z-50 terminal-bg/90 backdrop-blur-md terminal-border-b border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <span className="text-base sm:text-xl font-bold text-white">&gt; yeshi_portfolio.exe</span>
            </motion.div>
            <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-xs sm:text-sm">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">[about]</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">[experience]</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">[projects]</a>
            </div>
            {/* Mobile Menu */}
            <div className="sm:hidden flex items-center gap-2 text-xs">
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">[projects]</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b5cf6' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 relative z-10">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-lg terminal-border terminal-glow overflow-hidden bg-gray-900">
        <Image
                src="/profile.jpeg"
                alt="Yeshi"
                fill
                className="object-cover"
          priority
        />
              <div className="absolute inset-0 border-2 border-white/30" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full terminal-glow animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4">
              <span className="text-gray-500">&gt;</span> whoami
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              <Typewriter text="GIS Analyst" speed={100} />
          </h1>
            
            <div className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4">
              <span className="text-gray-500">&gt;</span> cat about.txt
            </div>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Over <span className="text-white font-bold">7 years</span> of experience in spatial data management, 
              hazard mapping, and urban planning across <span className="text-white font-bold">Bhutan</span>. 
              Transforming complex geospatial data into actionable insights for climate-resilient urban development.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 border border-white/20 text-white rounded text-sm sm:text-base font-semibold hover:bg-white/20 transition-colors terminal-border"
              >
                [view_projects]
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-700">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">7+</div>
                <div className="text-xs text-gray-400">years_experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">66</div>
                <div className="text-xs text-gray-400">urban_centers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">250+</div>
                <div className="text-xs text-gray-400">team_members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Mobile First */}
      <section id="about" className="py-12 sm:py-20 terminal-bg border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-16"
          >
            <div className="text-gray-400 text-xs sm:text-sm mb-2">
              <span className="text-gray-500">&gt;</span> cat about_me.txt
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">About Me</h2>
            <div className="w-16 sm:w-24 h-0.5 bg-white" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed terminal-border bg-gray-900/50 p-4 sm:p-6 rounded"
            >
              <p className="text-sm sm:text-base">
                I am a <span className="text-white font-bold">GIS Analyst</span> with over seven years of experience 
                in spatial data management, hazard mapping, and urban planning across Bhutan. I have contributed to major 
                national initiatives including the <span className="text-white">National Spatial Data Infrastructure (NSDI)</span>, 
                the <span className="text-white">Southern Central Regional Plan</span>, Bhutan's nationwide 
                property taxation building database, and the <span className="text-white">Thimphu-Paro Urban Resilience project</span>.
              </p>
              <p className="text-sm sm:text-base">
                My work focuses on transforming complex geospatial data into clear, actionable insights for planning and 
                decision-making. I am committed to advancing data-driven, climate-resilient urban development through modern 
                GIS and spatial technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="terminal-border bg-gray-900/50 rounded p-4 sm:p-6 border-l-4 border-l-blue-500">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <FiBriefcase className="w-5 h-5 text-blue-400" />
                  Current Position
                </h3>
                <p className="text-gray-300 font-medium text-sm sm:text-base">Senior GIS Officer</p>
                <p className="text-gray-400 text-xs sm:text-sm">Geomatics and Logistics Division</p>
                <p className="text-xs text-gray-500 mt-2">2023 - Present</p>
              </div>

              <div className="terminal-border bg-gray-900/50 rounded p-4 sm:p-6 border-l-4 border-l-green-500">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <FiAward className="w-5 h-5 text-green-400" />
                  Education
                </h3>
                <p className="text-gray-300 font-medium text-sm sm:text-base">Bachelor of Civil Engineering</p>
                <p className="text-gray-400 text-xs sm:text-sm">Chitkara University, Himachal Pradesh, India</p>
                <p className="text-xs text-gray-500 mt-2">August 2013 - July 2017</p>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-16"
          >
            <div className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              <span className="text-gray-500">&gt;</span> skills --list
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Core Skills</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="terminal-border bg-gray-900/50 rounded p-3 sm:p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium text-xs sm:text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-white h-2 rounded-full terminal-glow"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Timeline Section - Mobile First */}
      <section id="projects" className="py-12 sm:py-20 terminal-bg border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-16"
          >
            <div className="text-gray-400 text-xs sm:text-sm mb-2">
              <span className="text-gray-500">&gt;</span> history --timeline
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">Project Timeline</h2>
            <div className="w-16 sm:w-24 h-0.5 bg-white" />
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gray-700 hidden sm:block" />
            
            <div className="space-y-8 sm:space-y-12">
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
                    <div className="absolute left-2 sm:left-4 lg:left-6 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full terminal-glow z-10 border-2 border-gray-900" />
                    
                    <div className="ml-8 sm:ml-12 lg:ml-16 lg:ml-20 terminal-border bg-gray-900/50 rounded-lg p-4 sm:p-6 hover:bg-gray-900/70 transition-colors border-l-4" style={{ borderLeftColor: project.color }}>
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div 
                          className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-white terminal-border"
                          style={{ backgroundColor: project.color }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-1 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2">
                            <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-300 bg-gray-800 px-2 sm:px-3 py-1 rounded terminal-border w-fit">
                              <FiCalendar className="w-3 h-3" />
                              <span>{project.period}</span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Project Images Gallery */}
                          {project.images && project.images.length > 0 && (
                            <div className="mb-3 sm:mb-4">
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                                {project.images.slice(0, 3).map((img, imgIndex) => (
                                  <motion.div
                                    key={imgIndex}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative aspect-video rounded-lg overflow-hidden terminal-border cursor-pointer bg-gray-800"
                                    onClick={() => setSelectedImage({ src: img, index: imgIndex, projectImages: project.images })}
                                  >
                                    <Image
                                      src={img}
                                      alt={`${project.title} - Image ${imgIndex + 1}`}
                                      fill
                                      className="object-cover"
                                    />
                                  </motion.div>
                                ))}
                                {project.images.length > 3 && (
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative aspect-video rounded-lg overflow-hidden terminal-border cursor-pointer bg-gray-800 flex items-center justify-center"
                                    onClick={() => setSelectedImage({ src: project.images[3], index: 3, projectImages: project.images })}
                                  >
                                    <span className="text-white text-xs sm:text-sm font-semibold">+{project.images.length - 3}</span>
                                  </motion.div>
                                )}
                              </div>
                            </div>
                          )}
                          
                          <div className="space-y-1.5 sm:space-y-2">
                            {project.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
                                <span className="text-white mt-1">▸</span>
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
              
              <div className="relative w-full aspect-video rounded-lg overflow-hidden terminal-border bg-gray-900">
            <Image
                  src={selectedImage.src}
                  alt="Project image"
                  fill
                  className="object-contain"
                />
              </div>
              
              {selectedImage.projectImages.length > 1 && (
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => {
                      const prevIndex = selectedImage.index > 0 ? selectedImage.index - 1 : selectedImage.projectImages.length - 1;
                      setSelectedImage({ ...selectedImage, src: selectedImage.projectImages[prevIndex], index: prevIndex });
                    }}
                    className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded hover:bg-white/20 transition-colors terminal-border"
                  >
                    <FiChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-white text-sm">
                    {selectedImage.index + 1} / {selectedImage.projectImages.length}
                  </span>
                  <button
                    onClick={() => {
                      const nextIndex = selectedImage.index < selectedImage.projectImages.length - 1 ? selectedImage.index + 1 : 0;
                      setSelectedImage({ ...selectedImage, src: selectedImage.projectImages[nextIndex], index: nextIndex });
                    }}
                    className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded hover:bg-white/20 transition-colors terminal-border"
                  >
                    <FiChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer - Mobile First */}
      <footer className="terminal-bg text-gray-400 py-6 sm:py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} Yeshi Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
}
