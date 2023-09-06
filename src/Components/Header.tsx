const Header = () => {
   type btnFN = ()=> void

   const toggleClass:btnFN = ()=>{         
      
      document.getElementById('menu-btn')?.classList.toggle('open') 
      document.getElementById('menu')?.classList.toggle('flex')
      document.getElementById('menu')?.classList.toggle('hidden')
   }
  return (
    <div className="container mx-auto max-w-[1400px] text-white px-5 py-3 md:px-0">
      <div className="flex flex-row items-center justify-between ">

         {/* first div */}
         <div className="flex flex-row items-center space-x-16">
            {/* img logo */}
            <h1 className='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-4xl text-transparent'>
            PODIA
           </h1>

           <div className="hidden text-white md:flex md:flex-row md:space-x-9 items-center justify-center">
            <p>Features</p>
            <p>Examples</p>
            <p>Pricing</p>
            <p>Demo</p>
            <p>Resources</p>

           </div>

         </div>


         <div className="flex flex-row items-center space-x-8">
          
         {/* second div */}
         <div className="relative flex flex-row items-center space-x-5">
            <p>Login</p>
            <div className="hidden md:inline-block">
               <button className='relative inline-flex h-10 w-30 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
             <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
            Sign up free
            </span>
           </button>
            </div>                                 
             
         </div>


         <div className="md:hidden">
            <button  className='z-40 block hamburger md:hidden focus:outline-none ' id='menu-btn' type='button' onClick={toggleClass}>
               <span className='hamburger-top'></span>
               <span className='hamburger-middle'></span>
               <span className='hamburger-bottom'></span>

            </button>
         </div>


         </div>



         {/* mobile menu div */}
          

         <div id="menu" className="absolute hidden p-8 rounded-lg bg-white left-6 right-6 top-14 z-100 shadow-2xl">
           <div className="flex flex-col items-center justify-center w-full space-y-6  text-black rounded-sm">
           <p>Features</p>
            <p>Examples</p>
            <p>Pricing</p>
            <p>Demo</p>
            <p>Resources</p>
            <button className='relative inline-flex h-10 w-36 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
             <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
            Sign up free
            </span>
           </button>
         </div>

         </div> 
         
      </div>
      



    </div>
  )
}
export default Header