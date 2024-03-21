document.getElementById("postButton").addEventListener("click", function () {
    var konten = {
        konten: [
            {
                name: "Koloke",
                price: 12000
            },
            {
                name: "Capjay",
                price: 15000
            },
            {
                name: "Nasi Goreng",
                price: 10000
            },
            {
                name: "Pecel Tumpang",
                price: 10000
            },
            {
                name: "Tahu Telor",
                price: 15000
            }
        ]
    };

    var linkss = "https://crudcrud.com/api/a710e8135b424a49a673e6f7c159de4b/products";

    function SendAPITOServer(links, content) {
        fetch(links, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(
                content)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }

    SendAPITOServer(linkss, konten);
});

function getDataFromAPI(apiURL) {
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector("#dataTable tbody");
            tableBody.innerHTML = "";
            data.forEach(item => {
                item.konten.forEach(product => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                    `;
                    tableBody.appendChild(row);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

const apiURL = "https://crudcrud.com/api/a710e8135b424a49a673e6f7c159de4b/products";
getDataFromAPI(apiURL);