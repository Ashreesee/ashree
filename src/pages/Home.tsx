import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Star, Heart, Coffee, Zap, Award,
  Cloud, Server, 
  Gauge, 
  Monitor, FileCode, 
  Users
} from 'lucide-react';
import Orb from '../components/Orb';
import { useState } from 'react';

interface Skill {
  name: string;
  category: string;
  items: { name: string; level: number; description: string }[];
  icon: JSX.Element;
  color: string;
  bgPattern: string;
}

const Home = () => {
  
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const skills: Skill[] = [
    {
      name: "Backend Development",
      category: "Development",
      items: [
        { name: "Node.js", level: 95, description: "Server-side JavaScript runtime" },
        { name: "TypeScript", level: 92, description: "Typed superset of JavaScript" },
        { name: "Python", level: 88, description: "Versatile programming language" },
        { name: "MongoDB", level: 90, description: "NoSQL database" },
        { name: "SQL", level: 89, description: "Relational database querying" }
      ],
      icon: <Server className="group-hover:text-blue-400 transition-colors" />,
      color: "from-blue-500 to-cyan-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
    },
    {
      name: "Frontend Development",
      category: "Development",
      items: [
        { name: "React", level: 96, description: "UI component library" },
        { name: "Next.js", level: 94, description: "React framework" },
        { name: "HTML5", level: 98, description: "Markup language" },
        { name: "CSS3", level: 95, description: "Styling language" },
        { name: "JavaScript", level: 96, description: "Programming language" }
      ],
      icon: <Monitor className="group-hover:text-purple-400 transition-colors" />,
      color: "from-purple-500 to-pink-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)"
    },
    {
      name: "Cloud & DevOps",
      category: "Infrastructure",
      items: [
        { name: "AWS Services", level: 92, description: "Cloud platform" },
        { name: "Docker", level: 94, description: "Containerization" },
        { name: "Kubernetes", level: 91, description: "Container orchestration" },
        { name: "Helm", level: 88, description: "Package manager" },
        { name: "GitHub Actions", level: 93, description: "CI/CD platform" }
      ],
      icon: <Cloud className="group-hover:text-orange-400 transition-colors" />,
      color: "from-orange-500 to-red-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)"
    },
    {
      name: "Monitoring & Observability",
      category: "Infrastructure",
      items: [
        { name: "Prometheus", level: 90, description: "Monitoring system" },
        { name: "Grafana", level: 89, description: "Visualization platform" },
        { name: "Metrics", level: 92, description: "Performance tracking" },
        { name: "Alerting", level: 88, description: "Incident management" },
        { name: "Dashboards", level: 91, description: "Data visualization" }
      ],
      icon: <Gauge className="group-hover:text-green-400 transition-colors" />,
      color: "from-green-500 to-emerald-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)"
    },
    {
      name: "Development Tools",
      category: "Tools",
      items: [
        { name: "Git", level: 95, description: "Version control" },
        { name: "CI/CD", level: 93, description: "Continuous integration" },
        { name: "Concourse", level: 89, description: "Pipeline automation" },
        { name: "Testing", level: 90, description: "Quality assurance" },
        { name: "Documentation", level: 92, description: "Technical writing" }
      ],
      icon: <FileCode className="group-hover:text-yellow-400 transition-colors" />,
      color: "from-yellow-500 to-orange-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)"
    },
    {
      name: "Productivity & Collaboration",
      category: "Tools",
      items: [
        { name: "Notion", level: 95, description: "Project documentation & planning" },
        { name: "Slack", level: 94, description: "Team communication" },
        { name: "Trello / Jira", level: 90, description: "Task and project tracking" },
        { name: "Google Workspace", level: 93, description: "Docs, Sheets, and Slides" },
        { name: "Zoom / Meet", level: 92, description: "Video communication tools" }
      ],
      icon: <Users className="group-hover:text-teal-400 transition-colors" />,
      color: "from-teal-500 to-cyan-500",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)"
    }    
  ];

  const floatingIcons = [
    <Sparkles key="1" />, <Star key="2" />, <Heart key="3" />, 
    <Coffee key="4" />, <Zap key="5" />, <Award key="6" />
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <motion.header 
        className="h-screen flex items-center justify-between px-10 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {floatingIcons.map((icon, index) => (
            <motion.div
              key={index}
              className="absolute text-purple-300/20"
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="text-4xl">{icon}</div>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto flex items-center justify-between relative z-10">
          <motion.div
            className="w-1/2 text-left"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm md:text-lg text-gray-300 mb-2 animate-fade-in">Currently working as</p>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300 animate-pulse"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              DevOps Engineer
            </motion.h1>
            <motion.p 
              className="text-sm md:text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Bridging the gap between development and operations, I specialize in <span className="text-pink-300 font-bold">cloud automation</span>, <span className="text-pink-300 font-bold">CI/CD pipelines</span>, and <span className="text-pink-300 font-bold">infrastructure as code</span> to build scalable, secure, and high-performance systems. 
              From Kubernetes orchestration to cloud security and automated workflows, I transform complexity into efficiency. 
              <br />
              <motion.span 
                className="text-xl font-bold text-pink-300 mt-4 block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Let's innovate, automate, and scale—together.
              </motion.span>
            </motion.p>
          </motion.div>

          <div className="w-full flex justify-center" style={{ width: "550px", height: "550px" }}> 
            <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
          </div>
        </div>
      </motion.header>

      {/* Skills Section */}
      <section className="py-20 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseMove={handleMouseMove}
                onClick={() => setSelectedSkill(skill)}
                aria-label={`View details for ${skill.name}`}
              >
                <motion.div
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg overflow-hidden transform-gpu transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Background Pattern */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: skill.bgPattern }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="text-2xl mr-3"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                        <p className="text-sm text-purple-300">{skill.category}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {skill.items.map((item, itemIndex) => (
                        <motion.div 
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{item.name}</span>
                            <span className="text-purple-300">{item.level}%</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: itemIndex * 0.1 }}
                            />
                          </div>
                          <motion.p 
                            className="text-xs text-purple-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: itemIndex * 0.1 + 0.2 }}
                          >
                            {item.description}
                          </motion.p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-2 right-2 w-24 h-24 opacity-5 pointer-events-none"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Detail Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                className="bg-white/10 rounded-2xl p-8 max-w-2xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`text-4xl mr-4 bg-gradient-to-r ${selectedSkill.color} rounded-full p-3`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {selectedSkill.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedSkill.name}</h3>
                    <p className="text-purple-300">{selectedSkill.category}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {selectedSkill.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <span className="text-purple-300">{item.level}%</span>
                      </div>
                      <p className="text-sm text-purple-200 mb-3">{item.description}</p>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${selectedSkill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="mt-8 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedSkill(null)}
                >
                  Close
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Home;