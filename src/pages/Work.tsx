import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['all', 'mobile', 'web', 'branding'];

  const projects = [
    {
      id: 1,
      title: "Dreamscape App",
      category: "mobile",
      description: "A meditation app with an ethereal interface",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800",
      tags: ["UI Design", "UX Research", "Mobile"],
      stats: { users: "50K+", rating: 4.9, downloads: "100K+" }
    },
    {
      id: 2,
      title: "Aurora Dashboard",
      category: "web",
      description: "Analytics platform with fluid animations",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["Dashboard", "Data Visualization"],
      stats: { users: "20K+", rating: 4.8, downloads: "50K+" }
    },
    {
      id: 3,
      title: "Nebula Social",
      category: "branding",
      description: "Social media platform with cosmic theme",
      image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
      tags: ["Social Media", "Interaction Design"],
      stats: { users: "100K+", rating: 4.7, downloads: "200K+" }
    }
  ];

  const filteredProjects = projects.filter(
    project => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <div className="pt-24 min-h-screen">
      {/* Category Filter */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -10 }}
              >
                <motion.div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/10 rounded-2xl p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-purple-200 mb-6">{selectedProject.description}</p>
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm text-purple-200">Users</div>
                  <div className="font-bold">{selectedProject.stats.users}</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">⭐</div>
                  <div className="text-sm text-purple-200">Rating</div>
                  <div className="font-bold">{selectedProject.stats.rating}</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">📥</div>
                  <div className="text-sm text-purple-200">Downloads</div>
                  <div className="font-bold">{selectedProject.stats.downloads}</div>
                </div>
              </div>
              <button
                className="w-full py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;