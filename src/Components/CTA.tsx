const CTA = () => {
  return (
    <div className=" pt-20 px-6">
      <div className='relative h-64 max-w-[1400px] mx-auto overflow-hidden rounded-xl border border-slate-800 p-[1px] backdrop-blur-3xl'>
      <span className='absolute inset-[-1000%] md:animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>

         <div className="flex flex-col space-y-6 items-center text-center">
            <h1 className="font-bold text-4xl">Get your free Podia Account</h1>
            <p>Join the 150,000+ creators who use Podia to create websites, sell digital products, and build online communities.</p>
            <div>
               <button className='inline-flex h-12 items-center justify-center rounded-full border border-slate-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 '>
             Get Your Free Acount
           </button>

            </div>
         </div>

         
      </div>     
      
     
      </div>
    </div>
  )
}
export default CTA