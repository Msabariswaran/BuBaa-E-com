import image from '../../assets/image/Bbay3.jpg';



const Body=()=>{
    return(
        <div>
           <div className="m-16 bg-pink-400 h-max">
            <h1 class="flex font-semibold justify-center text-slate-100 font-serif text-2xl">Tranding</h1>
                <div class="flex flex-wrap m-6 bg-pink-100 justify-evenly">

                    <div class="w-72 h-96 m-8 bg-pink-400">
                        <div class="bg-pink-100 w-10/12 h-64 m-5 ">
                            <img src={image} alt="Description of image" class='' />
                        </div>
                        <div class=" ml-4">
                          
                
                        </div>
                    </div>



                    <div className="w-72 h-96 m-8 bg-pink-400">
                        <div className="bg-pink-100 w-10/12 h-64 m-5">
                        <img src={image} alt="Description of image" class='' />
                        </div>
                        <div className="in">
                        
                        </div>
                    </div>

                    <div className="w-72 h-96 m-8  bg-pink-400">
                        <div className="bg-pink-100 w-10/12 h-64 m-5">
                        <img src={image} alt="Description of image" class='' />
                        </div>
                        <div className="in">
                       
                        </div>
                    </div>

                    <div className="w-72 h-96 m-8  bg-pink-400">
                        <div className="bg-pink-100 w-10/12 h-64 m-5">
                        <img src={image} alt="Description of image" class='' />
                        </div>
                        <div className="in">
                       
                        </div>
                    </div>
                    
                    <div className="w-72 h-96 m-8  bg-pink-400">
                        <div className="bg-pink-100 w-10/12 h-64 m-5">
                        <img src={image} alt="Description of image" class='' />
                        </div>
                        <div className="in">
                      
                        </div>
                    </div>
                    <div className="w-72 h-96 m-8  bg-pink-400">
                        <div className="bg-pink-100 w-10/12 h-64 m-5">
                        <img src={image} alt="Description of image" class='' />
                        </div>
                        <div className="in">
                       
                        </div>
                    </div>
                   
                </div>
           </div>
        </div>
    );
};

export default Body;