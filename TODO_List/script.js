const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function Render() {
  const list = document.createElement("li");
  const inputValue = document.getElementById("input").value;
  const text = document.createTextNode(inputValue);
  list.appendChild(text);
  if (inputValue === '' || inputValue == null) {
    return
  } else {
    document.getElementById("list").appendChild(list);
  }
  document.getElementById("input").value = "";

  const span = document.createElement("SPAN");
  const exit = document.createTextNode("x");
  span.className = "close";
  span.appendChild(exit);
  list.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

document.getElementById("btn").addEventListener("click",Render);