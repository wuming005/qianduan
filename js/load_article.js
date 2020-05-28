function loadArticle(url)
{  
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			article = xmlhttp.responseXML.documentElement.getElementsByTagName("ARTICLE");
			for(i = 0; i < article.length; i++) {
				code = code + "<div class='col-md-4'>" + "<div class='single_image'>";
				item = article[i].getElementsByTagName("PICTURE");
				try {
					code = code + "<img src='" + item[0].firstChild.nodeValue + "' alt=''>";
				} catch(er) {
					code = code + "<img src='' alt=''>"
				}
				code = code + "<div class='image_overlay'>" + "<a href='javascript:void(0)'>查看全文</a>";
				item = article[i].getElementsByTagName("TITLE");
				try {
					code = code + "<h2>" + item[0].firstChild.nodeValue + "</h2>";
				} catch(er) {
					code = code + "<h2>&nbsp;</h2>"; 
				}
				item = article[i].getElementsByTagName("DATE");
				try {
					code = code + "<h4>" + item[0].firstChild.nodeValue + "</h4>";
				} catch(er) {
					code = code + "<h4>&nbsp;</h4>";
				}
				code = code + "</div>" + "</div>" + "</div>";
				
			}
			document.getElementById('new_article').innerHTML = code;
		}
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}
