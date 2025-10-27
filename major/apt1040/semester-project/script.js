const form = document.getElementById('stock-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const symbol = document.getElementById('symbol-input').value;
  const apiKey = 'YOUR_API_KEY_HERE';
  const url = `https://api.example.com/stock/${symbol}/performance?apikey=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Parse the data and extract performance metrics
      const price = data.price;
      const changePercentage = data.changePercentage;

      // Use a charting library to create a graph
      const chart = new Chart(document.getElementById('chart'), {
        type: 'line',
        data: {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
          datasets: [{
            label: 'Price',
            data: [price, price*1.05, price*1.1, price*0.95, price*0.98],
            borderColor: 'blue',
            fill: false
          }, {
            label: 'Change Percentage',
            data: [0, changePercentage, changePercentage*2, changePercentage*-1, changePercentage*0.5],
            borderColor: 'green',
            fill: false
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
