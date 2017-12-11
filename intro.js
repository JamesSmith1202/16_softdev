var fibonacci = function(n) {
    if (n==0) {
	return 0;
    }
    else if (n == 1) {
	return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
};

var fibnum = 0;
var addFib = function(){
    var fibItem = document.createElement("li");
    fibItem.innerHTML = fibonacci(fibnum);
    fibnum++;
    list2.appendChild(fibItem);
};
var list2 = document.createElement("ol");
var button = document.createElement("button");
button.innerHTML = "The other button";
button.addEventListener("click", addFib);
document.body.append(list2);
document.body.append(button);
var item = 8;
var originalHeader = document.getElementById("h").innerHTML;

var unhover = function(){
    document.getElementById("h").innerHTML = originalHeader;
};

var hover = function(){
    document.getElementById("h").innerHTML = this.innerHTML;
};

var remove = function(){
    this.remove();
};

var addItem = function(){
    var list = document.getElementById("thelist");
    var newItem = document.createElement("li");
    newItem.addEventListener("mouseover", hover);
    newItem.addEventListener("mouseout", unhover);
    newItem.addEventListener("click", remove);
    newItem.innerHTML = "item "+item;
    item++;
    list.appendChild(newItem);
};

var button = document.getElementById("b");
button.addEventListener("click", addItem);

var items = document.getElementsByTagName("li");
for(var i = 0; i < item; i++){
    items[i].addEventListener("mouseover", hover);
    items[i].addEventListener("mouseout", unhover);
    items[i].addEventListener("click", remove);
};
