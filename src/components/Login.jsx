import React from "react";
export default function Login() {
  return (
    <div className="bg-gray-400 ">
      <div className="w-full h-screen flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-center items-center container  ">
          <form className="w-full m-5 p-5 md:w-32 lg:w-1/3 bg-white rounded-lg font-sans shadow-2xl">
            <div className=" text-indigo-600 mb-4 mt-4 ml-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </div>
            <h2 className="text-xl font-italic text-center mb-4 mr-5">
              Enter your credentials to access your account.
            </h2>

            <div className="px-12 pb-10">
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="User ID"
                    className="-mx-9 px-4 mt-6 w-full border rounded-lg  py-2 text-gray-700 focus:outline-none bg-white"
                  />
                </div>
              </div>
              <div className="w-full mb-2">
                <div className="flex items-center">
                  <input
                    type="password"
                    placeholder="Password"
                    className="-mx-9 px-4 w-full mt-6 border rounded-lg py-2 text-gray-700 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-indigo-600 text-gray-100 mt-5 focus:outline-none hover:bg-indigo-700"
              >
                Sign in
              </button>
              <div className="ml-32">
                <a
                  href="/signup"
                  className="text-xs font-bold text-indigo-400 float-left mb-5 mt-5 hover:text-indigo-600"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-6 overflow-hidden">
          <p className="text-center truncate">
            Don't have account?
            <a
              href="/signup"
              className="text-indigo-400 font-bold ml-2 hover:text-indigo-600"
            >
              Signup
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
