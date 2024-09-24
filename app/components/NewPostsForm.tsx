import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function NewPostForm() {
    return (
      <div className="p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>

        <div className="mb-10">
          <h1 className="text-base md:text-xl font-semibold mb-3 ">Choose a channel to connect and make scheduled posts</h1>
          <div className="flex gap-x-5">
            <button className="w-36 p-4 flex flex-col justify-center items-center gap-y-2 border border-amber-600">
              <FaFacebook size={20} />
              <h1 className="text-base font-semibold">Facebook</h1>
              <p className="text-xs">Page or Group</p>
            </button>

            <button className="w-36 p-4 flex flex-col justify-center items-center gap-y-2 border border-amber-600">
              <FaXTwitter size={20} />
              <h1 className="text-base font-semibold">Twitter / X</h1>
              <p className="text-xs">Profile</p>
            </button>
          </div>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">Post Title</label>
            <input
              type="text"
              placeholder="Enter the title of your post"
              className="mt-1 block w-full border border-gray-300 bg-black rounded-md p-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-200">Content</label>
            <textarea
              rows={4}
              placeholder="Write your post content here"
              className="mt-1 block w-full border border-gray-300 bg-black rounded-md p-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-200">Post Image</label>
            <input type="file" className="mt-1 block" />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-200">Schedule Date</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 bg-black rounded-md p-2"
            />
          </div>
  
          <button
            type="submit"
            className="bg-amber-600 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-900 transition"
          >
            Submit Post
          </button>
        </form>
      </div>
    );
  }  