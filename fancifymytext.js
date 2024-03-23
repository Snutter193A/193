function clickFunction(){
	document.getElementById("inputText").style.fontSize = "24pt";
}

function fancyChange(){
	document.getElementById("inputText").style.fontWeight = "bold";
	document.getElementById("inputText").style.color = "blue";
	document.getElementById("inputText").style.textDecoration = "underline";
}

function boringChange(){
	document.getElementById("inputText").style.fontSize = "10pt";
	document.getElementById("inputText").style.fontWeight = "normal";
	document.getElementById("inputText").style.color = "black";
	document.getElementById("inputText").style.textDecoration = "none";
}

function mooChange(){
	var mooString = document.getElementById("inputText");
	var mooSplit = mooString.value.split(".");
	
	for (var i = 0; i < mooSplit.length; i++){
		var splitIt = mooSplit[i].trim();
			if (splitIt === "") continue;
			
			var parts = splitIt.split(" ");
			parts[parts.length -1] += "-moo";
		mooSplit[i] = parts.join(" ");
	}
	mooString.value = mooSplit.join(".");
	
	mooString.style.textTransform = "uppercase";
}