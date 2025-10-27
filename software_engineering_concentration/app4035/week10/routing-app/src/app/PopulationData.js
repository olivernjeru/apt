"use client";

import { useEffect, useState } from 'react';

const PopulationData = () => {
    const [populationData, setPopulationData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPopulationData(data.data); // Extract the data array
                setLoading(false); // Set loading to false once data is fetched
            } catch (err) {
                setError(err.message); // Set error message if something goes wrong
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Population Data for the United States</h1>
            <ul>
                {populationData.map((item) => (
                    <li key={item["ID Year"]}>
                        <strong>{item.Year}:</strong> {item.Population.toLocaleString()} people
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PopulationData;
