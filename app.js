const search_container = document.querySelector('.search')
document.querySelector('#sicon').addEventListener('click', () => search_container.classList.add('active'))
document.querySelector('#close').addEventListener('click', () => search_container.classList.remove('active'))