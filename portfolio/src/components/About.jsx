import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'
const About = () => {
    const circles = [
      {
        title: 'WHO AM I?',
        content: (
          <>
            <p>Name: Yuji Hashimoto</p>
            <p>Age: 19</p>
            <p>Hobbies/Likes?: Football(soccer), Volleyball, Music, YouTube, Movies, K-drama, Anime</p>
          </>
        )
      },
      {
        title: 'Favourite Comp Course',
        content: <p>COMP3311: Very Organised Administration :) (all assignments were released late)</p>
      },
      {
        title: 'About this website',
        content: (
          <>
            <p>uhh made using Reactjs/vite. Some extra libraries and depdencies used are emailjs and framer-motion. Sorry rly didnt have time 
              to put into this website as i only saw the application form the day b4 due date.
            </p>
          </>
        )
      }
    ];
  
    return (
      <div className='about-wrapper'>
        {circles.map((circle, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false });
  
          return (
            <motion.div
              key={index}
              ref={ref}
              className="about-inner"
              initial={{ scale: 1 }}
              animate={isInView ? {
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["50%", "20%", "20%", "30%", "50%"],
              } : {}}
              transition={{ duration: 3, delay: index * 0.3 }}
            >
              <div className="about-list">
                <h1>{circle.title}</h1>
                {circle.content}
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };
  
  export default About;
  