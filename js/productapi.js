document.addEventListener("DOMContentLoaded", function() {
    // fungsi post data from  via HTTP GET
    const postData = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    // fungsi get data from  via HTTP GET
    const getDataFromMockAPI = async () => {
        const response = await fetch('https://65fa8ec13909a9a65b1ab0a5.mockapi.io/foods');
        return response.json();
    }

    // fungsi tampilan data di tabel
    const displayDataInTable = (data) => {
        const tableBody = document.querySelector('#dataTable tbody');
        tableBody.innerHTML = ''; // Clear previous table rows

        data.forEach(product => {
            const newRow = tableBody.insertRow();

            const idCell = newRow.insertCell(0);
            const nameCell = newRow.insertCell(1);
            const priceCell = newRow.insertCell(2);

            idCell.textContent = product.id;
            nameCell.textContent = product.name;
            priceCell.textContent = product.price;
        });
    };

    // fungsi post data ke mockapi
    const postToMockAPI = async (product) => {
        try {
            const response = await postData('https://65fa8ec13909a9a65b1ab0a5.mockapi.io/foods',
                product);
            console.log('Data successfully posted:', response);
            updateTable(product);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    }

    // fungsi mengambil data dari mockapi
    const updateTable = async (product) => {
        await displayDataInTable(await getDataFromMockAPI());
    };

    // membuat event listener untuk post data
    document.getElementById('postButton').addEventListener('click', async () => {
        // const products = [{
        //         "name": "Soto",
        //         "price": 12000,
        //         "id": "1"
        //     },
        //     {
        //         "name": "Rawon",
        //         "price": 15000,
        //         "id": "2"
        //     },
        //     {
        //         "name": "Bakso",
        //         "price": 10000,
        //         "id": "3"
        //     },
        //     {
        //         "name": "Pecel",
        //         "price": 10000,
        //         "id": "4"
        //     },
        //     {
        //         "name": "Bebek",
        //         "price": 15000,
        //         "id": "5"
        //     }
        // ];

        const products = [{
                "name": "Ayam",
                "price": 12000,
                "id": "1"
            },
            {
                "name": "Lele",
                "price": 10000,
                "id": "2"
            },
            {
                "name": "Capjay",
                "price": 10000,
                "id": "3"
            },
            {
                "name": "Koloke",
                "price": 20000,
                "id": "4"
            },
            {
                "name": "Jeroan",
                "price": 12000,
                "id": "5"
            }
        ];


        for (const product of products) {
            await postToMockAPI(product);
        }
    });

    // memanggil fungsi get
    displayDataInTable(getDataFromMockAPI());
});