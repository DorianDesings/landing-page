const accordion = document.getElementById('accordion');
const accordionTexts = [...document.querySelectorAll('.accordion__text')];

accordion.addEventListener('click', e => {
  const targetClass = e.target.classList;
  if (
    targetClass.contains('accordion__header') ||
    targetClass.contains('accordion__title') ||
    targetClass.contains('accordion__image')
  ) {
    let element;
    if (e.target.parentElement.classList.contains('accordion__header')) {
      element = e.target.parentElement.nextElementSibling;
    } else {
      element = e.target.nextElementSibling;
    }
    accordionTexts.forEach(item => {
      // item.classList.remove('accordion__text--active');
    });
    element.classList.toggle('accordion__text--active');
  }
});
