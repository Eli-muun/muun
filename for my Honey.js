setTimeout(cambiaMensaje,6200) 
function cambiaMensaje() {
    document.getElementById("loading-message").innerText = "The Hug Was sent"
}


setTimeout(function () {
    alert("Now, you received my hug, Honey")
}, 6300)