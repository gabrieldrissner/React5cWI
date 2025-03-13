import React from 'react'
import Card from '../components/cars/Card';
import { Car } from '../lib/types/types';

type Props = {}

const car: Car = {
    "name": "Super Car",
    "type": "BMW", 
    "color": "red",
    "motor": {
        "serialNumber": 1234,
        "hp": 300,
    },
};

export default function Cars({}: Props) {
    return (
        <div>
<Card  car={car}/>
        </div>
    );
}