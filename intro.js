var item = 8;

var addItem = function(){
    var list = document.getElementById("thelist");
    var newItem = document.createElement("li");
    newItem.innerHTML = "item "+item;
    item++;
    list.appendChild(newItem);
};

var button = document.getElementById("b");
button.addEventListener("click", addItem);

var item = document.getElementsByTagName("li");
