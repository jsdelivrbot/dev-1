var clickCount = 0;

function documentClick() {
    document.getElementById('clicked').value = ++clickCount;
    localStorage.setItem("clicked", clickCount);

}
document.onclick = documentClick;

var n = localStorage.getItem('clicked');

document.getElementById('clicked').value = n;