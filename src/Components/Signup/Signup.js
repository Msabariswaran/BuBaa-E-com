import { useState, useContext } from "react";
import { FirebaseContext } from "../../Context/Firebase";
// import {app ,auth , db} from "../../Firebase/Config"

const Signup = () => {
  const [username, setUsername] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const { app, auth, db } = useContext(FirebaseContext);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!username || !emailId || !password) {
    //   setErrorMsg("Fill all fields");
    //   return;
    // }
    // setErrorMsg("");
    
    auth.createUserWithEmailAndPassword(emailId, password)
      .then((result) => {
        // result.user.updateProfile({ displayName: username });
        console.log(result);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div class="flex items-center justify-center ">
        <div className=" bg-blue-100 w-fit  h-auto m-auto mt-24 rounded-2xl shadow-2xl">
          <h1 class="text-center text-2xl font-extrabold pt-5">Sign Up</h1>
          <p class="text-center font-bold  pt-4">
            Create your account to get full access
          </p>
          <div>
            <h1>{setErrorMsg("")}</h1>
            <form class="ml-16 mr-16 mt-6" onSubmit={handleSubmit}>
              <label class="flex font-thin  ">Full Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                class="w-64 rounded-md pl-2 text-sm h-6 border-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label class="flex font-thin ">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                class="w-64 rounded-md pl-2 text-sm h-6 border-none "
                value={emailId}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label class="flex font-thin ">Mobile</label>
              <input
                type="number"
                placeholder="Enter Mobilenumber"
                class="w-64 rounded-md pl-2 text-sm h-6 border-none "
                value={mobilenumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />

              <label class="flex font-thin ">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                class="w-64 rounded-md pl-2 text-sm h-6 border-none "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
          </div>
          <div class="flex justify-evenly mt-5 p-5 ">
            <p class="text-sm">
              Aleady have an account?{" "}
              <a href="/login" className=" text-blue-700 underline">
                Login
              </a>
            </p>
            <button
              class="text-sm bg-green-300 p-1 rounded-lg "
              onClick={handleSubmit}
              type="Submit"
              // value={submit}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
