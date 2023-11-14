import delivery from '../assets/Icons/free-shipping.png';
import paysecure from '../assets/Icons/secure-payment.png'
import tfhours from '../assets/Icons/24-hours.png'
import moneyback from '../assets/Icons/money-back-guarantee.png'

const Services=()=>{
    return(
        <div class="m-5 h-auto w-auto my-28">
           <div className="grid grid-cols-4 m-5 "  >
                <div class='flex-1 m-auto mb-3 items-center p-7 border-2 
                rounded-lg shadow-lg '> 
                    <img src={delivery} class='w-10 m-auto ' />
                    <h1 class="text-xl text-center ">Fast & Free Delivery</h1>
                    <p class="text-sm">Free delivery on all orders</p>
                </div>
                <div class='flex-1 m-auto mb-3 items-center p-7 border-2 rounded-lg shadow-lg'>
                    <img src={paysecure} class='w-10  m-auto '/>
                    <h1 class="text-xl text-center ">Secure Payment</h1>
                    <p class="text-sm">Free delivery on all orders</p>
                </div>
                <div class='flex-1 m-auto items-center p-5 py-8 border-2 rounded-lg shadow-lg'>
                    <img src={moneyback} class='w-10   m-auto'/>
                    <h1 class="text-xl text-center ">Money Back Guarantee</h1>
                    <p class="text-sm">Free delivery on all orders</p>
                </div>
                <div class='flex-1 m-auto items-center p-7 border-2 rounded-lg shadow-lg'>
                    <img src={tfhours} class='w-10  m-auto' />
                    <h1 class="text-xl text-center ">Online Support</h1>
                    <p class="text-sm">Free delivery on all orders</p>
                </div>
           </div>
        </div>
    )
};
export default Services;