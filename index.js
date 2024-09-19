let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Esconde todas as imagens
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  // Reinicia após a última imagem
    slides[slideIndex - 1].style.display = "block";  // Mostra a imagem atual
    setTimeout(showSlides, 3000); // Muda a cada 3 segundos
}

    







