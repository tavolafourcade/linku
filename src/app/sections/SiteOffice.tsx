import Image from 'next/image'
import office from '../assets/images/office.jpg'

const SiteOffice = () => (
  <section>
    <Image
      alt='Coffee shop'
      layout='responsive'
      objectFit='cover'
      priority={true}
      quality={100}
      src={office} />
  </section>
)

export default SiteOffice
