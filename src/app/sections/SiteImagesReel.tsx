import Image from 'next/image'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'

const SiteImagesReel = () => (
  <section className='flex flex-col md:flex-row'>
    <div className='w-full md:w-1/3 h-full overflow-hidden'>
      <Image
        alt='Coffee shop'
        layout='responsive'
        objectFit='cover'
        priority={true}
        quality={100}
        src={img1} />
    </div>
    <div className='w-full md:w-1/3 h-full overflow-hidden'>
      <Image
        alt='Meeting room'
        className='h-auto'
        layout='responsive'
        objectFit='cover'
        priority={true}
        quality={100}
        src={img2} />
    </div>
    <div className='w-full md:w-1/3 h-full overflow-hidden'>
      <Image
        alt='Restaurant'
        className='h-auto'
        layout='responsive'
        objectFit='cover'
        priority={true}
        quality={100}
        src={img3} />
    </div>
  </section>
)

export default SiteImagesReel
