import React from "react";

export default function Home() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text animate-pulse transform hover:scale-110 transition-transform duration-300 p-4 border-4 border-purple-500 rounded-xl shadow-lg hover:shadow-xl"> Nate hat diese Zeile geschrieben</div>
        <div className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text animate-bounce transform hover:rotate-4 hover:scale-130 transition-transform duration-500 p-12 border-8 border-blue-400 rounded-8xl shadow-lg hover:shadow-8xl">
    Gabriel hat den Code gemerged
</div>

      </div>
    </div>
  );
}
