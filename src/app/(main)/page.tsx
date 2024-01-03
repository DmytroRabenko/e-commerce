import FirstBlock from '@/components/main/first-block/firstBlock'
import Catalog from '@/components/main/catalog/catalog'
//import s from './main.module.scss'
import Greeting from '@/components/main/greeting-block/greeting-block'


export default function HomePage() {
  return (
    <>
      <Greeting/>
      <Catalog/>
    </>
  )
}
