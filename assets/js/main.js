
(function main(){
	//evento para que el nav cambie de color al bajar la pagina (scroll)

	document.addEventListener("scroll",scrollFunction);

	function scrollFunction(){
		var navUno = document.getElementById("nav-bar");
		var navDos = document.getElementById("nav-bar-white");
		if (document.body.scrollTop > 40){
			navUno.classList.add("hide");
			navDos.classList.remove("hide");
		}
	}


	//desplegar menu en registro

	var number = document.getElementById("date-phone");
	number.addEventListener("click",function(){
		var name = document.getElementById("date-name");
		var email = document.getElementById("date-email");
		var city = document.getElementById("date-city");

		name.classList.remove("hide");
		email.classList.remove("hide");
		city.classList.remove("hide");
	});


	//validación del formulario

	var number = document.getElementById("date-phone");
	var name = document.getElementById("date-name");
	var email = document.getElementById("date-email");
	var city = document.getElementById("date-city");

	function validateNumber(){
		var numberValidate = (/^[0-9]{9}$/).test(document.getElementById("date-phone").value);
		var number = document.getElementById("date-phone");
		
		
		if (!numberValidate){
			number.classList.remove("nothing-number");
		} else {
			number.classList.add("nothing-number");
		}
	}
	validateNumber();


})();

