if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'sessao-eventos', // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: 'sessao-informativos',
    time: 5000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
