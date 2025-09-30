import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projects = [
        {
            year: 'Jul 2025 – Aug 2025',
            title: 'Property Management',
            links: ['https://github.com/kirmadashukla/propanix_user']
        },
        {
            year: 'Jun 2025 – Jul 2025',
            title: 'Automated Cold Email',
            links: ['https://github.com/KirmadaShukla/Auttomated_Cold_Email']
        },
        {
            year: 'Apr 2025 – May 2025',
            title: 'MailY',
            links: ['https://github.com/KirmadaShukla/MailAI']
        }
    ];

    useEffect(() => {
        // Create GSAP animations for each project card
        projects.forEach((_, index) => {
            const card = document.querySelector(`.project-card-${index}`);
            if (card) {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.9,
                    },
                    {
                        opacity: 1,
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
            <section className="py-16" id="projects">
                <h1 className="heading text-4xl font-bold  mb-16">
                    <span className="text-yellow-300">My</span> Projects
                </h1>

                <div className=" mx-auto px-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className={`backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-20 rounded-3xl p-10 shadow-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full project-card-${index}`}
                        >
                            <div className="content">
                                <span className="inline-block px-5 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black rounded-full text-lg font-bold mb-8">
                                    {project.year}
                                </span>
                                <h3 className="text-4xl font-bold text-white mb-10">{project.title}</h3>
                                <div className="mt-8">
                                    {project.links.map((link, linkIndex) => (
                                        <p key={linkIndex} className="mb-4">
                                            <a 
                                                href={link} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-300 hover:text-blue-100 transition-colors duration-300 flex items-center text-2xl"
                                            >
                                                <span className="mr-3 text-2xl">↗</span>
                                                GitHub Repository
                                            </a>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Projects