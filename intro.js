var originalHeader = document.getElementById("h").innerHTML;
var item = 8;
var fibnum = 0;

var fibonacci = function(n) {
    if (n==0) {
	return 0;
    }
    else if (n == 1) {
	return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
};

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

var addFib = function(){
    var fibItem = document.createElement("li");
    fibItem.innerHTML = fibonacci(fibnum);
    list2.appendChild(fibItem);
    fibnum++;
};


var button = document.getElementById("b");
button.addEventListener("click", addItem);

var list2 = document.createElement("ol");
var button2 = document.createElement("button");
button2.innerHTML = "The other button";
button2.addEventListener("click", addFib);
document.body.append(list2);
document.body.append(button2);


var items = document.getElementsByTagName("li");
for(var i = 0; i < item; i++){
    items[i].addEventListener("mouseover", hover);
    items[i].addEventListener("mouseout", unhover);
    items[i].addEventListener("click", remove);
};
