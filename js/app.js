const me = document.querySelector('.cube')
me.addEventListener('click', about)

function about(e) {
    e.preventDefault()
    const ruta = e.target.classList[0];
    ruta !== 'top' ? window.location.href = `${ruta}.html` : null
}