'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function OnlinePresence() {
  const [onlinePresenceList, setonlinePresenceList] = useState<any>(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/page-data')
          if (!res.ok) throw new Error('Failed to fetch')
  
          const data = await res.json()
          setonlinePresenceList(data?.onlinePresenceList)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])
  return (
    <section id='work'>
      <div
  className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
>

        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-xl text-center'>
              <h2>
                Accelerating Business Transformation <br />
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  Through AI and Agile MVP Development
                </span>
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8'>
              {onlinePresenceList?.map((items:any, index:any) => {
                return (
                  <div
                    key={index}
                    className='group flex flex-col gap-6 cursor-pointer'>
                    <div className='relative '>
                      <Image
                        src={items.image}
                        alt={items.title}
                        width={625}
                        height={410}
                        className='rounded-2xl'
                        unoptimized={true}
                      />

                      {/* Overlay div */}
                      <Link
                        href={'https://fiti.solutions/'}
                        target='blank'
                        className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex'>
                        <span className='flex justify-end p-5 w-full'>
                          <Icon
                            icon='icon-park-solid:circle-right-up'
                            width='50'
                            height='50'
                            style={{ color: '#fbfbfb' }}
                          />
                        </span>
                      </Link>
                    </div>

                    <div className='flex flex-col items-start gap-4'>
                      <h5 className='group-hover:text-purple_blue'>
                        {items.title}
                      </h5>
                      <div className='flex gap-3'>
                        {items.tag?.map((tag:any, index:number) => (
                          <p
                            key={index}
                            className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white'>
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence
