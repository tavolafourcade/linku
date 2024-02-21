import { useTranslations } from 'next-intl'

const SiteInspiration = () => {
  const t = useTranslations()

  return (
    <section className='py-[168px] px-4 lg:px-[156px]' id='inspiration'>
      <div className='max-w-[648px]'>
        <p className='text-5xl leading-15 text-accent font-bold'>{t('phrase_1')}</p>
        <p className='text-5xl leading-15 text-secondary font-bold'>{t('phrase_2')}</p>
      </div>
    </section>
  )
}
export default SiteInspiration
