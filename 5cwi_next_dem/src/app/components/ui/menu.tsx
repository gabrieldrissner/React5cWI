import Link from "next/link";
import React from "react";

type Props = {};

export default function Menu({}: Props) {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md rounded-lg">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link
            href="/"
            className="px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/cars"
            className="px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700"
          >
            Cars
          </Link>
        </li>
        <li>
          <Link
            href="/trucks"
            className="px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700"
          >
            Trucks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
