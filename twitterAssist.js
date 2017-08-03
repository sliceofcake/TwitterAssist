(function(){
	var p = {
		xN : null,
		yN : null,
		keyS : "1", // default to the alpha-1 key
	};
	document.addEventListener("mousemove",(function(p){return function(event){
		p.xN = event.clientX;
		p.yN = event.clientY;
	};})(p));
	document.addEventListener("keyup",(function(p){return function(event){
		if (event.key !== p.keyS){return;}
		
		if (event.metaKey || event.altKey || event.altKey || event.ctrlKey){return;}
		
		if (p.xN === null || p.yN === null){return;}
		
		var el = document.elementFromPoint(p.xN,p.yN);
		if (el === null){return;}
		
		// 2 Aug 2017 - Special Case : Updated to match Twitter's new interface
		var src = el.getAttribute("src");
		if (src === null || src === ""){
			console.error(el);
			console.error(el.parentNode);
			console.error(el.parentNode.querySelector(".Gallery-content"));
			console.error(el.parentNode.querySelector(".Gallery-content>.Gallery-media"));
			console.error(el.parentNode.querySelector(".Gallery-content>.Gallery-media>img"));
			el = el.parentNode.querySelector(".Gallery-content>.Gallery-media>img");
			if (el === null){return;}}
		
		var src = el.getAttribute("src");
		if (src === null || src === ""){return;}
		
		var linkS = null;
		var filenameS = null;
		
		// attempt to match special twitter images that need :orig appended
		if (linkS === null || filenameS === null){
			src.replace(/^(https?:\/\/pbs\.twimg\.com\/media\/([a-zA-Z0-9\-_]+\.[a-zA-Z0-9]+)):[a-zA-Z]+$/,function(match,p1,p2,offset,string){
				linkS = p1+":orig";
				filenameS = p2;
			});}
		
		// fallback to regular src without fancy :orig rules
		if (linkS === null || filenameS === null){
			src.replace(/^(https?:\/\/.+?([^\/]+))$/,function(match,p1,p2,offset,string){
				linkS = p1;
				filenameS = p2;
			});}
		
		// no clue what you just clicked, but I don't like it!
		if (linkS === null || filenameS === null){return;}
		
		var downloadLink = document.createElement("a");
		var xhr = new XMLHttpRequest();
		xhr.open("GET",linkS,true);
		xhr.responseType = "blob";
		xhr.onload = (function(downloadLink,filenameS){return function(){
			var file = new Blob([this.response],{type:"application/octet-stream"});
			downloadLink.download = filenameS;
			downloadLink.href = window.URL.createObjectURL(file);
			downloadLink.onclick = function(event){document.body.removeChild(event.target);};
			downloadLink.style.display = "none";
			document.body.appendChild(downloadLink);
			downloadLink.click();
		};})(downloadLink,filenameS);
		xhr.send();
	};})(p));
	
	//----
	
	var elMain = document.createElement("div");
	elMain.style.position = "fixed";
	elMain.style.bottom = "0px";
	elMain.style.left = "0px";
	elMain.style.width = "100%";
	elMain.style.color = "hsla(0,0%,100%,1)";
	elMain.style.backgroundColor = "hsla(0,0%,0%,0.8)";
	elMain.style.padding = "4px 8px";
	elMain.style.zIndex = "999999999";
	
	var elInput = document.createElement("input");
	elInput.style.width = "70px";
	elInput.style.color = "hsla(0,0%,100%,1)";
	elInput.style.backgroundColor = "hsla(0,0%,0%,1)";
	elInput.style.textAlign = "center";
	elInput.value = p.keyS;
	elInput.addEventListener("keydown",(function(p){return function(event){
		this.value = p.keyS = event.key;
		event.preventDefault();
	};})(p));
	
	var elVersion = document.createElement("div");
	elVersion.style.position = "absolute";
	elVersion.style.bottom = "4px";
	elVersion.style.right = "20px"; // padding of parent plus actual value
	elVersion.style.color = "hsla(0,0%,100%,0.5)";
	elVersion.style.textAlign = "right";
	elVersion.textContent = "ver1";
	
	elMain.appendChild(elVersion);
	elMain.appendChild(document.createTextNode("Hover over an image, then press your "));
	elMain.appendChild(elInput);
	elMain.appendChild(document.createTextNode(" key to download it. [<- click and type to edit keybinding]"));
	document.body.appendChild(elMain);
})();