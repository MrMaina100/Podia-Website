import {AiFillGithub} from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="container mx-auto max-w-[1400px] pt-20 px-6 md:px-0">
      <div className="flex flex-col  space-y-20 text-white">
         <div className="flex justify-between">
            {/* firstdiv */}
            <div className="flex flex-col space-y-2">
               <h1 className='bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-4xl text-transparent'>
             PODIA
             </h1>
              <p className="text-sm">Get everything you need in one place that you own</p>
            </div>

            {/* big second div */}

            <div className="hidden md:flex md:flex-row space-x-16 justify-between text-center text-xs">
               <div className=" hidden flex-col  space-y-4 md:block">
               <h3 className="font-bold text-lg">About</h3>
               <p>About</p>
               <p>Pricing</p>
               <p>Support</p>
               <p>Forums</p>
            </div>

            {/* third div */}
            <div className="hidden flex-col space-y-4 md:block">
               <h3 className="font-bold text-lg">Features</h3>
               <p>Online Courses</p>
               <p>Downloads</p>
               <p>Webinars</p>
               <p>Coaching</p>
            </div>

            {/* 4th div */}
            <div className="hidden flex-col space-y-4 md:block">
               <h3 className="font-bold text-lg">Socials</h3>
               <p>Follow on X</p>
               <p >Sign up to our Newsletter</p>
               <p>Follow on Instagram</p>
               <p >Join on Discord</p>
            </div>


               

            </div>

            {/* second div */}
            
         </div>

         <div className='pb-8 '>
            <hr />
            <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5 justify-between items-center pt-2">
                <p>Designed by Derrick Maina</p>

                <div className="flex flex-row space-x-3">
                 <a href="">
                  <AiFillGithub/>
                  </a> 
                  <a href=""> <FaXTwitter/> </a>

                  <a href=""> <AiFillLinkedin/> </a>
                </div>
                
            </div>

         </div>



      </div>

    </div>
  )
}
export default Footer