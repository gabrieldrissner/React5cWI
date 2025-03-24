import { Car } from "@/app/lib/types/types";
import React, { useState } from "react";

type Props = { car: Car };

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`shadow p-4 hover:cursor-pointer border-4 rounded-4xl ${isActive ? "bg-amber-200" : "bg-blue-200"}`}
            onClick={() => setIsActive(!isActive)}
        >
            <h2 className="font-bold text-3xl">{car.name}</h2>
            <div>{car.color}</div>
            <div>{car.image}</div>
            <div>{isActive ? "active" : "inactive"}</div>
        </div>
    );
}
