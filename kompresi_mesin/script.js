function hitung() {
	var volume_rb = document.getElementById("volume-rb").value;
	var volume_s = document.getElementById("volume-s").value;
	if (volume_s == "" || volume_rb == "") {
		document.getElementById("notifikasi-call").style.display = 'block';
	} else {
		var hitung1 = (parseFloat(volume_s) + parseFloat(volume_rb))/parseFloat(volume_rb);
		document.getElementById("hasil").innerHTML = hitung1.toFixed(1)+":1";
		document.getElementById("notifikasi-call").style.display = 'none';
	}
}

function reset() {
	document.getElementById("volume-rb").value = null;
	document.getElementById("volume-s").value = null;
	document.getElementById("notifikasi-call").style.display = "none";
	document.getElementById("hasil").innerHTML = "0";
}