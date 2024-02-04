export const navigateTo = (id: number) => {
  // get section element to navigate to
  const navToElement = document.getElementById('section' + id)
  // get container element
  const containerElement = document.getElementById('section-container')
  // get top position of the section element
  const position = navToElement?.getBoundingClientRect().y || 0
  // fix for crollTo not triggering in chrome
  setTimeout(() => {
    // scroll to position of top of the element + scroll amount of the container element
    containerElement?.scrollTo({
      behavior: 'smooth',
      left    : 0,
      top     : position + containerElement?.scrollTop - 78
    })
  }, 1)
}
