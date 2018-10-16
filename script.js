//closebutton
var myNodelist = document.getElementsByName ("li");
var i = 0;
for (i=0; i< myNodelist.length; i++){
    var span = document.createElement ("SPAN");
    var txt = document.createTextNode ("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i=0; i<close.length; i++){
    close[i].onclick= function (){
        var div = this.parentElement;
        div.style.display = "none";
    }
}
//checked symbol
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    } 
}, false);
//add item
function newElement() {
    var li = document.createElement ("li");
    var inputValue = document.getElementById("userInput").value;
    var text = document.createTextNode (inputValue);
    li.appendChild (text);
    if (inputValue === '') {
        alert ("Empty field not allowed!")
    } else {
        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("userInput").value = '';

    var span = document.createElement ("span");
    var txt = document.createTextNode ("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i<close.length; i++) {
        close [i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }