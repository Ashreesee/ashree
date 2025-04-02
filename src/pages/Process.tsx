import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Lightbulb, Search, PenTool, Layout, 
  Code, TestTube, Rocket, RefreshCw 
} from 'lucide-react';

const Process = () => {
  const { scrollYProgress } = useScroll();

  const steps = [
    {
      icon: <Lightbulb />,
      title: "Discovery",
      description: "Understanding project goals and user needs through research and analysis",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Search />,
      title: "Research",
      description: "Conducting user research and competitive analysis",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <PenTool />,
      title: "Ideation",
      description: "Sketching concepts and exploring creative solutions",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Layout />,
      title: "Design",
      description: "Creating high-fidelity designs and interactive prototypes",
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: <Code />,
      title: "Development",
      description: "Implementing designs with clean, efficient code",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <TestTube />,
      title: "Testing",
      description: "Conducting user testing and gathering feedback",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Rocket />,
      title: "Launch",
      description: "Deploying and monitoring the final product",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: <RefreshCw />,
      title: "Iterate",
      description: "Continuously improving based on user feedback",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Design Process
        </motion.h1>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-purple-500 to-pink-500"
              style={{ scaleY: scrollYProgress }}
              initial={{ scaleY: 0 }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {step.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-purple-200">{step.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="w-8 h-8 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-full h-full rounded-full bg-gradient-to-r ${step.color}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;