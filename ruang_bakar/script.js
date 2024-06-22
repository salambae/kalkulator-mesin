function hitung() {
	var kapasitas_mesin = document.getElementById("kapasitas-mesin").value;
	var rasio_kompresi = document.getElementById("rasio-kompresi").value;
	if (kapasitas_mesin == "" || rasio_kompresi == "") {
		document.getElementById("notifikasi-call").style.display = 'block';
	} else {
		var hitung1 = parseFloat(kapasitas_mesin)/(parseFloat(rasio_kompresi)-1);
		document.getElementById("hasil").innerHTML = hitung1.toFixed(1);
		document.getElementById("notifikasi-call").style.display = 'none';
	}
}

function reset() {
	document.getElementById("kapasitas-mesin").value = null;
	document.getElementById("rasio-kompresi").value = null;
	document.getElementById("notifikasi-call").style.display = "none";
	document.getElementById("hasil").innerHTML = "0";
}