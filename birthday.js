var date = document.getElementById("date");
var find = document.getElementById("find");
var parg = document.getElementById("parg");
const d = new Date();
var current_year = d.getFullYear();


find.addEventListener("click", function () {
	event.preventDefault();
	parg.textContent = "";
	var birthdate = parseInt(date.value);

	if ( birthdate > current_year ) {
		alert("Enter a year below the current year");
	}else{
		var birthdate = current_year - date.value;
		var par = document.createElement("p");
		par.classList.add("p")
		par.textContent = "Your age is :" + birthdate;
		parg.appendChild(par);
	}

	

});