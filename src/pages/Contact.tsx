import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_8lj6k7j';
    const templateID = 'template_tpbc7to';
    const publicKey = '7sPfBZZQ4JRGfADYs';

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success('Message sent successfully!');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Try again!');
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: <Mail className="text-blue-400" />, text: "ashreechaurasia43@gmail.com" },
    { icon: <Phone className="text-green-400" />, text: "+91-9793475135" },
    { icon: <MapPin className="text-red-400" />, text: "Jhansi, Uttar Pradesh" }
  ];

  const socialLinks = [
    {
      icon: <Linkedin />,
      name: "LinkedIn",
      color: "hover:text-blue-400",
      url: "https://in.linkedin.com/in/ashree-chaurasiya-973229266"
    },
    {
      icon: <Twitter />,
      name: "Twitter",
      color: "hover:text-sky-400",
      url: "https://x.com/xoxo_ashree"
    },
    {
      icon: <MessageCircle />,
      name: "Discord",
      color: "hover:text-indigo-400",
      url: "https://discord.com/users/ashree0340"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Let's Create Something
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"> Amazing</span>
            </motion.h1>
            <motion.p
              className="text-lg text-purple-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I'm a beginner developer excited to learn and collaborate on new projects.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="bg-white/5 p-6 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Send me a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none h-32 resize-none"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-2 bg-purple-500 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-purple-600 transition-colors"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info + Socials + About */}
            <div className="space-y-6">
              {/* Contact Details */}
              <motion.div
                className="bg-white/5 p-6 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      whileHover={{ x: 10 }}
                    >
                      <div className="text-xl">{info.icon}</div>
                      <span>{info.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="bg-white/5 p-6 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 ${link.color} transition-colors`}
                      whileHover={{ x: 10 }}
                    >
                      <div className="text-xl">{link.icon}</div>
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* About Me */}
              <motion.div
                className="bg-white/5 p-6 rounded-xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-purple-200">
                  Hi! I'm a passionate and curious developer who loves building clean, user-friendly applications. I enjoy working across the full stack—from crafting responsive frontend interfaces to writing solid backend logic and deploying applications in the cloud.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-20 text-center text-purple-200 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>© 2024 Ashree Chaurasiya. Learning and growing every day.</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Contact;
