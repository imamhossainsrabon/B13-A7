import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6FBF8] px-4 my-10">
      <div className="w-full max-w-2xl rounded-3xl border border-[#DDEEE5] bg-white p-8 text-center shadow-lg md:p-12">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F5EE] text-3xl font-bold text-[#244D3F]">
          404
        </div>
        <h1 className="text-3xl font-bold text-[#244D3F] md:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#5E7A6D] md:text-base">
          Sorry, the page you are looking for does not exist, may have been moved,
          or the link might be broken.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="rounded-full bg-[#244D3F] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1d3d32]">
            Go Home
          </Link>
          <Link href="/timeline" className="rounded-full border border-[#244D3F] px-6 py-3 text-sm font-medium text-[#244D3F] transition hover:bg-[#F1F7F4]">
            Go Timeline
          </Link>
        </div>
        <button className="mt-6 text-sm font-medium text-[#5E7A6D] transition hover:text-[#244D3F]">Go Back</button>
      </div>
    </div>
  );
};

export default NotFoundPage;