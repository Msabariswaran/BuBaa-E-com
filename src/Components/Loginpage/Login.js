import { useState, useContext } from "react";
import { FirebaseContext } from "../../Context/Firebase";

import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Config";


const Login = () => {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState('')
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();

      
       auth
      .signInWithEmailAndPassword(emailid, password)
      .then(() => {
      navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div class="flex items-center justify-center ml-auto mt-28 mr-auto mb-28 bg-blue-100 h-96 w-96 rounded-3xl shadow-2xl ">
      {/* < src={image1} alt="Description of image" /> */}
      <div>
        <div class="login-heading ">
          <h1 class="font-bold text-center text-3xl text-slate-600 pt-10">
            Login
          </h1>
          <p class="font-semibold text-center mb-10">
            Enter login details to get access
          </p>
        </div>

        <form class="pl-5" onSubmit={handlelogin}>
          <label className="flex font-extralight ">
            Username or Email address
          </label>
          <input
            type="text"
            value={emailid}
            placeholder="username/Email Address"
            onChange={(e) => setEmailid(e.target.value)}
            class="w-64 rounded-md pl-2 text-sm h-6 border-none "
          />

          <label className="flex font-extralight mt-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            class="w-64 rounded-md pl-2 text-sm border-none h-6"
          />

          <div className="flex font-extralight justify-between mt-2">
            <input type="checkbox" id="keeplog" name="keep_log" />
            <label for="keeplog" class="text-sm">
              keepMe logged in{" "}
            </label>
            <a
              href="#"
              class="font-normal text-sm text-blue-700 underline  pl-8"
            >
              Forgotten Password
            </a>

            {error && <p class='text-red-500'>{error}</p>}
          </div>
        </form>

        <div class="flex pt-10 mb-10">
          <p class=" text-sm ">
            Don't have an account?
            <a href="/signup" class=" text-blue-700 underline">
              {" "}
              SignUp{" "}
            </a>
            here.{" "}
          </p>

          <button type='submit' class="bg-red-500 ml-6 p-1 text-sm rounded-md">Login</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
