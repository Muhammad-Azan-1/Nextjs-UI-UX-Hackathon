import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="flex bg-gray-100 justify-center items-center h-screen w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
          <p className="text-3xl text-red-600 font-semibold mb-4">Order Cancelled</p>
          <p className="text-lg text-gray-600 mb-6">We`&lsquo;`re sorry, but your order has been cancelled.</p>
          <Link
            href="/checkout"
            className="text-lg text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            Go back to checkout and pay again
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
