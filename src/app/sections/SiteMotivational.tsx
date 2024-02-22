import { useTranslations } from 'next-intl'

const SiteMotivational = () => {
  const t = useTranslations()

  return (
    <section className='font-onest bg-backdrop flex justify-center items-center px-20 lg:px-0' id='motivation'>
      <div className='max-w-[650px] py-[140px]'>
        <p className='text-xl lg:text-5xl leading-6 font-light text-white text-center'>{t('phrase_3')}</p>
      </div>
    </section>
  )
}

export default SiteMotivational
