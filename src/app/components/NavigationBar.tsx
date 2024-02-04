
// material ui
import { Box, Fab, Hidden, IconButton, Portal, Stack, SxProps, Theme, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FC, MutableRefObject, ReactNode, useEffect, useState } from 'react'

import ButtonModalTrigger from './MultiStep/ButtonModalTrigger'
import Image from 'next/image'
import { beautifully, plusJakarta } from '../styles/font'
import logo from '../assets/images/zealLogo.svg'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from 'next/link'
import { ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material'

export interface NavigationElements {
  id: number;
  name: string;
	href: string;
}
interface NavigationBarProps {
  items: NavigationElements[];
	scrollRef: MutableRefObject<null>;
}

const menuBar: SxProps<Theme> = () => ({
  color: 'grey.400'
})

const NavigationBar: FC<NavigationBarProps> = ({ items }) => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const [ scrolling, setScrolling ] = useState(false)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const toggleOpenMenu = (): void => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      if(
        document.body.scrollTop >= 78 ||
        document.documentElement.scrollTop >= 78
      )
        setScrolling(true)
      else
        setScrolling(false)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  }, [])

  const _handleToTop = () => {
    document.documentElement?.scrollTo({
      behavior: 'smooth',
      left    : 0,
      top     : 0
    })
  }

  return (
    <>
      <Stack
        alignItems={'center'}
        direction={'row'}
        flexWrap={'nowrap'}
        height={'78px'}
        justifyContent={'space-between'}
        minWidth={'100dvw'}
        paddingX={isMobile ? '16px' : '36px'}
        position={'fixed'}

        sx={{
          backdropFilter : 'blur(10px)',
          backgroundColor: isMenuOpen || scrolling ? 'greenBg.main' : 'transparent',
          transition     : isMenuOpen ? 'none' : 'ease all 0.3s'
        }}

        zIndex={50}>
        <NavigationBarLogoGroup />
        <NavigationBarItemOptions isMenuOpen={isMenuOpen} items={items} toggleOpenMenu={toggleOpenMenu} />

      </Stack>

      {
        scrolling ? (
          <Portal container={document.getElementById('up')}>
            <Fab aria-label='up' color={'purple' as 'success'} onClick={_handleToTop}>
              <ArrowUpwardIcon />
            </Fab>
          </Portal>
        ) : null
      }

    </>
  )
}

export default NavigationBar

const NavigationBarItemOptions: FC<{ items: NavigationElements[]; isMenuOpen: boolean; toggleOpenMenu: () => void }> = ({
  items,
  isMenuOpen,
  toggleOpenMenu
}) => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Stack
      alignItems={'center'}
      direction={'row'}
      maxHeight={'100%'}
      spacing={isTablet ? 0 : 3}>
      <Hidden mdDown>
        <NavigationBarItemList>
          {
            items.map((item, index) => (<NavigationBarItem item={item} key={index} onClick={toggleOpenMenu} />))
          }
        </NavigationBarItemList>
      </Hidden>
      <NavigationBarButton isMenuOpen={isMenuOpen} />
      <Hidden mdUp>
        <IconButton onClick={toggleOpenMenu} sx={menuBar}>
          {
            isMenuOpen ? <CloseIcon /> : <MenuIcon />
          }
        </IconButton>
        {isMenuOpen && (
          <Box
            sx={{
              alignItems     : 'center',
              backgroundColor: 'greenBg.main',
              display        : 'flex',
              flexDirection  : 'column',
              height         : '100vh',
              left           : 0,
              margin         : 'auto',
              paddingTop     : '80px',
              position       : 'absolute',
              top            : '100%',
              width          : '100%',
              zIndex         : 1
            }}>
            {items.map((item, index) => (
              <NavigationBarItem item={item} key={index} onClick={toggleOpenMenu} />
            ))}
          </Box>
        )}
      </Hidden>
    </Stack>
  )
}

const NavigationBarItemList: FC<{ children: ReactNode }> = ({ children }) => (
  <Stack
    direction={'row'}
    height={38}
    paddingY={'11px'}
    spacing={2}>
    {children}
  </Stack>
)

const NavigationBarItem: FC<{ item: NavigationElements; onClick?: () => void }> = ({ item }) => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Link
      href={item.href} style={{
        textDecoration: 'none'
      }}>
      <Typography
        color='text.secondary'
        fontFamily={beautifully.style.fontFamily}
        fontSize={isTablet ? '14px' : '13px'}
        fontWeight={900}
        letterSpacing={'-1.9%'}
        lineHeight={isTablet ? '17px' : '16px'}
        marginBottom={isTablet ? '20px' : '0px'}
        sx={{
          textTransform: 'uppercase'
        }}>
        {item.name}
      </Typography>
    </Link>
  )
}

const NavigationBarButton: FC<{ isMenuOpen: boolean }> = ({ isMenuOpen }) => {
  if(!isMenuOpen) return <ButtonModalTrigger />

  return null
}

const NavigationBarLogoGroup = () => (
  <Stack
    alignItems={'center'}
    direction={'row'}
    spacing={2}>
    <NavigationBarLogoIcon />
    <NavigationBarLogoName />
  </Stack>
)

const NavigationBarLogoIcon = () => (
  <Image
    alt='logo'
    height={40}
    src={logo}
    width={124} />
)

const NavigationBarLogoName = () => (
  <Hidden mdDown>
    <Stack
      alignItems={'center'}
      direction={'row'}
      spacing={1}>

      <Typography
        color={'text.secondary'}
        fontFamily={plusJakarta.style.fontFamily}
        fontSize={'14px'}
        fontWeight={500}>|
      </Typography>
      <Typography
        color={'text.secondary'}
        fontFamily={plusJakarta.style.fontFamily}
        fontSize={'14px'}
        fontWeight={500}
        noWrap={true}>
        Base en Perú
      </Typography>
    </Stack>
  </Hidden>
)
