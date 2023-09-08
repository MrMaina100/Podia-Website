import cartSvg from '../Images/bx-cart.svg'
import loginSvg from '../Images/bx-log-in.svg'
import uploadSvg from '../Images/bx-cloud-upload.svg'

const ShowCase = () => {
  return (
    <div className="container mx-auto max-w-[1400px] pt-20 px-6 md:px-0">
      <div className="flex flex-col space-y-5">
         {/* first div */}
         <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-2xl md:text-3xl text-white max-w-4xl text-center font-bold">All you have to do is make the product. Podia takes care of the details for you.</h1>
            <p className="text-white max-w-4xl text-center">Podia lets you make your sales page, take payments, and give your customers access all in one place. Host and sell your products without needing to figure out a handful of new tools.</p>
         </div>

         {/* second div */}
         <div className="flex flex-col items-start space-y-4 md:flex-row md:space-x-4 md:space-y-0 text-white pt-3 pb-10">
            {/* first content div */}
            <div className="flex flex-col items-center text-center space-y-3 max-w-lg p-3">
               <img src={cartSvg} alt="" />
               <h2 className='font-bold'>Checkout and sales are handled for you</h2>
               <p>You don’t have to figure out a bunch of tools or website embeds. Just connect a payment provider and your Podia site takes care of payments for you.</p>

            </div>

            {/* second content div */}
            <div className="flex flex-col items-center text-center space-y-3 max-w-lg p-3">
               <img src={loginSvg} alt="" />
               <h2 className='font-bold'>Your customers log in, and your products are there for them</h2>
               <p>Your Podia site handles access to products for you. Everything is in one place. When your customers buy a product, they get a log in. After that, they can see all the products they’ve bought from you.</p>

            </div>

            {/* third content div */}
            <div className="flex flex-col items-center text-center space-y-3 max-w-lg p-3">
               <img src={uploadSvg} alt=""/>
               <h2 className='font-bold'>Upload your product. Make your sales page. Done.</h2>
               <p>You could sell a digital product by this afternoon. Podia handles hosting, sales pages, checkout, and delivery. All you need is something to sell.</p>
            </div>
         </div>

      
      </div>

    </div>
  )
}
export default ShowCase