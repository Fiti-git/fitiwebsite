'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function Solutions() {
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section>
      <div
  className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
>

        <div className='container'>
          <div
            ref={ref}
            className='py-16 md:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:opacity-80'>
            <motion.div
              {...bottomAnimation}
              className='flex flex-col gap-6 items-center md:max-w-3xl mx-auto'>
              <div className='flex flex-col gap-3 items-center text-center'>
                <h2 className='text-3xl md:text-5xl dark:text-dark_black'>
                  Smart Solutions for {' '}
                  <span className='instrument-font italic font-normal dark:text-black/70'>
                    Growing Businesses
                  </span>
                </h2>
                <p className='dark:text-dark_black'>
                  Ready to transform your vision into reality? <br/>
                  We specialize in AI-driven development and agile MVP strategies to help businesses <br/>
                  launch faster, scale smarter, and stand out through cutting-edge technology and purposeful design.
                </p>
              </div>
              <Link
                href='/contact'
                className='group w-fit text-white font-medium bg-dark_black rounded-full flex items-center gap-4 py-2 pl-5 pr-2 hover:bg-transparent border border-dark_black'>
                <span className='group-hover:translate-x-9 group-hover:text-dark_black transform transition-transform duration-200 ease-in-out'>
                  Let’s Collaborate
                </span>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='group-hover:-translate-x-36 transition-all duration-200 ease-in-out group-hover:rotate-45'>
                  <rect
                    width='32'
                    height='32'
                    rx='16'
                    fill='white'
                    className='fill-white transition-colors duration-200 ease-in-out group-hover:fill-black'
                  />
                  <path
                    d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                    stroke='#1B1D1E'
                    strokeWidth='1.42857'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='stroke-[#1B1D1E] transition-colors duration-200 ease-in-out group-hover:stroke-white'
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
