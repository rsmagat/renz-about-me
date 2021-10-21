document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("inquiryForm").addEventListener("submit", validate);
	document.getElementById("reset").addEventListener("click", resetForm);
}

function validate(e){
	hideAllErrors();

	//	Determine if the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}

	return true;
}

function resetForm(e){
	// Confirm that the user wants to reset the form.
	if ( confirm('Clear form?') ){

		hideAllErrors();
		
		return true;
	}
}

function formHasErrors(){
	let errorFlag = false;

	let requiredFields = ["fullname", "email", "telephone", "commentarea"];

	for (let i = 0; i < requiredFields.length; i++){
		let textField = document.getElementById(requiredFields[i]);

		if(textField.value == ""){
			document.getElementById(requiredFields[i] + "_error").style.display = "block";

			errorFlag = true;
		}
	}

	let regexName = new RegExp(/^([^0-9]*)$/);

	let name = document.getElementById("fullname").value;

	if (!regexName.test(name)){
		document.getElementById("name_invalid").style.display = "block";

		errorFlag = true;
	}

	let regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

	let email = document.getElementById("email").value;

	if (!regexEmail.test(email)){
		document.getElementById("email_invalid").style.display = "block";

		errorFlag = true;
	}

	let regexPhone = new RegExp(/^\d{10}$/);

	let phone = document.getElementById("telephone").value;

	if (!regexPhone.test(phone)){
		document.getElementById("phone_invalid").style.display = "block";

		errorFlag = true;
	}

	return errorFlag;

}

function hideAllErrors(){
	//	Get an array of the error fields
	var errorFields = document.getElementsByClassName("error");

	//	Loop through each error field
	for(var i = 0;i < errorFields.length; i++){
		//	Hide the error field
		errorFields[i].style.display = "none";
	}
}