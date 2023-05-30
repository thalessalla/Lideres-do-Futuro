var cards = document.querySelectorAll('.card');

  [...cards].forEach((card) => {
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped');
    });
  });



  const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});