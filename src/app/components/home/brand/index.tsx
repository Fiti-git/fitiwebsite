'use client'
import Slider from 'react-infinite-logo-slider'

function Brand() {
  const techLogos = [
    {
      id: 1,
      name: 'AWS',
      src: 'https://www.svgrepo.com/show/448266/aws.svg',
    },
    {
      id: 2,
      name: 'Google',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
    {
      id: 3,
      name: 'Azure',
      src: 'https://www.svgrepo.com/show/353467/azure-icon.svg',
    },
    {
      id: 4,
      name: 'Raspberry Pi',
      src: 'https://www.svgrepo.com/show/303239/raspberry-pi-logo.svg',
    },
    {
      id: 5,
      name: 'Django',
      src: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg',
    },
    {
      id: 6,
      name: 'React',
      src: 'https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg',
    },
    {
      id: 7,
      name: 'TensorFlow',
      src: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
    },
  ]

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='gap-4'>
            <div className='flex justify-center text-center py-4 relative'>
              <p
                className='relative px-2 text-dark_black/60 dark:text-white/60
                    md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent'>
                Powered by leading technologies
              </p>
            </div>

            <div className='py-3 Xsm:py-7'>
              <Slider
                width='180px'
                duration={30} // slower = smoother, longer = continuous
                pauseOnHover={false}
                blurBorders={false}
              
              >
                {/* Double the list for seamless loop effect */}
                {[...techLogos, ...techLogos].map((logo, index) => (
                  <div key={index} className='flex justify-center items-center px-6'>
                    <img src={logo.src} alt={logo.name} className='max-h-12 object-contain' />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
