const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');


app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.json());

// Keep track of our records in an array, that we'll JSON.stringify() later
let salesRawData = fs.readFileSync("sales.json");
let sales = JSON.parse(salesRawData);

let idCounterData = fs.readFileSync("idCounterData.json");
let idCounter = JSON.parse(idCounterData);
console.log(idCounter[0]["idCounter"]);

// Individual sale objects are created using this class
class Sale {
    constructor(price, date, idCounter) {
        this.id = idCounter + 1;
        this.price = price;
        this.date = date;
    }
}

app.get('/', function (req, res, next) {
    res.render('index', { title: 'Product Tracker' });
});

// show all the sales in our records
app.get('/sales', function (req, res) {
    salesRawData = fs.readFileSync("sales.json")
    sales = JSON.parse(salesRawData);
    res.json(sales);
});

// validate form from new and create a new sale
app.post('/sales/create', function (req, res) {
    salesRawData = fs.readFileSync("sales.json")
    sales = JSON.parse(salesRawData);

    idCounterData = fs.readFileSync("idCounterData.json");
    idCounter = JSON.parse(idCounterData);
    console.log(idCounter);

    // create the new Sale object and add to sales data
    const newSale = new Sale(req.body.price, req.body.date, idCounter[0]["idCounter"]);
    sales.push(newSale);
    idCounter[0]["idCounter"] += 1;

    // write our file to JSON as storage
    let salesJsonData = JSON.stringify(sales, null, 2);
    let idCounterJsonData = JSON.stringify(idCounter, null, 2);
    fs.writeFileSync('sales.json', salesJsonData);
    fs.writeFileSync('idCounterData.json', idCounterJsonData);

    // go back to the sales homepage
    res.json({ name: "oliver" });
});

// update a form
app.post('/sales/:id/update', function (req, res) {
    salesRawData = fs.readFileSync("sales.json")
    sales = JSON.parse(salesRawData);

    for (let i = 0; i < sales.length; i++) {
        if (sales[i].id === Number(req.params.id)) {
            sales[i].price = req.body.price;
            sales[i].date = req.body.date
        }
    }

    fs.writeFileSync("sales.json", JSON.stringify(sales));

    res.redirect("/");
});

// show a specific sale
app.get('/sales/:id', function (req, res) {
    salesRawData = fs.readFileSync("sales.json")
    sales = JSON.parse(salesRawData);

    const sale = sales.find(sale => sale.id === Number(req.params.id))
    res.json(sale);
});

// delete a specific sale
app.post('/sales/:id/delete', function (req, res) {
    salesRawData = fs.readFileSync("sales.json")
    sales = JSON.parse(salesRawData);

    const sale = sales.find(sale => sale.id === Number(req.params.id))

    for (let i = 0; i < sales.length; i++) {
        if (sales[i].id === sale.id) {
            sales.splice(i, 1);
        }
    }

    fs.writeFileSync("sales.json", JSON.stringify(sales));

    res.json(sales);
})

app.listen(port);

console.log(`Node server has started on port ${port}`);