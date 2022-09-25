let hoveredArrows = document.querySelector('.content__trickIMG');

let unHoveredArrows = document.querySelector('.content__trickIMG-hovered');

hoveredArrows.addEventListener('mouseover', () => {
    hoveredArrows.classList.add('displayNone');
});

unHoveredArrows.addEventListener('mouseout', () => {
    hoveredArrows.classList.remove('displayNone');
});

unHoveredArrows.addEventListener('click', () => {
    location.assign('../index.html');
});
