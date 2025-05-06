
// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fPhone = document.getElementById("fPhone");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fLastName = document.getElementById("fLastN");



	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  

	function justLetters(str) {
		return /^[a-zA-Z]+$/.test(str);
	  }

	function justEmail(str) {

		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)

	}

	function isphone(str) {
		return /^\d{9}$/.test(str)
	}

	function isPassword(str) {
		return /^(?=.*[a-zA-Z])(?=.*\d).+/.test(str);
	}

	[fName, fLastName, fEmail].forEach(input => input.classList.remove("is-invalid"));


	let error_name = "";
	
	// Validate fields entered by the user: name, phone, password, and email
	if (fName.value.length < 3 || !justLetters(fName.value)){
		error++;
		fName.classList.add("is-invalid");
		error_name +="Name must be at least 3 characters long and contain only letters. ";
	}

	if (fLastName.value.length < 3 || !justLetters(fLastName.value)){
		error++;
		fLastName.classList.add("is-invalid");
		error_name += "Last Name must be at least 3 characters long and contain only letters. ";
	}


	if (fEmail.value.length < 3 || !justEmail(fEmail.value) ){
		error++;
		fEmail.classList.add("is-invalid");
		error_name += "Email must be at least 3 Characters long and have a valid email format. "
	}

	if (!isphone(fPhone.value)) {
		error++;
		fPhone.classList.add("is-invalid");
		error_name += "Phone must be at least 3 characters long and contain only numbers. ";
	}

	if (fPassword.value.length < 3){	
		error++;
		fPassword.classList.add("is-invalid");
		error_name += "Password must be at least 3 characters long. ";
	}
	if (fAddress.value.length < 3){
		error++;
		fAddress.classList.add("is-invalid");
		error_name += "Address must be at least 3 characters long. ";
	}

	if (fPassword < 3 || isPassword(fPassword)){
		error++
		fPassword.classList.add("is-invalid");
		error_name += "Password is not valid, you must add numbers and letters"
	}
	 
	if (error>0){
		alert("Error " + error_name);
	} else {
		alert("OK");
	}

}
