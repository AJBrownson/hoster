/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import BG from "@/public/formBg.jpg";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:justify-end lg:flex-row bg-black relative">
     
      <div className="absolute inset-0 z-0">
        <Image
          src={BG}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center w-full lg:w-1/2 px-2">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md border border-white/20">
          <h2 className="text-3xl text-white font-bold mb-6">Sign In</h2>

          <button className="w-full bg-white text-black py-2 rounded-lg flex items-center justify-center mb-4">
            {/* <img src="/icons/google.svg" alt="Google" className="w-5 h-5 mr-2" /> */}
            Sign in with Google
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-100" />
            <span className="text-gray-100 mx-4">OR</span>
            <hr className="flex-grow border-gray-100" />
          </div>

          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-100">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3 mt-2"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm text-gray-100">Password</label>
              <input
                type="password"
                id="password"
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg p-3 mt-2"
                placeholder="Password"
              />
            </div>

            <button className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 mt-2">
              Sign In
            </button>
          </form>

          <p className="text-sm text-center text-gray-100 mt-3">
            Don't Have An Account? <Link href="/register" className="text-teal-400 underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
