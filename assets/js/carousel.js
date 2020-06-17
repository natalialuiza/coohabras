(function () {
  "use strict";

  //mostrar os botoes navegação e acrescentar listeners
  var $btnPrev = document.querySelector(".carousel__btn--prev");
  var $btnNext = document.querySelector(".carousel__btn--next");
  var $carousel = document.querySelector(".carousel");
  var $carouselInner = document.querySelector(".carousel__inner");
  var $carouselItens = document.querySelectorAll(".carousel__item");
  var $carouselPaginacao = document.querySelector(".carousel__paginacao");
  var bannerAtual = 0;
  var qdtBanners = $carouselItens.length;

  $btnPrev.style.display = "block";
  $btnNext.style.display = "block";

  //incluir overflow hidden no .carousel
  $carousel.style.overflowX = "hidden";

  $btnPrev.addEventListener("click", showPrev);
  $btnNext.addEventListener("click", showNext);

  montaPaginacao();

  function montaPaginacao() {
    for (var i = 0; i < qdtBanners; i++) {
      adicionaLiPaginacao(i);
    }
  }

  function adicionaLiPaginacao(i) {
    var $li = document.createElement("li");
    if (i === 0) $li.className = "atual";
    $li.addEventListener("click", function () {
      bannerAtual = i;
      mostrarBanner(bannerAtual);
    });

    $carouselPaginacao.appendChild($li);
  }

  function atualizaPaginacao() {
    $carouselPaginacao.querySelector("li.atual").removeAttribute("class");
    $carouselPaginacao.querySelectorAll("li")[bannerAtual].className =
      "atual";
  }

  function showPrev() {
    bannerAtual--;
    mostrarBanner(bannerAtual);
  }

  function showNext() {
    bannerAtual++;
    mostrarBanner(bannerAtual);
  }

  function setupNav(bannerAtual) {
    $btnPrev.disabled = !bannerAtual > 0;
    $btnNext.disabled = bannerAtual === qdtBanners - 1;
  }

  function mostrarBanner(bannerAtual) {
    limpaIntervalo();
    setupNav(bannerAtual);

    var largura = getComputedStyle($carouselItens[0]).width;
    largura = parseInt(largura);

    var novaPosicao = largura * bannerAtual * -1;

    $carouselInner.style.transform = "translateX(" + novaPosicao + "px)";

    atualizaPaginacao();
    iniciaIntervalo();
  }

  var intervalo = null;
  function iniciaIntervalo() {
    intervalo = setInterval(function () {
      bannerAtual++;
      if (bannerAtual >= qdtBanners) bannerAtual = 0;
      mostrarBanner(bannerAtual);
    }, 5000);
  }
  iniciaIntervalo();

  function limpaIntervalo() {
    clearInterval(intervalo);
  }
})();