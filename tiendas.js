var imagen = ["../img/steam.jpg", "../img/epic_games_store.jpg", "../img/microsoft_store.png", "../img/good_old_games.jpg", "../img/ubisoft_store.png", "../img/electronic_arts_play.jpg", "../img/itch_io.jpg"];
var currentImageIndex = 0;
var enlaces = ["https://store.steampowered.com/games/?l=latam", "https://www.epicgames.com/store", "https://www.microsoft.com/store", "https://www.gog.com", "https://store.ubi.com", "https://www.ea.com/play", "https://itch.io"];

function actualizarImg() {
    var imageElement = document.getElementById("tienda");
    imageElement.src = imagen[currentImageIndex];
    imageElement.parentNode.href = enlaces[currentImageIndex];
}



document.getElementById("anterior").addEventListener("click", function qwerty() {
    currentImageIndex = (currentImageIndex - 1 + imagen.length) % imagen.length;
    actualizarImg();
});
  
document.getElementById("siguiente").addEventListener("click", function asdfg() {
    currentImageIndex = (currentImageIndex + 1) % imagen.length;
    actualizarImg();
});




