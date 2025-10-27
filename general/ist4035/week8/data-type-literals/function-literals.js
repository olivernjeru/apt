
var cities = [
    "Lagos",
    "Cairo",
    "Kinshasa",
    "Luanda",
    "Nairobi"
];
var rankCity = function(city) {
    for (var i = 0; i < cities.length; i++) {
        if (cities[i] === city) {
            return city + " is number " + (i + 1);
        }
    }
    return city + " is not among the top 5."
}

console.log(rankCity("Nairobi"));
console.log(rankCity("Cape town"));