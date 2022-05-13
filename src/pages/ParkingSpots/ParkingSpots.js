import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ParkingSpots.scss'
import Card from '../../UI/Card';

const ParkingSpots = () => {

    const [parkingSpots, setParkingSpots] = useState('')

    useEffect(() => {
        async function fethParkingSpotsData() {
            return await axios.get('https://datos.madrid.es/egob/catalogo/202625-0-aparcamientos-publicos.json', {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            })
                .then(response => {
                    console.log("response", response);
                })
        }
        fethParkingSpotsData();
    }, []);

    return (
        <div className="parking-spots">
            <Card>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <h1>Hola</h1>
                <p>If it contains spaces, it is not legal HTML. You shouldn't expect this to work. Here is the relevant section of the HTML 4.01 specification.

                    [EDIT] As others have noted, you can get around this by assigning one or more class names to the div and using a class name to do the selection.</p>

            </Card>
        </div>

    )
}

export default ParkingSpots