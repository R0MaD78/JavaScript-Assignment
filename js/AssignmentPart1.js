function validateFieldsets()
{
	var firstName = document.getElementById("firstName");				//variable declarations//
	var firstNameError = document.getElementById("firstNameError");
	var lastName = document.getElementById("lastName");
	var lastNameError = document.getElementById("lastNameError");
	var email = document.getElementById("email");
	var emailError = document.getElementById("emailError");
	var post = document.getElementById("post");
	var postError = document.getElementById("postError");
	var cardNumber = document.getElementById("cardNumber");
	var cardNumberError = document.getElementById("cardNumberError");
	var cvv = document.getElementById("cvv");
	var cvvError = document.getElementById("cvvError");
	var date = new Date();
	var validMonth = date.getMonth()+1;
	var validYear = date.getFullYear();
	var month =	document.getElementById("month").value;
	var monthError = document.getElementById("monthError");
	var year = document.getElementById("year").value;
	var monthError = document.getElementById("monthError");
	
	
	if (firstName.value=="")											//verification of fill/valid textbox values//
	{
		firstNameError.style.color = "red";
		firstNameError.style.fontSize = "11px";
		firstNameError.innerHTML = "First name required";
		firstName.style.border = "2px solid red";
		firstName.focus();
		return false;
	}else {firstNameError.innerHTML = "";}
	
	if (!isNaN(firstName.value))
	{
		firstNameError.style.color="red";
		firstNameError.style.fontSize = "11px";
		firstNameError.innerHTML = "Names dont contain numbers";
		firstName.style.border = "2px solid red";
		firstName.focus();
		return false;
	}else {firstNameError.innerHTML = "";}
	
	if (firstName.value != false)
	{
		firstName.style.border = "1px solid gray";
		
	}else {firstNameError.innerHTML = "";}
	
	if (lastName.value=="")
	{
		lastNameError.style.color = "red";
		lastNameError.style.fontSize = "11px";
		lastNameError.innerHTML = "Last name required";
		lastName.style.border = "2px solid red";
		lastName.focus();
		return false;
	}else {lastNameError.innerHTML = "";}
	
	if (!isNaN(lastName.value))
	{
		lastNameError.style.color = "red";
		lastNameError.style.fontSize = "11px";
		lastNameError.innerHTML = "Last names dont have numbers";
		lastName.style.border = "2px solid red";
		lastName.focus();
		return false;
	}else {lastNameError.innerHTML = "";}

	if (lastName.value != false)
	{
		lastName.style.border = "1px solid gray";
	}
	
	if (email.value=="")
	{
		emailError.style.color = "red";
		emailError.style.fontSize = "11px";
		emailError.innerHTML = "Email required";
		email.style.border = "2px solid red";
		email.focus();
		return false;
	}else {emailError.innerHTML = "";}
	
	if (email.value.length < 8)
	{
		emailError.style.color = "red";
		emailError.style.fontSize = "11px";
		emailError.innerHTML = "Email length error";
		email.style.border = "2px solid red";
		email.focus();
		return false;
	}else {emailError.innerHTML = "";}
	
	if (email.value.indexOf("@") == -1)
	{
		emailError.style.color = "red";
		emailError.style.fontSize = "11px";
		emailError.innerHTML = "Email missing '@'";
		email.style.border = "2px solid red";
		email.focus();
		return false;
	}else {emailError.innerHTML = "";}
	
	if (email.value.indexOf(".") == -1)
	{
		emailError.style.color = "red";
		emailError.style.fontSize = "11px";
		emailError.innerHTML = "Email missing '.'";
		email.style.border = "2px solid red";
		email.focus();
		return false;
	}else {emailError.innerHTML = "";}
	
	if (email.value != false)
	{
		email.style.border = "1px solid gray";
		
	}
	
	if (post.value.length != 4)
	{
		postError.style.color = "red";
		postError.style.fontSize = "11px";
		postError.innerHTML = "Check postcode length";
		post.style.border = "2px solid red";
		post.focus();
		return false;
	}else {postError.innerHTML = "";}
	
	if (isNaN(post.value))
	{
		postError.style.color = "red";
		postError.style.fontSize = "11px";
		postError.innerHTML = "Postcode contains numbers";
		post.style.border = "2px solid red";
		post.focus();
		return false;
	}else {postError.innerHTML = "";}
	
	if (post.value != false)
	{
		post.style.border = "1px solid gray";
		
	}
	
	if (cardNumber.value == "")
	{
		cardNumberError.style.color = "red";
		cardNumberError.style.fontSize = "11px";
		cardNumberError.innerHTML = "Card number required";
		cardNumber.style.border = "2px solid red";
		cardNumber.focus();
		return false;
	}else {cardNumberError.innerHTML = "";}
	
	if (cardNumber.value.length = 1)
	{
		cardNumberError.style.color = "red";
		cardNumberError.style.fontSize = "11px";
		cardNumberError.innerHTML = "Card must contains 16 digits";
		cardNumber.style.border = "2px solid red";
		cardnumber.focus();
		return false;
	}else {cardNumberError.innerHTML = "";}
	
	if (isNaN(cardNumber.value))
	{
		cardNumberError.style.color = "red";
		cardNumberError.style.fontSize = "11px";
		cardNumberError.innerHTML = "Card contains numbers only";
		cardNumber.style.border = "2px solid red";
		cardNumber.focus();
		return false;
	}else {cardNumberError.innerHTML = "";}
	
	if (cardNumber.value != false)
	{
		cardNumber.style.border = "1px solid gray";
		
	}
	
	if (cvv.value=="")
	{
		cvvError.style.color = "red";
		cvvError.style.fontSize = "11px";
		cvvError.innerHTML = "CVV required";
		cvv.style.border = "2px solid red";
		cvv.focus();
		return false;
	}else {cvvError.innerHTML = "";}
	
	if (cvv.value.length != 3)
	{
		cvvError.style.color = "red";
		cvvError.style.fontSize = "11px";
		cvvError.innerHTML = "CVV contains 3 digits";
		cvv.style.border = "2px solid red";
		cvv.focus();
		return false;
	}else {cvvError.innerHTML = "";}
	
	if (isNaN(cvv.value))
	{
		cvvError.style.color = "red";
		cvvError.style.fontSize = "11px";
		cvvError.innerHTML = "CVV contain numbers only";
		cvv.style.border = "2px solid red";
		cvv.focus();
		return false;
	}else {cvvError.innerHTML = "";}
	
	if (cvv.value != false)
	{
		cvv.style.border = "1px solid gray";
		
	}
	
	/*if (validYear !== year)
	{
		yearError.style.color = "red";
		yearError.style.fontSize = "11px";
		yearError.innerHTML = "Expired card (wrong year";
		year.style.border = "2px solid red";
		year.focus();
	}else {yearError.innerHTML = "";}
	
	if (validYear == year)
	{
		year.style.border = "1px solid gray";
	}
	
	if (validMonth !== month)
	{
		monthError.style.color = "red";
		monthError.style.fontSize = "11px";
		monthError.innerHTML = "Expired card (wrong month";
		month.style.border = "2px solid red";
		month.focus();
	}else {monthError.innerHTML = "";}
	
	if (validMonth == month)
	{
		month.style.border = "1px solid gray";
	}*/
	
	alert("Excelsior!");
	return true;
}

function changeBgd(textField)
{
	textField.style.background = "#abebc6";
}

function resetBgd(textField)
{
	textField.style.background = "white";
}	

function formHelp(){
	
	window.open("../html/help.html", "myWindow", "status = 1, height = 1249, width = 815, resizable = 0");
}

function validateForm(){                        // defining the function attributes
do                    // do while loop start
    {
    var choice = 0;                // initial value of variable to use in switch
    var choice = prompt("choose from one of the options\n 1: Marvel Comics\n 2: The Real Stan Lee\n 3: Variety","1"); // user input options

    if (choice === null) {
        return;
    }    else {
    switch (parseInt(choice))     // declaring possible inputs
        {case 1:
                window.open("https://www.marvel.com/", "myWindow", "status = 1, height = 800, width = 800, resizable = 0");
                return;
            break;
        case 2: 
                window.open("https://therealstanlee.com/", "myWindow", "status = 1, height = 800, width = 800, resizable = 0");
                return;
            break;
        case 3:
                window.open("https://variety.com/2018/film/news/stan-lee-marvel-cameo-1203026327/", "myWindow", "status = 1, height = 800, width = 800, resizable = 0");
                return;
            break;
        default: alert("Please try again");    // alert the user in case input value was outside scope
        }
    }
    } while (choice != 1,2,3); // statement control to verify correct input value by user
    return;
}

/* the choice of validation works using an "if" to verify null value followed by a "do while" loop to prompt the user to select a website, and uses a switch to validate the choice of assigned options. The "do while" statement test to make sure that the input is within range (1, 2 or 3), if not an alert message will notify the user and the prompt will reset*/ 