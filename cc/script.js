function hitung() {
	var diameter_bore = document.getElementById("diameter-bore").value;
	var diameter_stroke = document.getElementById("diameter-stroke").value;
	var jumlah_silinder = document.getElementById("jumlah-silinder").value;
	if (diameter_bore == "" || diameter_stroke == "" || jumlah_silinder == "") {
		document.getElementById("notifikasi-call").style.display = 'block';
	} else {
		var hitung1 = 3.14*Math.pow(diameter_bore/2,2)*diameter_stroke*jumlah_silinder; 
		var hitung2 = hitung1/1000;
		document.getElementById("hasil").innerHTML = hitung2;
		document.getElementById("notifikasi-call").style.display = 'none';
	}
}

function reset() {
	document.getElementById("diameter-bore").value = null;
	document.getElementById("diameter-stroke").value = null;
	document.getElementById("jumlah-silinder").value = null;
	document.getElementById("notifikasi-call").style.display = "none";
	document.getElementById("hasil").innerHTML = "0";
}