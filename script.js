var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	// add click event listener to toggle
	li.addEventListener("click",function(){addToggle(li)});
	
	// add delete button
	var str = '<button onclick="del(this)"> delete </button>';
	li.innerHTML = li.innerHTML+"  " +str;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addToggle(item){
	item.classList.toggle("done");
}
	
function del(item){
	item.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



	



