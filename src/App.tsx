import Header from "./Components/Header"
import Hero from "./Components/Hero"
import ShowCase from "./Components/ShowCase"
import OnlineCourses from "./Components/ProductsSellSection/OnlineCourses"
import DigitalProducts from "./Components/ProductsSellSection/DigitalProducts"
import Coaching from "./Components/ProductsSellSection/Coaching"
const App = () => {
  
  return (
  <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
 
  <Header/>
  <Hero/>
  <ShowCase/>
  <OnlineCourses/>
  <DigitalProducts/>
  <Coaching/>


  </div>


  )
}
export default App