// Seleciona todas as imagens dentro dos elementos com a classe "image-container"
const images = document.querySelectorAll(".image-container img");

// Cria um IntersectionObserver, que observa quando os elementos (imagens) entram na área de visualização (viewport)
const observer = new IntersectionObserver((entries, observer) => {
  // `entries` é uma lista de objetos de observação que representam os elementos observados
  entries.forEach((entry) => {
    // Verifica se o elemento ainda não está visível na viewport
    if (!entry.isIntersecting) return;

    // Se o elemento estiver visível, o código continua para as próximas linhas
    const image = entry.target; // Obtém a imagem que está visível

    // Substitui a parte do link da imagem para carregar uma versão de maior resolução
    // Aqui, substitui a parte da URL que define a largura de 10 pixels para 1000 pixels
    image.src = image.src.replace("&w=10&", "&w=1000&");

    // Para de observar essa imagem, já que ela já foi carregada em alta resolução
    observer.unobserve(image);
  });
}, {});

// Faz com que o observer observe todas as imagens previamente selecionadas
images.forEach((image) => {
  observer.observe(image);
});
