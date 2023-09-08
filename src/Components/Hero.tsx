import heroImage from '../Images/digital_products-hero.png'

const Hero = () => {
  return (
    <div className="container mx-auto max-w-[1400px] pt-20 px-6 md:px-0">
      <div className="flex flex-col-reverse justify-between items-start space-y-4 md:flex-row md:space-y-0 md:space-x-2">
         {/* first div */}

         <div className="flex flex-col space-y-4 ">
            <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-md text-transparent'>
             Digital Products
            </span>

            <h1 className="text-3xl md:text-5xl md:max-w-lg text-white">Sell online courses, coaching sessions, webinars, workshops, ebooks, and anything you can think of on Podia</h1>

            <p className="text-md max-w-md text-white">Get everything you need in one place that you own. Podia takes care of hosting products, taking payments, and getting products to your customers. And you always control your own work.</p>

            <div>
               <button className='inline-flex h-12 items-center justify-center rounded-full border border-slate-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 '>
             Get Your Free Acount
           </button>

            </div>

            
         </div>

         {/* second div */}

         <div className='pb-6 md:w-[45%] md:h-1/2'>
            <img src={heroImage} alt="" className='' />

         </div>
      </div>


    </div>
  )
}
export default Hero