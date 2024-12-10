const carousel = document.querySelector('.carousel');
const arrowsBtn = document.querySelectorAll('.wrapper i');
const firstCardWidth = carousel.querySelector('.card').offsetWidth;
let isDragging = false, startX, startScrollLeft;

arrowsBtn.forEach(value => {
  value.addEventListener('click', () => {
    carousel.scrollLeft += value.id === 'left' ? -firstCardWidth : firstCardWidth;

  })
})

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}


const dragg = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
}
carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragg)
carousel.addEventListener('mouseup', dragStop)