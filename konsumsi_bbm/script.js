function hitung() {
	var odometer_finish = document.getElementById("odometer-finish").value;
	var odometer_start = document.getElementById("odometer-start").value;
	var jarak_tempuh = document.getElementById("jarak-tempuh").value;
	if (odometer_start == "" || odometer_finish == "" || jarak_tempuh == "") {
		document.getElementById("notifikasi-call").style.display = 'block';
	} else {
		let noC1 = odometer_finish.split('.').join("");
		let noC2 = odometer_start.split('.').join("");
		let noC3 = jarak_tempuh.split('.').join("");
		var hitung1 = (noC1-noC2)/noC3;
		document.getElementById("hasil").innerHTML = hitung1.toFixed(1);
	}
}
function reset() {
	document.getElementById("odometer-finish").value = null;
	document.getElementById("odometer-start").value = null;
	document.getElementById("jarak-tempuh").value = null;
	document.getElementById("notifikasi-call").style.display = "none";
	document.getElementById("hasil").innerHTML = "0";
}