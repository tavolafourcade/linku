import Image from 'next/image'
import { useTranslations } from 'next-intl'
import footerLogo from '../assets/images/footerLogo.png'

const SiteFooter = () => {
  const t = useTranslations()

  return (
    <section className='font-onest py-[50px] lg:pt-[168px] lg:pb-[57px] px-4 lg:pl-[156px] lg:pr-[93px] bg-footer text-white' id='footer'>
      <div className='mb-20'>
        <p className='text-xl lg:text-4xl leading-6 lg:leading-14 font-bold'>{t('footer_title')}</p>
        <span className='text-base lg:text-2xl lg:leading-10 font-normal'>{t('footer_content')}</span>
        <span className='text-base lg:text-2xl lg:leading-10 font-semibold'>{t('contact_email')}</span>
      </div>
      <div className='flex justify-end bottom-0 right-0 lg:hidden'>
        <Image
          alt='Footer logo'
          priority={true}
          quality={100}
          src={footerLogo}
          width={40} />
      </div>
      <div className='hidden lg:flex lg:justify-end lg:bottom-0 lg:right-0'>
        <Image
          alt='Footer logo'
          priority={true}
          quality={100}
          src={footerLogo}
          width={60} />
      </div>
    </section>
  )
}
export default SiteFooter
