import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="ISL Learning App" />
            </div>
            <div className="text-content">
              <h2>
                An Accessible Platform for Indian Sign Language Education.
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack web application designed to empower families
                through accessible ISL education. The platform is built with
                Java Spring Boot and MySQL to deliver a robust learning and
                translation experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Hotel Website" />
              </div>
              <h2>The Wild Oasis</h2>
              <p className="text-white-50 md:text-xl">
                {" "}
                A Luxury Cabin Booking Application.
              </p>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="Travel Tracker" />
              </div>
              <h2>WorldWise </h2>
              <p className="text-white-50 md:text-xl">
                {" "}
                A Travel and Adventure Tracking Application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
