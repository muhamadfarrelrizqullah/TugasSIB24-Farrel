document.addEventListener("DOMContentLoaded", function() {
    const dataArray = [{
            id: 1,
            name: "Soto",
            price: 12000
        },
        {
            id: 2,
            name: "Rawon",
            price: 15000
        },
        {
            id: 3,
            name: "Bakso",
            price: 10000
        },
        {
            id: 4,
            name: "Pecel",
            price: 10000
        },
        {
            id: 5,
            name: "Bebek",
            price: 15000
        }
    ];

    const tableBody = document.querySelector('#dataTable tbody');

    dataArray.forEach(item => {
        const newRow = tableBody.insertRow();
        const idCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const priceCell = newRow.insertCell(2);

        idCell.textContent = item.id;
        nameCell.textContent = item.name;
        priceCell.textContent = item.price;
    });
});