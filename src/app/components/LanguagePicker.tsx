import React from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'

interface Language {
	code: string;
	name: string;
}

const languages: Language[] = [
  { code: 'es', name: 'ES' },
  { code: 'en', name: 'EN' }
]

const LanguagePicker: React.FC = () => {
  const locale = useLocale()

  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (language: Language) => {
    router.replace(pathname, { locale: language.code })
  }

  return (
    <div className='flex gap-2'>
      {languages.map((language) => (
        <div className={`flex border-white rounded-full text-white ${locale === language.code ? 'bg-white' : ''}`} key={language.code}>
          {locale === language.code ? (
            <button className='w-10 h-10 btn btn-primary p-2 text-primary border-white'>{language.name}</button>
          ) : (
            <button className='w-10 h-10 btn btn-outline-primary p-2 border rounded-full border-white' onClick={() => handleChange(language)}>
              {language.name}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default LanguagePicker

// return (
//   <div className='flex gap-2'>
//     {languages.map((language) => (
//       <div className={`flex ${locale === language.code ? 'bg-white' : ''}`} key={language.code}>
//         {locale === language.code ? (
//           <button className='w-10 h-10 btn btn-primary p-2 text-primary border border-white rounded-full'>{language.name}</button>
//         ) : (
//           <button className='w-10 h-10 btn btn-outline-primary p-2 border-white border rounded-full' onClick={() => handleChange(language)}>
//             {language.name}
//           </button>
//         )}
//       </div>
//     ))}
//   </div>
// )
