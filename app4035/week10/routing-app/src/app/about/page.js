"use client";

import { useState } from 'react';

const fetchEmployees = async () => {
    const url = '/api/employees';

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('HTTP error! Status: $(response.status)');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch employees:', error);
        return [];
    }
};
export default function About() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFetchEmployees = async () => {
        setLoading(true);
        setError(null);

        const data = await fetchEmployees();

        if (data.length > 0) {
            setEmployees(data);
        } else {
            setError('No employees found');
        }

        setLoading(false);
    };

    return (
        <div>
            <h1>This is the about us page</h1>
            <p>This is the about us page content.</p>
            <button onClick={handleFetchEmployees} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Employees'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} - {employee.position}
                    </li>
                ))}
            </ul>
        </div>
    );
}
