import Link from "next/link";
import React from "react";

export default function Menu() {
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
        <li>
          <Link
            href="/lernspiel"
            className="px-4 py-2 rounded-md transition duration-300 hover:bg-gray-700"
          >
            Lernspiel
          </Link>
        </li>
      </ul>
    </nav>
  );
}
