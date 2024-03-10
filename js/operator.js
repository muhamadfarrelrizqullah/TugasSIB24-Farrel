  //1
  let a = 6
  let b = 3
  var mainDiv = document.querySelector('.main .output')
  mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Penjumlahan: " + (a+b) + "<br> Pengurangan: " + (a-b) + "<br> Perkalian: " + (a*b) + "<br> Pangkat: " + (a**b) + "<br> Pembagian: " + (a/b) + "<br> Modulus: " + (a%b)
  
  //2
  let c = 4
  let d = 7
  var mainDiv = document.querySelector('.main .output2')
  mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Sama dengan: " + (c==d) + "<br> Kurang dari: " + (c<d) + "<br> Lebih dari: " + (c>d) + "<br> Tidak sama dengan: " + (c!=d)
  
  //3
  let e = 3
  let f = 5
  var mainDiv = document.querySelector('.main .output3')
  mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> And: " + (e&&f) + "<br> OR: " + (e||f) + "<br> Negasi: " + (!e)
  
  //4
  let g = 3
  let h = 5
  var mainDiv = document.querySelector('.main .output4')
  mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> And: " + (g&h) + "<br> OR: " + (g|h) + "<br> XOR: " + (g^h) + "<br> Negasi: " + (~g) 
  
  //5
  let i = 3
  let j = 5
  var mainDiv = document.querySelector('.main .output5')
  mainDiv.innerHTML = "<strong>Output yang dihasilkan : </strong> <br> Hasil operator ternary: " + (i==j ? 'sama' : 'tidak sama')