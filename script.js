function tambah() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil").innerText = "Masukkan angka!";
        return;
    }

    let hasil = angka1 + angka2;
    document.getElementById("hasil").innerText = hasil;
}

function kurang() {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil").innerText = "Masukkan angka!";
        return;
    }

    let hasil = angka1 - angka2;
    document.getElementById("hasil").innerText = hasil;
}

function kali() {
    // Tulis Di Sini
}

function bagi() {
    // Tulis Di Sini
}

function clearData() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("hasil").innerText = "";
}