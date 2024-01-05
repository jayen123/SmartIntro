import HomeHero from "./components/HomeHero"
import HomeWork from "./components/HomeWork"
import HomeFeatures from "./components/HomeFeatures"
import Products from "./components/products"
import Subscription from "./components/subscription"


export default function Home() {


  return ( 
    <>
        <HomeHero/>
        <Products/>
        <HomeFeatures/>
        <HomeWork/>
        <Subscription/>
    </>
  )
}
