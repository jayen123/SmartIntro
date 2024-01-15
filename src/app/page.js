import HomeHero from "./components/homeHero"
import HomeWork from "./components/HomeWork"
import HomeFeatures from "./components/HomeFeatures"
import Products from "./components/products"
import Subscription from "./components/subscription"
import PaidAd from "./components/paidAd"
import Order from "./components/order"


export default function Home() {


  return (
    <>
      <HomeHero />
      <Products />
      <HomeFeatures />
      <HomeWork />
      <Subscription />
      <PaidAd/>
      <Order/>
    </>
  )
}
