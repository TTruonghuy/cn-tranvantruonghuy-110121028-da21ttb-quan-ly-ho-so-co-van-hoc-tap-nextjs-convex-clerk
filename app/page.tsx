import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="false"
        >
         
        </div>
        <div className="mx-auto max-w-2xl py-8">
          <div className="text-center">
            <Image
              src="/logo_set.png"
              width="800"
              height="800"
              alt="tvu-set logo"
              className="absolute top-[30%] left-[20%] inset-0 object-cover opacity-5 -z-10"
            />

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The easiest way to upload and share files with your company
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Make and account and start managing your files in less than a
              minute.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard/files"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          
        </div>
      </div>
    </div>
  );
}