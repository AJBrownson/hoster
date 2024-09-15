/* eslint-disable react/no-unescaped-entities */



export default function TotalPosts() {
    const allPosts = 200
    const dailyPosts = 5
    return (
        <section className="flex flex-wrap gap-10">
        <div className="border border-amber-600 w-80 text-center h-40 flex flex-col justify-center items-center p-4">
            <h1 className="text-xl xl:text-2xl font-semibold mb-5">Total Posts</h1>
            <p>{allPosts}</p>
        </div>

        <div className="border border-amber-600 w-80 text-center h-40 flex flex-col justify-center items-center p-4">
            <h1 className="text-xl xl:text-2xl font-semibold mb-5">Today's Posts</h1>
            <p>{dailyPosts}</p>
        </div>

        <div className="border border-amber-600 w-80 text-center h-40 flex flex-col justify-center items-center p-4">
            <h1 className="text-xl xl:text-2xl font-semibold mb-5">This Week's Posts</h1>
            <p>{dailyPosts}</p>
        </div>

        <div className="border border-amber-600 w-80 text-center h-40 flex flex-col justify-center items-center p-4">
            <h1 className="text-xl xl:text-2xl font-semibold mb-5">This Month's Posts</h1>
            <p>{dailyPosts}</p>
        </div>
        </section>
    )
}