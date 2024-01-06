import Catalog from '@/components/main/catalog/catalog'
import MainSwiper from '@/components/main/main-swiper/main-swiper'
import Recomended from '@/components/main/recomended/recomended'
import Popular from '@/components/main/popular/popular'
import Viewed from '@/components/main/viewed/viewed'
import Container from '@/components/ui/container/container'
import '@/styles/globals.scss'

//<Catalog/>
export default function HomePage() {
  return (
    <>
      <MainSwiper/>
      <Recomended/>
      <Popular/>
      <Viewed/>{/*налаштувати зберігання переглянутих товарів в localstorage в кількості 
                  до 50 штук та виведення їх посторінково*/}
      
      <Container>
        <h2>Відгуки наших клієнтів</h2>
        <div className='full'></div>
      </Container>
    </>
  )
}
