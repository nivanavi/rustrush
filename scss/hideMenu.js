'use strict'





    var a = document.getElementById('nav-toggler');
    var b =document.getElementById('mob-logo');

    a.onclick = function (){
    	document.getElementById('nav-toggler').style.display = 'none';
    	document.getElementById('mob-logo').style.display = 'none';
    }



    var c = document.getElementById('menu-close');

    c.onclick = function (){

		document.getElementById('nav-toggler').style.display = 'block';
    	document.getElementById('mob-logo').style.display = 'block';

    }