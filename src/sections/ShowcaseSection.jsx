import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current, 
            {opacity: 0}, 
            {opacity: 1, duration: 1.5}
        )

        const projects=[project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {y: 50, opacity: 0},
                {y: 0, opacity: 1, duration: 1, delay: 0.3 * (index+1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
    }, [])
  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader
          title="Projects Overview"
          sub="Extra Tech Studies"
        />
        <div className="mt-16 relative">
          <div className="showcaselayout">
            <div className="first-project-wrapper" ref={project1Ref}>
              <a href='https://github.com/349108654/Wattendance-frontend'>
                <div className="image-wrapper">
                  <img src="./images/Wattendence-cover.png" alt="Ryde App Interface" />
                </div>
                <div className="text-content">
                    <h2>
                      Wattendance
                    </h2>
                    <p className="text-white-50 md:text-xl">
                      Full Stack Attendence Tracker Website incorporating a facial recognition feature
                    </p>
                </div>
              </a>
            </div>

            <div className="project-list-wrapper overflow-hidden">
              <div className="project" ref={project2Ref}>
                <a href='https://github.com/349108654/Le-Petit-Mario'>
                  <div className="image-wrapper bg-[#FFEFDB]">
                    <img
                      src="./images/project2.png"
                      alt="Library Management Platform"
                    />
                  </div>
                  <h2>Le Petit Mario</h2>
                  <p>
                    OOP 2D Sprite-based Game - constructing auto aim shooting through Ray-casting algorithm along with object movement using Frame-by-Frame animation
                  </p>
                </a>
              </div>

              {/* <div className="project" ref={project3Ref}>
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="./images/project3.png" alt="YC Directory App" />
                </div>
                <h2>Project 2</h2>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection