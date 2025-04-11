import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Code,
  Brain,
  CheckCircle2,
  Container,
  Cloud,
  Server,
  Github as Git,
  Terminal,
  Database
} from 'lucide-react';

const Process = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const learningPath = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Learning the Basics",
      description: "My journey into web development started with the fundamentals",
      skills: [
        { name: "HTML", level: 85, color: "from-orange-400 to-red-500" },
        { name: "CSS", level: 80, color: "from-blue-400 to-indigo-500" },
        { name: "JavaScript", level: 75, color: "from-yellow-400 to-amber-500" }
      ],
      achievements: [
        "Built my first webpage",
        "Learned responsive design",
        "Mastered flexbox and grid",
        "Understanding of DOM manipulation"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "React Development",
      description: "Currently focusing on React and its ecosystem",
      skills: [
        { name: "React", level: 70, color: "from-cyan-400 to-blue-500" },
        { name: "TypeScript", level: 65, color: "from-blue-500 to-indigo-600" },
        { name: "Tailwind", level: 75, color: "from-teal-400 to-emerald-500" }
      ],
      achievements: [
        "Created interactive UIs",
        "Working with React Hooks",
        "State management basics",
        "Component-based architecture"
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps Journey",
      description: "Learning modern deployment and infrastructure practices",
      skills: [
        { name: "Docker", level: 60, color: "from-blue-400 to-cyan-500" },
        { name: "CI/CD", level: 55, color: "from-green-400 to-emerald-500" },
        { name: "Cloud Services", level: 65, color: "from-indigo-400 to-purple-500" }
      ],
      achievements: [
        "Basic container concepts",
        "GitHub Actions workflows",
        "Cloud deployment basics",
        "Infrastructure as Code intro"
      ]
    }
  ];

  const floatingIcons = [
    { icon: <Container className="text-blue-400" />, delay: 0 },
    { icon: <Terminal className="text-green-400" />, delay: 2 },
    { icon: <Git className="text-orange-400" />, delay: 4 },
    { icon: <Database className="text-purple-400" />, delay: 6 },
    { icon: <Server className="text-cyan-400" />, delay: 8 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ]
          }}
          transition={{
            duration: 20,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-transparent bg-clip-text">
              My Learning Journey
            </span>
          </h1>
          <motion.p
            className="text-xl text-purple-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            As a beginner developer, every day is a new opportunity to learn and grow.
            Here's my journey so far...
          </motion.p>
        </motion.div>

        {/* Horizontal Layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {learningPath.map((path, index) => (
            <motion.div
              key={index}
              className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-6 cursor-pointer
                border border-transparent hover:border-purple-500/30 transition-all duration-300
                ${activeSkill === index ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : ''}
              `}
              onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg"
                  animate={{ rotate: activeSkill === index ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {path.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{path.title}</h3>
                  <p className="text-sm text-purple-200">{path.description}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {path.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Expandable Achievements */}
              <AnimatePresence>
                {activeSkill === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="border-t border-purple-500/20 pt-4">
                      <h4 className="text-sm font-semibold mb-3">Achievements</h4>
                      <div className="space-y-2">
                        {path.achievements.map((achievement, achieveIndex) => (
                          <motion.div
                            key={achieveIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: achieveIndex * 0.1 }}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-purple-200">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 backdrop-blur-lg rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Future Goals</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-xl p-6">
                <Container className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h4 className="font-semibold mb-3">Container Orchestration</h4>
                <p className="text-purple-200 text-sm">Learning Kubernetes and container orchestration</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-xl p-6">
                <Cloud className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                <h4 className="font-semibold mb-3">Cloud Architecture</h4>
                <p className="text-purple-200 text-sm">Exploring AWS and cloud infrastructure</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-xl p-6">
                <Git className="w-8 h-8 mx-auto mb-4 text-orange-400" />
                <h4 className="font-semibold mb-3">Advanced CI/CD</h4>
                <p className="text-purple-200 text-sm">Building robust deployment pipelines</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
