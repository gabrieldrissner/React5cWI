import React from "react";
import { Car } from "../lib/types/types";
import CarList from "./CarList";

const cars: Car[] = [
    {
        name: "Super Car",
        type: "BMW",
        color: "Red",
        motor: {
            serialNumber: 1234,
            hp: 300,
        },
    },
    {
        name: "Speedster",
        type: "Audi",
        color: "Blue",
        motor: {
            serialNumber: 5678,
            hp: 350,
        },
    },
    {
        name: "Road King",
        type: "Mercedes",
        color: "Black",
        motor: {
            serialNumber: 9101,
            hp: 400,
        },
    },
    {
        name: "Thunderbolt",
        type: "Porsche",
        color: "White",
        motor: {
            serialNumber: 1121,
            hp: 450,
        },
    },
    {
        name: "Shadow Rider",
        type: "Tesla",
        color: "Gray",
        motor: {
            serialNumber: 3141,
            hp: 500,
        },
    },
];

export default function Cars() {
    return (
        <div>
            <CarList cars={cars} />
        </div>
    );
}
