import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function RegisterForm({ onIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="relative text-center">
          <i className="fa-solid fa-user absolute left-1/5 p-3 top-8 text-neutral-700 | md:top-[4.25rem]"></i>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            className="w-full p-3 pl-10 my-2 mt-7 rounded-md font-poppins font-light text-sm text-neutral-500 placeholder:text-neutral-500 bg-neutral-900 border border-neutral-700 | md:w-1/2 md:mt-16 | lg:w-2/6"
            placeholder="Username"
          />
        </div>

        <div className="relative text-center">
          <i className="fa-solid fa-envelope absolute left-1/5 p-3 top-5 text-neutral-700"></i>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="w-full p-3 pl-10 my-4 rounded-md font-poppins font-light text-sm text-neutral-500 placeholder:text-neutral-500 bg-neutral-900 border border-neutral-700 | md:w-1/2 | lg:w-2/6"
            placeholder="Email"
          />
        </div>

        <div className="relative text-center">
          <i className="fa-solid fa-lock absolute left-1/5 p-3 top-2 text-neutral-700"></i>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="w-full p-3 pl-10 my-2 rounded-md font-poppins font-light text-sm text-neutral-500 placeholder:text-neutral-500 bg-neutral-900 border border-neutral-700 | md:w-1/2 | lg:w-2/6"
            placeholder="Password"
          />
        </div>

        <button
          disabled={isLoading}
          className="block text-white font-semibold font-poppins bg-indigo-700 hover:bg-indigo-500 mx-auto mt-5 py-3 w-full rounded-lg | md:w-1/2 | lg:w-2/6"
        >
          Register
        </button>
        <p
          onClick={() => {
            onIn(true);
          }}
          className=" text-center text-neutral-500 mt-2 cursor-pointer hover:text-white"
        >
          Already have an Account? Log in
        </p>
        {error && (
          <div className="border text-red-600  border-red-500 bg-red-300 text-base text-center w-full mx-auto mt-4 p-1 | md:w-1/2 | lg:w-2/6">
            {error}
          </div>
        )}
      </form>
    </React.Fragment>
  );
}
