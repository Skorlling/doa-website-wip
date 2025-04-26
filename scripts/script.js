function changeHomeText() {
    document.getElementById("homeText").style.display = "none";
    document.getElementById("homeTextChanged").style.display = "inline";
}

function revertHomeText() {
    document.getElementById("homeText").style.display = "inline";
    document.getElementById("homeTextChanged").style.display = "none";
}