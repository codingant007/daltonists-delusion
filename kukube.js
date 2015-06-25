
function even(a,b){
	if(a[3] ==  b[3] && a[1] ==  b[1] && a[2] == b[2]){
		return true;
	}
	else
		return false;
}

function hit(){
	var x = document.getElementById("box");
	var y = x.children[0].style.cssText;
	var grps = y.match(/.*rgb\W*(\d+)\W*(\d+)\W*(\d+).*/);

	var r = 0;
	var g = 0;
	var b = 0;

	var g1 = x.children[1].style.cssText.match(/.*rgb\W*(\d+)\W*(\d+)\W*(\d+).*/);
	var g2 = x.children[2].style.cssText.match(/.*rgb\W*(\d+)\W*(\d+)\W*(\d+).*/);
	var g3 = x.children[3].style.cssText.match(/.*rgb\W*(\d+)\W*(\d+)\W*(\d+).*/);



	var grp;

	if(even(g1,g2))
		grp = g1;
	else
		grp = g3;
	var i;
	for(i=0;i<x.children.length;i++){
		var temp = x.children[i].style.cssText;
		var l  = temp.match(/.*rgb\W*(\d+)\W*(\d+)\W*(\d+).*/);
		if(even(g,l)){
			continue;
		}
		else{
			console.log(l);
			x.children[i].click();
		}
	}
}

function hitForEvery(t){
	console.log('oye!!!')
	if(true){
		setInterval(hit,t);
	}
}
alert("kukube.js loaded!");
setTimeout(hitForEvery(1000),1000);
