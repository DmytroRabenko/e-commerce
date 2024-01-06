import MainSwiper from '@/components/main/main-swiper/main-swiper'
import Recomended from '@/components/main/recomended/recomended'
import Popular from '@/components/main/popular/popular'
import Viewed from '@/components/main/viewed/viewed'
import Container from '@/components/ui/container/container'
import '@/styles/globals.scss'

export default function HomePage() {
  return (
    <>
      <MainSwiper/>
      <Recomended/>
      <Popular/>
      <Viewed/>
      <Container>
        <h2>Відгуки наших клієнтів</h2>
        <div className='full'></div>
      </Container>
    </>
  )
}
