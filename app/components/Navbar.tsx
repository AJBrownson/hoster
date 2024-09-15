import Link from "next/link";


export default function Navbar() {
    return (
        <>
        <nav className="flex justify-between items-center w-full px-8 py-4">
        <div className="flex items-center">
          <div className="text-2xl font-bold flex items-center">
            <span className="bg-white text-black rounded-full p-2 mr-2">H</span>
            <span>hoster</span>
          </div>
        </div>
        <ul className="flex space-x-10">
          <li><a href="#" className="text-white">Features</a></li>
          {/* <li><a href="#" className="text-white">Channels</a></li> */}
          <li><a href="#" className="text-white">Blog</a></li>
          {/* <li><a href="#" className="text-white">Pricing</a></li> */}
          <li><a href="#" className="text-white">FAQ</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link href="/login">
          <button className="border border-white px-4 py-2 rounded-full hover:border-amber-600">Log In</button>
          </Link>
          <Link href="/register">
          <button className="bg-gray-200 text-black px-6 py-2 rounded-full  hover:bg-amber-600 hover:text-white">Get Started</button>
          </Link>
        </div>
      </nav>
        </>
    )
}