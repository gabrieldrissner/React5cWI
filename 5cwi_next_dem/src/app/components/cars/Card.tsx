import React, { useState } from "react";
import { Car } from "@/app/lib/types/types";
import Image from "next/image"; // Import Image from next/image for optimization

type Props = { car: Car };

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`shadow p-4 hover:cursor-pointer border-4 rounded-4xl ${
                isActive ? "bg-amber-200" : "bg-blue-200"
            }`}
            onClick={() => setIsActive(!isActive)}
        >
            {/* Ensure the Image component is used here */}
            <Image
                src={car.image} // The image URL should be passed here
                alt={car.name} // Alternative text for accessibility
                width={400} // Adjust the width as necessary
                height={300} // Adjust the height as necessary
                className="w-full h-auto object-cover rounded-lg mb-4" // Add styling as needed
            />
            <h2 className="font-bold text-3xl">{car.name}</h2>
            <div>{car.color}</div>
            <div>{isActive ? "active" : "inactive"}</div>
        </div>
    );
}
