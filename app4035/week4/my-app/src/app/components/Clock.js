function Clock(props) {
    const currentDate = new Date();
    const continent = props.continent;
    const city = props.city;
    const tz = `${continent}/${city}`;

    return (
        <div>
            <h2>In {continent}, {city.replace('_', ' ')}</h2>
            <h3>
                It is {currentDate.toLocaleString('en-US', { timeZone: tz })}
            </h3>
        </div>
    )
}

export default Clock;