import Image from 'next/image'
import { motion } from 'framer-motion';

const AheadApp = () => {
  return (
    <>
      <section className="md:px-40 flex justify-center items-center md:mt-28 mt-1 font-[Montserrat]">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          transition={{
            delay: 0,
            duration: 0.6
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#FEF6F0] md:w-[85%] w-[95%] h-full md:h-[70vh] rounded-3xl flex md:flex-row flex-col relative  md:p-8 p-4 mx-2 overflow-hidden md:mx-0  ">
          <div className="flex flex-col justify-center md:items-start items-center flex-[0.6] px-5 py-2 gap-2">
            <motion.p
              initial={{ x: '-200', scale: 0, opacity: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 50

              }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="md:text-xl text-lg text-[#212121] font-semibold md:ml-1 z-100">Built out of frustration</motion.p>
            <motion.h1
              initial={{ x: '-200', scale: 0, opacity: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                type: "spring",
                stiffness: 50

              }}
              whileInView={{ x: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="md:text-5xl text-xl font-bold text-[#151515] md:mt-3">Meet the ahead app  </motion.h1>


            <motion.div
              initial={{ rotate: -90, scale: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 100

              }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              className=' ml-14 z-40 relative'>
              <Image
                src='/Images/purpleGhost.png'
                width={200}
                height={200}
                alt="hero"
                className=' p-12 border-spacing-8 border-[16px] rounded-full bg-gray-100 border-[#f0eeee] mt-4 z-40' 
              />

              <Image
                src='/Images/yellow_star.png'
                width={70}
                height={70}
                alt="hero"
                className='absolute -top-3 left-[50%] transform -translate-x-1/2 ' 
              />
               
            </motion.div>



          </div>
          <motion.div
            initial={{ x: '-200', scale: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 50

            }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: true }}
            className='flex flex-col justify-center items-center z-10 flex-[0.4] text-[#626262] font-semibold relative px-1 md:px-4 text-center md:text-start'>
            <p className='mb-3 mt-4 md:mt-0  '>A personalized pocket coach that provides bite-sized,science driven tools to boost emotional intelligence.</p>
            <p>Think of it as pocket cheerleader towards a better,more fulflling.</p>

          </motion.div>
          <motion.div
          initial={{ scale: 0, opacity: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.8
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }} 
          className='absolute w-60 h-60 bg-[#FBE8DD] rounded-full bottom-1 -left-20'></motion.div>

        </motion.div>
      </section>
    </>
  )
}

export default AheadApp