//1
let value = false
let string = String(value)
var mainDiv = document.querySelector('.main .output')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Value: " + value

//2
let str = "123"
let nbr = Number(str)
var mainDiv = document.querySelector('.main .output2')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Number: " + nbr

//3
var mainDiv = document.querySelector('.main .output3')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Boolean(0): " + Boolean(0) +
    "<br> Boolean(1): " + Boolean(1)