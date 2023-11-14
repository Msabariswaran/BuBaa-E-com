import Header from "../Components/Header/Header";
import image from '../assets/image/Baby2.jpg'

const Forbabies=()=>{
    return(
        <div>
            <Header/>
            
          <div class='bg-pink-200 h-28 font-serif mt-24'>
            <h1 class='flex justify-center font-bold text-2xl pt-4'> Baby</h1>
            <a><p class='flex justify-center font-thin text-sm pt-3'>Home  |  Baby</p>  </a>
          </div>
           
           
        <div className="flex m-4 mt-5 bg-pink-400 h-max">
        <div class=' w-96 m-3' >
                <h1 class="font-semibold justify-center text-slate-100 font-serif text-2xl">Top Seller</h1>
                        <hr/>
                        <ul class='m-2'>
                     <li><input type="checkbox" class='w-3 '/>Winterewar</li>
                     <li><input type="checkbox" class='w-3'/>Bodysuits</li>  
                     <li><input type="checkbox" class='w-3 '/>Clothing sets</li> 
                     <li><input type="checkbox" class=' w-3 '/>T-shirts</li>  
                     <li><input type="checkbox" class='w-3'/>Tops</li> 
                     <li><input type="checkbox" class=' w-3 '/>Bottom</li> 
                     <li><input type="checkbox" class=' w-3 '/>Baby Essentials</li> 
                   
                        </ul>
                    
                    <div class='mt-6 '> 
                        <h1 class='font-semibold justify-center text-slate-100 font-serif text-2xl'>Filter</h1>
                        <hr/>
                        <ul class='m-2'> 
                      <li><input type="radio"  id='1' class=' w-3'/>Price</li>  
                        <li><input type="radio"  id="2"   class=' w-3'/>Brand</li>
                        <li><input type="radio" id="3" class=' w-3'/> Low to High</li>
                        <li> <input type="radio" id='4' class=' w-3'/>High to low</li>
                       </ul>
                      
                    </div>
                    </div>

             <div class="flex flex-wrap m-6 bg-pink-300 justify-evenly">

                 <div class="w-72 h-96 m-8 bg-pink-400">
                     <div class="bg-pink-100 w-10/12 h-64 m-5 mb-1">
                        <img src={image} alt="Description of image" class="h-64 w-full" /> 
                     </div>
                     <div class=" from-neutral-500 ml-4 ">
                         <h3 class=' flex-1truncate text-lg p-1'>Pink gown</h3>
                         <p class='text-xl bottom-3'>$ 22</p>
                        <div class='flex ml-40'> 
                        <button class=' bg-slate-50'>Add cart</button>
                        </div>
                     </div>
                 </div>



                 <div class="w-72 h-96 m-8 bg-pink-400">
                     <div class="bg-pink-100 w-10/12 h-64 m-5 mb-1">
                       <img src={image} alt="Description of image" class="h-64 w-full"/> 
                     </div>
                     <div class=" from-neutral-500 ml-4 ">
                         <h3 class=' flex-1truncate text-lg p-1'>Pink gown</h3>
                         <p class='text-xl bottom-3'>$ 22</p>
                        <div class='flex ml-40'> 
                        <button class=' bg-slate-50'>Add cart</button>
                        </div>
                     </div>
                 </div>


                  <div class="w-72 h-96 m-8 bg-pink-400">
                     <div class="bg-pink-100 w-10/12 h-64 m-5 mb-1">
                     <img src={image} alt="Description of image" class="h-64 w-full" /> 
                     </div>
                     <div class=" from-neutral-500 ml-4 ">
                         <h3 class=' flex-1truncate text-lg p-1'>Pink gown</h3>
                         <p class='text-xl bottom-3'>$ 22</p>
                        <div class='flex ml-40'> 
                        <button class=' bg-slate-50'>Add cart</button>
                        </div>
                     </div>
                 </div>

                 <div class="w-72 h-96 m-8 bg-pink-400">
                     <div class="bg-pink-100 w-10/12 h-64 m-5 mb-1">
                     <img src={image} alt="Description of image" class="h-64 w-full" /> 
                     </div>
                     <div class=" from-neutral-500 ml-4 ">
                         <h3 class=' flex-1truncate text-lg p-1'>Pink gown</h3>
                         <p class='text-xl bottom-3'>$ 22</p>
                        <div class='flex ml-40'> 
                        <button class=' bg-slate-50'>Add cart</button>
                        </div>
                     </div>
                 </div>

                 
                 <div class="w-72 h-96 m-8 bg-pink-400">
                     <div class="bg-pink-100 w-10/12 h-64 m-5 mb-1">
                     <img src={image} alt="Description of image" class="h-64 w-full" /> 
                     </div>
                     <div class=" from-neutral-500 ml-4 ">
                         <h3 class=' flex-1truncate text-lg p-1'>Pink gown</h3>
                         <p class='text-xl bottom-3'>$ 22</p>
                        <div class='flex ml-40'> 
                        <button class=' bg-slate-50'>Add cart</button>
                        </div>
                     </div>
                 </div>

                 <div class="w-72 h-96 m-8 bg-pink-400">
                     <div class="bg-pink-100 w-10/12 h-64 m-5 mb-1">
                     <img src={image} alt="Description of image" class="h-64 w-full" /> 
                     </div>
                     <div class=" from-neutral-500 ml-4 ">
                         <h3 class=' flex-1truncate text-lg p-1'>Pink gown</h3>
                         <p class='text-xl bottom-3'>$ 22</p>
                        <div class='flex ml-40'> 
                        <button class=' bg-slate-50'>Add cart</button>
                        </div>
                     </div>
                 </div>

                
             </div>
        </div>
     </div>
    )
};

export default Forbabies;