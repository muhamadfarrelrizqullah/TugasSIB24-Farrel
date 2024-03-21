document.addEventListener("DOMContentLoaded", function() {
    const dataArray = [{
            name: "Soto",
            price: 12000
        },
        {
            name: "Rawon",
            price: 15000
        },
        {
            name: "Bakso",
            price: 10000
        },
        {
            name: "Pecel",
            price: 10000
        },
        {
            name: "Bebek",
            price: 15000
        }
    ];

    const tableBody = document.querySelector('#dataTable tbody');

    dataArray.forEach(item => {
        const newRow = tableBody.insertRow();
        const nameCell = newRow.insertCell(0);
        const priceCell = newRow.insertCell(1);

        nameCell.textContent = item.name;
        priceCell.textContent = item.price;
    });
});