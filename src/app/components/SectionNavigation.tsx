import { useEffect } from 'react'

// material ui
import { Stack, Button, Theme, lighten } from '@mui/material'

// styles
import {
  navContainerStyles,
  circleStyles
} from '../styles/sectionNavigation'
import { navigateTo } from '../utils/navigation'

// interfaces
interface ISectionNavigationProps {
  sectionsInView: Array<boolean>;
}

const SectionNavigation = ({ sectionsInView }: ISectionNavigationProps) => {
  // event handler for left/right arrow navigation
  const handleKeydown = (e: KeyboardEvent) => {
    if(e.key === 'ArrowRight')
      navigateSection(true)
    else if(e.key === 'ArrowLeft')
      navigateSection(false)
  }

  // navigates to the next or previous section based on passed value
  // 0: previous | 1: next
  const navigateSection = (direction: boolean) => {
    let navSectionId: number
    // get index of current section that's in view
    const index = sectionsInView.indexOf(true)
    // if direction is true (next item)
    if(direction) {
      // if we're at the last section do nothing
      if(index === sectionsInView.length - 1) return
      // +2 is because section ids start at 1
      // so if #section1 (index 0) is in view
      // we need to navigato to #section2 (2 = index+2)
      navSectionId = index + 2
    }
    // if direction is false (previous item)
    else {
      // if we're at the first section do nothing
      if(index === 0) return
      // section ids start at 1 so index is already id-1
      navSectionId = index
    }
    // navigate to the section id
    navigateTo(navSectionId)
  }

  // adding event listener for keyboard navigation
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)

    return () => document.removeEventListener('keydown', handleKeydown)
  }, [ sectionsInView ])

  return (
    <Stack
      direction={'row'}
      sx={navContainerStyles}>

      {sectionsInView.map((_, index) => (
        <Stack
          alignItems='center'
          height={14}
          justifyContent='center'
          key={index}
          width={14}>
          <Button
            aria-label={`Go to Section ${index + 1}`}
            data-active={sectionsInView[index] ? true : false}
            disableRipple
            onClick={() => navigateTo(index + 1)}
            sx={[
              (theme: Theme) => ({
                backgroundColor: sectionsInView[index] ?
                  theme.palette.darkGrayishBlue.main :
                  lighten(theme.palette.grayishBlue.main, 0.3),
                height: sectionsInView[index] ? 14 : 8,
                width : sectionsInView[index] ? 14 : 8
              }),
              (theme: Theme) => circleStyles(theme)
            ]} />
        </Stack>
      ))}

    </Stack>
  )
}

export default SectionNavigation
