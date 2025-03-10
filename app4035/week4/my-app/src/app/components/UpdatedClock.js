// This now uses hooks
"use client";

import { useState, useEffect } from "react";

function UpdatedClock({ continent, city }) {
    const [currentDate, setCurrentDate] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timerID = setInterval(() => setCurrentDate(new Date()), 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    const tz = `${continent}/${city}`;
    const cityName = city.replace('_', ' ');

    return (
        <div>
            <h2>In {continent}, {cityName}</h2>
            <h3>
                {mounted ? (
                    currentDate ? (
                        `It is ${currentDate.toLocaleString('en-US', { timeZone: tz })}`
                    ) : 'Loading ...'
                ) : 'Loading ...'}
            </h3>
        </div>
    )
}

export default UpdatedClock;