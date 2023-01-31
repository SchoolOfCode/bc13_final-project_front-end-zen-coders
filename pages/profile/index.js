import React from "react";
import Link from "next/link";

export default function Index({ users }) {
  return (
    <div>
      <h1>Testing</h1>
      <Link className="p-15" href="/explore">
        Valid user not found. Please return to homepage
      </Link>
    </div>
  );
}

