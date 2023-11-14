import { useState } from "react";
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header";


const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div class="w-100% m-5 h-auto ">
        <div class="bg-pink-200 h-28 font-serif p-2">
          <h1 class="flex justify-center font-bold text-2xl pt-4"> Cart </h1>
          <a>
            <p class="flex justify-center font-thin text-sm pt-3">
              Home | Cart
            </p>{" "}
          </a>
        </div>

        <div class="flex bg-slate-50 h-auto max-w-5xl m-auto mt-5 ">
          <div class="flex m-5 bg-pink-200 w-100%">
            <div class="">
              <div class="flex w-96 ml-5">
                <h1>Product</h1>
              </div>
            </div>

            <div class="grid grid-flow-col ml-32 justify-center">
              <div class="flex w-32  ml-5">Price</div>
              <div class="flex w-32 ml-5">Quantity</div>
              <div class="flex w-32 ml-5">Total</div>
            </div>
          </div>
        </div>

        <div class="flex bg-slate-50 h-auto max-w-5xl m-auto mt-5 ">
          <div class="flex m-5 bg-pink-200 ml-5 w-100% items-center">
            <div class="">
              <div class="flex w-96 ml-5 ">
                <h1>Product Name</h1>
              </div>
            </div>

            <div class="grid grid-flow-col ml-32 justify-center m-auto h-auto items-center">
              <div class="flex w-32  ml-5">$ 22</div>
              <div class="flex w-32 ml-5">
                <div class="">
                  <div class=" flex w-20 m-2 bg-slate-300 border-slate-300 ">
                    <input
                      type="text"
                      value={count}
                      min={0}
                      max={10}
                      class="w-full p-1"
                    />
                    <div class="m-1">
                      <span
                        class="flex p-1"
                        onClick={() => {
                          setCount(count - 1);
                        }}
                      >
                        -
                      </span>
                      <span
                        class="p-1"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-32 ml-5">$ 256</div>
            </div>
          </div>
          <div><hr class="h-px  bg-gray-200 border-0 dark:bg-gray-700"/></div>
        </div>

        
        <div class="flex bg-slate-50 h-auto max-w-5xl m-auto  ">
          <div class="flex m-5 bg-pink-200 ml-5 w-100% items-center">
            <div class="">
              <div class="flex w-96 ml-5 ">
                <h1>Product Name</h1>
              </div>
            </div>

            <div class="grid grid-flow-col ml-32 justify-center m-auto h-auto items-center">
              <div class="flex w-32 ml-5">$ 22</div>
              <div class="flex w-32 ml-5">
                <div class="">
                  <div class=" flex w-20 m-2 bg-slate-300 border-slate-300 ">
                    <input
                      type="text"
                      id="1"
                      value={count}
                      min={0}
                      max={10}
                      class="w-full p-1"
                    />
                    <div class="m-1">
                      <span
                        class="flex p-1"
                        onClick={() => {
                          setCount(count - 1);
                        }}
                      >
                        -
                      </span>
                      <span
                        class="p-1"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex w-32 ml-5">$ 256</div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};
export default Cart;
