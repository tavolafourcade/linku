import { useTranslations } from 'next-intl'

const SiteFooter = () => {
  const t = useTranslations()

  return (
    <section className='font-onest py-[168px] px-4 lg:px-[156px] bg-footer text-white' id='footer'>
      <div>
        <p className='text-xl lg:text-4xl leading-6 lg:leading-14 font-bold'>{t('footer_title')}</p>
        <span className='text-base lg:text-2xl lg:leading-10 font-normal'>{t('footer_content')}</span>
        <span className='text-base lg:text-2xl lg:leading-10 font-semibold'>{t('contact_email')}</span>
      </div>
    </section>
  )
}
export default SiteFooter
