const projectCards = document.querySelectorAll(
  '.project-card--work'
);

function focusPopup(e) {
  e.currentTarget.classList.add('project__card--popup');
}

for (const card of projectCards) {
  card.addEventListener('click', focusPopup);
}
