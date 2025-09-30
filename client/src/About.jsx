import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedLink from './AnimatedLink';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  // Skills data array with updated skills
  const skills = [
    { name: 'Website Development', fromColor: 'from-blue-500', toColor: 'to-purple-600' },
    { name: 'Database Design', fromColor: 'from-emerald-500', toColor: 'to-teal-600' },
    { name: 'Automation', fromColor: 'from-rose-500', toColor: 'to-pink-600' },
    { name: 'Python', fromColor: 'from-amber-500', toColor: 'to-orange-600' },
    { name: 'Data Analytics', fromColor: 'from-cyan-500', toColor: 'to-sky-600' },
    { name: 'App Development', fromColor: 'from-violet-500', toColor: 'to-fuchsia-600' },
  ];

  return (
    <motion.section
      className="about py-12 text-white"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      data-scroll
    >
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center justify-between"
          variants={containerVariants}
        >
          <motion.div
            className="content  mb-8 md:mb-0"
            variants={boxVariants}
          >
         <p className="text-gray-100 text-[18px]">
  I'm Pranjal Shukla, a full-stack software developer with a B.Tech in Computer Science from UIT-RGPV, Bhopal (graduated May 2024, CGPA 8.1). With over a year of hands-on experience in building scalable web and mobile applications, I've delivered solutions for e-commerce, real estate, and automation clients. At Cayro Enterprises, I integrated real-time order tracking with Socket.io and Google Maps, reduced payment errors by 40% via Cashfree/HDFC gateways, and boosted user engagement by 25% using Firebase notifications. As a freelancer, I've engineered CMS platforms with multilingual support and crypto exchanges. My projects, like an AI-powered email system processing 150+ emails/min and a property management app with secure OTP/JWT authentication, showcase my passion for efficient, user-centric tech. I'm skilled in turning complex requirements into performant code, always optimizing for speed and security.
</p>
            <div className="box-container mt-6 flex flex-col md:flex-col">
        
              <div className="box text-[18px]">
                <p className="text-gray-200">
                  <span className="font-semibold">Phone:</span> +91 9302931857
                </p>
                <p className="text-gray-200">
                  <span className="font-semibold">Email:</span>{' '}
                  kirmadashukla@gmail.com
                </p>
              </div>
            </div>
            <AnimatedLink />
          </motion.div>
        </motion.div>

        <motion.h1
          className="heading text-4xl font-bold mt-12"
          variants={boxVariants}
        >
          <span className="text-yellow-300">My</span> Skills
        </motion.h1>

        <div className="row-2 mt-8">
          <motion.div
            className="flex flex-col gap-4 justify-center items-center w-full md:flex-row flex-wrap"
            variants={boxVariants}
          >
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8"
              >
                <motion.div
                  className={`bg-gradient-to-br ${skill.fromColor} ${skill.toColor} p-6 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-20 border border-white border-opacity-20`}
                  variants={boxVariants}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-[15px] font-semibold mb-2">
                    {skill.name}
                  </h3>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;