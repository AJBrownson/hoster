export default function Campaigns() {
  const allCamps = 20;
  return (
    <>
    <section className="flex flex-wrap gap-10">
      <div className="border border-amber-600 w-80 text-center h-40 flex flex-col justify-center items-center p-4">
        <h1 className="text-xl xl:text-2xl font-semibold mb-5">
          Total Campaigns
        </h1>
        <p>{allCamps}</p>
      </div>

      <div className="border border-amber-600 w-80 text-center h-40 flex flex-col justify-center items-center p-4">
        <h1 className="text-xl xl:text-2xl font-semibold mb-5">
          Current Campaigns
        </h1>
        <p>View</p>
      </div>
      </section>
    </>
  );
}
