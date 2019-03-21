function validateForm()
{
	var firstName = document.getElementById("firstName");
	var studentID = document.getElementById("studentID");
	if (firstName.value=="")
	{
		alert("Your firstName cannot be left blank");
		firstName.focus();
		return false;
	}
	if (studentID.value.length <6)
	{
		alert("Your studentID must be at least 6 numbers");
		studentID.focus();
		return false;
	}
	if (isNaN(studentID.value))
	{
		alert("Your studentID must be numeric");
		studentID.focus();
		return false;
	}
alert("Thank you for your submission!");
textField.style.background="Yellow";
return true;
}
