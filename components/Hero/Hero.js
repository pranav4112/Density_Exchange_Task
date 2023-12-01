import AppStore from '../AppStore'
import Image from 'next/image'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <section

        className="md:px-24 px-4 flex justify-center items-center mt-10 font-[Montserrat] ">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6
          }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#ECE8FB] w-[90%]  md:h-[80vh] rounded-3xl flex flex-col md:flex-row p-2 gap-8 md:gap-0 ">

          <div className="flex flex-col justify-center items-start flex-1 px-5 py-2">
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6
              }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-[#323232] font-semibold ml-1">Ahead app</motion.p>
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6
              }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} className="md:text-6xl text-3xl font-bold text-[#151515] mt-3">Master your life by mastering emotions  </motion.h1>
            <div className='flex items-center mt-10'>

              <AppStore />

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6
                }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className='flex flex-col justify-center items-start md:w-40 w-28 h-12 rounded-md ml-5 gap-1'>
                <div
                  className="flex justify-start">

                  <Image
                    src='/Images/star.png'
                    width={20}
                    height={20}
                    alt="rating"
                  />
                  <Image
                    src='/Images/star.png'
                    width={20}
                    height={20}
                    alt="rating"
                  />
                  <Image
                    src='/Images/star.png'
                    width={20}
                    height={20}
                    alt="rating"
                  />
                  <Image
                    src='/Images/star.png'
                    width={20}
                    height={20}
                    alt="rating"
                  />
                  <Image
                    src='/Images/star.png'
                    width={20}
                    height={20}
                    alt="rating"
                  />
                </div>
                <p className='text-xs font-semibold text-black'>100+ App Store Reviews </p>
              </motion.div>

            </div>
          </div>


          <div className='flex flex-1 justify-center items-center relative px-4 py-2'>


            <motion.div
              whileInView="visible"
              viewport={{ once: true }}
              initial="hidden"
              variants={{
                hidden: { opacity: 1 },
                visible: { opacity: 1, rotate: 360 },
              }}
              transition={{
                repeat: Infinity,
                type: "",
                duration: 8,
                ease: "easeInOut",
              }}
              style={{ border: "3px solid white ", borderStyle: "dashed" }} className=' absolute rounded-full h-[450px] w-[450px] border-dashed border-white'>

              <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ top: "60px" }} className='absolute h-16 w-12'>
                <Image height={100} width={100} className='h-full w-full' src="/Images/blue-ghost.png" alt="" />
              </motion.div>


              <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ right: "-20px", top: "30%", transform: "translate(-50%,-50%)" }} className='absolute h-16 w-14'>
                <Image height={100} width={100} className='h-full w-full' src="/Images/red-ghost.png" alt="" />
              </motion.div>


              <motion.div whileInView="visible" viewport={{ once: true }} animate={{ rotate: -360 }} transition={{ type: "spring", duration: 4, bounce: 0.4 }} style={{ bottom: "-22px", right: "50%" }} className='absolute h-14 w-12'>
                <Image height={100} width={100} src="/Images/purpleGhost.png" alt="" />
              </motion.div>

            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6
              }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className='flex justify-center items-center z-10 '>
              <Image
                src='/SVGs/HeroImage.svg'
                width={350}
                height={350}
                alt="mobile"
                className='md:scale-100 scale-75'
              />



            </motion.div>
          </div>
        </motion.div>
        
      </section>
    </>
  )
}

export default Hero