const tabs = document.getElementById('tabs')
const tabsItem = [...document.querySelectorAll('.tabs__item')]
const tabsContent = [...document.querySelectorAll('.tabs__content')]

tabs.addEventListener('click', e => {
  const index = tabsItem.indexOf(e.target)
  if (e.target.classList.contains('tabs__item')) {
    tabsItem.forEach((item, idx) => {
      item.classList.remove('tabs__item--active')
      tabsContent[idx].classList.remove('tabs__content--active')
    })
    e.target.classList.add('tabs__item--active')
    tabsContent[index].classList.add('tabs__content--active')
  }
})
