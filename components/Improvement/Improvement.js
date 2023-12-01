import Image from "next/image"
import { motion } from 'framer-motion';
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Improvement = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0.1;
    // transform: translate3d(-200px, -100px, 0);
    transform: translate2d( -50px, 0);
    transparent:0;
  }

  to {
    opacity: 1;
    transform: translate2d( 0, 0);
  }`;

  const improvementList = [
    {heading:"It’s not as easy as 1-2-3.",content:"The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."},
    {heading:"Old habits are hard to break.",content:"And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use (instead of shouting at your boss)."},
    {heading:"You and your motivation don’t have a long-term relationship.",content:"Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises."},
    {heading:"Books just don’t offer practical solutions.",content:"Remember when you learned to ride a bike just by reading? Yeah, we don’t either. We help you take concrete small steps towards your goals."},
  ]

  return (
    <>
      <section className="md:px-40 flex flex-col md:mt-28 mt-12 justify-center items-start font-[Montserrat] w-[80%]">
        <motion.p
          initial={{ x: '-200', scale: 0, opacity: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: "spring",
            stiffness: 50

          }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className='md:text-md text-sm font-medium text-[#535353] '>Wrong with self-improvement & how we're fixing it.</motion.p>
        <div className='flex'>

          <motion.h1
            initial={{ x: '-200', scale: 0, opacity: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.8,
              type: "spring",
              stiffness: 50

            }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className='md:text-4xl text-2xl font-bold  text-black mt-4 inline mb-4 md:mb-1'>Self Improvement. Ugh.</motion.h1>


          <motion.div
            initial={{ rotate: -90, x: 400, y: 20 }}
            whileInView={{
              rotate: 0,
              x: 0,
              y: 0,


            }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src='/Images/blue-ghost.png'
              width={60}
              height={60}
              alt="boo"
              className='rounded-full ml-5 opacity-90 hidden md:flex'
            />
          </motion.div>

        </div>

        <div className="px-20 pt-14 h-96 overflow-y-scroll no-scrollbar">
          <div className="border-l-2 border-l-violet-300 flex flex-col gap-16">
            <Reveal keyframes={customAnimation}>
              {improvementList.map((item, index) => {
                return (
                  <div key={index}
                  >
                    <motion.div
                      className=" max-w-[40rem] relative align-top pl-8">
                      <div style={{ left: "-12px" }} className="absolute">🟣</div>
                      <p className="text-xl font-bold">{item.heading}</p>
                      <p className="mt-3">
                        {item.content}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>

      </section>
    </>
  )
}

export default Improvement