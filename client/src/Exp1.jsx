import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experiences = [
    {
      period: 'Sept 2025 – Present',
      title: 'Software Engineer, Helo.ai by Vivaconnect, Remote',
     
    },
    {
      period: 'Jul 2025 – Present',
      title: 'Software Developer, Freelance, Remote',
      links: [
        'https://angelsx.co',
        'https://medicmart.vercel.app/',
      ]
    },
    {
      period: 'Jul 2024 – Jun 2025',
      title: 'Software Developer, Cayro Enterprises (cayroshop.com), Gurugram',
      links: ['https://cayroshop.com/','https://seller.cayroshop.com/','https://team.cayroshop.com/']
    },
    {
      period: 'Dec 2023 – Jul 2024',
      title: 'Full Stack Developer, Reeplayer Global Services, Bhopal',
      links: ['https://rgsgroceries.com']
    },

  ];

  useEffect(() => {
    // Create GSAP animations for each experience card
    experiences.forEach((_, index) => {
      const card = document.querySelector(`.experience-card-${index}`);
      if (card) {
        // Alternate animation direction based on index
        const fromDirection = index % 2 === 0 ? -100 : 100;
        
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: fromDirection, // Start from left (-100) or right (100)
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0, // Move to original position
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="experience py-12" id="experience">
        <h1 className="heading text-4xl font-bold  mb-16">
          <span className="text-yellow-300">Professional</span> Experience
        </h1>

        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400 rounded-full"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                className={`mb-16 flex ${index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'} items-center experience-card-${index}`}
                key={index}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-yellow-400 border-4 border-white shadow-xl z-10"></div>
                
                {/* Content card */}
                <div 
                  className={`md:w-5/12 w-full backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    index % 2 === 0 ? 'md:mr-8 md:ml-0' : ''
                  }`}
                >
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black rounded-full text-lg font-bold mb-4">
                    {exp?.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-6">{exp?.title}</h3>
                  <div className="mt-6">
                    {exp.links?.map((link, linkIndex) => (
                      <p key={linkIndex} className="mb-3">
                        <a 
                          href={link} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-100 transition-colors duration-300 flex items-center text-lg"
                        >
                          <span className="mr-3 text-xl">↗</span>
                          View Project {linkIndex + 1}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Empty space for alignment on desktop, hidden on mobile */}
                <div className="md:w-5/12 w-full md:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          .experience {
            min-height: 100vh;
          }
          
          @media (max-width: 768px) {
            .absolute.left-1/2 {
              left: 20px;
            }
            
            .transform.-translate-x-1/2 {
              transform: translateX(0);
            }
            
            .box-container {
              padding-left: 40px;
            }
            
            .box {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
        `}</style>
      </section>
    </>
  )
}
export default Experience;