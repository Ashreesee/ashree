import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Dreamscape App",
      description: "A meditation app with an ethereal interface",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800",
      tags: ["UI Design", "UX Research", "Mobile"],
      stats: { users: "50K+", rating: 4.9, downloads: "100K+" },
      link: "https://your-dreamscape-app-link.com"
    },
    {
      id: 2,
      title: "Aurora Dashboard",
      description: "Analytics platform with fluid animations",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["Dashboard", "Data Visualization"],
      stats: { users: "20K+", rating: 4.8, downloads: "50K+" },
      link: "https://your-aurora-dashboard.com"
    },
    {
      id: 3,
      title: "Nebula Social",
      description: "Social media platform with cosmic theme",
      image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
      tags: ["Social Media", "Interaction Design"],
      stats: { users: "100K+", rating: 4.7, downloads: "200K+" },
      link: "https://your-nebula-social.com"
    }
  ];

  return (
    <div className="pt-24 min-h-screen text-white">
      <div className="container mx-auto px-4" ref={ref}>
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-transparent bg-clip-text">My Work</span></h1>
          <p className="text-purple-300 text-lg">Some of the projects I’ve designed and built recently</p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10 }}
              className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg group transition-shadow hover:shadow-lg hover:shadow-purple-500/20"
            >
              <motion.div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-purple-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-purple-300">
                  <span>👥 {project.stats.users}</span>
                  <span>⭐ {project.stats.rating}</span>
                  <span>📥 {project.stats.downloads}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
