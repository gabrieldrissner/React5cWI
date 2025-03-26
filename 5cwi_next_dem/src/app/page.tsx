import React from "react";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        Das ist der Inhalt
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text animate-pulse transform hover:scale-110 transition-transform duration-300 p-4 border-4 border-purple-500 rounded-xl shadow-lg hover:shadow-xl"> Nate hat diese Zeile geschrieben</div>
      </div>
    </div>
  );
}
