function creator(o, data, node) {
	var content = document.createElement(node);
	content.cellspacing = "3"
	var cell = document.createTextNode(data);
	content.appendChild(cell);
	o.appendChild(content);
}

function displayData(arr) {
	var table = document.createElement('table');
	var thead = document.createElement('thead');
	table.appendChild(thead);
	var row = document.createElement('tr');
	creator(row, 'Name', 'th');
	creator(row, 'Type', 'th');
	creator(row, 'Score', 'th');
	thead.appendChild(row);
	var tbody = document.createElement('tbody');
	table.appendChild(tbody);
	for(i=0; i < arr.length; i++){
		var type = arr[i].type;
		var row = document.createElement('tr');
		creator(row, arr[i]["text"], 'td');
		creator(row, Object.keys(arr[i]["grammar_costs"])[0].slice(0,-1).substring(1), 'td');
		creator(row, arr[i]["grammar_costs"][Object.keys(arr[i]["grammar_costs"])[0]], 'td');
		tbody.appendChild(row);
	}
	document.body.innerHTML = "";
	document.body.appendChild(table);
}

//need to find user's unique id. Trying each of the below until succeeds.
//facebook keeps changing their variables and keys

id = require("CurrentUserInitialData")["USER_ID"] || require("CurrentUserInitialData")["ACCOUNT_ID"] || require("Env").user || require("CurrentUserInitialData")["id"];
url = "//www.facebook.com/ajax/typeahead/search/facebar/bootstrap/?viewer=" + id + "&__a=1";
x = new XMLHttpRequest();
x.onreadystatechange=function(){
  if (x.readyState==4 && x .status==200){
    srr=JSON.parse(x.responseText.substring(9)).payload.entries;
    displayData(srr);
  }
}
x.open("GET",url,true);
x.send();
