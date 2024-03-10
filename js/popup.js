//1
function tampilkanAlert() {
    alert('Halo Selamat Datang di Arkatama')
}

//2
function tampilkanPrompt() {
    let string = prompt("Apakah kamu mau makan malam denganku?")
    alert('Jawaban anda ' + string)
}

//3
function tampilkanConfirm() {
    let string2 = confirm("Apakah kamu mau makan malam denganku?")
    string2 ? alert('Jawaban anda mau') : alert('Jawaban anda tidak mau')
}