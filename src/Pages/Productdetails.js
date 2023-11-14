import starts from '../assets/Icons/3-stars.png'
import croptop from '../assets/image/new1.webp'
import share from '../assets/Icons/share.png'

const Productdetails=()=>{
    return(
<div class="container m-auto">
    
<div class='bg-pink-200 h-28 m-3 font-serif mt-24'>
            <h1 class='flex justify-center font-bold text-2xl pt-4'>Product Details</h1>
           <p class='flex justify-center font-thin text-sm pt-3'>
           <a href='/'>Home </a>  | Product Details</p>
          </div>
    <div class='flex w-auto m-10 bg-pink-200' >

        <div class='w-60 m-4'>
            <img src={croptop} />
          
        </div>
        <div class='w-96 m-4'>
            <div class='p-3'>
            <h1 class='text-3xl font-bold '>Cuttie Gown </h1>
            <h1 class='text-sm font-mono mt-2 pl-2 '>by aura</h1>
            </div>
            <div class='p-3'>
                <h1 class='text-xl font-semibold'>$ 50.00</h1>
                <p class='text-sm'><img src={starts} class='w-10'/>  (120 Review)</p>
            </div>
            <div class='p-3 flex'>
                <button class='w-32 p-2 rounded-xl text-white bg-pink-500 hover:bg-pink-600'>Add To Cart</button>
               <img src={share} class='w-10 ml-4 bg-pink-300 p-2 rounded-2xl' />
            </div>
        </div>
    </div>
    
</div>
    )
};
export default Productdetails;