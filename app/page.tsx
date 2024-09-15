// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-center mt-16 px-4">
    <h1 className="text-2xl xl:text-7xl font-bold mb-4">
      Totally awesome AI social media scheduling tool
    </h1>
    <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
      Hoster makes it easy to manage your social media posts, build an audience, capture leads, and grow your business.
    </p>

    {/* Social Media Icons */}
    {/* <div className="flex justify-center space-x-4 my-6">
      <a href="#" className="text-gray-400 hover:text-white">
        <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <img src="/icons/dribbble.svg" alt="Dribbble" className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <img src="/icons/tiktok.svg" alt="TikTok" className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white">
        <img src="/icons/pinterest.svg" alt="Pinterest" className="w-6 h-6" />
      </a>
    </div> */}

    {/* Call to Action Button */}
    <Link href="/register">
    <button className="bg-gray-200 text-black px-8 py-3 rounded-full hover:bg-amber-600 hover:text-white">
      Get Started
    </button>
    </Link>
  </section>
  );
}
