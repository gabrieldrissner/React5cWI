import { ReactNode } from "react";

export interface Motor {
    serialNumber: number;
    hp: number;
}

export interface Car {
    image: ReactNode;
    name: string;
    type: string; 
    color: string;
    motor: Motor; 
}
