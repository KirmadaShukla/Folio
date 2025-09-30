import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Wait a bit for images to load before starting animation
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.playing-card-wrapper');
      
      if (cards.length === 0) return;
      
      // Initial setup - stack all cards together in center
      gsap.set(cards, {
        x: 0,
        y: 0,
        rotation: 0,
        zIndex: (i) => 4 - i,
        scale: 1
      });
      
      // Create main timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".playing-cards",
          start: "top 80%",
          toggleActions: "play none none reset"
        }
      });

      // Phase 1: Lift and spread cards (like picking them up)
      mainTl.to(cards, {
        y: -30,
        scale: 1.05,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out"
      });

      // Phase 2: Riffle shuffle effect - split into two groups
      cards.forEach((card, index) => {
        const isLeftGroup = index < 2;
        
        mainTl.to(card, {
          x: isLeftGroup ? -80 : 80,
          y: isLeftGroup ? -20 : -25,
          rotation: isLeftGroup ? -15 : 15,
          duration: 0.4,
          ease: "power2.inOut"
        }, "-=0.35");
      });

      // Phase 3: Interleave cards (riffle action)
      cards.forEach((card, index) => {
        mainTl.to(card, {
          x: gsap.utils.random(-15, 15),
          y: -10 - (index * 2),
          rotation: gsap.utils.random(-8, 8),
          duration: 0.15,
          ease: "none"
        }, `-=0.${7 - index}`);
      });

      // Phase 4: Push cards together
      mainTl.to(cards, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.in"
      });

      // Phase 5: Quick overhand shuffle movements
      for (let shuffle = 0; shuffle < 3; shuffle++) {
        cards.forEach((card, index) => {
          const direction = shuffle % 2 === 0 ? 1 : -1;
          mainTl.to(card, {
            x: direction * (30 - index * 5),
            y: -20 + (index * 8),
            rotation: direction * (10 - index * 2),
            duration: 0.2,
            ease: "power1.inOut"
          }, `-=0.${index === 0 ? 2 : 15}`);
        });
        
        mainTl.to(cards, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.2,
          ease: "power1.inOut"
        }, "-=0.05");
      }

      // Phase 6: Final dramatic spread with bounce
      cards.forEach((card, index) => {
        const finalRotations = [-45, -15, 15, 45];
        const finalX = [-60, -20, 20, 60];
        
        mainTl.to(card, {
          x: finalX[index],
          y: Math.abs(finalRotations[index]) * 0.3,
          rotation: finalRotations[index],
          zIndex: index % 2 === 0 ? 4 : 2,
          scale: 1,
          duration: 0.6,
          ease: "back.out(2)",
          delay: index * 0.08
        }, "-=0.5");
      });

      // Add subtle floating animation after shuffle completes
      mainTl.add(() => {
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: `+=${gsap.utils.random(-8, 8)}`,
            duration: 2 + (index * 0.2),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
      });
    }, 500); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="content pt-[20px]">
          <span className="hi"> Hi there... </span>
          <h3> i am <span className="typing-animation" id="toggleText"></span> </h3>
          <p className="info">Student of School of Information Technology</p>
          <p className="text">Rajiv Gandhi Technological University, BHOPAL</p>
        </div>

        <div className="image-container">
          <div className="playing-cards">
            <LazyLoadImage
              src="/img1.jpeg"
              alt="Profile 1"
              className="playing-card"
              effect="blur"
              wrapperClassName="playing-card-wrapper"
            />
            <LazyLoadImage
              src="/img2.jpeg"
              alt="Profile 2"
              className="playing-card"
              effect="blur"
              wrapperClassName="playing-card-wrapper"
            />
            <LazyLoadImage
              src="/img3.jpeg"
              alt="Profile 3"
              className="playing-card"
              effect="blur"
              wrapperClassName="playing-card-wrapper"
            />
            <LazyLoadImage
              src="/img4.jpeg"
              alt="Profile 4"
              className="playing-card"
              effect="blur"
              wrapperClassName="playing-card-wrapper"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;