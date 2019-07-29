

document.getElementById('submit').addEventListener( 'click', function(){

var a = document.getElementById('testinput').value;


	var b = a%2 ;

	if (a == "") { document.getElementById('result').innerHTML = " Enter an integer" ; }
	
	else if (a == 0) { document.getElementById('result').innerHTML = a + " is not an integer" ; }

				else if (b == 1) {
	 	document.getElementById('result').innerHTML = "Inputted value "+ a +" is odd" ;
	 }

	 else if (b == 0){
	 	 { document.getElementById('result').innerHTML = "Inputted value "+ a +"  is even" ;
	 	}	
	 }

	 else {
	 	document.getElementById('result').innerHTML = "Input not valid" ;
	 }

	}




);