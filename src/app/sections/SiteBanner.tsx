import Image from 'next/image'

import homeImage from '../assets/images/home_image.jpg'
import logo from '../assets/images/logo.png'
import LanguagePicker from '../components/LanguagePicker'

const SiteBanner = () => (
  <section className='w-screen h-screen' id='home'>
    <Image
      alt='Banner'
      className='transform scale-x-[-1]'
      layout='fill'
      objectFit='cover'
      priority={true}
      quality={100}
      src={homeImage} />
    <nav className='fixed top-0 left-0 right-0 z-10'>
      <div className='md:px-16 flex justify-between items-center py-5 px-4'>
        <div className='items-center'>
          <Image
            alt='logo' height={40} src={logo}
            width={120} />
        </div>
        <LanguagePicker />
      </div>
    </nav>
  </section>
)

export default SiteBanner
