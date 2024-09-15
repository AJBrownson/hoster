/* eslint-disable react/no-unescaped-entities */
// import Link from "next/link";

export default function CreateNew() {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen">
        <div className="relative z-10 flex items-center justify-center w-full lg:w-1/2 px-2">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md border border-white/20">
            <form>
              <div className="mb-4">
                <label htmlFor="text" className="block text-sm text-gray-100 mb-2">
                  Posts
                </label>
                <textarea cols={20} className="w-full bg-gray-700"></textarea>
              </div>

              <button className="w-full bg-teal-700 text-white py-3 rounded-lg hover:bg-teal-800 mt-2">
                Create Post
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
