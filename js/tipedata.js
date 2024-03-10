//1
let bulat = 25
let desimal = 25.5
var mainDiv = document.querySelector('.main .output')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Bulat: " + bulat + "<br> Desimal: " + desimal +
    "<br> Hasil: " + (desimal + bulat)

//2
let bulat2 = 2515627288299283883993838930399399202933n
var mainDiv = document.querySelector('.main .output2')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Bulat: " + bulat2

//3
let text = "Arkatama"
var mainDiv = document.querySelector('.main .output3')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Text: " + text

//4
let perbandingan = 1 > 7
var mainDiv = document.querySelector('.main .output4')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Perbandingan: " + perbandingan

//5
let admin
var mainDiv = document.querySelector('.main .output5')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Admin: " + admin

//6
let admin2 = null
var mainDiv = document.querySelector('.main .output6')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Admin: " + admin2

//7
let employee = Symbol('joko')
var mainDiv = document.querySelector('.main .output7')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Karyawan: " + employee.description

//8
let employee2 = {
    name: "john",
    age: 25,
    job: "Fullstack Web Dev"
}
var mainDiv = document.querySelector('.main .output8')
mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Nama: " + employee2.name + "<br> Umur: " +
    employee2.age + "<br> Job: " + employee2.job