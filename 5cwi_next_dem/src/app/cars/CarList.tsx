"use client";

import React, { useState } from "react";
import { Car } from "../lib/types/types";
import Image from "next/image";  // Image-Komponente von Next.js importieren

type CarListProps = {
    cars: Car[];
};

const CarList: React.FC<CarListProps> = ({ cars }) => {
    const [selectedCar, setSelectedCar] = useState<number | null>(null);

    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {cars.map((car, index) => (
                <div
                    key={car.motor.serialNumber}
                    onClick={() => setSelectedCar(index)}
                    className={`border rounded-lg p-4 w-72 text-center shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
                        selectedCar === index
                            ? "border-blue-500 bg-blue-100"
                            : "border-gray-300 bg-white"
                    }`}
                >
                    {/* Image-Komponente von Next.js für optimierte Bilder g */}
                    <Image
                        src={car.image}  // Bildquelle
                        alt={car.name}  // Alt-Text für das Bild
                        width={300}  // Bildbreite
                        height={200} // Bildhöhe
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">{car.name}</h2>  {/* Überschrift für den Car-Namen */}
                    <p className="text-gray-600">Type: {car.type}</p>
                    <p className="text-gray-600">Color: {car.color}</p>
                    <p className="text-gray-600">HP: {car.motor.hp}</p>
                </div>
            ))}
        </div>
    );
};

export default CarList;
