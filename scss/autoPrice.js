 var urlVar = window.location.search;


if (urlVar === '?ticketType=p3000')
	document.getElementById('priceCount').value = '3000';

if (urlVar === '?ticketType=p7500')
	document.getElementById('priceCount').value = '7500';

if (urlVar === '?ticketType=p10000')
	document.getElementById('priceCount').value = '10000';

if (urlVar === '?attribution')
	
 	document.getElementById('attribution').innerHTML='Текст о Москве создатель  <a href=https://ru.wikivoyage.org/wiki/Участник:A.Savin>A.Savin</a> и распространяется по лицензии <a href=https://creativecommons.org/licenses/by-sa/3.0/deed.ru>Creative Commons Attribution-ShareAlike</a>';

if (urlVar === '?attribution-eng')
	
 	document.getElementById('attribution').innerHTML='Text about Moscow created by <a href=https://ru.wikivoyage.org/wiki/Участник:A.Savin>A.Savin</a>  and distributed under <a href=https://creativecommons.org/licenses/by-sa/3.0/deed.ru>Creative Commons Attribution-ShareAlike</a>';


if (window.location.pathname == '/index.html')

	document.getElementById('attribution').innerHTML='Изображение Moscow-City создано  <a href=https://www.flickr.com/people/158619309@N03>Densel</a> и распространяется по лицензии <a href=https://creativecommons.org/licenses/by/2.0/>CC BY 2.0</a> (<a href=https://commons.wikimedia.org/wiki/File:MSK_Collage_2015.png#/media/File:Moscow-City_(36211143494).jpg>оригинал</a>)<br>Изображение Red Square, Moscow. View from northwest создано  <a href=https://commons.wikimedia.org/wiki/User:Alvesgaspar>Alvesgaspar</a> и распространяется по лицензии <a href=https://creativecommons.org/licenses/by-sa/3.0/>CC BY-SA 3.0</a> (<a href=https://commons.wikimedia.org/wiki/File:MSK_Collage_2015.png#/media/File:Moscow_July_2011-49.jpg>оригинал</a>)<br>Текст о Москве создатель  <a href=https://ru.wikivoyage.org/wiki/Участник:A.Savin>A.Savin</a> и распространяется по лицензии <a href=https://creativecommons.org/licenses/by-sa/3.0/deed.ru>Creative Commons Attribution-ShareAlike</a> ';


if (window.location.pathname == '/index-eng.html') 

	document.getElementById('attribution').innerHTML='The image Moscow-City  is created by  <a href=https://www.flickr.com/people/158619309@N03>Densel</a>  and distributed under  <a href=https://creativecommons.org/licenses/by/2.0/>CC BY 2.0</a> (<a href=https://commons.wikimedia.org/wiki/File:MSK_Collage_2015.png#/media/File:Moscow-City_(36211143494).jpg>source</a>)<br>The image Red Square, Moscow. View from northwest is created by  <a href=https://commons.wikimedia.org/wiki/User:Alvesgaspar>Alvesgaspar</a>  and distributed under <a href=https://creativecommons.org/licenses/by-sa/3.0/>CC BY-SA 3.0</a> (<a href=https://commons.wikimedia.org/wiki/File:MSK_Collage_2015.png#/media/File:Moscow_July_2011-49.jpg>source</a>)<br> Text about Moscow created by <a href=https://ru.wikivoyage.org/wiki/Участник:A.Savin>A.Savin</a>  and distributed under <a href=https://creativecommons.org/licenses/by-sa/3.0/deed.ru>Creative Commons Attribution-ShareAlike</a> ';   




