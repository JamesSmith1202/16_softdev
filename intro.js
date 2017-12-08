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
}

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
