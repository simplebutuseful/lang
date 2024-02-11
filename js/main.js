window.onload = function()
{
    'use strict';
    if ("serviceWorker" in navigator)
    {
        navigator.serviceWorker.register('/lang/sw.js');
    };
    loadData();
};

function transliterate(){
	var font = document.getElementById("font-form").value;
	var text = document.getElementById("text-form").value.toLowerCase();
	var fontsize = document.getElementById("fontsize-form").value;
	var text = text.replaceAll("-","");
	var text = text.replaceAll(",","");
	var text = text.replaceAll(";","");
	var text = text.replaceAll("!","");
	var text = text.replaceAll("?","");
	var text = text.replaceAll("\'","");
	var text = text.replaceAll("\"","");
	var newtext=String("");
	var counter=0;
	for(var i=0; i< text.length ;i++,counter++){
		var letter=text[i];
		if(letter!='\n') { 
			if(letter==' ') { letter="space"; };
			if(
					letter=='a'
					|| letter=='b'
					|| letter=='c'
					|| letter=='d'
					|| letter=='e'
					|| letter=='f'
					|| letter=='g'
					|| letter=='h'
					|| letter=='i'
					|| letter=='j'
					|| letter=='k'
					|| letter=='l'
					|| letter=='m'
					|| letter=='n'
					|| letter=='o'
					|| letter=='p'
					|| letter=='q'
					|| letter=='r'
					|| letter=='s'
					|| letter=='t'
					|| letter=='u'
					|| letter=='v'
					|| letter=='w'
					|| letter=='x'
					|| letter=='y'
					|| letter=='z'
					|| letter=="space"
			)
			{
				newtext+="<img src="+font+"/"+letter+".jpg width="+fontsize*1.0+"px>";
			};
		};
		if(letter=='\n') { 
			newtext+="<br>\n";
		};
	};
	newtext+="";
	var text = document.getElementById("output").innerHTML=newtext;
}

