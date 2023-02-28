import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

export default function NotAuthenticated() {
  const [startPage, setStartPage] = useState(true);
  const [registerPage, setRegisterPage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  return (
    <React.Fragment>
      <div className="flex flex-row w-screen h-full bg-gray-900">
        <div className="w-screen bg-gray-900 flex flex-col p-10 | xl:w-[70%]">
          <div className="font-poppins font-black text-xl text-white">
            <img
              src="https://i.imgur.com/n5Tq2jg.png"
              alt="wujulogo"
              className="h-14 w-14 rounded-xl"
            ></img>
          </div>
          <div className="text-white text-2xl font-poppins font-bold mx-auto mt-20 | md:text-5xl md:mt-28 | lg:text-6xl">
            WELCOME TO{" "}
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-indigo-500 | md:text-6xl | lg:text-7xl">
              WUJU
            </span>
          </div>
          <div className="text-gray-400 text-md mx-auto text-center mt-7 | md:mt-14 md:text-lg">
            Track your daily, weekly, and monthly expenses.
          </div>

          {startPage && (
            <div>
              <button
                onClick={() => {
                  setStartPage(false);
                  setRegisterPage(false);
                  setRegisterPage(true);
                }}
                className="block text-white text-md font-poppins font-semibold bg-indigo-700 mx-auto mt-20 py-3 rounded-lg w-full | md:w-1/2 md:text-lg md:mt-36 | lg:w-2/6"
              >
                Register
              </button>
              <button
                onClick={() => {
                  setStartPage(false);
                  setRegisterPage(false);
                  setLoginPage(true);
                }}
                className="block text-white text-md font-poppins font-semibold bg-indigo-700 mx-auto mt-5 py-3 rounded-lg w-full | md:w-1/2 md:text-lg | lg:w-2/6"
              >
                Login
              </button>
            </div>
          )}
          {registerPage && (
            <RegisterForm
              onIn={(val) => {
                setLoginPage(val);
                setRegisterPage(false);
                setStartPage(false);
              }}
            />
          )}
          {loginPage && (
            <LoginForm
              onOut={(val) => {
                setLoginPage(false);
                setRegisterPage(val);
                setStartPage(false);
              }}
            />
          )}
        </div>

        <div className="gradient hidden h-screen bg-gradient-to-b from-emerald-400 to-indigo-500 | xl:block lg:w-[30%]">
          <div className="text-white font-bold text-6xl pt-60 pb-32 px-24 ">
            Track all your expenses easily.
          </div>
          <div className="pl-44 pr-24 text-[0.95rem] text-gray-300 relative flex flex-row">
            <div className="w-10 border-t-[1px] border-white absolute top-5 left-28"></div>
            <p>
              "Beware of little expenses. A small leak will sink a great ship."
            </p>
          </div>
          <div className="pl-44 mt-4 flex flex-row items-center">
            <div>
              <img
                className="h-10 mr-3 rounded-full"
                alt="Benjamin Franklin"
                src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU4MDk5NzU4ODk0ODE5MDk3/franklin.jpg"
              ></img>
            </div>
            <p className="text-white font-poppins font-semibold text-sm">
              Benjamin Franklin
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
