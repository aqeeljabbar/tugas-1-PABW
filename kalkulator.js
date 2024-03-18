function hitung() {
    let angka1 = document.querySelector("#angka1").value;
    let angka2 = document.querySelector("#angka2").value;
    let operasi = document.querySelector("#operasi").value;
    let hasil;

    angka1 = parseInt(angka1);
    angka2 = parseInt(angka2);

    switch (operasi) {
        case "+":
            hasil = angka1 + angka2;
            break;
        case "-":
            hasil = angka1 - angka2;
            break;
        case "*":
            hasil = angka1 * angka2;
            break;
        case "/":
            hasil = angka1 / angka2;
            break;
        case "%":
            hasil = angka1 % angka2;
            break;

    }

    document.querySelector("#hasil").textContent = "Hasil: " + hasil;
}

document.querySelector("#hitung").addEventListener("click", hitung);