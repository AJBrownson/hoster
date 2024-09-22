


export default function NewPostForm() {
    return (
      <div className="p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">Post Title</label>
            <input
              type="text"
              placeholder="Enter the title of your post"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-200">Content</label>
            <textarea
              rows={4}
              placeholder="Write your post content here"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-200">Post Image</label>
            <input type="file" className="mt-1 block w-full" />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-200">Schedule Date</label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
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