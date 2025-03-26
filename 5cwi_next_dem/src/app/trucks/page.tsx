import React from "react";

// Falls du Image, Menu oder Card nicht verwendest, entferne sie.
export default function Trucks() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient bg-[size:400%]"></div>
                <div className="relative px-12 py-8 bg-black rounded-lg leading-none flex items-center">
                    <div className="space-y-4">
                        <h2 className="text-white text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-purple-400 to-orange-400 animate-gradient bg-[size:400%]">
                           Was reimt sich auf günf? Juli hat in Englisch und Mathe ne 5!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
