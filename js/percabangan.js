//1
function percabanganIf() {
    let string = confirm("Apakah kamu mau makan malam denganku?")
    if (string) {
        alert('Jawaban anda mau')
    }
}

//2
function percabanganIfElse() {
    let string2 = confirm("Apakah kamu mau makan malam denganku?")
    if (string2) {
        alert('Jawaban anda mau')
    } else {
        alert('Jawaban anda tidak mau')
    }
}

//3
function percabanganElseIF() {
    let string3 = prompt("1 + 1 ?")
    if (string3 == 2) {
        alert('Jawaban anda betul')
    } else if (string3 > 2) {
        alert('Jawaban anda kelebihan')
    } else if (string3 < 2) {
        alert('Jawaban anda kurang')
    } else {
        alert('Jawaban anda salah')
    }
}

//4
function percabanganSwitch() {
    let string4 = "blue"
    switch (string4) {
        case 'red':
            alert('I love red!')
            break;
        case 'blue':
            alert('I love blue!')
            break;
        default:
            alert('I dont know what color is!')
            break;
    }
}