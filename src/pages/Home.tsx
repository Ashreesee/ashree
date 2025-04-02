import { motion } from 'framer-motion';
import { 
  Server, Cloud, GitBranch, ShieldCheck, Cpu, Terminal,
  Sparkles, Star, Heart, Coffee, Zap, Award
} from 'lucide-react';
import Work from "./Work";
import Process from "./Process";
import Contact from "./Contact";
import Orb from '../components/Orb';

const Home = () => {
  const skills = [
    { name: "Cloud Computing", level: 95, icon: <Cloud /> },
    { name: "Infrastructure as Code", level: 90, icon: <GitBranch /> },
    { name: "CI/CD Pipelines", level: 88, icon: <Server /> },
    { name: "Security & Compliance", level: 85, icon: <ShieldCheck /> },
    { name: "Containerization & Orchestration", level: 92, icon: <Cpu /> },
    { name: "Automation & Scripting", level: 94, icon: <Terminal /> }
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
            DevOps Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <div className="mt-2 text-right text-purple-200">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Work/>
      <Process/>
      <Contact/>
    </div>
  );
};

export default Home;
