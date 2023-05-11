export default async function NotFound() {
  return (
    <div className="flex justify-center items-center text-white h-[calc(100vh-64px)]">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight sm:pr-6 sm:mr-6 sm:border-r sm:border-[#333]">
        404
      </h1>
      <h2 className="text-lg">This page could not be found.</h2>
    </div>
  );
}
