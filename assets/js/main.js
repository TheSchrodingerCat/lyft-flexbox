
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