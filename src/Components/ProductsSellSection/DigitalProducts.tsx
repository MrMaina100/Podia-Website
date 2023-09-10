import digitalDownload from '../../Images/digital_products-downloads.png'
import downloadprofile from '../../Images/pexels-anna-nekrashevich-8993561.jpg'

const DigitalProducts = () => {
  return (
    <div className="container mx-auto max-w-[1400px] pt-20 px-6 md:px-0">
      <div className="flex flex-col space-y-5">
         <div className="flex flex-col-reverse items-start justify-between md:pt-20 space-y-6 md:flex-row md:space-x-5 md:space-y-0">
            {/* first div */}
            <div className="flex flex-col space-y-5">
               <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-md text-transparent'>
                  DIGITAL PRODUCTS 
             
               </span>
               <h1 className="text-3xl md:text-4xl md:max-w-xl text-white">Ebooks, templates, and any file type you can think of
               </h1>

               <p className="text-md max-w-md text-white">
                  Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type.
                  
               </p>

               <div className="flex space-x-2 items-center">
                  <span className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-xl text-transparent'>
                    Learn more about downloads
                  </span>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="#8678f9" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
               </div>

            </div>

            {/* second div  the image*/}
            <div className="pb-5 md:w-2/4 ">
               <img src={digitalDownload} alt="" />
            </div>
      

         </div>

         {/* second div, the comment */}
         
           <div className="flex flex-col items-center text-center  space-y-4 pt-5">
            <div className=" w-16 h-16 rounded-full overflow-hidden">
                <img src={downloadprofile} alt="" className='rounded-full'  />
            </div>

            <p className='text-sm max-w-xl text-white'>
              I didn’t have to stress about technical details or custom coding. Using Podia made selling my first eBook quick, efficient, and fun.
            </p>
            <p className='text-xs text-gray-400'>-Ali ZamZam, Plant-based food bloggers</p>
           
         </div>

      </div>
       


    </div>
  )
}
export default DigitalProducts