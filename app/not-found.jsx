import Link from "next/link";

export const metadata = {
  title: "404 - Page Not Found | Manan Kanani",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

const PageNotFound = () => {
  return (
    <section className=" w-full relative bg-lighttext z-40 ">
      <div className="max-w-[1280px] mx-auto py-20 max-sm:px-5 text-center flex flex-col items-center justify-center h-[78vh]">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl mb-5">Page Not Found</h2>
        <p>The resource requested could not be found on this server!</p>
        <Link
          href="/"
          className="bg-primary text-white py-3 px-5 rounded-lg mt-8"
        >
          Go back to Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
