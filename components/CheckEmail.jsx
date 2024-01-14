import Link from "next/link";

export default function CheckEmail() {
  return (
    <div className="text-center bg-orange-200 p-4 rounded-md mx-auto flex flex-col gap-2 max-w-[20rem]">
      <div className="bg-mainColor text-white w-fit p-4 rounded-full mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="text-slate-800 mb-10">
        Registration completed. Check your email and login.
      </h1>
      <Link
        href="/login"
        className="bg-mainColor text-white p-2 rounded-md hover:scale-105 transition"
      >
        Login
      </Link>
    </div>
  );
}
