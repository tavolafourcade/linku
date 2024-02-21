import { useTranslations } from 'next-intl'

const SiteMotivational = () => {
  const t = useTranslations()

  return (
    <section className='bg-backdrop flex justify-center items-center' id='motivation'>
      <div className='max-w-[650px] py-[140px]'>
        <p className='text-5xl leading-15 font-light text-white text-center'>{t('phrase_3')}</p>
      </div>
    </section>
  )
}

export default SiteMotivational
