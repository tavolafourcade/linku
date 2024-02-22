import SiteFooter from '../sections/SiteFooter'
import SiteBanner from '../sections/SiteBanner'
import SiteImagesReel from '../sections/SiteImagesReel'
import SiteInspiration from '../sections/SiteInspiration'
import SiteMotivational from '../sections/SiteMotivational'
import SiteOffice from '../sections/SiteOffice'

const Home = () => (
  <div>
    <SiteBanner />
    <SiteInspiration />
    <SiteImagesReel />
    <SiteMotivational />
    <SiteOffice />
    <SiteFooter />
  </div>
)

export default Home
