    //1
    var mainDiv = document.querySelector('.main .output')
    mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br>"
    for (let i = 1; i < 5; i++) {
        mainDiv.innerHTML += i + "<br>"
    }


    //2
    let b = 1
    var mainDiv = document.querySelector('.main .output2')
    mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br>"
    while (b < 5) {
        mainDiv.innerHTML += b + "<br>"
        b++
    }

    //3
    let a = 1
    var mainDiv = document.querySelector('.main .output3')
    mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br>"
    do {
        mainDiv.innerHTML += a + "<br>"
        a++
    } while (a < 5)