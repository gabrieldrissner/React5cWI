// Add this at the very top of your file
"use client";

import React, { useState, useEffect } from "react";
import { Car } from "../lib/types/types";
import CarList from "./CarList";

const cars: Car[] = [
    {
        name: "Bruchbude Vinz",
        type: "schrott",
        color: "rost",
        motor: {
            serialNumber: 1234,
            hp: 300,
        },
        image: "/images/9.jpg",
    },
    {
        name: "Ahmet Dönermobil",
        type: "schwer",
        color: "grau",
        motor: {
            serialNumber: 5678,
            hp: 350,
        },
        image: "/images/12.jpg",
    },
    {
        name: "Radic prime",
        type: "Mercedes",
        color: "Black",
        motor: {
            serialNumber: 9101,
            hp: 400,
        },
        image: "/images/4.jpg",
    },
    {
        name: "Asen",
        type: "licht kaputt",
        color: "schwarz",
        motor: {
            serialNumber: 1121,
            hp: 450,
        },
        image: "/images/8.jpg",
    },
    {
        name: "CarSuper",
        type: "Tesla",
        color: "Gray",
        motor: {
            serialNumber: 3141,
            hp: 500,
        },
        image: "/images/1.jpg",
    },
    {
        name: "Lightning Mquenn auf Wish",
        type: "Ferrari",
        color: "red",
        motor: {
            serialNumber: 7890,
            hp: 600,
        },
        image: "/images/10.jpg",
    },
];

export default function Cars() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

    useEffect(() => {
        const results = cars.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.color.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCars(results);
    }, [searchTerm]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6"></h1>
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search for cars..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                />
            </div>
            <CarList cars={filteredCars} />
        </div>
    );
}
