var buton = document.getElementById("btn");
var deger = document.getElementById("sayi");
var sonuc = document.getElementById("result");
var liste = [];
var count = 0;
buton.addEventListener("click", convert_function);
for (var i = -1; i<1501; i++) {
    if (i <= 1) {
        count = count + Math.abs(i);
        liste.push(count);
    }
    else if (i >= 2) {
        count = count + liste[i-1];
        liste.push(count);
    }

}






function convert_function() {
    var guess = deger.value;
    if ((guess < 1) || (guess != parseInt(guess))) {
        sonuc.innerHTML = "Lütfen Pozitif Tam sayı giriniz.";
    }
    else if (guess == 1) {
        sonuc.innerHTML = `${guess}st Fibonacci number is equal to ${liste[guess]}`;
    }
    else if (guess == 2) {
        sonuc.innerHTML = `${guess}nd Fibonacci number is equal to ${liste[guess]}`;
    }
    else if (guess == 3) {
        sonuc.innerHTML = `${guess}rd Fibonacci number is equal to ${liste[guess]}`;
    }
    else if (guess >= 3) {
        sonuc.innerHTML = `${guess}th Fibonacci number is equal to ${liste[guess]}`;
    }


   
}



















// var liste = [];
// var count = 0;
// for (var i = -1; i<11; i++) {
//     if (i <= 1) {
//         count = count + Math.abs(i);
//         liste.push(count);
//     }
//     else if (i >= 2) {
//         count = count + liste[i-1];
//         liste.push(count);
//     }

// }
// console.log(liste)