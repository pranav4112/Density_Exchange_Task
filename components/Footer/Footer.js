import Image from 'next/image'
import { motion } from 'framer-motion';
import AppStore from '../AppStore'

const Footer = () => {
  return (
    <>
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
          type: "spring",
          stiffness: 50

        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24  border-t-2 w-[97vw] flex justify-center items-center " >
        <div className="md:px-40 flex  md:mt-24 mt-12 font-[Montserrat] flex-col w-[80%] justify-center items-center gap-4">
          <Image
            src='/Images/logo.png'
            width={55}
            height={55}
            alt="Logo"
            style={{ cursor: 'pointer' }}
          />
          <h1 className='font-bold text-3xl text-[#6B4DEE] '>ahead</h1>

          <div className='flex justify-center items-center my-4 flex-col md:flex-row'>
            <div className='flex  text-sm font-semibold items-center justify-center cursor-pointer'>
              <Image
                src='/SVGs/location.svg'
                width={30}
                height={30}
                alt="location"
                className='mr-2'
              />
              Augustraβe 26, 10117 Berlin
            </div>
            <div className='flex text-sm font-semibold items-center justify-center ml-12 cursor-pointer'>
              <Image
                src='/SVGs/mail.svg'
                width={30}
                height={30}
                alt="mail"
                className='mr-2'

              />
              hi@ahead-app.com
            </div>
          </div>
          <AppStore />
          <p className='flex text-sm font-semibold my-4 text-[#535353]'>&copy; 2022 Ahead app.All rights reserved</p>
        </div>

      </motion.section>
    </>
  )
}

export default Footer