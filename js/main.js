(() => {
  console.log('fired');

  let button = document.querySelector("#button");
  let burgerCon = document.querySelector("#burgerCon");

  const sigils = document.querySelector('#navList'),
        banner = document.querySelector('#beerImages'),
        ballaName = document.querySelector('h4'),
        ballaDescription = document.querySelector('.pro-info');



  const ballaInfo = [
    ['BALLA BEER', `It is one of Canada's top 10 favorite brands, and Alexander Keith has three types, Red Amber Ale, India Pale Ale, and Lightale, depending on processing and additives.`],
    ['RED AMBER ALE', `Smooth, rich grain, dry popcorn and oat flavours with a hint of classic English sweet fruit fermentation character.`],
    ['LIGHT ALE', `Known for its distinctively light flavour, refreshing aroma and special pale colour. This light beer’s subtle black licorice notes contribute to its smooth and well-balanced nature.`],
    ['INDIA PALE ALE', `Brewed without compromise, taste our heritage in this crisp golden ale with distinct drinkability. Subtle spice and herb notes from the hops and yeast come together over a light cereal grain foundation to provide a fresh easy drinking ale. The original Nova Scotia Ale and the oldest continuously brewed beer in North America: “Those who like it…”`],
    ['BALLA SETS', `Red Amber ale Beer is a dark yellow and rich red overtones, well-balanced Ale that has a soft caramel flavor, while India Pale Ale is North America's oldest brewed beer technology on a light grain foundation. Finally, Light ale beer has a light scent, a refreshing scent, and a special light color, and the soft black licorice note of beer creates a smooth and balanced nature.`]
  ];

  function hamburgerMenu() {
    burgerCon.classList.toggle("slideToggle");
    button.classList.toggle("expanded");
}

function setballaData(name, desc) {
  ballaName.textContent = `${name}`;
  ballaDescription.textContent = desc;
}

function animateBanner(event) {
  if (event.target.className.includes('sigilContainer')) {
    let multiplier = event.target.dataset.offset,

        offsetwidth = 792;

        banner.style.right = `${multiplier * offsetwidth}px`;
  }
}

function popLightBox(event) {
  if (event.target.className.includes('sigilContainer')) {

      setballaData(ballaInfo[event.target.dataset.offset][0],
                  ballaInfo[event.target.dataset.offset][1]);
  }
}
  button.addEventListener("click", hamburgerMenu);
  sigils.addEventListener('click', animateBanner);
  sigils.addEventListener('click', popLightBox);

})();
