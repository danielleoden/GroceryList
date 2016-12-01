window.onload = loadCookieList;
var myList = [];
function loadCookieList()
{
  var groceries;
  var str = getCookie("groceries");
  var arrayCookie = str.split(",");
  for(groceries = 0; arrayCookie.length > groceries; groceries++)
  {
    displayItem(arrayCookie[groceries]);
  
  }

}
function displayItem(fooditem)
{
  var index =  myList.indexOf(fooditem);

  if (index == -1)
  {
    myList.push(fooditem);
    var list = document.getElementById("listDisplay");
    var item = document.createElement("li");
    var itemName = document.createTextNode(fooditem);
    item.appendChild(itemName);

    document.getElementById("newItem").value = "";
    var btnClose = document.createElement("button");
    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");
    btnClose.addEventListener("click",removeParentsListItem);

    var iconClose = document.createElement("span");
    iconClose.classList.add("glyphicon");
    iconClose.classList.add("glyphicon-remove");
    btnClose.appendChild(iconClose);

    item.appendChild(btnClose);
    list.appendChild(item);
  }

}

function saveList()
{
var something
something= myList.toString();
setCookie("groceries", something, 100);

}
function clearList()
{

myList= [];
document.getElementById("listDisplay").innerHTML = "";
}


function addItem()
{

  var input = document.getElementById("newItem").value;

  displayItem(input);




}
  function removeParentsListItem()
  {
    var mom = this.parentNode;
    var grandma = mom.parentNode;
    grandma.removeChild(mom);
    var itemRemove = mom.firstChild.textContent;
    var itemIndex = myList.splice(itemIndex, 1);


  }


//courtesy of w3schoolss,, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
