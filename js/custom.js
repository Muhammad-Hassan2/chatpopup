var a = document.getElementById('popup')

function hide_show() {

    if (a == 1) {
        document.getElementById('popup').style.display = "inline";
        return a = 0;
    } else {
        document.getElementById("popup").style.display = "none";
        return a = 1;

    }

}