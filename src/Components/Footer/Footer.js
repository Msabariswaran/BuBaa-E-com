import phone from "../../assets/Icons/phone-call.png";
import email from "../../assets/Icons/email.png";
import location from "../../assets/Icons/location.png";
import whatsapp from "../../assets/Icons/whatsapp.png";
import insta from "../../assets/Icons/instagram.png";
import youtube from "../../assets/Icons/youtube.png";
import linkedin from "../../assets/Icons/linkedin.png";
import goTop from  '../../assets/Icons/arrow-up.png'


const Footer = () => {
  return (
    <div class="flex  justify-evenly w-auto m-5 h-auto bg-pink-300">
      <div>
        <div class="w-96 p-8">
          <h1 class="text-xl font-extrabold text-pink-500">Bubba..</h1>
          <p class="text-black font-thin text-center">
            Welcome to our Kids Dress Store! We offer a wide range of adorable,
            comfortable, and stylish clothing for your little ones. Our
            collection includes everything from vibrant everyday wear to
            charming party outfits, all designed with love and care. We believe
            in providing high-quality clothes that are not only visually
            appealing but also soft and safe for your child’s skin. Our store is
            a one-stop destination for all your kids’ fashion needs. Come
            explore our colorful world of kids’ fashion! 😊
          </p>
        </div>
      </div>

    <div class="grid grid-flow-col ml-4 w-96 p-8">
        <div class='flex-col font-extralight mt-1 '>
        {/* <h1 class='text-xl font-semibold underline-offset'>Quick click</h1> */}
       <a href="/"> <p>HOME</p></a>
       <a href="/signup"> <p>SIGN UP</p></a> 
        <p>ABOUT</p>
        <p>SERVICES</p>
        <p>ORDERS</p>
        </div>
        <div class='p-3 ml-3' > 
            <h1 class=' font-semibold'>Feedback</h1>
            <input type="text" placeholder="enter your name" class='p-1 mt-3 "border-none rounded-xl pl-2'></input>
            <input type="email" placeholder="enter email" class='p-1 mt-3 "border-none  rounded-xl pl-2'></input>
            <textarea title="text" placeholder="enter your value feedback" class='p-1 mt-3 w-64  rounded-xl pl-2 "border-none'></textarea>
            <button class='ml-3 p-1 bg-pink-200 text-lg rounded-lg'>Submit</button>
        </div>
        <div></div>
    </div>


      <div class="w-96 p-8">
        <h1 class="text-3xl">
          Contact<span class="m-1 text-sm"> with</span> Us
        </h1>

        <div class='flex-1 m-5 font-extralight leading-relaxed'>
          <h1 class="leading-relaxed mt-2">Sabariswaran</h1>

          <p  class="flex m-2">
            <img src={phone} class=" w-5 h-5 mr-2 " />
              +91 92070 65670
          </p>
          <p class="flex m-2">
            <img src={email} class="flex w-5 h-5 mr-2" />
            sabariswaran22@gmail.com
          </p>
          <p class="flex m-2">
            <img src={location} class="flex w-5 h-5 mr-2 " /> Kochi
          </p>
        </div>

        <div class="flex w-48 justify-evenly m-5 ml-1">
          <div>
            <img src={whatsapp} class="flex w-6 h-8 rounded-xl " />
          </div>
          <div>
            <img src={insta} class="flex w-6 h-8 rounded-xl  " />
          </div>
          <div>
            <img src={youtube} class="flex w-6 h-8 rounded-xl  " />
          </div>
          <div>
            <img src={linkedin} class="flex w-6 h-8 rounded-xl " />
          </div>
        </div>
        
      </div>
      
      {/* <div class='w-8 h-8 rounded-xl bg-pink-400 fixed bottom-3 right-3 p-1'>
        <a href="/">
        <img src={goTop} class="flex w-6 h-6 rounded-xl" />
        </a>
        </div> */}


    </div>
 
  );
};

export default Footer;
