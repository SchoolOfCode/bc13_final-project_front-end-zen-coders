import React from "react";

export default function Auth() {
  return (
    <div>
      <div>
        <a
          className="mt-4 inline-block px-4 py-2 text-2xl font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black lg:mt-0"
          href="/api/auth/login"
        >
          Login
        </a>
      </div>
      <div>
        <a
          className="mt-4 inline-block px-4 py-2 text-2xl font-bold leading-none text-indigo-600 hover:border-transparent hover:text-black lg:mt-0"
          href="/api/auth/logout"
        >
          Logout
        </a>
      </div>
    </div>
  );
}
