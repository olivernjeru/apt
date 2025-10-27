const server = "http://localhost:3000";

// Graph drawing setup
const ctx = document.getElementById('productTracker');

// configure the settings of the chart
const productTrackerTypesConfig = {
    type: 'line',
    data: {},
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Tracker'
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    color: 'green',
                    text: 'Date'
                }
            },
            y: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    color: 'green',
                    text: 'Units Sold'
                }
            }
        }
    },
};

const productTrackerTypesChart = new Chart(ctx, productTrackerTypesConfig);

CHART_COLORS = {
    green: '#3A7756',
    grey: '#CCCCCC',
    red: '#DC3545',
};

function populateContent(sales) {
    // Update all the dom elements with the updated sale data

    // Clear the table data
    const salesTable = document.querySelector(".sales-table").tBodies[0];

    // if there's more than just column headers
    salesTable.innerHTML = "";

    // Update the sales table
    sales.forEach(sale => {
        // create a table row for the sale and append it the table body
        let saleRow = salesTable.insertRow()

        // create cells for the sale data
        let idCell = saleRow.insertCell(0);
        idCell.innerText = `${sale.id}`

        let priceCell = saleRow.insertCell(1);
        priceCell.innerText = `${sale.price}`

        let dateCell = saleRow.insertCell(2);
        dateCell.innerText = `${sale.date}`;

        // create buttons for and cells for edit and delete with correct actions
        let editCell = saleRow.insertCell(3);
        let editBtn = document.createElement("button");
        editBtn.value = sale.id;
        editBtn.innerText = "Edit"
        editBtn.classList.add("update-sale-modal-btn");
        editBtn.classList.add("btn");
        editBtn.classList.add("btn-sm");
        editBtn.classList.add("btn-primary");
        editCell.appendChild(editBtn);

        let deleteCell = saleRow.insertCell(4);
        let deleteBtn = document.createElement("button");
        deleteBtn.value = sale.id;
        deleteBtn.innerText = "Delete"
        deleteBtn.classList.add("delete-sale-btn");
        deleteBtn.classList.add("btn");
        deleteBtn.classList.add("btn-sm");
        deleteBtn.classList.add("btn-danger");
        deleteCell.appendChild(deleteBtn);
    });

    // Add modal triggers to all the edit buttons and
    // populate content to update the graph and table
    const editBtns = document.querySelectorAll(".update-sale-modal-btn");

    editBtns.forEach(btn => {
        btn.style.backgroundColor = "green";
        btn.addEventListener('click', showUpdateModal);
    })

    // Add eventlisteners to all the delete buttons which have value of the id to delete, afterwards
    // populate content to update the graph and table
    const deleteBtns = document.querySelectorAll(".delete-sale-btn");

    deleteBtns.forEach(btn => {
        const currentRow = btn.parentElement.previousElementSibling.parentElement.cells;

        const sale = {
            id: currentRow[0].innerText,
            price: currentRow[1].innerText,
            date: currentRow[2].innerText,
        };

        btn.addEventListener('click', e => deleteSale(e, sale));
    });
};

async function fetchSales() {
    let url = server + '/sales';
    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    // change to promises
    const response = await fetch(url, options);
    const sales = await response.json();

    // update graphs with new data that's been fetched
    updateGraph(sales);
    productTrackerTypesChart.update();

    populateContent(sales);
}

// Handle creating new records through clicking the submit button on the modal
const newSaleForm = document.querySelector("#new-sale-form");
const newSaleModal = new bootstrap.Modal(document.querySelector('.new-sale-modal'));
const newSaleModalBtn = document.querySelector("#new-sale-modal-btn"); // Corrected the button ID

const toastLiveExample = document.querySelector("#liveToast");
const toastBody = document.querySelector(".toast-body");

// show the modal with form when btn is clicked
newSaleModalBtn.addEventListener('click', () => {
    // clear the form before showing it
    newSaleForm.reset();

    newSaleModal.show();
});

newSaleForm.addEventListener('submit', addNewSale);

async function addNewSale(e) {
    // create a formdata object to extract the submitted fields
    const formData = new FormData(e.srcElement);

    const sale = {
        price: formData.get("price"),
        date: formData.get("date"),
    };

    if (!sale.price || !sale.date) {
        // Display the toast alert message
        const toast = new bootstrap.Toast(toastLiveExample)
        toastBody.innerText = `Please input price and date`;
        toast.show()
        return;
    }

    const url = server + '/sales/create';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sale)
    };
    const response = await fetch(url, options);

    // Toggle off the modal
    newSaleModal.hide();

    // Display the toast alert message
    const toast = new bootstrap.Toast(toastLiveExample)
    toastBody.innerText = `New Sale Recorded`;
    toast.show()

    // Fetch all the sales to update the graph with new data
    fetchSales();
}

// Handle showing the update modal when clicking edit buttons
const updateSaleForm = document.querySelector("#update-sale-form");
const updateSaleModal = new bootstrap.Modal(document.querySelector('.update-sale-modal'));

// show the update modal with form when btn is clicked
async function showUpdateModal(e) {
    const modalPrice = document.querySelector(".modal-price");
    const modalDate = document.querySelector(".modal-date");
    const modalId = document.querySelector(".modal-id");

    // fetch the data to fill the form so that user can update information
    const saleId = e.target.value;
    modalId.value = saleId;

    const url = server + `/sales/${saleId}`;
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    let sale = undefined;
    const response = fetch(url, options)
        .then(res => res.json()
            .then(saleData => {
                sale = saleData;

                // reflect the values from server on the form
                modalPrice.value = saleData.price;
                modalDate.value = saleData.date;

                updateSaleModal.show();
            }));

}

updateSaleForm.addEventListener('submit', (e) => updateSale(e));

async function updateSale(e) {
    // create a formdata object to extract the submitted fields
    const formData = new FormData(e.srcElement);

    const sale = {
        id: formData.get("modal-id"),
        price: formData.get("price"),
        date: formData.get("date"),
    };

    if (!sale.price || !sale.date) {
        // Display the toast alert message
        const toast = new bootstrap.Toast(toastLiveExample)
        toastBody.innerText = `Please input price and date`;
        toast.show()
        return;
    }


    // Send the formdata to update route with id of sale
    const url = server + `/sales/${sale.id}/update`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sale)
    };
    const response = await fetch(url, options);

    // Toggle off the modal
    updateSaleModal.hide();

    // Display the toast alert message
    const toast = new bootstrap.Toast(toastLiveExample)
    toastBody.innerText = `Updated Sale ${sale.id}`;
    toast.show()

    // Fetch all the sales to update the graph with new data
    fetchSales();
}

// Handle deleting records
async function deleteSale(e, sale) {
    url = server + `/sales/${sale.id}/delete`;
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sale)
    };
    const response = await fetch(url, options);

    // display the toast alert message
    const toast = new bootstrap.Toast(toastLiveExample)
    toastBody.innerText = `Deleted sale ${sale.id}`;
    toast.show();

    // fetch all sales to update graphs
    fetchSales();
}

function updateGraph(sales) {
    // extract the time data from sales
    const uniqueDates = [...new Set(sales.map(sale => sale.date))];
    const dates = uniqueDates.map(date => moment(date).format("MM/DD/YYYY"));
    uniqueDates.sort();

    // extract prices as an array of numbers
    const prices = sales.map(sale => Number(sale.price));

    // calculate the total units sold per date. units sold is price... notetoself
    const totalPrices = uniqueDates.map(date => {
        const pricesOnDate = sales.filter(sale => moment(sale.date).isSame(date, 'day'));
        return pricesOnDate.reduce((acc, sale) => acc + Number(sale.price), 0);
    });

    // seven-day moving average
    const calculateSevenDayMA = (prices) => {
        const sevenDayMA = [];

        for (let i = 6; i < prices.length; i++) {
            const sum = prices.slice(i - 6, i + 1).reduce((total, price) => total + price, 0);
            const average = sum / 7;
            sevenDayMA.push(average);
        }

        return sevenDayMA;
    };
    // debug point
    // console.log(sevenDayMA);

    const sevenDayMA = calculateSevenDayMA(prices);

    console.log(sevenDayMA);


    // sort dates
    dates.sort();

    // plot chart data
    const labels = dates;

    productTrackerTypesChart.data = {
        labels: labels,
        datasets: [
            {
                label: 'Seven Day Moving Average',
                data: sevenDayMA,
                borderWidth: 2,
                borderColor: CHART_COLORS.red,
                backgroundColor: CHART_COLORS.red
            },
            {
                label: 'Units Sold',
                type: 'bar',
                data: totalPrices,
                borderWidth: 2,
                borderColor: CHART_COLORS.green,
                backgroundColor: CHART_COLORS.green
            },

        ],
    };

    productTrackerTypesChart.update();
}
