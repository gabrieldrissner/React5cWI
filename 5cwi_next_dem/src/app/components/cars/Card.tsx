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
                src={car.image} 
                alt={car.name} 
                width={400} 
                height={300} 
                className="w-full h-auto object-cover rounded-lg mb-4" 
            />
            <h2 className="font-bold text-3xl">{car.name}</h2>
            <div>{car.color}</div>
            <div>{isActive ? "active" : "inactive"}</div>
        </div>
    );
}
